import { createAction } from "@ngrx/store";
import { Product } from "src/app/models/product";
import { props } from "@ngrx/store";
export const initializeProducts =  createAction("[Products] Initialize Projects ");
export const selectProduct = createAction("[Products] Select product", props<{product : Product}>());
export const loadProducts = createAction("[Product] Loading Products", props<{products : Product[]}>());
