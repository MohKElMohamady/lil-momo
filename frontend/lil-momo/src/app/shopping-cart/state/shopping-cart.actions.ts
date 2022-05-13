import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product";

export const addProductToCart = createAction("[Shopping Cart] Adding product to cart", props<{product : Product}>());
export const addProductWithToCartQuantatity = createAction("[Shopping Cart] Add products to cart with quantity", props<{product : Product, quantatity : number}>());
export const removeProductFromCart = createAction("[Shopping Cart] Removing product", props<{product : Product}>());
export const incrementTotalPriceInCart = createAction("[Shopping Cart] Increment total price", props<{product : Product}>());
export const decrementTotalPriceInCart = createAction("[Shopping Cart] Decrement total price", props<{product : Product}>());
export const clearCart = createAction("[Shopping Cart] Clear products from cart");
export const checkout = createAction("[Shopping Cart] Checkout!");