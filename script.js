  // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
      const icon = mobileMenuButton.querySelector('i');
      if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        icon.setAttribute('data-lucide', 'x');
        lucide.createIcons();
      } else {
        mobileMenu.classList.add('hidden');
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
      }
    });

    // Smooth scrolling for navigation
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;

      const fullName = `${firstName} ${lastName}`.trim();
      const subject = fullName || 'Contact Request';
      const body = `Name: ${fullName}\nEmail: ${email}\nPhone Number: ${phone}\n\nMessage: ${message}`;

      const mailtoLink = `mailto:gopalakrishnagorle@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);

      // Reset form
      contactForm.reset();

      // Show success message (you could implement a proper notification here)
      alert('Thank you for your message! You will now be redirected to your email client.');
    });

    // Language selector functionality
    const languageSelector = document.getElementById('language-selector');
    const mobileLanguageSelector = document.getElementById('mobile-language-selector');

    if (languageSelector && mobileLanguageSelector) {
      languageSelector.addEventListener('change', function () {
        // In a real implementation, this would change the language
        alert('Language changed to: ' + this.value);
        mobileLanguageSelector.value = this.value;
      });

      mobileLanguageSelector.addEventListener('change', function () {
        // In a real implementation, this would change the language
        alert('Language changed to: ' + this.value);
        languageSelector.value = this.value;
      });
    }

    // Sticky navigation
    const navigation = document.getElementById('navigation');
    const navHeight = navigation.offsetHeight;

    window.addEventListener('scroll', function () {
      if (window.scrollY > navHeight) {
        navigation.classList.add('shadow-lg');
      } else {
        navigation.classList.remove('shadow-lg');
      }
    });