document.addEventListener('DOMContentLoaded', function() {
    // Set active page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link_nw').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active_nw');
        }
    });

    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobileMenu_nw');
    const mainNav = document.getElementById('mainNav_nw');
    
    if (mobileMenu && mainNav) {
        mobileMenu.addEventListener('click', function() {
            mainNav.classList.toggle('show_nw');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mainNav.contains(event.target) && !mobileMenu.contains(event.target)) {
                mainNav.classList.remove('show_nw');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                if (mainNav) mainNav.classList.remove('show_nw');
            }
        });
    });
});

// Language Selector
document.getElementById('languageButton').addEventListener('click', function() {
    document.getElementById('languageDropdown').classList.toggle('show');
});

// Close language dropdown when clicking outside
window.addEventListener('click', function(e) {
    if (!e.target.matches('.language-button') && !e.target.matches('.language-dropdown a')) {
        document.getElementById('languageDropdown').classList.remove('show');
    }
});

// Google Translate Function
function changeLanguage(lang) {
    alert('Language changed to: ' + lang);
    document.getElementById('languageDropdown').classList.remove('show');
}

// Scroll Animations
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Trigger animations on load for elements in view
window.dispatchEvent(new Event('scroll'));

// front page 

// Disaster Predictor Functionality
document.getElementById('predictButton').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value || 'your area';
    const disaster = document.getElementById('disasterType').value || 'natural disaster';
    
    if (!disaster) {
        alert('Please select a disaster type');
        return;
    }

    // Simulate analysis
    setTimeout(() => {
        document.getElementById('resultLocation').textContent = location;
        document.getElementById('resultDisaster').textContent = document.getElementById('disasterType').options[document.getElementById('disasterType').selectedIndex].text;
        
        // Random results for demo
        const risks = ['High', 'Medium', 'Low'];
        const risk = risks[Math.floor(Math.random() * risks.length)];
        const probability = Math.floor(Math.random() * 70) + 10;
        
        document.getElementById('riskLevel').textContent = risk;
        document.getElementById('riskLevel').className = 'risk-' + risk.toLowerCase();
        document.getElementById('probability').textContent = probability + '%';
        
        let recommendations = '';
        if (risk === 'High') {
            recommendations = 'Immediate action required. Review evacuation routes, prepare emergency supplies, and monitor official channels for updates. Consider temporary relocation if in direct danger zone.';
        } else if (risk === 'Medium') {
            recommendations = 'Increased vigilance recommended. Update emergency plans, check supplies, and stay informed about developing conditions. Secure loose outdoor items.';
        } else {
            recommendations = 'Standard preparedness advised. Good time to review family emergency plan and ensure basic supplies are available.';
        }
        
        document.getElementById('recommendations').textContent = recommendations;
        document.getElementById('predictorResult').style.display = 'block';
    }, 1500);
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

function showSlide(index) {
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// Auto-rotate testimonials
setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonials.length;
    showSlide(currentSlide);
}, 5000);

// Language Selector
document.getElementById('languageButton').addEventListener('click', function() {
    document.getElementById('languageDropdown').classList.toggle('show');
});

// Close language dropdown when clicking outside
window.addEventListener('click', function(e) {
    if (!e.target.matches('.language-button') && !e.target.matches('.language-dropdown a')) {
        document.getElementById('languageDropdown').classList.remove('show');
    }
});

// Google Translate Function
function changeLanguage(lang) {
    alert('Language changed to: ' + lang);
    document.getElementById('languageDropdown').classList.remove('show');
}

// Scroll Animations
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Trigger animations on load for elements in view
window.dispatchEvent(new Event('scroll'));

// for header
// Mobile Navigation Toggle
document.getElementById('mobileMenu').addEventListener('click', function() {
    document.getElementById('mainNav').classList.toggle('show');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.getElementById('mainNav');
    const mobileMenu = document.getElementById('mobileMenu');
    if (!nav.contains(event.target) && !mobileMenu.contains(event.target)) {
        nav.classList.remove('show');
    }
});

// Set active page based on current URL
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                document.getElementById('mainNav').classList.remove('show');
            }
        });
    });
});

// try 2
// Set active page based on body ID
// document.addEventListener('DOMContentLoaded', function() {
//     const bodyId_nw = document.body.id;
//     const navLinks_nw = document.querySelectorAll('.nav-link_nw');
    
//     navLinks_nw.forEach(link_nw => {
//         const linkPage_nw = link_nw.getAttribute('data-page_nw');
//         if (bodyId_nw.includes(linkPage_nw)) {
//             link_nw.classList.add('active_nw');
//         }
//     });
    
//     // Mobile Navigation Toggle
//     document.getElementById('mobileMenu_nw').addEventListener('click', function() {
//         document.getElementById('mainNav_nw').classList.toggle('show_nw');
//     });

