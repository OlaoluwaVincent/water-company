import type { CartItems } from "$lib/stores/cart";
import { ProductsResponse, type OrdersResponse } from "./pocketbase-types";

export interface ProductRes extends ProductsResponse{
    brands:string[]
}

export interface OrderRes extends OrdersResponse{
    order: CartItems[]
}
