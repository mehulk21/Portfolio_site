// Typed.js - Dynamic Typing Effect
var typed = new Typed('#typed', {
    strings: ["Mehul Kumar", "a Developer", "an AI Enthusiast", "a Problem Solver"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

particlesJS('particles-js', {
    particles: {
        number: { value: 100 },
        color: { value: "#ff0000" },
        shape: {
            type: "circle",
            stroke: { width: 0 },
            polygon: { nb_sides: 5 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ff0000",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});
