 // Mobile Menu Toggle
      const menuToggle = document.querySelector('.mobile-menu-toggle');
      const menuBtn = document.querySelector('.menu-btn');
      
      menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        menuBtn.classList.toggle('active');
        menuToggle.classList.toggle('active');
      });

      // Close menu when clicking a link
      document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
          menuToggle.setAttribute('aria-expanded', 'false');
          menuBtn.classList.remove('active');
          menuToggle.classList.remove('active');
        });
      });

      // Scroll Reveal Animation
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

      // Observe elements for reveal animation
      document.querySelectorAll('.service-card, .skill-card, .aboutme, .contact-form, .social-links').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
      });

      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

      // Theme Toggle
      const themeToggle = document.getElementById('theme-toggle');
      const savedTheme = localStorage.getItem('theme') || 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
      
      themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
      });
