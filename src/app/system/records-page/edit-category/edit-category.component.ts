import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Category} from '../../shared/models/category.model';
import {CategoriesService} from '../../shared/services/categories.service';

@Component({
    selector: 'app-edit-category',
    templateUrl: './edit-category.component.html',
    styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
    @Input() categories: Category[] = [];
    @Output() categoryEdit = new EventEmitter<Category>();

    currentCategoryId = 1;
    currentCategory: Category;

    constructor(private categoriesService: CategoriesService) {
    }

    ngOnInit() {
        this.onCategoryChange();
    }

    onCategoryChange() {
        this.currentCategory = this.categories
            .find(c => c.id === +this.currentCategoryId);
    }

    onSubmit(form: NgForm) {
        const {limit, name} = form.value;

        const category = new Category(name, limit, +this.currentCategoryId);

        this.categoriesService.updateCategories(category)
            .subscribe((category: Category) => {
                this.categoryEdit.emit(category);
            });
    }
}
