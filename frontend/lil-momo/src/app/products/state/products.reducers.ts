import { createReducer } from '@ngrx/store';
import { ProductsState } from './products.state';
import { on } from '@ngrx/store';
import * as ProductsActions from './products.actions';

const initialState: ProductsState = {
    products: [],
    currentlySelectedProduct: null,
};

export const productsReducer = createReducer(
    initialState,
    on(ProductsActions.initializeProducts, (state): ProductsState => {
        return {
            ...state,
        };
    }),
    on(ProductsActions.selectProduct, (state, action): ProductsState => {
        return {
            ...state,
            currentlySelectedProduct: action.product,
        };
    }),
    on(ProductsActions.loadProducts, (state, action): ProductsState => {
        return {
            ...state,
            products: action.products,
        };
    })
);
