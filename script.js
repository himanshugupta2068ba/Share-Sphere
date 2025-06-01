// Navigation scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#fff';
        nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = 'transparent';
        nav.style.boxShadow = 'none';
    }
});

// Login button functionality
const loginBtn = document.querySelector('.login-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
}

// Profile dropdown functionality
const profileIcon = document.querySelector('.profile-icon');
const profileDropdown = document.querySelector('.profile-dropdown');

if (profileIcon) {
    profileIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        profileDropdown.classList.toggle('active');
    });
}

document.addEventListener('click', function() {
    if (profileDropdown.classList.contains('active')) {
        profileDropdown.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
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

// Add fade-in effect for sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Login form functionality
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    // Here you would typically send this data to a server
    console.log('Login attempt:', { email, remember });

    // Show success message
    alert('Login successful! Redirecting...');
    
    // Redirect to home page
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
});

// CTA buttons functionality
const donateBtn = document.querySelector('.primary-btn');
const requestBtn = document.querySelector('.secondary-btn');

if (donateBtn) {
    donateBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'donate.html';
    });
}

if (requestBtn) {
    requestBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'request.html';
    });
}

// Feature card hover animations
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
        this.style.transition = 'transform 0.3s ease-out';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.transition = 'transform 0.3s ease-out';
    });
});

// Category card hover animations
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease-out';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.transition = 'transform 0.3s ease-out';
    });
});

// Form validation and animations
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }
    });
    
    return isValid;
}

// Add event listeners for form submissions
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
            }
        });
    });

    // Donation Form Handler
    document.getElementById('donationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add loading animation
        const submitBtn = this.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Reset form and button after submission
            this.reset();
            submitBtn.innerHTML = 'Submit Donation';
            submitBtn.disabled = false;
            
            // Show success message with animation
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.innerHTML = '<i class="fas fa-check-circle"></i> Thank you for your donation! Our team will contact you shortly.';
            this.parentNode.insertBefore(successMsg, this);
            
            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        }, 1000);
    });

    // Request Form Handler
    document.getElementById('requestForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add loading animation
        const submitBtn = this.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Reset form and button after submission
            this.reset();
            submitBtn.innerHTML = 'Submit Request';
            submitBtn.disabled = false;
            
            // Show success message with animation
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.innerHTML = '<i class="fas fa-check-circle"></i> Thank you for your request! Our team will contact you shortly.';
            this.parentNode.insertBefore(successMsg, this);
            
            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        }, 1000);
    });
});
