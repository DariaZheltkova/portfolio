const menu = document.querySelector('#burger__menu');
const menuBtn = document.querySelector('#burger');
const burgerIcon = document.querySelector('#burger__icon');
const logo = document.querySelector('#header__logo');
const header = document.querySelector('#header__inner');

const body = document.body;

if (menu && menuBtn) {
		menuBtn.addEventListener('click', () => {
		menu.classList.toggle('show')
		menuBtn.classList.toggle('show')
		burgerIcon.classList.toggle('show')
		body.classList.toggle('no-scroll')
		logo.classList.toggle('no-show')
		header.classList.toggle('flex__end')
	})

	menu.querySelectorAll('.burger__nav-link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('show')
			menuBtn.classList.remove('show')
			burgerIcon.classList.remove('show')
			body.classList.remove('no-scroll')
			logo.classList.remove('no-show')
			header.classList.remove('flex__end')
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