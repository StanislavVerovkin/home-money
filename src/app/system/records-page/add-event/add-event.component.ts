import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../shared/models/category.model';
import {NgForm} from '@angular/forms';
import {EventModel} from '../../shared/models/event.model';
import * as moment from 'moment';
import {EventsService} from '../../shared/services/events.service';
import {BillService} from '../../shared/services/bill.service';
import {Bill} from '../../shared/models/bill.model';
import {mergeMap} from 'rxjs/operators';
import {Message} from '../../../shared/models/message.model';

@Component({
    selector: 'app-add-event',
    templateUrl: './add-event.component.html',
    styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

    @Input() categories: Category[] = [];

    types = [
        {type: 'income', label: 'Revenue'},
        {type: 'outcome', label: 'Expense'}
    ];

    public message: Message;

    constructor(private eventsService: EventsService,
                private billService: BillService) {
    }

    ngOnInit() {
        this.message = new Message('danger', '');
    }

    private showMessage(text: string) {
        this.message.text = text;
        window.setTimeout(() => this.message.text = '', 5000);
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        const {amount, description, category, type} = form.value;

        const event = new EventModel(
            type,
            amount,
            +category,
            moment().format('DD.MM.YYYY HH:mm:ss'),
            description
        );

        this.billService.getBill()
            .subscribe((bill: Bill) => {
                let value = 0;

                if (type === 'outcome') {
                    if (amount > bill.value) {
                        this.showMessage(`No enough money. Need ${amount - bill.value}`);
                        console.log('no money');
                        return;
                    } else {
                        value = bill.value - amount;
                        console.log('minus');
                    }
                } else {
                    value = bill.value + amount;
                    console.log('plus');
                }

                this.billService.updateBill({value: value, currency: bill.currency})
                    .pipe(mergeMap(() => this.eventsService.addEvent(event)))
                    .subscribe(() => {
                        form.setValue({
                            amount: 0,
                            description: '',
                            category: 1,
                            type: 'outcome'
                        });
                    });
            });
    }
}
