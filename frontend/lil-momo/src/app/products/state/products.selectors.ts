import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./products.state";

export const productsFeatureSelector = createFeatureSelector<ProductsState>("products");

export const currentProductSelector = createSelector(productsFeatureSelector, state => state.currentlySelectedProduct);

export const productsSelector = createSelector(productsFeatureSelector, state => state.products);

export const productSelector = (productId : string) => 
    createSelector(productsFeatureSelector, state => state.products.find((product) => productId === product.id));