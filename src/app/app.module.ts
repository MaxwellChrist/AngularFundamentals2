import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './feature-shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './feature-shopping/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './feature-recipe/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './feature-recipe/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './feature-recipe/recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './feature-recipe/recipes/recipes.component';
import { DropdownDirective } from './feature-shared/dropdown.directive'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
