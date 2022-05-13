import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShoppingCartState } from "./shopping-cart.state";

export const shoppingCartFeatureSelector = createFeatureSelector<ShoppingCartState>("shoppingCart");

export const selectTotalProductsInCart = createSelector(shoppingCartFeatureSelector, state => state.totalProductsInCart);

export const selectTotalCostOfProducts = createSelector(shoppingCartFeatureSelector, state => state.totalCostOfProducts);
