import { Color } from "./color";
import { Manufacturer } from "./manufacturer";
import { Product } from "./product";

export interface Rim extends Product {
    defaultColor : Color;
    colors : Color[];
    
}