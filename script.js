// Carousel data with all featured stories
const carouselData = [
    {
        image: 'resources/Featured Stories/Solving Umbrella_Feature.png',

    },
    {
        image: 'resources/Featured Stories/Impossible together_Feature.jpg',

    },
    {
        image: 'resources/Featured Stories/Bouquet _Feture.jpg',

    },
    {
        image: 'resources/Featured Stories/Obscure_Feature.jpg',

    },
    {
        image: 'resources/Featured Stories/One year with you_Feature.jpg',

    }
];

let currentSlide = 0;

// Change carousel slide
function changeSlide(direction) {
    currentSlide += direction;

    // Loop around
    if (currentSlide >= carouselData.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = carouselData.length - 1;
    }

    // Update carousel
    updateCarousel();
}

// Update carousel display
function updateCarousel() {
    const carouselImage = document.getElementById('carouselImage');

    if (carouselImage) {
        carouselImage.src = carouselData[currentSlide].image;
    }
}

// Email Modal Functions
function showEmailPopup() {
    const modal = document.getElementById('emailModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeEmailPopup() {
    const modal = document.getElementById('emailModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function copyEmail() {
    const email = 'Crumpledpapers63@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy email');
    });
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById('emailModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effects to interactive elements
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('mouseover', function () {
        this.style.transform = 'translateY(-3px)';
    });
    btn.addEventListener('mouseout', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Scroll arrow interaction
document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('click', function () {
        const isUp = this.textContent.includes('⬆');
        // Could add scroll functionality here
        console.log(isUp ? 'Scroll up clicked' : 'Scroll down clicked');
    });
});

// Auto-rotate carousel every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);
