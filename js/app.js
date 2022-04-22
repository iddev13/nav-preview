window.onload = function () {
	document.querySelector('.wrapper').classList.add('active')
	const copyRightDate = document.querySelector('.copyright')
	copyRightDate.innerHTML = `${new Date().getFullYear()} | <span>All Rights Reserved</span>`
};

const safariFixed = () => {
	let header = document.querySelector(".header");

	if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
		alert('Вы используете Safari браузер.');
		header.classList.add("header__fixed")
	} else {
		window.onscroll = function showHeader() {
			if (window.pageYOffset > 50) {
				header.classList.add("header__fixed");
			} else {
				header.classList.remove("header__fixed");
			}
		};
	}
}

safariFixed()

function burgerFunction() {
	const burger = document.querySelector('.header__burger')
	const burgerList = document.querySelector('.header__list')
	const body = document.querySelector('body')
	const burgerLinks = burgerList.querySelectorAll('.header__link')

	burger.addEventListener('click', function () {
		burger.classList.toggle('active')
		burgerList.classList.toggle('active')
		body.classList.toggle('lock')
	})

	body.addEventListener('click', function (event) {
		if (!event.target.closest('header') && burger.classList.contains('active')) {
			burger.classList.toggle('active')
			burgerList.classList.toggle('active')
			body.classList.toggle('lock')
		}
	})

	burgerLinks.forEach(elem => {
		elem.addEventListener('click', function () {
			burger.classList.remove('active')
			burgerList.classList.remove('active')
			body.classList.remove('lock')
		})
	})

}
document.addEventListener('DOMContentLoaded', burgerFunction)

function checkMobile() {
	let isMobile = {
		Android: function () { return navigator.userAgent.match(/Android/i) },
		BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i) },
		iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPdo/i) },
		Opera: function () { return navigator.userAgent.match(/Opera Mini/i) },
		Windows: function () { return navigator.userAgent.match(/IEMobile/i) },
		any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()) }
	}
	let body = document.querySelector('body')

	if (isMobile.any()) body.classList.add('touch')
	else body.classList.add('mouse')

}

checkMobile()

// active class of menu items onscroll ==========================================

window.addEventListener('scroll', function () {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 768) {
		document.querySelectorAll('.navigation').forEach(function (el, i) {
			if (el.offsetTop - document.querySelector('.header__nav').clientHeight - 30 <= scrollDistance) {
				document.querySelectorAll('.header__nav a').forEach(function (el) {
					if (el.classList.contains('header__link--active')) {
						el.classList.remove('header__link--active');
					}
				});

				document.querySelectorAll('.header__nav li')[i].querySelector('a').classList.add('header__link--active');
			}
		});
	}
});
