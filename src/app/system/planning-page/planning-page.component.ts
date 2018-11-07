import {Component, OnInit} from '@angular/core';
import {BillService} from '../shared/services/bill.service';
import {CategoriesService} from '../shared/services/categories.service';
import {EventsService} from '../shared/services/events.service';
import {combineLatest} from 'rxjs';
import {Bill} from '../shared/models/bill.model';
import {Category} from '../shared/models/category.model';
import {EventModel} from '../shared/models/event.model';
import {st} from '@angular/core/src/render3';

@Component({
    selector: 'app-planning-page',
    templateUrl: './planning-page.component.html',
    styleUrls: ['./planning-page.component.scss']
})
export class PlanningPageComponent implements OnInit {

    public isLoaded = false;

    public bill: Bill;
    public categories: Category[] = [];
    public events: EventModel[] = [];

    constructor(private billService: BillService,
                private categoriesService: CategoriesService,
                private eventsService: EventsService) {
    }

    ngOnInit() {
        combineLatest(
            this.billService.getBill(),
            this.categoriesService.getCategories(),
            this.eventsService.getEvents()
        ).subscribe((data: [Bill, Category[], EventModel[]]) => {
            this.bill = data[0];
            this.categories = data[1];
            this.events = data[2];

            this.isLoaded = true;
        });
    }

    getCategoryCost(cat: Category): number {
        const catEvents = this.events.filter(e => {
            return e.category === cat.id && e.type === 'outcome';
        });
        return catEvents.reduce((total, e) => {
            total += e.amount;
            return total;
        }, 0);
    }

    private getPercent(cat: Category): number {
        const percent = (100 * this.getCategoryCost(cat) / cat.limit);
        return percent > 100 ? 100 : percent;
    }

    getCatPercent(cat: Category): string {
        return this.getPercent(cat) + '%';
    }

    getCatColor(cat: Category): string {
        const percent = this.getPercent(cat);
        return percent < 60 ? 'success' : percent >= 100 ? 'danger' : 'warning';
    }
}
