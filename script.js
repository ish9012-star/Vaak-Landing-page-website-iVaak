// Vaak Landing Page JavaScript

// ==================== //
// Smooth Scrolling
// ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== //
// Navbar Scroll Effect
// ==================== //
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// ==================== //
// Beta Signup Form Handler
// ==================== //
const betaForm = document.getElementById('beta-form');
const formSuccess = document.getElementById('form-success');

betaForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        platform: document.getElementById('platform').value,
        timestamp: new Date().toISOString()
    };
    
    // Disable submit button during processing
    const submitBtn = betaForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Joining...';
    
    try {
        // Option 1: Send to Google Sheets (you'll need to set this up)
        // await sendToGoogleSheets(formData);
        
        // Option 2: Send to your email via a service
        await sendToGoogleSheets(formData);
        
        // Show success message
        betaForm.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Track signup (optional - add your analytics)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'beta_signup', {
                'event_category': 'engagement',
                'event_label': formData.platform
            });
        }
        
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your signup. Please try again or email us directly at contact@vaak.app');
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    }
});


/**
 * Option 2: Send to Google Sheets via Google Apps Script
 * You'll need to create a Google Apps Script web app first
 */
async function sendToGoogleSheets(formData) {
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwkySrbC6XevzMqSuOWT516yxTcK2g6nYM8WJc2KmELvD3EDFhL0IjXUGESGXkJfzOv/exec';
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });
    
    // Note: no-cors mode doesn't return response, so we assume success
    return { success: true };
}


// ==================== //
// Intersection Observer for Animations
// ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ==================== //
// Form Validation
// ==================== //
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const platformSelect = document.getElementById('platform');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

emailInput.addEventListener('blur', () => {
    if (emailInput.value && !validateEmail(emailInput.value)) {
        emailInput.style.borderColor = '#EF4444';
    } else {
        emailInput.style.borderColor = '#F5F5F5';
    }
});

nameInput.addEventListener('blur', () => {
    if (nameInput.value.length < 2) {
        nameInput.style.borderColor = '#EF4444';
    } else {
        nameInput.style.borderColor = '#F5F5F5';
    }
});

// ==================== //
// Widget Animation (Optional enhancement)
// ==================== //
function animateWidget() {
    const widget = document.querySelector('.widget-preview');
    if (!widget) return;
    
    // Add subtle breathing animation to widget
    setInterval(() => {
        widget.style.transform = 'scale(1.02)';
        setTimeout(() => {
            widget.style.transform = 'scale(1)';
        }, 1000);
    }, 3000);
}

// Initialize widget animation after page load
window.addEventListener('load', animateWidget);

// ==================== //
// Console Easter Egg
// ==================== //
console.log('%cੴ Vaak - Sacred Wisdom for Daily Life', 'font-size: 20px; font-weight: bold; color: #D4AF37;');
console.log('%cBuilt with 🙏 for the global Sikh community', 'font-size: 14px; color: #666;');

// ==================== //
// Export functions for testing (optional)
// ==================== //
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail
    };
}
