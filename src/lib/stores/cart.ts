import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export interface CartItems {
    randomId: string;
    product: string;
    amount: number;
    price: number;
    paymentStatus: boolean;
    user: string;
    quantity: number;
    brand: string;
    image: string;
    title: string;
}

const initialCart = browser && JSON.parse(localStorage.cart || '[]') as CartItems[];
const cartStore = writable<CartItems[]>(initialCart || []);
let message = writable('')

const saveToCart = (newData: CartItems) => {
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


const deleteOnFromCart = (randomId: string) => {
    if (browser)
        cartStore.update(currentCart => {
            const filtered = currentCart.filter((cart) => cart.randomId !== randomId)
            localStorage.cart = JSON.stringify(filtered)
            return filtered;
        })
}


function increment(itemId: string) {
    if (browser) {
        cartStore.update(currentCart => {
            const itemIndex = currentCart.findIndex(item => item.randomId === itemId);
            const item = currentCart[itemIndex];

            if (!item) return currentCart;

            item.quantity += 1;
            item.amount = item.quantity * item.price;

            const updatedCart = [
                ...currentCart.slice(0, itemIndex),
                item,
                ...currentCart.slice(itemIndex + 1)
            ];

            localStorage.cart = JSON.stringify(updatedCart);

            return updatedCart;
        });
    }
}

function decrement(itemId: string) {
    if (browser) {
        cartStore.update(currentCart => {
            const itemIndex = currentCart.findIndex(item => item.randomId === itemId);
            const item = currentCart[itemIndex];

            if (!item || item.quantity <= 1) return currentCart;

            item.quantity -= 1;
            item.amount = item.quantity * item.price;

            const updatedCart = [
                ...currentCart.slice(0, itemIndex),
                item,
                ...currentCart.slice(itemIndex + 1)
            ];

            localStorage.cart = JSON.stringify(updatedCart);

            return updatedCart;
        });
    }
}


const clearMessage = () => {
    message.set("")
}

export { cartStore, saveToCart, deleteOnFromCart, message, clearMessage, increment, decrement };
