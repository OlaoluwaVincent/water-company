// This bloody runs on the client

import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import pb from '$lib/config';
import type { AuthModel } from 'pocketbase';
import type { OrdersResponse } from '$lib/types/pocketbase-types';

export interface OrdersTypePage {
	orders: {
		pendingOrder: OrdersResponse<unknown, unknown>[];
		deliveredOrder: OrdersResponse<unknown, unknown>[];
		incompletelyPaid: OrdersResponse<unknown, unknown>[];
	} | null;
}

export async function load(): Promise<OrdersTypePage> {
	if (browser) {
		const user: AuthModel | null = pb.authStore.model;

		if (!user) {
			throw redirect(302, '/auth/login');
		}

		try {
			const [orderOne, orderTwo, orderThree] = await Promise.all([
				pb.collection('orders').getList(1, 50, {
					filter: `paymentStatus=false&&deliveryStatus=false&&assigned="${user.id}"`,
					requestKey: 'orderQueryOne',
					sort: '-updated',
					expand: 'user'
				}),
				pb.collection('orders').getList(1, 50, {
					filter: `paymentStatus=true&&deliveryStatus=true&&assigned="${user.id}"`,
					requestKey: 'orderQueryTwo',
					sort: '-updated',
					expand: 'user'
				}),
				pb.collection('orders').getList(1, 50, {
					filter: `paymentStatus=false&&deliveryStatus=true&&assigned="${user.id}"`,
					requestKey: 'orderQueryThree',
					sort: '-updated',
					expand: 'user'
				})
			]);

			return {
				orders: {
					pendingOrder: orderOne.items,
					deliveredOrder: orderTwo.items,
					incompletelyPaid: orderThree.items
				}
			};
		} catch (error) {
			console.error('Error fetching orders:', error);
			throw redirect(500, '/error');
		}
	}

	return { orders: null };
}
