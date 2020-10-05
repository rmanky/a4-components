import { writable, derived } from "svelte/store";

export const steering = writable("0");
export const throttle = writable("0");
export const fps = writable("60");
export const time = writable("00:00.00");
export const lap = writable("1");