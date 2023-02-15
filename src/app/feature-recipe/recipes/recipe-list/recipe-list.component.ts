import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', "this is a test", "https://static01.nyt.com/images/2022/03/02/dining/kc-pasta-amatriciana/merlin_201502869_17a64c2f-adee-4526-9951-a0b03270b022-articleLarge.jpg?quality=75&auto=webp&disable=upscale"),
    new Recipe('Test Recipe 2', "this is a second test", "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg"),
  ];

  @Output() selectedRecipeFromList = new EventEmitter<{name: string, description: string}>();

  foundRecipe(recipe) {
    this.selectedRecipeFromList.emit(recipe)
  }
}
