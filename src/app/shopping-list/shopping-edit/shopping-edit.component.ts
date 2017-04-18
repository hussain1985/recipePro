import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shoppinglist.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('nameInput') nameInputRef: ElementRef;
	@ViewChild('amountInput') amountInputRef: ElementRef;
	

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem(){
  	const ingredientName = this.nameInputRef.nativeElement.value;
  	const ingredientVal	= this.amountInputRef.nativeElement.value;
  	const newIngredient = new Ingredients(ingredientName,ingredientVal);
  	this.shoppingListService.addIngredients(newIngredient);
  }

}
 