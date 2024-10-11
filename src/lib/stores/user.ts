// src/lib/stores/userStore.ts
import { writable } from 'svelte/store';
import pb from '$lib/config';

interface USER {
    isAdmin: boolean,
    isValid: boolean,
}
// Create a writable store to hold the user data
const userStore = writable<USER | null>(null);

// Function to update the store with the current user
const updateUser = () => {
    const user = pb.authStore
    userStore.set(user);
};

pb.authStore.onChange(updateUser);

updateUser();

export default userStore;
