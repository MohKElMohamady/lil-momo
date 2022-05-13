import { createReducer } from '@ngrx/store';
import { ShoppingCartState } from './shopping-cart.state';
import { on } from '@ngrx/store';
import * as ShoppingCartActions from './shopping-cart.actions';
import { Product } from 'src/app/models/product';
import { ProductToBePurchased } from 'src/app/models/product-to-be-purchased';
import { state } from '@angular/animations';

const initialState: ShoppingCartState = {
    productsToBePurchased: new Map<string, number>(undefined),
    totalProductsInCart: 0,
    totalCostOfProducts: 0,
};


export const shoppingCartReducers = createReducer(initialState,
    /*
     * This action is responsible for adding a product in the cart
     */
    on(ShoppingCartActions.addProductToCart, (state, action): ShoppingCartState => {
        console.log(`before the logic the entire state is`, state);
        let updatedProductsToBePurchased: Map<string, number> = state.productsToBePurchased;
        console.log(`before the logic `, updatedProductsToBePurchased);
        /*
         * We need to check if the product already exists in the cart
         */
        if (updatedProductsToBePurchased.has(action.product.id)) {
            let numberOfPieces = updatedProductsToBePurchased.get(action.product.id);
            updatedProductsToBePurchased.set(action.product.id, (numberOfPieces as number) + 1);
            let updatedTotalProductsInCart = state.totalProductsInCart + 1;
            console.log(`after the logic map`, updatedProductsToBePurchased);
            console.log(`after the logic number`, state.totalProductsInCart + 1);
            return {
                ...state,
                productsToBePurchased: updatedProductsToBePurchased,
                totalProductsInCart : updatedTotalProductsInCart
            }
        } else {
            updatedProductsToBePurchased.set(action.product.id, 1);
            console.log(`after the logic map `, updatedProductsToBePurchased);
            let updatedTotalProductsInCart = state.totalProductsInCart + 1;
            console.log(`after the logic number`, updatedTotalProductsInCart);
            return {
                ...state,
                productsToBePurchased: updatedProductsToBePurchased,
                totalProductsInCart : updatedTotalProductsInCart
            }
        }
    }),
    /*
     * This action is responsible for incrementing the price in the cart, gets triggered by the effect after listening 
     * for an action of type addProductToCart
     */
    on(ShoppingCartActions.incrementTotalPriceInCart, (state,action) : ShoppingCartState => {
        console.log(`The price to be added is`, action.product.price);
        console.log(`The total price before updating is`, state.totalCostOfProducts);
        let updatedTotalCostOfProducts  = state.totalCostOfProducts + action.product.price;
        console.log(`The total price to be added is`, updatedTotalCostOfProducts);
        return {
            ...state,
            totalCostOfProducts : updatedTotalCostOfProducts
        }
    }),
    /*
     * This action is responsible for removing a product out of the cart
     */
    on(ShoppingCartActions.removeProductFromCart, (state, action) : ShoppingCartState => {
        let updatedProductsToBePurchased: Map<string, number> = state.productsToBePurchased;
        /*
         * The logic of removing the products from a cart:
         * We need to check if the product already exists in the cart, if it does there are two options:
         * There are more than one occurnces of that product in the cart,  we will decrement it by one.
         * There is only ONE occurence of the product in the cart, we will delete its presence from the map
         * If it does not exist
         */
        if (updatedProductsToBePurchased.has(action.product.id)) {
            let numberOfPieces = updatedProductsToBePurchased.get(action.product.id);

            if(numberOfPieces == 1){
                updatedProductsToBePurchased.delete(action.product.id);
                let updatedTotalProductsInCart = state.totalProductsInCart - 1;
                return {
                    ...state,
                    productsToBePurchased : updatedProductsToBePurchased,
                    totalProductsInCart : updatedTotalProductsInCart
                }
            }
            updatedProductsToBePurchased.set(action.product.id, (numberOfPieces as number) - 1);
            let updatedTotalProductsInCart = state.totalProductsInCart - 1;
            return {
                ...state,
                productsToBePurchased: updatedProductsToBePurchased,
                totalProductsInCart : updatedTotalProductsInCart
            }
        } else {
            return {
                ...state,
                productsToBePurchased: updatedProductsToBePurchased,
            }
        }    
        return {
            ...state
        }
    }),
    /*
     * This action is responsible for decrementing the price in the cart, gets triggered by the effect after listening 
     * for an action of type removeProductFromCart 
     */
    on(ShoppingCartActions.decrementTotalPriceInCart, (state, action) : ShoppingCartState => {
        return {
            ...state,
            totalCostOfProducts : state.totalCostOfProducts - action.product.price
        }
    }),
    /*
     * This action is responsible for adding x amount of quantities 
     */
    on(ShoppingCartActions.addProductWithToCartQuantatity, (state, action) : ShoppingCartState => {
        let updatedProductsToBePurchased: Map<string, number> = state.productsToBePurchased;
        /*
         * We need to check if the product already exists in the cart
         */
        if (updatedProductsToBePurchased.has(action.product.id)) {
            let numberOfPieces = updatedProductsToBePurchased.get(action.product.id);
            updatedProductsToBePurchased.set(action.product.id, (numberOfPieces as number) + action.quantatity);
            return {
                ...state,
                productsToBePurchased: updatedProductsToBePurchased,
                totalProductsInCart : state.totalProductsInCart + action.quantatity
            }
        } else {
            updatedProductsToBePurchased.set(action.product.id, action.quantatity);
            return {
                ...state,
                productsToBePurchased: updatedProductsToBePurchased,
                totalProductsInCart : state.totalProductsInCart + action.quantatity
            }
        }
    }),
    on(ShoppingCartActions.clearCart, (state, action) : ShoppingCartState => {
        let updatedProductsToBePurchased : Map<string, number> = new Map(state.productsToBePurchased);
        updatedProductsToBePurchased.clear();
        return {
            ...state,
            productsToBePurchased : updatedProductsToBePurchased,
            totalCostOfProducts : 0,
            totalProductsInCart : 0
        }
    }),
    );

