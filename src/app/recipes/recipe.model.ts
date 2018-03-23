import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, description: string, imageParh: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imageParh;
        this.ingredients = ingredients;
    }
}