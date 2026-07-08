// StudyLeap Overseas - Main JS File

document.addEventListener("DOMContentLoaded", function() {
  // 1. Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up, .fade-in-up, .fade-up-enter').forEach((el) => {
    animationObserver.observe(el);
  });

  // Also support fade-up-enter for contact page transitions
  const transitionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up-enter-active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up-enter').forEach((el) => {
    transitionObserver.observe(el);
  });

  // 2. Sticky Navbar scroll effect
  const header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 20) {
        header.classList.add("shadow-md", "bg-white/95");
        header.classList.remove("shadow-sm", "bg-white/80");
      } else {
        header.classList.remove("shadow-md", "bg-white/95");
        header.classList.add("shadow-sm", "bg-white/80");
      }
    });
  }

  // 3. Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", function() {
      mobileMenu.classList.toggle("hidden");
      const icon = mobileMenuToggle.querySelector("span");
      if (icon) {
        icon.textContent = mobileMenu.classList.contains("hidden") ? "menu" : "close";
      }
    });
  }

  // 4. Contact Form Submission Toast Handler
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Basic validations
      const nameInput = document.getElementById("fullName") || document.getElementById("full-name");
      const emailInput = document.getElementById("email");
      
      const name = nameInput?.value;
      const email = emailInput?.value;
      
      if (!name || !email) return;

      // Show toast
      showToast("Thank you! Your consultation request has been submitted. Our experts will call you within 24 hours.");
      
      // Reset form
      contactForm.reset();
    });
  }
});

// Toast notification helper
function showToast(message) {
  // Remove existing toast if any
  const existingToast = document.querySelector(".toast");
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast element
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="material-symbols-outlined">check_circle</span>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Hide after 4 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 4500);
}
