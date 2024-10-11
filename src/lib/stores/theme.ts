import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export let userTheme: any;
export let themes = ["light",
    "winter",
    "nord",
    "synthwave",
    "cyberpunk",
    "luxury",
    "business",
    "coffee",]

if (browser) {

    localStorage.theme = themes[5]
    userTheme = writable(localStorage.theme || themes[5]);
    userTheme.subscribe((value: string) => localStorage.theme = value)
}

export default userTheme;
