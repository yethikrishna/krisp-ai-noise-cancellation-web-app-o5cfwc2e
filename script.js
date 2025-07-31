// 🚀 EON+ AI Meet Assistant - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles background
    initParticles();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize demo toggles
    initDemoToggles();
    
    // Initialize audio visualizer
    initAudioVisualizer();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize intersection observer for animations
    initScrollAnimations();
});

// Particles.js initialization
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#6366f1'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#6366f1',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (mobileMenuBtn.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });
    }
}

// Demo toggle functionality
function initDemoToggles() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const noiseLevel = document.getElementById('noiseLevel');
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            toggleBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update noise level based on selection
            const mode = this.getAttribute('data-mode');
            if (noiseLevel) {
                if (mode === 'with') {
                    noiseLevel.textContent = '95%';
                    updateAudioBars('clean');
                } else {
                    noiseLevel.textContent = '25%';
                    updateAudioBars('noisy');
                }
            }
        });
    });
}

// Audio visualizer functionality
function initAudioVisualizer() {
    const audioBars = document.querySelectorAll('.audio-bars .bar');
    
    // Animate audio bars
    setInterval(() => {
        audioBars.forEach(bar => {
            const height = Math.random() * 60 + 20;
            bar.style.height = height + 'px';
        });
    }, 200);
}

// Update audio bars based on mode
function updateAudioBars(mode) {
    const audioBars = document.querySelectorAll('.audio-bars .bar');
    
    audioBars.forEach(bar => {
        if (mode === 'clean') {
            bar.style.background = 'linear-gradient(135deg, #10b981 0%, #34d399 100%)';
        } else {
            bar.style.background = 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)';
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^=\"#\"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .testimonial-card, .comparison-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Newsletter form submission
document.addEventListener('submit', function(e) {
    if (e.target.classList.contains('newsletter-form')) {
        e.preventDefault();
        
        const email = e.target.querySelector('.newsletter-input').value;
        const btn = e.target.querySelector('.newsletter-btn');
        
        if (email) {
            // Simulate form submission
            btn.innerHTML = '<i class=\"fas fa-check\"></i> Subscribed!';
            btn.style.background = 'linear-gradient(135deg, #10b981 0%, #34d399 100%)';
            
            setTimeout(() => {
                btn.innerHTML = '<i class=\"fas fa-paper-plane\"></i> Subscribe';
                btn.style.background = '';
                e.target.querySelector('.newsletter-input').value = '';
            }, 3000);
        }
    }
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-menu.active {
        display: flex;
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: rgba(26, 26, 46, 0.95);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        z-index: 999;
    }
    
    .nav-menu.active .nav-dropdown {
        margin-bottom: 16px;
    }
    
    .nav-menu.active .dropdown-content {
        position: static;
        opacity: 1;
        visibility: visible;
        transform: none;
        margin-top: 8px;
        box-shadow: none;
        border: none;
        background: rgba(255, 255, 255, 0.05);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
    }
`;
document.head.appendChild(style);

// Add particles.js script if not already loaded
if (typeof particlesJS === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.onload = initParticles;
    document.head.appendChild(script);
}

// Add GSAP animations for enhanced effects
if (typeof gsap !== 'undefined') {
    // Hero title animation
    gsap.from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.2
    });
    
    // Hero description animation
    gsap.from('.hero-description', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.4
    });
    
    // Hero buttons animation
    gsap.from('.hero-actions .btn', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.6,
        stagger: 0.1
    });
    
    // Stats animation
    gsap.from('.stat', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.8,
        stagger: 0.1
    });
    
    // Demo card animation
    gsap.from('.demo-card', {
        duration: 1,
        x: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 1
    });
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add loading styles
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        body:not(.loaded) {
            overflow: hidden;
        }
        
        body:not(.loaded)::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        body:not(.loaded)::after {
            content: 'EON+';
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            font-weight: 800;
            color: white;
            z-index: 10000;
            animation: pulse 2s ease-in-out infinite;
        }
        
        body.loaded::before,
        body.loaded::after {
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease;
        }
    `;
    document.head.appendChild(loadingStyle);
});

console.log('🚀 EON+ AI Meet Assistant loaded successfully!');