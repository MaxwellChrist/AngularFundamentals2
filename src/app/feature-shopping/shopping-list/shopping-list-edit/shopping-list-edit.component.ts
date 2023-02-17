import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/feature-shared/ingredient.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit{
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingService: ShoppingService) {};

  ngOnInit() {}

  addIngredient() {
    const ingredientFromInput = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
    this.shoppingService.addIngredient(ingredientFromInput)
  }
}
