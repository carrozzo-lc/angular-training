import { Component, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    id: number;

    constructor(
        private slService: ShoppingListService,
        private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipe(this.id);
            }
        )
    }

    sendToShoppingList() {
        this.slService.shoppingIngredients(this.recipe.ingredients);
    }

    toEdit() {
        this.router.navigate(['edit'], {relativeTo: this.route})
        //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    }

    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['../'], {relativeTo: this.route});
    }

}
