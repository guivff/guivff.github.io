/* =========================================================
   RENDER + INTERACTION LOGIC
   Reads content from site-data.js and fills the page.
   ========================================================= */

(function () {
  const data = window.siteData;
  if (!data) {
    console.error("siteData not found. Make sure site-data.js loads before script.js.");
    return;
  }

  const $ = (selector, parent = document) => parent.querySelector(selector);
  const create = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (typeof text === "string") el.textContent = text;
    return el;
  };

  const safeArray = (value) => (Array.isArray(value) ? value : []);

  function initialsFromName(name, fallback = "YN") {
    if (!name || typeof name !== "string") return fallback;
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return fallback;
    return parts.slice(0, 2).map((part) => part[0].toUpperCase()).join("");
  }

  function setText(selector, value) {
    const el = $(selector);
    if (el && value) el.textContent = value;
  }

  function setHref(selector, value) {
    const el = $(selector);
    if (el && value) el.href = value;
  }

  function buildButton(link, defaultStyle = "ghost") {
    const a = create("a");
    a.className = `button button--${link.style || defaultStyle}`;
    a.href = link.href || "#";
    a.textContent = link.label || "Link";
    if (a.href.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noreferrer";
    }
    return a;
  }

  function buildInlineLink(link) {
    const a = create("a", "inline-link", link.label || "Link");
    a.href = link.href || "#";
    if (a.href.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noreferrer";
    }
    return a;
  }

  function renderTheme() {
    const preferred = localStorage.getItem("site-theme");
    const initialTheme = preferred || "light";
    document.documentElement.dataset.theme = initialTheme;

    const toggle = $("#theme-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("site-theme", next);
    });
  }

  function renderHeaderAndHero() {
    const { personal, links, seo } = data;

    if (seo?.title) document.title = seo.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && seo?.description) {
      metaDescription.setAttribute("content", seo.description);
    }

    const name = personal?.name || "Your Name";
    const shortName = personal?.shortName || initialsFromName(name);
    const cvLink = safeArray(links).find((link) => link.label?.toLowerCase() === "cv");

    $("#brand-mark").textContent = shortName;
    $("#brand-text").textContent = name;

    setText("#hero-eyebrow", personal?.eyebrow);
    setText("#hero-name", name);
    setText("#hero-tagline", personal?.tagline);
    setText("#hero-summary", personal?.summary);
    setText("#focus-summary", personal?.focusSummary);
    setText("#availability-text", personal?.availability);
    setText("#location-text", personal?.location);

    if (cvLink) setHref("#header-cv-link", cvLink.href);

    const heroLinks = $("#hero-links");
    safeArray(links).forEach((link, index) => {
      const style = link.style || (index === 0 ? "primary" : "ghost");
      heroLinks.appendChild(buildButton({ ...link, style }, style));
    });

    const heroMeta = $("#hero-meta");
    safeArray(personal?.meta).forEach((item) => {
      const li = create("li", "", item);
      heroMeta.appendChild(li);
    });

    const focusTags = $("#focus-tags");
    safeArray(data.interests).slice(0, 6).forEach((interest) => {
      focusTags.appendChild(create("span", "tag", interest));
    });

    const imagePath = personal?.profileImage;
    const profileImage = $("#profile-image");
    const profileFallback = $("#profile-fallback");

    profileFallback.textContent = shortName;
    if (imagePath) {
      profileImage.src = imagePath;
      profileImage.hidden = false;
      profileFallback.hidden = true;
    }

    $("#footer-text").textContent = data.footer?.text || `© ${name}`;
    const footerNote = $(".footer-note");
    if (footerNote && data.footer?.note) footerNote.textContent = data.footer.note;
  }

  function renderHighlights() {
    const wrap = $("#highlights-grid");
    safeArray(data.highlights).forEach((item) => {
      const card = create("div", "info-card reveal");
      const label = create("span", "info-card__label", item.label || "");
      const value = create("div", "info-card__value", item.value || "");
      card.append(label, value);
      wrap.appendChild(card);
    });
  }

  function renderAbout() {
    const aboutCopy = $("#about-copy");
    safeArray(data.about).forEach((paragraph) => {
      aboutCopy.appendChild(create("p", "", paragraph));
    });

    const interestTags = $("#interest-tags");
    safeArray(data.interests).forEach((interest) => {
      interestTags.appendChild(create("span", "tag", interest));
    });

    const goalList = $("#goal-list");
    safeArray(data.goals).forEach((goal) => {
      goalList.appendChild(create("li", "", goal));
    });
  }


  function renderProjectList(projects, grid) {
    safeArray(projects).forEach((project) => {
      const card = create(
        "article",
        `card project-card reveal ${project.featured ? "project-card--featured" : ""}`.trim()
      );

      if (project.category) {
        card.appendChild(create("p", "project-card__eyebrow", project.category));
      }

      const top = create("div", "project-card__top");
      const title = create("h3", "", project.title || "Untitled project");
      const period = create("span", "project-card__period", project.period || "");
      top.append(title, period);

      const summary = create("p", "project-card__summary", project.summary || "");

      const footer = create("div", "project-card__footer");
      const tags = create("div", "tag-list");
      safeArray(project.tags).forEach((tag) => tags.appendChild(create("span", "tag", tag)));
      footer.appendChild(tags);

      const links = safeArray(project.links);
      if (links.length) {
        const linkRow = create("div", "link-row");
        links.forEach((link) => {
          linkRow.appendChild(buildInlineLink(link));
        });
        footer.appendChild(linkRow);
      }

      card.append(top, summary, footer);
      grid.appendChild(card);
    });
  }

  function renderProjects() {
    const projects = safeArray(data.projects);
    const featured = projects.filter((project) => project.featured);
    const others = projects.filter((project) => !project.featured);

    const featuredBlock = $("#featured-projects-block");
    const otherBlock = $("#other-projects-block");
    const featuredGrid = $("#featured-projects-grid");
    const otherGrid = $("#other-projects-grid");

    if (!featured.length && featuredBlock) featuredBlock.hidden = true;
    if (!others.length && otherBlock) otherBlock.hidden = true;

    renderProjectList(featured, featuredGrid);
    renderProjectList(others, otherGrid);
  }

  function renderResearch() {
    const research = data.research || {};
    setText("#thesis-title", research.thesisTitle);
    setText("#thesis-summary", research.thesisSummary);

    const thesisBullets = $("#thesis-bullets");
    safeArray(research.bullets).forEach((bullet) => {
      thesisBullets.appendChild(create("li", "", bullet));
    });

    const publications = safeArray(research.publications);
    const publicationsList = $("#publications-list");
    const publicationsCard = $("#publications-card");

    if (!publications.length) {
      publicationsCard.hidden = true;
      return;
    }

    publications.forEach((item) => {
      const entry = create("div", "stack-item");
      const top = create("div", "stack-item__top");
      const titleWrap = item.href ? create("a", "inline-link") : create("div");
      if (item.href) {
        titleWrap.href = item.href;
        if (item.href.startsWith("http")) {
          titleWrap.target = "_blank";
          titleWrap.rel = "noreferrer";
        }
      }

      const title = create("h4", "stack-item__title", item.title || "Untitled");
      titleWrap.appendChild(title);

      const meta = create(
        "span",
        "stack-item__meta",
        [item.venue, item.year].filter(Boolean).join(" · ")
      );

      top.append(titleWrap, meta);

      entry.appendChild(top);
      publicationsList.appendChild(entry);
    });
  }

  function renderExperience() {
    const timeline = $("#experience-timeline");
    safeArray(data.experience).forEach((item) => {
      const wrapper = create("div", "timeline-item reveal");
      const card = create("article", "timeline-card");

      const top = create("div", "timeline-item__top");
      const role = create("h3", "timeline-item__role", item.role || "Role");
      const period = create("span", "timeline-item__period", item.period || "");
      top.append(role, period);

      const org = create("div", "timeline-item__org", item.org || "");
      const summary = create("p", "muted", item.summary || "");

      const bullets = create("ul", "clean-list");
      safeArray(item.bullets).forEach((bullet) => bullets.appendChild(create("li", "", bullet)));

      card.append(top, org, summary, bullets);
      wrapper.appendChild(card);
      timeline.appendChild(wrapper);
    });
  }

  function renderNotes() {
    const notes = safeArray(data.notes);
    const section = $("#notes");
    const grid = $("#notes-grid");

    if (!notes.length) {
      section.hidden = true;
      return;
    }

    notes.forEach((item) => {
      const card = create("article", "card reveal");
      const title = create("h3", "card-title", item.title || "Untitled note");
      const summary = create("p", "muted", item.summary || "");
      card.append(title, summary);

      if (item.href) {
        card.appendChild(buildInlineLink({ label: "Read more", href: item.href }));
      }

      grid.appendChild(card);
    });
  }

  function renderContact() {
    const contact = data.contact || {};
    setText("#contact-copy", contact.copy);

    const linksWrap = $("#contact-links");
    safeArray(contact.links).forEach((link, index) => {
      const style = link.style || (index === 0 ? "primary" : "ghost");
      linksWrap.appendChild(buildButton({ ...link, style }, style));
    });
  }

  function handleMobileNav() {
    const toggle = $("#menu-toggle");
    const wrap = $("#nav-wrap");
    const navLinks = Array.from(document.querySelectorAll(".site-nav a"));

    if (!toggle || !wrap) return;

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      wrap.classList.toggle("is-open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        wrap.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
  }

  renderTheme();
  renderHeaderAndHero();
  renderHighlights();
  renderAbout();
  renderProjects();
  renderResearch();
  renderExperience();
  renderNotes();
  renderContact();
  handleMobileNav();
  initReveal();
})();
