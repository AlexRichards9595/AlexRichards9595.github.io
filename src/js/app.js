toggleMenu = ul => {
	if(ul.style.visibility==='visible') {ul.style.visibility = 'hidden'}
	else {ul.style.visibility = 'visible'}
};
const menuButtons = document.querySelectorAll('.nav-menu');
if(menuButtons) menuButtons.forEach(button => {
		const navUl = button.parentNode.querySelector("nav ul");
		button.addEventListener('click', () => {toggleMenu(navUl)});
});

const descriptionButtons = document.querySelectorAll('.descriptionButton');
if(descriptionButtons) descriptionButtons.forEach(descriptionButton => {
		const cardDescription = descriptionButton.parentNode.parentNode.querySelector(".card-text");
		descriptionButton.addEventListener('click', () => {toggleMenu(cardDescription)});
});	


const projectCarousel = index => {
	const projectCards = document.querySelectorAll('.main-card');
	if(projectCards) projectCards.forEach(card => {
		if(index > projectCards.length) {slideIndex = 1}
		if(index < 1) {slideIndex = projectCards.length}
		for (var i = projectCards.length - 1; i >= 0; i--) {
			projectCards[i].style.display = 'none';
		}
		projectCards[slideIndex-1].style.display = 'flex';

	});
};	

let slideIndex = 1;
projectCarousel(slideIndex);

const plusSlideNumber = (n) => {
	projectCarousel(slideIndex += n);
}	

const nextButton = document.querySelector("#next-button")
nextButton.addEventListener('click', () => plusSlideNumber(1));
const previousButton = document.querySelector("#previous-button")
previousButton.addEventListener('click', () => plusSlideNumber(-1));

const modalButton = document.querySelector(".modal-button")
const modal = document.querySelector(".modal-box")
const closeButton = document.querySelector(".modal-close")
const toggleModal = () => {
	modal.classList.toggle("show-modal");
}
const windowOnClick = (event) => {
	if (event.target === modal) {
		toggleModal();
	}
}
modalButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener("click", windowOnClick);


