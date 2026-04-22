/* =========================================================
   RENDER + INTERACTION LOGIC
   Reads content from site-data.js and fills the page.
   The static HTML contains a complete fallback for crawlers,
   no-JS users, and cases where the data script fails.
   ========================================================= */

(function () {
  const data = window.siteData;
  if (!data) {
    console.error("siteData not found. Keeping static fallback content visible.");
    return;
  }

  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

  const create = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (typeof text === "string") el.textContent = text;
    return el;
  };

  const safeArray = (value) => (Array.isArray(value) ? value : []);

  function isUsableHref(href) {
    return typeof href === "string" && href.trim() && href.trim() !== "#";
  }

  function isExternalHref(href) {
    return /^https?:\/\//i.test(href);
  }

  function initialsFromName(name, fallback = "GF") {
    if (!name || typeof name !== "string") return fallback;
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return fallback;
    return parts.slice(0, 2).map((part) => part[0].toUpperCase()).join("");
  }

  function clearChildren(selectorOrElement) {
    const el = typeof selectorOrElement === "string" ? $(selectorOrElement) : selectorOrElement;
    if (el) el.replaceChildren();
  }

  function clearDynamicFallbacks() {
    [
      "#hero-intro",
      "#hero-links",
      "#hero-meta",
      "#hero-facts",
      "#highlights-grid",
      "#interest-tags",
      "#featured-projects-grid",
      "#other-projects-grid",
      "#experience-timeline",
      "#contact-links",
      "#notes-grid"
    ].forEach(clearChildren);
  }

  function setText(selector, value) {
    const el = $(selector);
    if (el && typeof value === "string") el.textContent = value;
  }

  function setHref(selector, value) {
    const el = $(selector);
    if (el && isUsableHref(value)) el.setAttribute("href", value);
  }

  function applyLinkSafety(a, href) {
    if (isExternalHref(href)) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  }

  function buildButton(link, defaultStyle = "ghost") {
    if (!isUsableHref(link?.href)) return null;

    const a = create("a");
    a.className = `button button--${link.style || defaultStyle}`;
    a.href = link.href;
    a.textContent = link.label || "Link";
    applyLinkSafety(a, link.href);
    return a;
  }

  function buildInlineLink(link) {
    if (!isUsableHref(link?.href)) return null;

    const a = create("a", "inline-link", link.label || "Link");
    a.href = link.href;
    applyLinkSafety(a, link.href);
    return a;
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem("site-theme");
    } catch (error) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem("site-theme", theme);
    } catch (error) {
      // Ignore storage errors, for example in strict privacy contexts.
    }
  }

  function renderTheme() {
    const preferred = getStoredTheme();
    document.documentElement.dataset.theme = preferred || "light";

    const toggle = $("#theme-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      storeTheme(next);
    });
  }

  function renderHeaderAndHero() {
    const { personal, links, seo } = data;

    if (seo?.title) document.title = seo.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && seo?.description) {
      metaDescription.setAttribute("content", seo.description);
    }

    const name = personal?.name || "Guiv Farmanfarmaian";
    const shortName = personal?.shortName || initialsFromName(name);
    const cvLink = safeArray(links).find((link) => link.label?.toLowerCase() === "cv");

    setText("#brand-mark", shortName);
    setText("#brand-text", name);
    setText("#hero-eyebrow", personal?.eyebrow);
    setText("#hero-name", name);
    setText("#focus-summary", personal?.focusSummary);

    const heroTagline = $("#hero-tagline");
    if (heroTagline) {
      if (personal?.tagline) {
        heroTagline.textContent = personal.tagline;
        heroTagline.hidden = false;
      } else {
        heroTagline.hidden = true;
      }
    }

    if (cvLink) setHref("#header-cv-link", cvLink.href);

    const heroIntro = $("#hero-intro");
    safeArray(data.about).forEach((paragraph) => {
      heroIntro?.appendChild(create("p", "", paragraph));
    });

    const heroLinks = $("#hero-links");
    safeArray(links).forEach((link, index) => {
      const style = link.style || (index === 0 ? "primary" : "ghost");
      const button = buildButton({ ...link, style }, style);
      if (button) heroLinks?.appendChild(button);
    });

    const heroMeta = $("#hero-meta");
    safeArray(personal?.meta).forEach((item) => {
      heroMeta?.appendChild(create("li", "", item));
    });

    const heroFacts = $("#hero-facts");
    safeArray(personal?.heroFacts).forEach((item) => {
      const row = create("div", "fact-row");
      row.appendChild(create("span", "fact-row__label", item.label || ""));
      row.appendChild(create("strong", "fact-row__value", item.value || ""));
      heroFacts?.appendChild(row);
    });

    const profileImage = $("#profile-image");
    if (profileImage && personal?.profileImage) {
      profileImage.src = personal.profileImage;
      profileImage.alt = `Portrait of ${name}`;
      profileImage.hidden = false;
    }

    setText("#footer-text", data.footer?.text || `© ${name}`);
    setText(".footer-note", data.footer?.note);
  }

  function renderHighlights() {
    const wrap = $("#highlights-grid");
    if (!wrap) return;

    safeArray(data.highlights).forEach((item) => {
      const card = create("div", "info-card reveal");
      const label = create("span", "info-card__label", item.label || "");
      const value = create("div", "info-card__value", item.value || "");
      card.append(label, value);
      wrap.appendChild(card);
    });
  }

  function renderAbout() {
    const interestTags = $("#interest-tags");
    if (interestTags) {
      safeArray(data.interests).forEach((interest) => {
        interestTags.appendChild(create("span", "tag", interest));
      });
    }
  }

  function renderProjectList(projects, grid) {
    if (!grid) return;

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
      if (tags.children.length) footer.appendChild(tags);

      const usableLinks = safeArray(project.links).filter((link) => isUsableHref(link?.href));
      if (usableLinks.length) {
        const linkRow = create("div", "link-row");
        usableLinks.forEach((link) => {
          const inlineLink = buildInlineLink(link);
          if (inlineLink) linkRow.appendChild(inlineLink);
        });
        if (linkRow.children.length) footer.appendChild(linkRow);
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

  function renderExperience() {
    const timeline = $("#experience-timeline");
    if (!timeline) return;

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

    if (!section || !grid) return;

    if (!notes.length) {
      section.hidden = true;
      return;
    }

    notes.forEach((item) => {
      const card = create("article", "card reveal");
      const title = create("h3", "card-title", item.title || "Untitled note");
      const summary = create("p", "muted", item.summary || "");
      card.append(title, summary);

      const link = buildInlineLink({ label: "Read more", href: item.href });
      if (link) card.appendChild(link);

      grid.appendChild(card);
    });
  }

  function renderContact() {
    const contact = data.contact || {};
    setText("#contact-copy", contact.copy);

    const linksWrap = $("#contact-links");
    safeArray(contact.links).forEach((link, index) => {
      const style = link.style || (index === 0 ? "primary" : "ghost");
      const button = buildButton({ ...link, style }, style);
      if (button) linksWrap?.appendChild(button);
    });
  }

  function handleMobileNav() {
    const toggle = $("#menu-toggle");
    const wrap = $("#nav-wrap");
    const navLinks = $$(".site-nav a");

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
    document.documentElement.classList.remove("no-js");

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

  clearDynamicFallbacks();
  renderTheme();
  renderHeaderAndHero();
  renderHighlights();
  renderAbout();
  renderProjects();
  renderExperience();
  renderNotes();
  renderContact();
  handleMobileNav();
  initReveal();
})();
