document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Marquee Ticker
    const marqueeTrack = document.getElementById('marqueeTrack');
    if (marqueeTrack && portfolioData.tools) {
        const doubledTools = [...portfolioData.tools, ...portfolioData.tools];
        marqueeTrack.innerHTML = doubledTools.map(tool => `
      <div class="marquee-pill">
        <span class="dot"></span>
        <span class="name">${tool.name}</span>
        <span class="cat">${tool.category}</span>
      </div>
    `).join('');
    }

    // 2. Render Projects Grid
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid && portfolioData.projects) {
        projectsGrid.innerHTML = portfolioData.projects.map((p, i) => `
      <article class="project-card">
        <div class="project-img-banner">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
          <div class="project-badge">0${i + 1} / ${p.category}</div>
        </div>
        <div class="project-body">
          <div class="project-info">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
          </div>
          <div class="project-footer">
            <div class="project-tags">
              ${p.tags.map(t => `<span>${t}</span>`).join('')}
            </div>
            <a href="${p.githubUrl}" target="_blank" class="project-link" aria-label="View Project">↗</a>
          </div>
        </div>
      </article>
    `).join('');
    }

    // 3. Render Services Interactive Cards
    const servicesList = document.getElementById('servicesList');
    if (servicesList && portfolioData.services) {
        servicesList.innerHTML = portfolioData.services.map((s, i) => `
      <div class="service-card ${i === 0 ? 'active' : ''}" data-id="${s.id}">
        <div class="service-top">
          <h3>${s.title}</h3>
          <span class="service-num">0${i + 1}</span>
        </div>
        <p class="service-desc">${s.description}</p>
        <div class="service-pills">
          ${s.pills.map(pill => `<span>${pill}</span>`).join('')}
        </div>
      </div>
    `).join('');

        const cards = servicesList.querySelectorAll('.service-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                cards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            });
        });
    }

    // 4. Render Work History
    const workHistory = document.getElementById('workHistory');
    if (workHistory && portfolioData.about.workHistory) {
        workHistory.innerHTML = portfolioData.about.workHistory.map(w => `
      <div class="history-item">
        <div class="history-top">
          <h5>${w.role}</h5>
          <span class="history-period">📅 ${w.period}</span>
        </div>
        <div class="history-org">${w.organization}</div>
        <div class="history-desc">${w.description}</div>
      </div>
    `).join('');
    }

    // 5. Render Testimonials Grid
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (testimonialsGrid && portfolioData.testimonials) {
        testimonialsGrid.innerHTML = portfolioData.testimonials.map(t => `
      <div class="testimonial-card">
        <div>
          <div class="quote-mark">“</div>
          <p class="t-quote">${t.quote}</p>
        </div>
        <div class="t-author">
          <div class="t-avatar">${t.author.charAt(0)}</div>
          <div>
            <div class="t-name">${t.author}</div>
            <div class="t-role">${t.title}</div>
          </div>
        </div>
      </div>
    `).join('');
    }

    // 6. Render FAQs & Accordion Toggle
    const faqAccordion = document.getElementById('faqAccordion');
    if (faqAccordion && portfolioData.faqs) {
        faqAccordion.innerHTML = portfolioData.faqs.map((f, i) => `
      <div class="faq-item ${i === 0 ? 'active' : ''}">
        <button class="faq-header">
          <span>0${i + 1} &nbsp; ${f.question}</span>
          <span class="faq-toggle">${i === 0 ? '−' : '+'}</span>
        </button>
        <div class="faq-body">
          <p>${f.answer}</p>
        </div>
      </div>
    `).join('');

        const items = faqAccordion.querySelectorAll('.faq-item');
        items.forEach(item => {
            const btn = item.querySelector('.faq-header');
            btn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                items.forEach(el => {
                    el.classList.remove('active');
                    el.querySelector('.faq-toggle').textContent = '+';
                });
                if (!isActive) {
                    item.classList.add('active');
                    item.querySelector('.faq-toggle').textContent = '−';
                }
            });
        });
    }

    // 7. Interactive 3D Bitmoji Tilt Effect
    const stage = document.getElementById('characterStage');
    const img = document.getElementById('characterImg');
    if (stage && img) {
        stage.addEventListener('mousemove', (e) => {
            const rect = stage.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotateX = (-y / rect.height) * 30;
            const rotateY = (x / rect.width) * 30;
            img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        stage.addEventListener('mouseleave', () => {
            img.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    }

    // 8. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            mobileDrawer.classList.toggle('open');
        });

        const links = mobileDrawer.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
            });
        });
    }
});