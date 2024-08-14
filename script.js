// script.js
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('open');
});


// script.js
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length)
}



function autoPlay() {
    setInterval(nextSlide, 2000);
}

window.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    autoPlay();
});


// Sample function to filter properties by location or price
function filterProperties(criteria) {
    const properties = document.querySelectorAll('.property-card');
    properties.forEach(property => {
        if (property.querySelector('.location').textContent.includes(criteria) ||
            property.querySelector('.price').textContent.includes(criteria)) {
            property.style.display = 'block';
        } else {
            property.style.display = 'none';
        }
    });
}


const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const prevButton = document.querySelector('.testimonial-nav .prev');
const nextButton = document.querySelector('.testimonial-nav .next');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}


function showTestimonial(index) {
    testimonialSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialSlides.length) % testimonialSlides.length;
    showTestimonial(currentTestimonial);
}

nextButton.addEventListener('click', nextTestimonial);
prevButton.addEventListener('click', prevTestimonial);



// Function to add animation class when the section comes into view
function revealOnScroll() {
    const aboutSection = document.querySelector('.about-us');
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        aboutSection.classList.add('active');
    }
}

window.addEventListener('scroll', revealOnScroll);




document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById('contactForm').reset(); // Clear the form
    } else {
        alert('Please fill in all fields.');
    }
});


// script.js

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('newsletterEmail').value;

    if (email) {
        alert(`Thank you for subscribing!`);
        document.getElementById('newsletterForm').reset(); // Clear the form
    } else {
        alert('Please enter a valid email address.');
    }
});





