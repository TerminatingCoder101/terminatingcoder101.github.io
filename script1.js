// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
  // Add smooth scrolling to all links
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all cards and sections for animation
  const animatedElements = document.querySelectorAll(".glass-card, .experience-card, .education-card, .award-card")

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Add hover effects for interactive elements
  const buttons = document.querySelectorAll(".btn")

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Contact button functionality
  const contactButtons = document.querySelectorAll(".btn")

  contactButtons.forEach((button) => {
    if (button.textContent.includes("Contact Me") || button.textContent.includes("infiniteocean100@gmail.com")) {
      button.addEventListener("click", () => {
        window.location.href = "mailto:infiniteocean100@gmail.com"
      })
    }
  })

  // Add parallax effect to hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroSection = document.querySelector(".hero-section")

    if (heroSection) {
      const rate = scrolled * -0.5
      heroSection.style.transform = `translateY(${rate}px)`
    }
  })

  // Add typing effect to hero title (optional enhancement)
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const text = heroTitle.textContent
    heroTitle.textContent = ""

    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }

    // Start typing effect after a short delay
    setTimeout(typeWriter, 500)
  }
})

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("keyboard-navigation")
  }
})

document.addEventListener("mousedown", () => {
  document.body.classList.remove("keyboard-navigation")
})

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply debouncing to scroll-heavy operations
const debouncedScrollHandler = debounce(() => {
  // Any scroll-heavy operations can go here
}, 16) // ~60fps

window.addEventListener("scroll", debouncedScrollHandler)
