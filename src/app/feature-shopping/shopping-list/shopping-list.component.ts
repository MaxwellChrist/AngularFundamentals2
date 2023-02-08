import { Component } from '@angular/core';
import { Ingredient } from 'src/app/feature-shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apricots', 8),
    new Ingredient('Bananas', 3)
  ];
}
