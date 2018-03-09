toggleMenu = ul => {
	if(ul.style.display==='flex') {ul.style.display = 'none'}
	else {ul.style.display = 'flex'}
};

const button = document.querySelector('.nav-menu');
const navUl = document.querySelector('nav ul');
if(button) button.addEventListener('click', () => toggleMenu(navUl));

const descriptionButton = document.querySelector('.descriptionButton');
descriptionButton.forEach(button => {
	const cardDescription = descriptionButton.parentNode.previousSibling;
	button.addEventListener('click', () => toggleMenu(cardDescription));
	});
