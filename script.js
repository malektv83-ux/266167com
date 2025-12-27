document.addEventListener('DOMContentLoaded', function() {
    // Referral code and link
    const REFERRAL_CODE = '26021839';
    const REFERRAL_LINK = `https://www.okx.com/join/${REFERRAL_CODE}`;
    
    // Device detection for optimizations
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Add mobile class to body if on mobile device
    if (isMobile) {
        document.body.classList.add('mobile-device');
    }
    
    // Handle CTA buttons - redirect to OKX with referral code
    const heroCta = document.getElementById('heroBtn');
    const footerCta = document.getElementById('footerBtn');
    
    function redirectToOKX() {
        window.open(REFERRAL_LINK, '_blank');
    }
    
    heroCta.addEventListener('click', redirectToOKX);
    footerCta.addEventListener('click', redirectToOKX);
    
    // Copy referral code functionality
    const copyBtn = document.getElementById('copyBtn');
    
    copyBtn.addEventListener('click', function() {
        // Create a temporary input element
        const tempInput = document.createElement('input');
        tempInput.value = REFERRAL_CODE;
        document.body.appendChild(tempInput);
        
        // Select and copy the text
        tempInput.select();
        document.execCommand('copy');
        
        // Remove the temporary input
        document.body.removeChild(tempInput);
        
        // Update button text temporarily to show feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        
        setTimeout(function() {
            copyBtn.textContent = originalText;
        }, 2000);
    });
    
    // Improve button touch response on mobile
    if (isMobile) {
        const allButtons = document.querySelectorAll('button');
        allButtons.forEach(button => {
            button.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            button.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
            });
        });
    }
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Toggle active class on clicked item
            item.classList.toggle('active');
            
            // Update toggle icon
            const toggleIcon = question.querySelector('.toggle-icon');
            toggleIcon.textContent = item.classList.contains('active') ? '−' : '+';
            
            // Close other open FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.toggle-icon').textContent = '+';
                }
            });
        });
    });
    
    // YouTube video lazy loading
    const videoSection = document.querySelector('.youtube-video');
    const videoFrame = document.querySelector('.video-container iframe');
    
    // Store the original src
    const videoSrc = videoFrame.src;
    videoFrame.removeAttribute('src');
    
    // Load video when scrolled near
    const videoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                videoFrame.setAttribute('src', videoSrc);
                videoObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.25
    });
    
    if (videoSection) {
        videoObserver.observe(videoSection);
    }
    
    // Add some animation when scrolling
    const observerOptions = {
        threshold: 0.25
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Add animation classes
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .fade-in {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .in-view {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Mobile touch states */
            .touch-active {
                opacity: 0.8;
                transform: scale(0.98);
            }
            
            /* Optimize animations for mobile */
            .mobile-device .fade-in {
                transition: opacity 0.4s ease, transform 0.4s ease;
            }
            
            /* Language switch styles */
            .language-switch {
                margin-top: 15px;
                font-size: 0.9rem;
            }
            
            .language-switch a {
                color: white;
                text-decoration: underline;
            }
            
            .current-lang {
                font-weight: bold;
            }
        </style>
    `);
    
    // Handle fixed footer spacing
    const footerHeight = document.querySelector('.sticky-footer').offsetHeight;
    document.body.style.paddingBottom = footerHeight + 'px';
    
    // Update the footer padding when window resizes
    window.addEventListener('resize', function() {
        const footerHeight = document.querySelector('.sticky-footer').offsetHeight;
        document.body.style.paddingBottom = footerHeight + 'px';
        
        // Check orientation change for mobile devices
        updateLayoutForOrientation();
    });
    
    // Handle orientation changes on mobile
    function updateLayoutForOrientation() {
        if (isMobile && window.innerHeight < 500) {
            // In landscape on a small device - make footer static
            document.querySelector('.sticky-footer').classList.add('static-footer');
            document.body.style.paddingBottom = '0';
        } else {
            // Remove static footer class
            document.querySelector('.sticky-footer').classList.remove('static-footer');
            const footerHeight = document.querySelector('.sticky-footer').offsetHeight;
            document.body.style.paddingBottom = footerHeight + 'px';
        }
    }
    
    // Initialize layout for current orientation
    updateLayoutForOrientation();
    
    // Prevent zooming on double tap for mobile
    if (isMobile) {
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function(event) {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }
}); 