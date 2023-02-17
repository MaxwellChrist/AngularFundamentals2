import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Ingredient } from "../feature-shared/ingredient.model";

@Injectable({ providedIn: 'root' })

export class ShoppingService implements OnInit {
  ingredientsChanged = new EventEmitter<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('Apricots', 8),
    new Ingredient('Bananas', 3)
  ];

  constructor() { }

  ngOnInit(): void { }

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(event: Ingredient) {
    this.ingredients.push(event);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

}