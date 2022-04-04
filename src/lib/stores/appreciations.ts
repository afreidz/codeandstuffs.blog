import { writable } from "svelte/store";

export const score = writable(0);
export const disabled = writable(false);
export const appreciations = writable(null);
