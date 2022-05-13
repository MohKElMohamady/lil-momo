import { Product } from "src/app/models/product";
import { ProductToBePurchased } from "src/app/models/product-to-be-purchased";

export interface ShoppingCartState{
    productsToBePurchased : Map<string, number>;
    totalProductsInCart : number;
    totalCostOfProducts : number;
}
