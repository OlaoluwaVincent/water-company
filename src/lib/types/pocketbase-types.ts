/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Orders = "orders",
	Products = "products",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type OrdersRecord<Torder = unknown> = {
	amount: number
	amountPaid?: number
	assigned?: RecordIdString
	deliveryStatus?: boolean
	order: null | Torder
	outstanding?: number
	paymentStatus?: boolean
	paymentType: string
	user?: RecordIdString
}

export type ProductsRecord<Tbrands = unknown> = {
	brands: null | Tbrands
	image: string
	pricePerPack: number
	quantity: number
	title: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
	role?: string
}

// Response types include system fields and match responses from the PocketBase API
export type OrdersResponse<Torder = unknown, Texpand = unknown> = Required<OrdersRecord<Torder>> & BaseSystemFields<Texpand>
export type ProductsResponse<Tbrands = unknown, Texpand = unknown> = Required<ProductsRecord<Tbrands>> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	orders: OrdersRecord
	products: ProductsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	orders: OrdersResponse
	products: ProductsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'orders'): RecordService<OrdersResponse>
	collection(idOrName: 'products'): RecordService<ProductsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
