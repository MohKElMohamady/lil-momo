import { ProductsState } from "../products/state/products.state";
import { ShoppingCartState } from "../shopping-cart/state/shopping-cart.state";

export interface AppState{
    products : ProductsState;
    shoppingCart : ShoppingCartState;
}