import { Ingredients } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService{
	ingredientChanged = new EventEmitter<Ingredients[]>();
	private	ingredients: Ingredients[] = [
	new Ingredients('Apple', 5),
	new Ingredients('Banana', 25),
	];
	getIngredients(){
		return this.ingredients.slice();
	}
	addIngredients(ingredient: Ingredients){
		this.ingredients.push(ingredient);
		this.ingredientChanged.emit(this.ingredients.slice());

	}

	addIngredientsFromRecipe(ingredients: Ingredients[]){
		this.ingredients.push(...ingredients);
		this.ingredientChanged.emit(this.ingredients.slice())
	}
	
}