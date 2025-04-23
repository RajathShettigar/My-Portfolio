// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Active link highlighting
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href").substring(1) === current) {
        item.classList.add("active");
      }
    });
  });

  // Back to top button
  const backToTopButton = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("active");
    } else {
      backToTopButton.classList.remove("active");
    }
  });

  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll(".progress");

  const animateSkillBars = () => {
    skillBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  };

  // Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("skills-category")) {
            animateSkillBars();
          }
          entry.target.classList.add("fade-in");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe elements for animation
  document
    .querySelectorAll(
      ".skill-card, .project-card, .achievement-card, .timeline-item, .skills-category"
    )
    .forEach((item) => {
      observer.observe(item);
    });

  // Form submission handling
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Here you would typically send the form data to a server
      // For now, we'll just log it and show a success message
      console.log("Form submitted:", { name, email, subject, message });

      // Show success message (in a real application, you'd want to handle this better)
      alert("Thank you for your message! I will get back to you soon.");

      // Reset form
      contactForm.reset();
    });
  }

  // Typing effect for the header title (optional enhancement)
  const title = document.querySelector(".title");
  if (title) {
    const text = title.textContent;
    title.textContent = "";

    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }

    // Start typing effect after a delay
    setTimeout(typeWriter, 1500);
  }
});
