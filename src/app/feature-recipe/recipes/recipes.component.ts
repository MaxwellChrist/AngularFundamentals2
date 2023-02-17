import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent {
  recipeDetails: Recipe = {
    name: "",
    description: "",
    imagePath: ""
  }

  findRecipeDetails(recipe) {
    this.recipeDetails = recipe
  }
}