import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseApi} from '../../../shared/core/base-api';
import {Bill} from '../models/bill.model';

@Injectable({
    providedIn: 'root'
})
export class BillService extends BaseApi {

    constructor(public http: HttpClient) {
        super(http);
    }

    getBill(): Observable<Bill> {
        return this.get('bill');
    }

    updateBill(bill: Bill): Observable<Bill> {
        return this.put('bill', bill);
    }

    getCurrency(): Observable<any> {
        return this.http.get('http://data.fixer.io/api/latest?access_key=b00d15a00df56ef8c8069b7f3c9190e7');
    }
}
