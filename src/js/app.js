
const menuButtons = document.querySelectorAll('.nav__menu');
if (menuButtons) menuButtons.forEach(button => {
	const navUl = button.parentNode.querySelector("nav ul");
	button.addEventListener('click', () => {
		navUl.classList.toggle("show__menu");
	});
});

const descriptionButtons = document.querySelectorAll(".descriptionButton");
if (descriptionButtons) descriptionButtons.forEach(descriptionButton => {
	const cardDescription = descriptionButton.parentNode.parentNode.querySelector(".card__text");
	descriptionButton.addEventListener('click', () => {
		toggleDescription(cardDescription);
	});
});

const toggleDescription = (element => {
	element.classList.toggle("show__thing");
});

const projectCarousel = index => {
	const projectCards = document.querySelectorAll('.main__card');
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

const nextButton = document.querySelector("#next__button")
if (nextButton) nextButton.addEventListener('click', () => plusSlideNumber(1));
const previousButton = document.querySelector("#previous__button")
if (previousButton) previousButton.addEventListener('click', () => plusSlideNumber(-1));



let inited = false
const init = () => {

var nodes = new vis.DataSet([{
	label: "Java"
}, {
	label: "Spring MVC"
}, {
	label: "SQL"
}, {
	label: "Hibernate"
}, {
	label: "HTML5"
}, {
	label: "Test Driven Development"
}, {
	label: "CSS3"
}, {
	label: "FlexBox"
}, {
	label: "JavaScript"
}, {
	label: "AJAX"
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
			nodeDistance: 65
		}
	}
};
var network = new vis.Network(container, data, options);


// Events
network.on("click", function(e) {
	if (e.nodes.length) {
		var node = nodes.get(e.nodes[0]);
		nodes.update(node);

	}
});

  
}

const skills = document.querySelector(".skills");

if (skills) window.addEventListener('scroll', function() {
  if ( inited ) {
    return
  }

  if (skills.offsetTop >= window.innerHeight + document.body.scrollTop ) {
    inited = true
    setTimeout(function() {
    	init()
}, 1000);
  }
});

// var indexMain = document.querySelector(".index__main");
// // indexMain.style.height = "100vh";
// // indexMain.style.width = "100vw";
// // document.body.appendChild(div);
// indexMain.addEventListener('mousemove', (event) => {
// 	console.log(event);
// 	var x = event.clientX;
// 	var y = event.clientY;
// 	var bX = x/2;
// 	var bY = y/2;
// 	// indexMain.textContent = x + ", " + y;
// 	indexMain.style.backgroundColor = 'rgb(' + bX + ", " + bY + ', 50';
// 	// indexMain.style.opacity = 0.99;
// }, false);

