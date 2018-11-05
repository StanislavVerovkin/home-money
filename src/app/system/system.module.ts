import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SystemComponent} from './system.component';
import {BillPageComponent} from './bill-page/bill-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {PlanningPageComponent} from './planning-page/planning-page.component';
import {RecordsPageComponent} from './records-page/records-page.component';
import {SystemRoutingModule} from './system-routing.module';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {BillCardsComponent} from './bill-page/bill-cards/bill-cards.component';
import {CurrencyCardComponent} from './bill-page/currency-card/currency-card.component';
import {BillService} from './shared/services/bill.service';
import {AddEventComponent} from './records-page/add-event/add-event.component';
import {AddCategoryComponent} from './records-page/add-category/add-category.component';
import {EditCategoryComponent} from './records-page/edit-category/edit-category.component';
import {CategoriesService} from './shared/services/categories.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SystemRoutingModule,
    ],
    declarations: [
        SystemComponent,
        BillPageComponent,
        HistoryPageComponent,
        PlanningPageComponent,
        RecordsPageComponent,
        SidebarComponent,
        HeaderComponent,
        BillCardsComponent,
        CurrencyCardComponent,
        AddEventComponent,
        AddCategoryComponent,
        EditCategoryComponent,
    ],
    providers: [
        BillService,
        CategoriesService
    ]
})
export class SystemModule {
}