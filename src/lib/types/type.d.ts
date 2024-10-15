import type { page, updated } from '$app/stores';
import type { CartItems } from '$lib/stores/cart';
import type user from '$lib/stores/user';
import { ProductsResponse, type OrdersResponse } from './pocketbase-types';

export interface ProductRes extends ProductsResponse {
	brands: string[];
}

export interface OrderRes extends OrdersResponse {
	order: CartItems[];
}

interface ApiResponse<T> {
	page: number;
	perPage: number;
	totalItems: number;
	totalPages: number;
	items: T;
}

export interface OrderItem {
	amount: number;
	assigned: string;
	collectionId: string;
	collectionName: string;
	created: string;
	deliveryStatus: boolean;
	expand: {
		user: User;
	};
	id: string;
	order: OrderDetail[];
	outstanding: number;
	paymentStatus: boolean;
	amountPaid: number;
	paymentType: string;
	updated: string;
	user: string;
	instant: boolean;
}

export interface User {
	avatar: string;
	collectionId: string;
	collectionName: string;
	created: string;
	email: string;
	emailVisibility: boolean;
	id: string;
	name: string;
	role: string;
	updated: string;
	username: string;
	verified: boolean;
}

export interface OrderDetail {
	amount: number;
	brand: string;
	image: string;
	paymentStatus: boolean;
	price: number;
	product: string;
	quantity: number;
	randomId: string;
	title: string;
	user: string;
}
