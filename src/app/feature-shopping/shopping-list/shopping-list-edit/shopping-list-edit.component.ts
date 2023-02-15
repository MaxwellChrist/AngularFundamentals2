import { Component, Output, EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/feature-shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @Output() newIngredient = new EventEmitter<Ingredient>();

  addIngredient(name, amount) {
    this.newIngredient.emit({name, amount})
  }
}
