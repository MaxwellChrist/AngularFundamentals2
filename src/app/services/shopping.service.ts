import { Injectable, OnInit } from "@angular/core";
import { Ingredient } from "../feature-shared/ingredient.model";

@Injectable({providedIn: 'root'})

export class ShoppingService implements OnInit{
    constructor() {}

    ingredients: Ingredient[] = [
        new Ingredient('Apricots', 8),
        new Ingredient('Bananas', 3)
      ];
      
      addIngredient(event: Ingredient) {
        this.ingredients.push(event)
      }

    ngOnInit(): void {
        
    }
}