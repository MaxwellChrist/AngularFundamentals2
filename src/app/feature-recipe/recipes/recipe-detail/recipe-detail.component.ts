import { Component, Input, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  viewDropdown: boolean = false;
  @Input() newRecipeDetails: Recipe;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {}

  updateShoppingList(ingredients) {
    return this.shoppingService.addIngredientToShoppingList(ingredients)
  }
}
