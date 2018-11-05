import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from '../shared/services/bill.service';
import {combineLatest, Subscription} from 'rxjs';
import {Bill} from '../shared/models/bill.model';

@Component({
    selector: 'app-bill-page',
    templateUrl: './bill-page.component.html',
    styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {
    public sub1: Subscription;
    public sub2: Subscription;
    public currency: any;
    public bill: Bill;
    public isLoaded = false;

    constructor(private billService: BillService) {
    }

    ngOnInit() {
        this.sub1 = combineLatest(
            this.billService.getBill(),
            this.billService.getCurrency()
        ).subscribe((data: [Bill, any]) => {
            this.bill = data[0];
            this.currency = data[1];
            this.isLoaded = true;
        });
    }

    ngOnDestroy() {
        this.sub1.unsubscribe();

        if (this.sub2) {
            this.sub2.unsubscribe();
        }
    }

    onRefresh() {
        this.isLoaded = false;
        this.sub2 = this.billService.getCurrency()
            .subscribe((currency: any) => {
                this.currency = currency;
                this.isLoaded = true;
            });
    }
}
