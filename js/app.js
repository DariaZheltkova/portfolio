const menu = document.querySelector('.nav');
const menuBtn = document.querySelector('.burger');
const burgerIcon = document.querySelector('.burger__icon');

const body = document.body;

if (menu && menuBtn) {
		menuBtn.addEventListener('click', () => {
		menu.classList.toggle('show')
		menuBtn.classList.toggle('show')
		burgerIcon.classList.toggle('show')
		body.classList.toggle('no-scroll')
	})

	menu.querySelectorAll('.nav__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('show')
			menuBtn.classList.remove('show')
			burgerIcon.classList.remove('show')
			body.classList.remove('no-scroll')
		})
	})
}

// Smooth scroll

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})