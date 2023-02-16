import { Component, Output, EventEmitter, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/feature-shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit{
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() {};

  ngOnInit() {}

  addIngredient() {
    const ingredientFromInput = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
    this.newIngredient.emit(ingredientFromInput)
  }
}
