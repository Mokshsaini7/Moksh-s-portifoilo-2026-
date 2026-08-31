/* =========================================================
   MOKSH SAINI PORTFOLIO — COMPLETE SCRIPT
   Works with the data.js above.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // ---------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------

  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

  const escapeHTML = (value = "") =>
    String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char]));

  // ---------------------------------------------------------
  // NAVBAR — ALWAYS VISIBLE
  // ---------------------------------------------------------

  const navbar = $(".navbar-wrapper");
  const mobileToggle = $("#mobileToggle");
  const mobileDrawer = $("#mobileDrawer");

  if (navbar) {
    navbar.style.opacity = "1";
    navbar.style.visibility = "visible";
    navbar.style.transform = "translateY(0)";
  }

  if (mobileToggle && mobileDrawer) {
    mobileToggle.setAttribute("aria-expanded", "false");

    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.toggle("open");
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
    });

    $$(".drawer-link, .mobile-drawer .btn-red-full").forEach((link) => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event) => {
      if (
        mobileDrawer.classList.contains("open") &&
        !mobileDrawer.contains(event.target) &&
        !mobileToggle.contains(event.target)
      ) {
        mobileDrawer.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---------------------------------------------------------
  // PROJECTS
  // ---------------------------------------------------------

  const projectsGrid = $("#projectsGrid");

  if (projectsGrid && Array.isArray(portfolioData?.projects)) {
    projectsGrid.innerHTML = portfolioData.projects.map((project) => `
      <article class="project-card">
        <div class="project-img-banner">
          <img
            src="${escapeHTML(project.image)}"
            alt="${escapeHTML(project.title)}"
            loading="lazy"
            decoding="async"
            onerror="this.style.display='none'"
          />
          <span class="project-badge">${escapeHTML(project.category)}</span>
        </div>

        <div class="project-body">
          <div class="project-info">
            <h3>${escapeHTML(project.title)}</h3>
            <p>${escapeHTML(project.description)}</p>
          </div>

          <div class="project-footer">
            <div class="project-tags">
              ${project.tags.map((tag) => `
                <span>${escapeHTML(tag)}</span>
              `).join("")}
            </div>

            <a
              href="${escapeHTML(project.link)}"
              class="project-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open ${escapeHTML(project.title)}"
            >↗</a>
          </div>
        </div>
      </article>
    `).join("");
  }

  // ---------------------------------------------------------
  // MARQUEE
  // ---------------------------------------------------------

  const marqueeTrack = $("#marqueeTrack");

  if (marqueeTrack && Array.isArray(portfolioData?.marquee)) {
    const items = [...portfolioData.marquee, ...portfolioData.marquee];

    marqueeTrack.innerHTML = items.map(([name, category]) => `
      <div class="marquee-pill">
        <span class="dot"></span>
        <span class="name">${escapeHTML(name)}</span>
        <span class="cat">${escapeHTML(category)}</span>
      </div>
    `).join("");
  }

  // ---------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------

  const servicesList = $("#servicesList");

  if (servicesList && Array.isArray(portfolioData?.services)) {
    servicesList.innerHTML = portfolioData.services.map((service, index) => `
      <article class="service-card${index === 0 ? " active" : ""}">
        <div class="service-top">
          <h3>${escapeHTML(service.title)}</h3>
          <span class="service-num">${escapeHTML(service.number)}</span>
        </div>

        <p class="service-desc">${escapeHTML(service.description)}</p>

        <div class="service-pills">
          ${service.tools.map((tool) => `
            <span>${escapeHTML(tool)}</span>
          `).join("")}
        </div>
      </article>
    `).join("");

    $$(".service-card", servicesList).forEach((card) => {
      card.addEventListener("click", () => {
        $$(".service-card", servicesList).forEach((item) =>
          item.classList.remove("active")
        );
        card.classList.add("active");
      });
    });
  }

  // ---------------------------------------------------------
  // WORK HISTORY
  // ---------------------------------------------------------

  const workHistoryContainer = $("#workHistory");

  if (workHistoryContainer && Array.isArray(portfolioData?.workHistory)) {
    workHistoryContainer.innerHTML = portfolioData.workHistory.map((item) => `
      <article class="history-item">
        <div class="history-top">
          <h5>${escapeHTML(item.role)}</h5>
          <span class="history-period">${escapeHTML(item.period)}</span>
        </div>
        <div class="history-org">${escapeHTML(item.organization)}</div>
        <div class="history-desc">${escapeHTML(item.description)}</div>
      </article>
    `).join("");
  }

  // ---------------------------------------------------------
  // TESTIMONIALS
  // ---------------------------------------------------------

  const testimonialsGrid = $("#testimonialsGrid");

  if (testimonialsGrid && Array.isArray(portfolioData?.testimonials)) {
    testimonialsGrid.innerHTML = portfolioData.testimonials.map((item) => `
      <article class="testimonial-card">
        <div>
          <div class="quote-mark">“</div>
          <p class="t-quote">${escapeHTML(item.quote)}</p>
        </div>

        <div class="t-author">
          <div class="t-avatar">${escapeHTML(item.initials)}</div>
          <div>
            <div class="t-name">${escapeHTML(item.name)}</div>
            <div class="t-role">${escapeHTML(item.role)}</div>
          </div>
        </div>
      </article>
    `).join("");
  }

  // ---------------------------------------------------------
  // FAQ
  // ---------------------------------------------------------

  const faqAccordion = $("#faqAccordion");

  if (faqAccordion && Array.isArray(portfolioData?.faqs)) {
    faqAccordion.innerHTML = portfolioData.faqs.map((faq, index) => `
      <article class="faq-item${index === 0 ? " active" : ""}">
        <button class="faq-header" type="button" aria-expanded="${index === 0}">
          <span>${escapeHTML(faq.question)}</span>
          <span class="faq-toggle">${index === 0 ? "−" : "+"}</span>
        </button>

        <div class="faq-body">
          ${escapeHTML(faq.answer)}
        </div>
      </article>
    `).join("");

    $$(".faq-item", faqAccordion).forEach((item) => {
      const button = $(".faq-header", item);
      const toggle = $(".faq-toggle", item);

      button.addEventListener("click", () => {
        const isActive = item.classList.toggle("active");

        button.setAttribute("aria-expanded", String(isActive));
        toggle.textContent = isActive ? "−" : "+";
      });
    });
  }

  // ---------------------------------------------------------
  // AVATAR POINTER EFFECT
  // Disabled on touch devices for performance.
  // ---------------------------------------------------------

  const avatar = $("#characterImg");

  if (
    avatar &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  ) {
    avatar.addEventListener("mousemove", (event) => {
      const rect = avatar.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      avatar.style.transform =
        `rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
    });

    avatar.addEventListener("mouseleave", () => {
      avatar.style.transform = "";
    });
  }

  // ---------------------------------------------------------
  // SMOOTH NAVIGATION
  // ---------------------------------------------------------

  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = $(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // ---------------------------------------------------------
  // SAFETY: NEVER HIDE NAVBAR ON SCROLL
  // ---------------------------------------------------------

  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.style.opacity = "1";
      navbar.style.visibility = "visible";
      navbar.style.transform = "translateY(0)";
    }, { passive: true });
  }
});
