import { ProductsResponse } from "./pocketbase-types";

export interface ProductRes extends ProductsResponse{
    brands:string[]
}