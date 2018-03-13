// toggleMenu = ul => {
// 	if(ul.style.visibility==='visible') {ul.style.visibility = 'hidden'}
// 		else {
// 			ul.style.visibility = 'visible'
// 		}
// 	};
const menuButtons = document.querySelectorAll('.nav-menu');
if (menuButtons) menuButtons.forEach(button => {
	const navUl = button.parentNode.querySelector("nav ul");
	button.addEventListener('click', () => {
		navUl.classList.toggle("show-menu");
	});
});

const descriptionButtons = document.querySelectorAll('.descriptionButton');
if (descriptionButtons) descriptionButtons.forEach(descriptionButton => {
	const cardDescription = descriptionButton.parentNode.parentNode.querySelector(".card-text");
	descriptionButton.addEventListener('click', () => {
		toggleMenu(cardDescription)
	});
});


const projectCarousel = index => {
	const projectCards = document.querySelectorAll('.main-card');
	if (projectCards) projectCards.forEach(card => {
		if (index > projectCards.length) {
			slideIndex = 1
		}
		if (index < 1) {
			slideIndex = projectCards.length
		}
		for (var i = projectCards.length - 1; i >= 0; i--) {
			projectCards[i].style.display = 'none';
		}
		projectCards[slideIndex - 1].style.display = 'flex';

	});
};

let slideIndex = 1;
projectCarousel(slideIndex);

const plusSlideNumber = (n) => {
	projectCarousel(slideIndex += n);
}

const nextButton = document.querySelector("#next-button")
if (nextButton) nextButton.addEventListener('click', () => plusSlideNumber(1));
const previousButton = document.querySelector("#previous-button")
if (previousButton) previousButton.addEventListener('click', () => plusSlideNumber(-1));

const modalButton = document.querySelector(".modal-button")
const modal = document.querySelector(".modal-box")
const closeButton = document.querySelector(".modal-close")
const toggleModal = () => {
	modal.classList.toggle("show-thing");
}
const windowOnClick = (event) => {
	if (event.target === modal) {
		toggleModal();
	}
}
if (modalButton) modalButton.addEventListener('click', toggleModal);
if (closeButton) closeButton.addEventListener('click', toggleModal);
window.addEventListener("click", windowOnClick);

var nodes = new vis.DataSet([{
	label: "Java"
}, {
	label: "Test Driven Development"
}, {
	label: "Spring MVC"
}, {
	label: "SQL"
}, {
	label: "Hibernate"
}, {
	label: "HTML5"
}, {
	label: "CSS3"
}, {
	label: "FlexBox"
}, {
	label: "JavaScript"
}, {
	label: "JQuery"
}, ]);
var edges = new vis.DataSet();

var container = document.getElementById('bubbles');
var data = {
	nodes: nodes,
	edges: edges
};

var options = {

	nodes: {
		borderWidth: 0,
		shape: "circle",
		color: {
			background: '#F92C55',
			highlight: {
				background: '#F92C55',
				border: '#F92C55'
			}
		},
		font: {
			color: '#fff'
		}
	},
	interaction: {
		zoomView: false,
		dragView: false
	},
	physics: {
		stabilization: false,
		minVelocity: .01,
		solver: "repulsion",
		repulsion: {
			nodeDistance: 80
		}
	}
};
var network = new vis.Network(container, data, options);


// Events
network.on("click", function(e) {
	if (e.nodes.length) {
		var node = nodes.get(e.nodes[0]);
		// Do something
		nodes.update(node);

	}
});