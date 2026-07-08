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

  document.querySelectorAll('.fade-up, .fade-in-up, .fade-up-enter, .animate-enter').forEach((el) => {
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


  // 5. Hero Carousel & Text Animation
  const bgSlides = document.querySelectorAll(".hero-bg-slide");
  const hTitle = document.getElementById("hero-title");
  const hSubtitle = document.getElementById("hero-subtitle");
  
  const carouselContent = [
    {
      title: 'Fly High with <br/><span class="text-[#0ea5e9]">StudyLeap Overseas</span>',
      subtitle: 'Your Trusted Visa &amp; Immigration Partner for Top Canadian Colleges.'
    },
    {
      title: 'Achieve Your <br/><span class="text-[#f97316]">USA Dream</span>',
      subtitle: 'Seamless F-1 Student Visas &amp; University Admissions in the United States.'
    },
    {
      title: 'Study &amp; Work <br/><span class="text-[#f97316]">in Australia</span>',
      subtitle: 'Fast-Track subclass 500 Student Visas for Australian Universities.'
    },
    {
      title: 'Take Off to Your <br/><span class="text-[#0ea5e9]">Dream Destination</span>',
      subtitle: 'Hassle-free Tourist &amp; Visitor Visa processing for destinations worldwide.'
    },
    {
      title: 'Join Thousands of <br/><span class="text-[#0ea5e9]">Successful Students</span>',
      subtitle: 'Expert counseling to secure admissions and visas at top-tier universities.'
    }
  ];

  let currentHeroSlide = 0;
  
  function advanceHeroSlide() {
    if (bgSlides.length === 0) return;
    
    // Hide current bg slide
    bgSlides[currentHeroSlide].classList.replace("opacity-100", "opacity-0");
    
    // Increment slide
    currentHeroSlide = (currentHeroSlide + 1) % bgSlides.length;
    
    // Show next bg slide
    bgSlides[currentHeroSlide].classList.replace("opacity-0", "opacity-100");
    
    // Animate text transition
    const textContainer = document.querySelector(".hero-text-container");
    if (textContainer && hTitle && hSubtitle) {
      textContainer.style.opacity = "0";
      textContainer.style.transform = "translateY(12px)";
      textContainer.style.transition = "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
      
      setTimeout(() => {
        hTitle.innerHTML = carouselContent[currentHeroSlide].title;
        hSubtitle.innerHTML = carouselContent[currentHeroSlide].subtitle;
        textContainer.style.opacity = "1";
        textContainer.style.transform = "translateY(0)";
      }, 300);
    }
  }

  if (bgSlides.length > 0) {
    setInterval(advanceHeroSlide, 4500); // Change slide every 6 seconds
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
