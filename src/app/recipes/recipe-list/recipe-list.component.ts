import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i.pinimg.com/originals/c9/ed/03/c9ed0364fbc0994b9366d89675213a2e.jpg'),
    new Recipe('Another Test Recipe', 'This is simply another test', 'https://brightcove.hs.llnwd.net/d21/unsecured/media/1033249144001/1033249144001_1547392496001_ari-origin05-arc-129-1333572502778.jpg?pubId=1033249144001&videoId=1545942702001')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
