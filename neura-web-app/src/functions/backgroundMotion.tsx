export function setRandomBackgroundPosition(element: HTMLElement) {
	const randomX = Math.floor(Math.random() * 100);
	const randomY = Math.floor(Math.random() * 100);
	element.style.backgroundPosition = `${randomX}% ${randomY}%`;
}
