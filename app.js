//SPLASH
gsap.registerPlugin(TextPlugin);
let intro = document.querySelector('.intro');
let header = document.querySelector('.load-header');
let loadSpan = document.querySelectorAll('.load-text');

window.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		loadSpan.forEach((span, idx) => {
			setTimeout(() => {
				span.classList.add('active');
			}, (idx + 1) * 400);
		});

		setTimeout(() => {
			loadSpan.forEach((span, idx) => {
				setTimeout(() => {
					span.classList.remove('active');
					span.classList.add('fade');
				}, (idx + 1) * 50);
			});
		}, 3000);

		setTimeout(() => {
			intro.style.top = '-100vh';
		}, 3500);
	});
});

// START GREETING

const words = [
	'Hello',
	'Hallo',
	'Hola',
	'你好',
	'Ciao',
	'Bonjour',
	'こんにちは',
];

let counter = 0;

let interval = setInterval(() => {
	if (counter >= words.length) {
		counter = 0;
	}

	const nextWord = words[counter];

	document.startViewTransition(() => {
		document.querySelector('.word').innerText = nextWord;
	});

	counter++;
}, 4500);
