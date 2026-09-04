document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Header Scroll Effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Full Screen Menu Overlay
    const hamburger = document.getElementById('hamburger');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuClose = document.getElementById('menuClose');
    const menuLinks = document.querySelectorAll('.menu-link');

    hamburger.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    menuClose.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Enable scrolling
    });

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // 3. Project Filtering (Tabs)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const projectCards = document.querySelectorAll('.project-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Show/Hide projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    // Add slight animation
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.5s ease';
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
    
    // Initialize with Ongoing projects if desired, or click 'all' if 'all' button exists
    // (Currently HTML initializes with 'ongoing' active)

    // 4. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach(element => {
            const revealTop = element.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

});
