import { Component, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() listRecipe: Recipe;

  constructor(private recipeService: RecipeService) { };

  clickedRecipe() {
    this.recipeService.recipeSelected.emit(this.listRecipe)
  }
}
