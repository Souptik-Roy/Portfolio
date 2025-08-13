
        // Animated background particles
        function createParticles() {
            const container = document.getElementById('bgAnimation');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
                container.appendChild(particle);
            }
        }

        // Smooth scrolling for navigation links
        function initSmoothScroll() {
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
        }

        // Scroll animations
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        }

        // Navbar background on scroll
        function initNavbarScroll() {
            const navbar = document.getElementById('navbar');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                } else {
                    navbar.style.background = 'rgba(15, 23, 42, 0.8)';
                }
            });
        }

        // Form submission
        function initContactForm() {
            const form = document.getElementById('contactForm');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simulate form submission
                const btn = form.querySelector('button[type="submit"]');
                const originalText = btn.textContent;
                
                btn.textContent = 'Sending...';
                btn.disabled = true;
                
                setTimeout(() => {
                    btn.textContent = 'Message Sent!';
                    btn.style.background = 'linear-gradient(45deg, #10b981, #06d6a0)';
                    
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                        btn.style.background = '';
                        form.reset();
                    }, 2000);
                }, 1500);
            });
        }

        // Cursor trail effect
        function initCursorTrail() {
            const trail = [];
            const trailLength = 20;
            
            for (let i = 0; i < trailLength; i++) {
                const dot = document.createElement('div');
                dot.style.position = 'fixed';
                dot.style.width = '4px';
                dot.style.height = '4px';
                dot.style.background = '#06d6a0';
                dot.style.borderRadius = '50%';
                dot.style.pointerEvents = 'none';
                dot.style.zIndex = '9999';
                dot.style.opacity = (i / trailLength).toString();
                dot.style.transition = 'all 0.3s ease';
                document.body.appendChild(dot);
                trail.push(dot);
            }
            
            document.addEventListener('mousemove', (e) => {
                trail.forEach((dot, index) => {
                    setTimeout(() => {
                        dot.style.left = e.clientX + 'px';
                        dot.style.top = e.clientY + 'px';
                    }, index * 30);
                });
            });
        }

        // Initialize all features
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            initSmoothScroll();
            initScrollAnimations();
            initNavbarScroll();
            initContactForm();
            initCursorTrail();
            
            // Add some interactive hover effects
            document.querySelectorAll('.skill-card, .project-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.05)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });
    
    document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.getElementById('backToTop');

    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
            backToTop.style.opacity = '1';
        } else {
            backToTop.style.opacity = '0';
            setTimeout(() => {
                if (window.scrollY <= 300) backToTop.style.display = 'none';
            }, 300);
        }
    });

    // Smooth scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});