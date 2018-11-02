import {Component, Input, OnInit} from '@angular/core';
import {Bill} from '../../shared/models/bill.model';

@Component({
    selector: 'app-cards',
    templateUrl: './bill-cards.component.html',
    styleUrls: ['./bill-cards.component.scss']
})
export class BillCardsComponent implements OnInit {

    @Input() bill: Bill;
    @Input() currency: any;

    usd: number;
    eur: number;

    constructor() {
    }

    ngOnInit() {
        console.log(this.currency);
    }
}
