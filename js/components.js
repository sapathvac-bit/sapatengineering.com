/* ========================================
   SAPATENGINEERING — Light Version
   components.js: Header, Footer, Popup, Floats
   ======================================== */

/* ---- Google Tag Manager ---- */
function initGTM() {
  // Фрагмент 1 — в head
  const script = document.createElement("script");
  script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-K2QDHD9Q');`;
  document.head.appendChild(script);

  // Фрагмент 2 — noscript после body
  const noscript = document.createElement("noscript");
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K2QDHD9Q"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  document.body.insertBefore(noscript, document.body.firstChild);

  // Google Ads Tag — AW-18171748614
  const adsScript = document.createElement("script");
  adsScript.async = true;
  adsScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-18171748614";
  document.head.appendChild(adsScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", "AW-18171748614");
}

// Вызвать сразу
initGTM();

function getBase() {
  const depth = (window.location.pathname.match(/\//g) || []).length - 1;
  return depth <= 0 ? "." : Array(depth).fill("..").join("/");
}

/* ---- HEADER ---- */
function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;

  const B = getBase();

  el.classList.add("transparent");

  el.innerHTML = `
    <nav class="nav-wrap">
      <a href="${B}/index.html" class="nav-logo" aria-label="SapatEngineering Home">
      <img src="${B}/icon.webp" class="logo" alt="Sapat Engineering logo" width="50" height="50" loading="lazy" onerror="this.style.display='none'">
      <div class="logo-name-tag">
        <span class="logo-name">Sapat Engineering</span>
        <span class="logo-tag">HVAC &amp; Ventilation · Dubai</span>
        </div>
      </a>

      <ul class="nav-links" role="navigation" aria-label="Main navigation">
        <li><a href="${B}/index.html#about">About</a></li>
        <li class="nav-drop">
          <a href="${B}/index.html#services">Services</a>
          <ul class="drop-menu">
            <li><a href="${B}/pages/services/ventilation.html">Ventilation Systems</a></li>
            <li><a href="${B}/pages/services/hvac.html">HVAC Engineering</a></li>
            <li><a href="${B}/pages/services/air-conditioning.html">Air Conditioning</a></li>
            <li><a href="${B}/pages/services/vrv-systems.html">VRV / VRF Systems</a></li>
            <li><a href="${B}/pages/services/dehumidification.html">Dehumidification</a></li>
            <li><a href="${B}/pages/services/smoke-extraction.html">Smoke Extraction</a></li>
            <li><a href="${B}/pages/services/plumbing.html">Plumbing</a></li>
            <li><a href="${B}/pages/services/heating.html">Heating Systems</a></li>
          </ul>
        </li>
        <li><a href="${B}/index.html#works">Projects</a></li>
        <li><a href="${B}/index.html#faq">FAQ</a></li>
        <li><a href="${B}/pages/about/index.html">Company</a></li>
        <li><a href="${B}/index.html#contact">Contact</a></li>
      </ul>

      <a href="${B}/index.html#contact" class="head_quote btn btn-green nav-cta">Get a Quote</a>

      <button class="nav-burger" id="nav-burger" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <nav class="mob-nav" id="mob-nav" aria-label="Mobile navigation">
      <a href="${B}/index.html">Home</a>
      <a href="${B}/index.html#about">About Us</a>
      <span class="mob-cat">Services</span>
      <a href="${B}/pages/services/ventilation.html" class="mob-sub">Ventilation Systems</a>
      <a href="${B}/pages/services/hvac.html" class="mob-sub">HVAC Engineering</a>
      <a href="${B}/pages/services/air-conditioning.html" class="mob-sub">Air Conditioning</a>
      <a href="${B}/pages/services/vrv-systems.html" class="mob-sub">VRV Systems</a>
      <a href="${B}/pages/services/dehumidification.html" class="mob-sub">Dehumidification</a>
      <a href="${B}/pages/services/smoke-extraction.html" class="mob-sub">Smoke Extraction</a>
      <a href="${B}/pages/services/plumbing.html" class="mob-sub">Plumbing</a>
      <a href="${B}/pages/services/heating.html" class="mob-sub">Heating Systems</a>
      <a href="${B}/index.html#works">Our Projects</a>
      <a href="${B}/index.html#faq">FAQ</a>
      <a href="${B}/pages/about/index.html">Company</a>
      <a href="${B}/index.html#contact">Contact</a>
      <a href="${B}/index.html#contact" class="btn btn-green" style="margin-top:1rem;justify-content:center;">Get a Free Quote</a>
    </nav>
  `;
}

/* ---- FOOTER ---- */
function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const B = getBase();

  el.innerHTML = `
    <div class="footer-img-strip">
      <img
        src="${B}/images/footer-cityscape.jpg"
        alt="Dubai skyline"
        width="1440"
        height="200"
        loading="lazy"
        onerror="this.style.display='none'"
      >
      <div class="footer-img-strip-overlay"></div>
    </div>

    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <div class="foot-brand">
            <div class="logo-name">Sapat Engineering</div>
            <div class="logo-tag">HVAC &amp; Ventilation · Dubai, UAE</div>
            <p>Professional HVAC engineering, ventilation design, and climate solutions for residential, commercial, and industrial projects across Dubai and the UAE.</p>
          </div>

          <div class="foot-col">
            <h5>Services</h5>
            <ul>
              <li><a href="${B}/pages/services/ventilation.html">Ventilation Systems</a></li>
              <li><a href="${B}/pages/services/hvac.html">HVAC Engineering</a></li>
              <li><a href="${B}/pages/services/air-conditioning.html">Air Conditioning</a></li>
              <li><a href="${B}/pages/services/vrv-systems.html">VRV Systems</a></li>
              <li><a href="${B}/pages/services/dehumidification.html">Dehumidification</a></li>
              <li><a href="${B}/pages/services/smoke-extraction.html">Smoke Extraction</a></li>
              <li><a href="${B}/pages/services/plumbing.html">Plumbing</a></li>
              <li><a href="${B}/pages/services/heating.html">Heating Systems</a></li>
            </ul>
          </div>

          <div class="foot-col">
            <h5>Company</h5>
            <ul>
              <li><a href="${B}/pages/about/index.html">About Us</a></li>
              <li><a href="${B}/index.html#works">Our Projects</a></li>
              <li><a href="${B}/index.html#faq">FAQ</a></li>
              <li><a href="${B}/index.html#contact">Contact</a></li>
              <li><a href="${B}/pages/about/privacy.html">Privacy Policy</a></li>
            </ul>
          </div>

          <div class="foot-col">
            <h5>Contact</h5>
            <div class="foot-contact-row">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Dubai, United Arab Emirates</span>
            </div>
            <div class="foot-contact-row">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <a href="tel:+971501357591">+971 50 135 7591</a>
            </div>
            <div class="foot-contact-row">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:sapat.hvac@gmail.com">sapat.hvac@gmail.com</a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} SapatEngineering. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="${B}/pages/about/privacy.html">Privacy Policy</a>
            <a href="${B}/pages/about/index.html">About</a>
            <a href="${B}/index.html#contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ---- FLOATING BUTTONS ---- */
function renderFloats() {
  const el = document.getElementById("float-btns");
  if (!el) return;

  el.innerHTML = `
    <a href="https://wa.me/971507722629" target="_blank" rel="noopener" class="whats fl-btn wa" aria-label="WhatsApp">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      <span class="fl-label">WhatsApp</span>
    </a>
    <a href="tel:+971501357591" class="telef fl-btn ph" aria-label="Call us">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
      <span class="fl-label">Call Us</span>
    </a>
    <a href="mailto:sapat.hvac@gmail.com" class="emailing fl-btn em" aria-label="Email">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      <span class="fl-label">Email Us</span>
    </a>
  `;
}

/* ---- POPUP ---- */
function renderPopup() {
  const el = document.getElementById("popup-overlay");
  if (!el) return;

  el.innerHTML = `
    <div class="popup-box" role="dialog" aria-modal="true" aria-labelledby="popup-title">
      <div class="popup-head">
        <h3 id="popup-title">Request a Free Consultation</h3>
        <p>Our engineer will contact you within 24 hours.</p>
        <button class="popup-close-btn" id="popup-close" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="popup-body">
        <form id="popup-form" novalidate>
          <input type="hidden" name="access_key" value="4595f4f1-ca9c-4439-9916-0c2852f9fe3f">
          <input type="hidden" name="subject" value="Consultation Request — SapatEngineering">
          <input type="hidden" name="from_name" value="SapatEngineering Website">

          <div class="form-row">
            <div class="form-grp">
              <label for="p-name">Full Name *</label>
              <input type="text" id="p-name" name="name" placeholder="Your full name" required>
            </div>
            <div class="form-grp">
              <label for="p-phone">Phone *</label>
              <input type="tel" id="p-phone" name="phone" placeholder="+971 00 000 0000" required>
            </div>
          </div>
          <div class="form-grp">
            <label for="p-email">Email Address</label>
            <input type="email" id="p-email" name="email" placeholder="your@email.com">
          </div>
          <div class="form-row">
            <div class="form-grp">
              <label for="p-date">Preferred Date</label>
              <input type="date" id="p-date" name="preferred_date">
            </div>
            <div class="form-grp">
              <label for="p-time">Preferred Time</label>
              <input type="time" id="p-time" name="preferred_time">
            </div>
          </div>
          <div class="form-grp">
            <label for="p-service">Service Required</label>
            <select id="p-service" name="service">
              <option value="">Select a service…</option>
              <option>Ventilation Systems</option>
              <option>HVAC Engineering</option>
              <option>Air Conditioning</option>
              <option>VRV Systems</option>
              <option>Dehumidification</option>
              <option>Smoke Extraction</option>
              <option>Plumbing</option>
              <option>Heating Systems</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-grp">
            <label for="p-msg">Comments</label>
            <textarea id="p-msg" name="message" placeholder="Project details, property size, requirements…"></textarea>
          </div>
          <button type="submit" class="popup-form-submit btn btn-green" style="width:100%;justify-content:center;padding:1rem;">Submit Request</button>
        </form>
        <div id="popup-success" class="form-success">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <h4>Request Sent!</h4>
          <p>We'll contact you within 24 hours to confirm your consultation.</p>
        </div>
      </div>
    </div>
  `;
}

/* ---- INIT ---- */
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderFloats();
  renderPopup();
});