/* export const shoppingCartReducers = createReducer(
    initialState,
    on(
        ShoppingCartActions.addProductToCart,
        (state, action): ShoppingCartState => {
            let productsToBeUpdated: ProductToBePurchased[] = [
                ...state.productsToBePurchased,
            ];
            let productExistsInCart: boolean = false;
            for (let productInCart of productsToBeUpdated) {
                if (productInCart.product.id === action.product.id) {
                    productExistsInCart = true;
                }
            }
            if (productExistsInCart) {
                let productsToBeUpdated: ProductToBePurchased[] = [
                    ...state.productsToBePurchased,
                ];
                [...state.productsToBePurchased].push({
                    product: action.product,
                    amount: 1,
                });
                return {
                    ...state,
                    productsToBePurchased: productsToBeUpdated,
                    totalProductsInCart: state.totalProductsInCart + 1,
                    totalCostOfProducts: state.totalCostOfProducts + action.product.price,
                };
            } else {
                let indexOfProduct!: number;
                for (let i = 0; i < productsToBeUpdated.length; i++) {
                    if (productsToBeUpdated[i].product.id === action.product.id) {
                        indexOfProduct = i;
                    }
                    productsToBeUpdated[indexOfProduct].amount++;
                }
                return {
                    ...state,
                    productsToBePurchased: productsToBeUpdated,
                    totalProductsInCart: state.totalProductsInCart + 1,
                    totalCostOfProducts: state.totalCostOfProducts + action.product.price,
                };
            }
        }
    ),
    on(ShoppingCartActions.addProductWithToCartQuantatity, (state, action) => {
        let productsToBeUpdated: ProductToBePurchased[] = [
            ...state.productsToBePurchased,
        ];
        [...state.productsToBePurchased].push({
            product: action.product,
            amount: 1,
        });
        return {
            ...state,
            productsToBePurchased: productsToBeUpdated,
            totalProductsInCart: state.totalProductsInCart + action.quantatity,
            totalCostOfProducts:
                state.totalCostOfProducts + action.product.price * action.quantatity,
        };
    }),
    on(ShoppingCartActions.checkout, (state, action) => {
        return {
            ...state,
            productsToBePurchased: [],
            totalProductsInCart: 0,
            totalCostOfProducts: 0,
        };
    }),
    on(ShoppingCartActions.clearCart, (state, action): ShoppingCartState => {
        return {
            ...state,
            productsToBePurchased: [],
            totalProductsInCart: 0,
            totalCostOfProducts: 0,
        };
    })
); */
