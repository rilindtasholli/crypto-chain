function beforeDecimal(num) {
    if (Number.isInteger(num)) {
      return 1;
    }
  
    return num.toString().split('.')[0];
}

let height = document.getElementById('particles-js').clientHeight;
let distance = beforeDecimal(height * 0.20773639);
// let distance = beforeDecimal(height * 0.25);

console.log(distance)

particlesJS("particles-js", {
    "particles": {
        "number": {
        "value": 80,
        "density": {
            "enable": false,
            "value_area": 800
        }
        },
        "color": {
        "value": "#ffae00"
        },
        "shape": {
        "type": "circle",
        "stroke": {
            "width": 1,
            "color": "#ffae00"
        },
        "polygon": {
            // "nb_sides": 5
            "nb_sides": 0
        },
        "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
        }
        },
        "opacity": {
        "value": 0.5,
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
        "distance": distance,
        "color": "#10a7f6",
        "opacity": 0.6,
        "width": 1
        },
        "move": {
        "enable": true,
        "speed": 1.3,
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
            "enable": false,
            "mode": "grab"
        },
        "onclick": {
            "enable": false,
            "mode": "push"
        },
        "resize": false
        },
        "modes": {
        "grab": {
            "distance": 140,
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
    "retina_detect": false
});
