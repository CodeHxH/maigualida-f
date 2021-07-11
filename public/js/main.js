AOS.init();

var image = document.getElementsByClassName('header__background');
new simpleParallax(image, {
	scale: 1.5,
});

var image = document.getElementsByClassName('about__img');
new simpleParallax(image, {
	orientation: 'right',
});
