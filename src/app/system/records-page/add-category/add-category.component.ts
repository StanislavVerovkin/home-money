import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoriesService} from '../../shared/services/categories.service';
import {Category} from '../../shared/models/category.model';

@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {

    @Output() onCategoryAdd = new EventEmitter<Category>();

    constructor(private categoriesService: CategoriesService) {
    }

    onSubmit(form: NgForm) {
        const {name, limit} = form.value;

        const category = new Category(name, limit);

        this.categoriesService.addCategory(category)
            .subscribe((category: Category) => {
                form.reset();
                form.form.patchValue({capacity: 1});

                this.onCategoryAdd.emit(category);
            });
    }
}
