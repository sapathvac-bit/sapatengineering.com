/* ========================================
   SAPATENGINEERING — Light Version
   main.js: All interactions
   ======================================== */

/* ---- Header: transparent → solid on scroll ---- */
function initHeader() {
  const hdr = document.getElementById("site-header");
  if (!hdr) return;

  const update = () => {
    if (window.scrollY > 72) {
      hdr.classList.remove("transparent");
      hdr.classList.add("scrolled");
    } else {
      hdr.classList.add("transparent");
      hdr.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ---- Mobile nav ---- */
function initMobileNav() {
  const burger = document.getElementById("nav-burger");
  const nav = document.getElementById("mob-nav");
  if (!burger || !nav) return;

  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

/* ---- Scroll reveal ---- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  els.forEach((el) => obs.observe(el));
}

/* ---- FAQ accordion ---- */
function initFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", () => {
      const was = item.classList.contains("active");
      document
        .querySelectorAll(".faq-item")
        .forEach((i) => i.classList.remove("active"));
      if (!was) item.classList.add("active");
    });
  });
}

/* ---- Popup ---- */
function initPopup() {
  const overlay = document.getElementById("popup-overlay");
  const openBtns = document.querySelectorAll("[data-popup]");
  if (!overlay) return;

  const open = () => {
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  };

  openBtns.forEach((b) => b.addEventListener("click", open));

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  // Close button rendered by components.js
  document.addEventListener("click", (e) => {
    if (e.target.closest("#popup-close")) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

/* ---- Web3Forms handler (generic) ---- */
async function submitForm(form, successEl, btn, btnLabel) {
  // Проверка обязательных полей перед отправкой
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  btn.disabled = true;
  btn.textContent = "Sending…";

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(form),
    });
    const json = await res.json();

    if (json.success) {
      form.style.display = "none";
      if (successEl) successEl.style.display = "block";
    } else {
      alert("Something went wrong. Please try again or contact us directly.");
      btn.disabled = false;
      btn.textContent = btnLabel;
    }
  } catch {
    alert("Network error. Please check your connection and try again.");
    btn.disabled = false;
    btn.textContent = btnLabel;
  }
}

/* ---- Contact form ---- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitForm(
      form,
      document.getElementById("form-success"),
      form.querySelector('[type="submit"]'),
      "Send Message",
    );
  });
}

/* ---- Popup form ---- */
function initPopupForm() {
  document.addEventListener("submit", (e) => {
    if (!e.target.matches("#popup-form")) return;
    e.preventDefault();
    submitForm(
      e.target,
      document.getElementById("popup-success"),
      e.target.querySelector('[type="submit"]'),
      "Submit Request",
    );
  });
}

/* ---- Smooth scroll ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 88,
        behavior: "smooth",
      });
    });
  });
}

/* ---- Active nav item ---- */
function initActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll(".nav-links a, .mob-nav a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (
      href !== "/" &&
      href !== "/index.html" &&
      href.length > 1 &&
      path.includes(href.replace(/.*\//, "").replace(".html", ""))
    ) {
      link.style.color = "var(--c-green)";
    }
  });
}

/* ---- Image loading: graceful fallback ---- */
function initImages() {
  document.querySelectorAll("img[data-src]").forEach((img) => {
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
  });
}

/* ---- Init ---- */
document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMobileNav();
  initReveal();
  initFaq();
  initPopup();
  initContactForm();
  initPopupForm();
  initSmoothScroll();
  initActiveNav();
  initImages();
});
