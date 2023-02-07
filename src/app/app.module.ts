import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './feature-shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './feature-shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './feature-recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './feature-recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './feature-recipe/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
