$('#portfolioButton').on('click', function(event) {
    event.preventDefault();
    $('#portfolio').animate({
        transform: "scale(1.1)", opacity: 1
    }, 1200);
    $('#portfolio').css('z-index', 3);
    $('#portfolio').animate({
        transform: "scale(1)", opacity: 1
    }, 1200);

    $('#contact').animate({
        right: -50 + "%", left: 85 + "%", opacity: 1
    }, 1200);
    $('#contact').css('z-index', 2);
    $('#contact').animate({
        left: 0, right: 0, opacity: 0
    }, 1200);

    $('#resume').animate({
        left: -50 + "%", right: 100 + "%", opacity: 1
    }, 1200);
    $('#resume').css('z-index', 1);
    $('#resume').animate({
        left: 0, right: 0, opacity: 0
    }, 1200);
});

$('#resumeButton').on('click', function(event) {
    event.preventDefault();
    $('#portfolio').animate({
        transform: "scale(1.1)", opacity: 1
    }, 1200);
    $('#portfolio').css('z-index', 2);
    $('#portfolio').animate({
        transform: "scale(1)", opacity: 0
    }, 1200);

    $('#contact').animate({
        right: -50 + "%", left: 85 + "%", opacity: 1
    }, 1200);
    $('#contact').css('z-index', 1);
    $('#contact').animate({
        left: 0, right: 0, opacity: 0
    }, 1200);

    $('#resume').animate({
        left: -50 + "%", right: 100 + "%", opacity: 1
    }, 1200);
    $('#resume').css('z-index', 3);
    $('#resume').animate({
        left: 0, right: 0, opacity: 1
    }, 1200);
});

$('#contactButton').on('click', function(event) {
    event.preventDefault();
    $('#portfolio').animate({
        opacity: 1
    }, 1200);
    $('#portfolio').css('z-index', 1);
    $('#portfolio').animate({
        transform: "scale(1)", opacity: 0
    }, 1200);

    $('#contact').animate({
        right: -50 + "%", left: 85 + "%", opacity: 1
    }, 1200);
    $('#contact').css('z-index', 3);
    $('#contact').animate({
        left: 0, right: 0, opacity: 1
    }, 1200);

    $('#resume').animate({
        left: -50 + "%", right: 100 + "%", opacity: 1
    }, 1200);
    $('#resume').css('z-index', 2);
    $('#resume').animate({
        left: 0, right: 0, opacity: 0
    }, 1200);
});


// $('#portfolioButton').on('click', function(e) {
//   e.preventDefault();

//   $('#primary').fadeOut(250, "swing", function() {
//     $('#portfolio').fadeIn(250);
//   });
// });

// $('#portfolio-go-home').on('click', function(e) {
//   $('#portfolio').fadeOut(250, "swing", function() {
//     $("#primary").fadeIn(250);
//   });
// });

// function buttonCenter(x) {

// 	var left = document.getElementById('left-button');
// 	var right = document.getElementById('right-button');

// 	if (x.matches) {
// 		left.classList.add("text-center");
// 		left.classList.remove("text-right");

// 		right.classList.add("text-center");
// 		right.classList.remove("text-left");
// 	} else {
// 		left.classList.remove("text-center");
// 		left.classList.add("text-right");

// 		right.classList.remove("text-center");
// 		right.classList.add("text-left");
// 	}
// }

// var x = window.matchMedia("(max-width: 1200px)");
// buttonCenter(x);
// x.addListener(buttonCenter);

// $('#left-button').on('click', function(e) {
//   $('#primary').fadeOut(250, "swing", function() {
//     $("#portfolio").fadeIn(250);
//   });
// });

// /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'particlesjs-config.json', function() {
//   console.log('callback - particles.js config loaded');
// });

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.45770653514180026,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 200,
            "color": "#ffffff",
            "opacity": 0.14430665163472378,
            "width": 0.5
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 243.6239055957366,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});