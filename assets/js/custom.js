// toggleMenu
if (document.getElementById("sideMenu")) {
  function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("open");
  }
}

// toggleAside
if (document.getElementById("asideMenu")) {
  function toggleAside() {
    document.getElementById("asideMenu").classList.toggle("open");
  }
}

// toggleSearch
if (document.getElementById("searchOverlay")) {
  function toggleSearch() {
    const searchOverlay = document.getElementById("searchOverlay");
    searchOverlay.classList.toggle("open");
    document.body.classList.toggle("overflow-hidden");

    if (searchOverlay.classList.contains("open")) {
      searchOverlay.classList.add("animate-slideDown");
    } else {
      searchOverlay.classList.remove("animate-slideDown");
    }
  }
}

// videoModal
if (document.getElementById("videoModal")) {
  document
    .getElementById("openVideoModal")
    .addEventListener("click", function () {
      document.getElementById("videoModal").classList.remove("hidden");
      document.getElementById("videoModal").classList.add("flex");
    });

  document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("videoModal").classList.add("hidden");
    document.getElementById("videoModal").classList.remove("flex");
  });
}

// dropdown
if (document.querySelector(".dropdown-menu")) {
  document.addEventListener("DOMContentLoaded", function () {
    const pagesLink = document.getElementById("pagesLink");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (pagesLink) {
      pagesLink.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("open");
      });
    }

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".dropdown")) {
        dropdownMenu.classList.remove("open");
      }
    });

    const asideDropdownLink = document.querySelector(".aside-dropdown > a");
    const asideDropdownMenu = document.querySelector(
      ".aside-dropdown .dropdown-menu"
    );

    if (asideDropdownLink) {
      asideDropdownLink.addEventListener("click", function (event) {
        event.preventDefault();
        asideDropdownMenu.classList.toggle("open");
      });
    }

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".aside-dropdown")) {
        asideDropdownMenu.classList.remove("open");
      }
    });
  });
}

// accordain
if (document.querySelectorAll(".accordion-header")) {
  document.querySelectorAll(".accordion-header").forEach((button, index) => {
    const accordionContent = button.nextElementSibling;
    if (index === 0) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      accordionContent.classList.add("open");
      button.querySelector("i").classList.replace("fa-plus", "fa-minus");
    }

    button.addEventListener("click", () => {
      document.querySelectorAll(".accordion-header").forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.classList.remove("active");
          otherButton.nextElementSibling.style.maxHeight = null;
          otherButton.nextElementSibling.classList.remove("open");
          otherButton
            .querySelector("i")
            .classList.replace("fa-minus", "fa-plus");
        }
      });

      button.classList.toggle("active");
      if (button.classList.contains("active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        accordionContent.classList.add("open");
      } else {
        accordionContent.style.maxHeight = null;
        accordionContent.classList.remove("open");
      }

      const icon = button.querySelector("i");
      if (button.classList.contains("active")) {
        icon.classList.replace("fa-plus", "fa-minus");
      } else {
        icon.classList.replace("fa-minus", "fa-plus");
      }
    });
  });
}

// footer_Modal
if (document.querySelector("footer form")) {
  document
    .querySelector("footer form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const modal = document.getElementById("footerModal");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }, 5000);
      this.reset();
    });

  document
    .getElementById("closeFooterModal")
    .addEventListener("click", function () {
      const modal = document.getElementById("footerModal");
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
}

// contact_Modal
if (document.querySelector("#contactForm")) {
  document
    .querySelector("#contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const modal = document.getElementById("contactModal");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }, 5000);
      this.reset();
    });

  document
    .getElementById("closeContactModal")
    .addEventListener("click", function () {
      const modal = document.getElementById("contactModal");
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
}

//counter_Timer
if (document.querySelector(".bg-comingSoonBg")) {
  function startCountdown() {
    const countdownElements = {
      days: document.getElementById("days"),
      hours: document.getElementById("hours"),
      minutes: document.getElementById("minutes"),
      seconds: document.getElementById("seconds"),
    };

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        targetDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElements.days.textContent = String(days).padStart(2, "0");
      countdownElements.hours.textContent = String(hours).padStart(2, "0");
      countdownElements.minutes.textContent = String(minutes).padStart(2, "0");
      countdownElements.seconds.textContent = String(seconds).padStart(2, "0");
    }

    let targetDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
    setInterval(updateCountdown, 1000);
  }
  startCountdown();
}

//number_animation
function animateNumbers(num, finalValue, duration) {
  let start = null;
  const finalValueStr = num.getAttribute("data-final-value");
  const charCount = finalValueStr.length;
  num.style.display = "inline-block";
  num.style.width = `${charCount}ch`;
  const numberFormatter = new Intl.NumberFormat("en-US");
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    num.textContent = numberFormatter.format(Math.floor(progress * finalValue));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      num.style.display = "inline";
    }
  }
  window.requestAnimationFrame(step);
}
function animateWidth(element, finalWidth, duration) {
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    element.style.width = `${progress * finalWidth}%`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}
function startNumberAnimation() {
  const numbers = document.querySelectorAll(".number");
  const progressBars = document.querySelectorAll("[data-final-width]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const numberElement = entry.target.querySelector(".number");
          if (numberElement) {
            const finalValue = parseInt(
              numberElement.getAttribute("data-final-value")
            );
            animateNumbers(numberElement, finalValue, 2000);
          }
          const progressBar = entry.target.querySelector("[data-final-width]");
          if (progressBar) {
            const finalWidth = parseInt(
              progressBar.getAttribute("data-final-width")
            );
            animateWidth(progressBar, finalWidth, 2000);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  numbers.forEach((num) => observer.observe(num.parentElement.parentElement));
  progressBars.forEach((bar) => observer.observe(bar.parentElement));
}
startNumberAnimation();
window.addEventListener("load", startNumberAnimation);
