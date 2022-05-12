import { Manufacturer } from "./manufacturer";
import { Type } from "./product-type";

export interface Product {
    id : string;
    name : string;
    description : string;
    manufacturer : Manufacturer;
    type : Type;
    stock : number;
    price : number;
    imageUrl : string;
}