import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-currency',
    templateUrl: './currency-cad.component.html',
    styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent {

    @Input() currency: any;

    currencies: string [] = ['USD', 'UAH'];

    constructor() {
    }
}
