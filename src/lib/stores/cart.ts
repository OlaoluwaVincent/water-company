import { browser } from '$app/environment';
import type { OrdersRecord } from '$lib/types/pocketbase-types';
import { writable } from 'svelte/store';

const initialCart = browser && JSON.parse(localStorage.cart || '[]') as OrdersRecord[];
const cartStore = writable<OrdersRecord[]>(initialCart || []);
let message = writable('')

const saveToCart = (newData: OrdersRecord) => {
    if (browser)
        cartStore.update(currentCart => {
            const exists = currentCart.some(item =>
                item.brand === newData.brand && item.product === newData.product
            );
            if (exists) {
                message.set("Items already exists")
                return currentCart;
            } else {

                const updatedCart = [...currentCart, newData];
                localStorage.cart = JSON.stringify(updatedCart);
                message.set("Item added to cart")
                return updatedCart;
            }
        });
};


const deleteOnFromCart = (productId: string) => {
    if (browser)
        cartStore.update(currentCart => {
            const filtered = currentCart.filter((cart) => cart.product !== productId)
            localStorage.cart = JSON.stringify(filtered)
            return filtered;
        })
}


const clearMessage = () => {
    message.set("")
}

export { cartStore, saveToCart, deleteOnFromCart, message, clearMessage };
