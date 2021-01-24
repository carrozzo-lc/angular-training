import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Tasty Schnitzel',
    //         'A super-tasty Schnitzel - just awesome!',
    //         'https://butteryourbiscuit.com/wp-content/uploads/2018/03/Easy-pork-Schnitzel-3-720x720.jpg',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French Fries', 20),
    //         ]),
    //     new Recipe(
    //         'Big Fat Burger',
    //         'What else you need to say?',
    //         'https://ribsandburgers.com/au/wp-content/uploads/2019/03/2-angus-bacon-and-cheese.jpg',
    //         [
    //             new Ingredient('Buns', 2),
    //             new Ingredient('Meat', 1),
    //         ])
    // ];
    private recipes: Recipe[] = [];

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        // the way bellow in correct too!!!
        // const recipe = this.recipes.find(
        //     (recipe) => {
        //         return recipe.id === id;
        //     }
        // );
        //return recipe;
        return this.recipes.slice()[index] // Prof. way
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