//     // Close mobile menu when clicking outside
//     document.addEventListener('click', function(event) {
//         const nav_nw = document.getElementById('mainNav_nw');
//         const mobileMenu_nw = document.getElementById('mobileMenu_nw');
//         if (!nav_nw.contains(event.target) && !mobileMenu_nw.contains(event.target)) {
//             nav_nw.classList.remove('show_nw');
//         }
//     });
    
   
// document.addEventListener('DOMContentLoaded', function() {
//     // Set active page
//     const currentPage = window.location.pathname.split('/').pop() || 'index.html';
//     document.querySelectorAll('.nav-link_nw').forEach(link => {
//         if (link.getAttribute('href') === currentPage) {
//             link.classList.add('active_nw');
//         }
//     });

//     // Mobile menu toggle
//     const mobileMenu = document.getElementById('mobileMenu_nw');
//     const mainNav = document.getElementById('mainNav_nw');
    
//     if (mobileMenu && mainNav) {
//         mobileMenu.addEventListener('click', function() {
//             mainNav.classList.toggle('show_nw');
//         });

//         // Close menu when clicking outside
//         document.addEventListener('click', function(event) {
//             if (!mainNav.contains(event.target) && !mobileMenu.contains(event.target)) {
//                 mainNav.classList.remove('show_nw');
//             }
//         });
//     }

//     // Smooth scrolling for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
//             const target = document.querySelector(this.getAttribute('href'));
//             if (target) {
//                 window.scrollTo({
//                     top: target.offsetTop - 80,
//                     behavior: 'smooth'
//                 });
//                 if (mainNav) mainNav.classList.remove('show_nw');
//             }
//         });
//     });
// });
// Earthquake Simulation
document.addEventListener('DOMContentLoaded', function() {
    // Create building windows
    const buildings = document.querySelectorAll('.building');
    buildings.forEach(building => {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 3; j++) {
                const window = document.createElement('div');
                window.className = 'window';
                window.style.left = `${20 + j * 30}px`;
                window.style.top = `${20 + i * 40}px`;
                building.appendChild(window);
            }
        }
    });

    // Magnitude selector
    const magnitudeOptions = document.querySelectorAll('.magnitude-option');
    magnitudeOptions.forEach(option => {
        option.addEventListener('click', function() {
            magnitudeOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Simulation button
    document.getElementById('simulateBtn').addEventListener('click', function() {
        const activeMagnitude = document.querySelector('.magnitude-option.active').dataset.magnitude;
        const buildings = document.querySelectorAll('.building');
        
        // Update result display
        document.getElementById('resultMagnitude').textContent = activeMagnitude;
        
        // Set effects based on magnitude
        let effects = {};
        if (activeMagnitude >= 8) {
            effects = {
                perception: "Violent shaking. Difficult to stand. Significant damage to buildings.",
                damage: "Severe damage to most buildings. Collapse of many structures.",
                radius: "Can cause damage hundreds of kilometers from epicenter."
            };
        } else if (activeMagnitude >= 7) {
            effects = {
                perception: "Very strong shaking. Most people frightened and run outdoors.",
                damage: "Considerable damage to ordinary buildings. Some collapse.",
                radius: "Felt over large regions. Damage in epicentral area."
            };
        } else if (activeMagnitude >= 6) {
            effects = {
                perception: "Strong shaking felt by all. Furniture moves. Some heavy objects fall.",
                damage: "Moderate damage to well-built structures. Heavy damage to poorly built.",
                radius: "Felt throughout region. Localized damage near epicenter."
            };
        } else if (activeMagnitude >= 5) {
            effects = {
                perception: "Felt by nearly everyone. Some dishes broken. Windows may crack.",
                damage: "Slight damage to well-built structures. Moderate damage to ordinary buildings.",
                radius: "Felt over area about 100 km across."
            };
        } else {
            effects = {
                perception: "Noticeable shaking of indoor items. Rattling noises.",
                damage: "None to slight damage. Some objects may fall off shelves.",
                radius: "Felt by most people in the affected area."
            };
        }
        
        document.getElementById('humanPerception').textContent = effects.perception;
        document.getElementById('potentialDamage').textContent = effects.damage;
        document.getElementById('radiusImpact').textContent = effects.radius;
        
        // Animate buildings
        buildings.forEach((building, index) => {
            building.style.animation = 'none';
            void building.offsetWidth; // Trigger reflow
            
            let intensity = 0;
            if (activeMagnitude >= 8) intensity = 15;
            else if (activeMagnitude >= 7) intensity = 10;
            else if (activeMagnitude >= 6) intensity = 7;
            else if (activeMagnitude >= 5) intensity = 4;
            else intensity = 2;
            
            // Different buildings shake differently
            const delay = index * 0.1;
            const duration = 2 + (index * 0.3);
            
            building.style.animation = `shake ${duration}s ease-out ${delay}s`;
            building.style.setProperty('--shake-intensity', `${intensity}px`);
        });
        
        // Show results
        document.getElementById('eqResult').style.display = 'block';
    });
});

// Shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(calc(-1 * var(--shake-intensity))); }
        20%, 40%, 60%, 80% { transform: translateX(var(--shake-intensity)); }
    }
    .building { transform-origin: bottom; }
`;
document.head.appendChild(style);

