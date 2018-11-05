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
    uah: number;

    constructor() {
    }

    ngOnInit() {
        const {rates} = this.currency;
        this.usd = rates['USD'] * this.bill.value;
        this.uah = rates['UAH'] * this.bill.value;
    }
}
