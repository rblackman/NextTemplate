'use client';

/**
 * Enforce that a function not be called until a certain amount of time has passed without it being called.
 */
export function debounce<T extends Function>(callback: T, wait = 20) {
	let timeoutRef: number = 0;
	let callable = (...args: any) => {
		clearTimeout(timeoutRef);
		if (window) {
			timeoutRef = window.setTimeout(() => callback(...args), wait);
		}
	};
	return <T>(<any>callable);
}
