// okaykayo - dreamy website interactions

document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeNavigation();
    initializeSubscriptionForm();
    initializeMagicalEffects();
});

// Smooth page transitions
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .logo a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href && this.href.includes('.html')) {
                e.preventDefault();
                
                // Add fade out effect
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s ease-out';
                
                // Navigate after fade
                setTimeout(() => {
                    window.location.href = this.href;
                }, 300);
            }
        });
    });
    
    // Fade in on page load
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease-in';
    });
}

// Enhanced floating animations
function initializeAnimations() {
    const flowers = document.querySelectorAll('.flower');
    const butterflies = document.querySelectorAll('.butterfly');
    
    // Add random movement to floating elements
    [...flowers, ...butterflies].forEach(element => {
        const randomDelay = Math.random() * 2;
        const randomDuration = 6 + Math.random() * 4;
        
        element.style.animationDelay = `${randomDelay}s`;
        element.style.animationDuration = `${randomDuration}s`;
        
        // Add subtle parallax effect on mouse move
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 10;
            const y = (e.clientY / window.innerHeight) * 10;
            
            element.style.transform += ` translate(${x}px, ${y}px)`;
        });
    });
    
    // Add hover animations to interactive elements
    const interactiveElements = document.querySelectorAll('.platform-link, .social-link, .support-link, .video-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-5px)';
            this.style.boxShadow = '0 10px 30px rgba(255, 182, 193, 0.4)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
}

// Subscription form handling
function initializeSubscriptionForm() {
    const subscribeForm = document.getElementById('subscribeForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Simple validation
            if (name && email) {
                // Hide form with animation
                this.style.transform = 'scale(0.9)';
                this.style.opacity = '0';
                this.style.transition = 'all 0.5s ease-out';
                
                setTimeout(() => {
                    this.style.display = 'none';
                    
                    // Show confirmation with butterfly animation
                    confirmationMessage.style.display = 'block';
                    confirmationMessage.style.opacity = '0';
                    confirmationMessage.style.transform = 'translateY(20px)';
                    confirmationMessage.style.transition = 'all 0.5s ease-out';
                    
                    setTimeout(() => {
                        confirmationMessage.style.opacity = '1';
                        confirmationMessage.style.transform = 'translateY(0)';
                        
                        // Animate butterflies
                        animateSuccessButterflies();
                    }, 100);
                }, 500);
                
                // In a real implementation, you would send this data to your email service
                console.log('Subscription data:', { name, email });
            }
        });
    }
}

// Success butterfly animation
function animateSuccessButterflies() {
    const butterflies = document.querySelectorAll('.butterfly-fly');
    
    butterflies.forEach((butterfly, index) => {
        setTimeout(() => {
            butterfly.style.animation = 'fly 1s ease-in-out infinite, flyAcross 3s ease-in-out forwards';
        }, index * 500);
    });
}

// Magical effects and interactions
function initializeMagicalEffects() {
    // Add sparkle effect on click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-link') || 
            e.target.classList.contains('platform-link') ||
            e.target.classList.contains('social-link') ||
            e.target.classList.contains('support-link')) {
            
            createSparkleEffect(e.target);
        }
    });
    
    // Add gentle glow to logo on hover
    const logo = document.querySelector('.logo a');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 30px rgba(255, 182, 193, 0.9), 0 0 60px rgba(184, 198, 219, 0.6)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.textShadow = '0 0 20px rgba(255, 182, 193, 0.6)';
        });
    }
    
    // Video play button interactions
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add pulse animation
            this.style.animation = 'pulse 0.3s ease-out';
            
            // In a real implementation, this would open a video modal or navigate to video
            console.log('Play video clicked');
            
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    });
    
    // Add typing effect to tagline on homepage
    const tagline = document.querySelector('.tagline');
    if (tagline && window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const text = tagline.textContent;
        tagline.textContent = '';
        tagline.style.borderRight = '2px solid rgba(255, 182, 193, 0.8)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor after typing
                setTimeout(() => {
                    tagline.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
}

// Create sparkle effect
function createSparkleEffect(element) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.fontSize = '1.5rem';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    sparkle.style.zIndex = '1000';
    
    const rect = element.getBoundingClientRect();
    sparkle.style.left = (rect.left + rect.width / 2) + 'px';
    sparkle.style.top = (rect.top + rect.height / 2) + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
    
    @keyframes flyAcross {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Performance optimization: Throttle scroll and mouse events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to mouse move events for performance
const originalMouseMove = document.addEventListener;
document.addEventListener = function(type, listener, options) {
    if (type === 'mousemove') {
        listener = throttle(listener, 16); // ~60fps
    }
    return originalMouseMove.call(this, type, listener, options);
};