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
 * I have to documented this because this might be needed later for complex functionality/situations of NgRx
 * Using a selector from another state to use it in another state but first we have to provide the feature selector of state x
 * Basically what the logic here is, that I am using the selector from the products state to retrieve all of the products
   stored in the store/ slice state of products
 * By passing the feature state to the selector in the parameters of the create selector function, we will be able to access
   the products in the projector, and hence by using the map (already provided in the shopping cart state that we are in),
   We will be able to filter the products and retrieve them easily.
 * After fetching all of the products from the products slice of state, we will be creating a new array of a wrapper class
   that has the product and how much it was added ProductToBePurchased
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
