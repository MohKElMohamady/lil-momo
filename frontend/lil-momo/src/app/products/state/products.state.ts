import { Product } from "src/app/models/product";

export interface ProductsState{
    products : Product[]
    currentlySelectedProduct : Product | null;
}