import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingCartState } from './shopping-cart.state';
import * as ProductsSelector from '../../products/state/products.selectors';
import { ProductToBePurchased } from 'src/app/models/product-to-be-purchased';
import { Rim } from 'src/app/models/rim';
import { Spoiler } from 'src/app/models/spoiler';
export const shoppingCartFeatureSelector =
  createFeatureSelector<ShoppingCartState>('shoppingCart');

export const selectTotalProductsInCart = createSelector(
  shoppingCartFeatureSelector,
  (state) => state.totalProductsInCart
);

export const selectTotalCostOfProducts = createSelector(
  shoppingCartFeatureSelector,
  (state) => state.totalCostOfProducts
);

export const selectProductsToBePurchased = createSelector(
  shoppingCartFeatureSelector,
  (state) => state.productsToBePurchased
);
/*
 * Using a selector from another state to use it in another state but first we have to provide the feature selector of state x
 * https://stackoverflow.com/questions/16507866/iterate-through-a-map-in-javascript
 * https://stackoverflow.com/questions/43257027/ngrx-combine-two-selectors
 */
export const selectProductsAndTheirQuantaties = createSelector(
  shoppingCartFeatureSelector,
  ProductsSelector.productsSelector,
  (state, products) : ProductToBePurchased[] => {
    let productsAndTheirQuantaties : ProductToBePurchased[] = [];
    
    let productsMap = state.productsToBePurchased;

    for(const [productId, amount] of productsMap.entries()){
        let foundProduct = products.find((p) => productId === p.id);
        if(foundProduct !== undefined){
            productsAndTheirQuantaties.push({product : foundProduct, amount : amount});
        }
    }

    return productsAndTheirQuantaties;
  }
);
