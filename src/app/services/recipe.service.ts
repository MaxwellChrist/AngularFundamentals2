import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Recipe } from "../feature-recipe/recipes/recipe.model";
import { Ingredient } from "../feature-shared/ingredient.model";

@Injectable({ providedIn: 'root' })

export class RecipeService implements OnInit {
    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe 1', 
            "this is a test", 
            "https://static01.nyt.com/images/2022/03/02/dining/kc-pasta-amatriciana/merlin_201502869_17a64c2f-adee-4526-9951-a0b03270b022-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
            [new Ingredient('tomato sauce', 1), new Ingredient('spaghetti', 1), new Ingredient('parmesan cheese', 0.5)]),
        new Recipe(
            'Test Recipe 2', 
            "this is a second test", 
            "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
            [new Ingredient('burger patty', 1), new Ingredient('potatoes',4), new Ingredient('bun', 1), new Ingredient('lettuce', 1), new Ingredient('tomatoes', 1), new Ingredient('cheese slices', 2)]
        )
    ];
 
    recipeSelected = new EventEmitter<Recipe>()

    constructor() { }

    ngOnInit(): void { }

    getRecipes() {
        return this.recipes.slice();
    }

}