/* =========================================================
   RENDER + INTERACTION LOGIC
   Reads content from site-data.js and fills the page.
   ========================================================= */

(function () {
  document.documentElement.classList.remove("no-js");
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

  function initialsFromName(name, fallback = "GF") {
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
    if (a.href.startsWith("http") || a.href.startsWith("mailto:")) {
      if (a.href.startsWith("http")) {
        a.target = "_blank";
        a.rel = "noreferrer";
      }
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

    const name = personal?.name || "Guiv Farmanfarmaian";
    const shortName = personal?.shortName || initialsFromName(name);
    const cvLink = safeArray(links).find((link) => link.label?.toLowerCase() === "cv");

    $("#brand-mark").textContent = shortName;
    $("#brand-text").textContent = name;

    setText("#hero-eyebrow", personal?.eyebrow);
    setText("#hero-name", name);
    const heroTagline = $("#hero-tagline");
    if (heroTagline) {
      if (personal?.tagline) {
        heroTagline.textContent = personal.tagline;
        heroTagline.hidden = false;
      } else {
        heroTagline.hidden = true;
      }
    }
    setText("#focus-summary", personal?.focusSummary);

    if (cvLink) setHref("#header-cv-link", cvLink.href);

    const heroIntro = $("#hero-intro");
    safeArray(data.about).forEach((paragraph) => {
      heroIntro.appendChild(create("p", "", paragraph));
    });

    const heroLinks = $("#hero-links");
    safeArray(links).forEach((link, index) => {
      const style = link.style || (index === 0 ? "primary" : "ghost");
      heroLinks.appendChild(buildButton({ ...link, style }, style));
    });

    const heroMeta = $("#hero-meta");
    safeArray(personal?.meta).forEach((item) => {
      heroMeta.appendChild(create("li", "", item));
    });

    const heroFacts = $("#hero-facts");
    safeArray(personal?.heroFacts).forEach((item) => {
      const row = create("div", "fact-row");
      row.appendChild(create("span", "fact-row__label", item.label || ""));
      row.appendChild(create("strong", "fact-row__value", item.value || ""));
      heroFacts.appendChild(row);
    });

    const imagePath = personal?.profileImage;
    const profileImage = $("#profile-image");
    const profileFallback = $("#profile-fallback");

    if (profileFallback) profileFallback.textContent = shortName;
    if (imagePath && profileImage) {
      profileImage.src = imagePath;
      profileImage.hidden = false;
      if (profileFallback) profileFallback.hidden = true;
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
    const interestTags = $("#interest-tags");
    if (interestTags) {
      safeArray(data.interests).forEach((interest) => {
        interestTags.appendChild(create("span", "tag", interest));
      });
    }

    const goalList = $("#goal-list");
    if (goalList) {
      safeArray(data.goals).forEach((goal) => {
        goalList.appendChild(create("li", "", goal));
      });
    }
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
    return;
  }

  function hasHref(link) {
    const href = (link?.href || "").trim();
    return href.length > 0 && href !== "#";
  }

  function renderNews() {
    const list = $("#news-list");
    const news = safeArray(data.news);
    if (!list) return;

    if (!news.length) {
      list.hidden = true;
      return;
    }

    news.forEach((item) => {
      const li = create("li", "news-item");
      const wrap = item.href ? create("a", "news-item__link") : create("div", "news-item__link");

      if (item.href) {
        wrap.href = item.href;
        if (item.href.startsWith("http")) {
          wrap.target = "_blank";
          wrap.rel = "noreferrer";
        }
      }

      const marker = create("span", "marker-square");
      marker.setAttribute("aria-hidden", "true");
      wrap.appendChild(marker);

      if (item.date) {
        const date = create(item.dateTime ? "time" : "span", "news-item__date", item.date);
        if (item.dateTime) date.dateTime = item.dateTime;
        wrap.appendChild(date);
      }

      wrap.appendChild(create("span", "news-item__text", item.text || ""));

      if (item.href) {
        if (item.linkLabel) {
          wrap.appendChild(create("span", "visually-hidden", ` \u2014 ${item.linkLabel}`));
        }
        const arrow = create("span", "news-item__arrow", "\u2192");
        arrow.setAttribute("aria-hidden", "true");
        wrap.appendChild(arrow);
      }

      li.appendChild(wrap);
      list.appendChild(li);
    });

    list.hidden = false;
  }

  function copyText(text) {
    if (navigator.clipboard?.writeText) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise((resolve, reject) => {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.top = "-1000px";
      document.body.appendChild(area);
      area.select();
      try {
        const ok = document.execCommand("copy");
        document.body.removeChild(area);
        ok ? resolve() : reject(new Error("copy-failed"));
      } catch (error) {
        document.body.removeChild(area);
        reject(error);
      }
    });
  }

  function buildBibtexBlock(publication, index) {
    const details = create("details", "bibtex");
    const summary = create("summary", "bibtex__summary", "BibTeX");
    details.appendChild(summary);

    const body = create("div", "bibtex__body");

    const bar = create("div", "bibtex__bar");
    const copyButton = create("button", "bibtex__copy", "Copy");
    copyButton.type = "button";

    const codeId = `bibtex-code-${index}`;
    copyButton.setAttribute("aria-label", `Copy BibTeX citation for ${publication.title || "this paper"}`);
    copyButton.setAttribute("aria-controls", codeId);

    const status = create("span", "bibtex__status");
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");

    bar.append(copyButton, status);

    const pre = create("pre", "bibtex__code");
    pre.id = codeId;
    pre.tabIndex = 0;
    pre.appendChild(create("code", "", publication.bibtex || ""));

    let resetTimer = null;
    copyButton.addEventListener("click", () => {
      copyText(publication.bibtex || "")
        .then(() => {
          copyButton.textContent = "Copied";
          status.textContent = "BibTeX copied to clipboard";
        })
        .catch(() => {
          copyButton.textContent = "Copy failed";
          status.textContent = "Copy failed. Select the text and copy manually.";
        })
        .finally(() => {
          window.clearTimeout(resetTimer);
          resetTimer = window.setTimeout(() => {
            copyButton.textContent = "Copy";
            status.textContent = "";
          }, 2400);
        });
    });

    body.append(bar, pre);
    details.appendChild(body);
    return details;
  }

  function renderPublications() {
    const block = $("#publications");
    const list = $("#publications-list");
    const publications = safeArray(data.publications);

    if (!block || !list) return;

    if (!publications.length) {
      block.hidden = true;
      return;
    }

    publications.forEach((publication, index) => {
      const entry = create("article", "pub-entry");

      const meta = create("div", "pub-entry__meta");
      if (publication.badge) {
        const badge = create("p", "pub-entry__badge");
        const marker = create("span", "marker-square");
        marker.setAttribute("aria-hidden", "true");
        badge.append(marker, document.createTextNode(publication.badge));
        meta.appendChild(badge);
      }
      if (publication.year) {
        meta.appendChild(create("p", "pub-entry__year", publication.year));
      }

      const body = create("div", "pub-entry__body");
      body.appendChild(create("h4", "pub-entry__title", publication.title || "Untitled paper"));

      const byline = [publication.authors, publication.affiliation].filter(Boolean).join(" \u00b7 ");
      if (byline) body.appendChild(create("p", "pub-entry__authors", byline));

      if (publication.venue) {
        body.appendChild(create("p", "pub-entry__venue", publication.venue));
      }

      if (publication.summary) {
        body.appendChild(create("p", "pub-entry__summary", publication.summary));
      }

      const links = safeArray(publication.links).filter(hasHref);
      if (links.length) {
        const linkRow = create("div", "pub-entry__links");
        links.forEach((link) => {
          const a = buildInlineLink(link);
          a.classList.add("editorial-link");
          linkRow.appendChild(a);
        });
        body.appendChild(linkRow);
      }

      if (publication.bibtex) {
        body.appendChild(buildBibtexBlock(publication, index));
      }

      entry.append(meta, body);
      list.appendChild(entry);
    });

    block.hidden = false;
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
      if (section) section.hidden = false;
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
  renderNews();
  renderAbout();
  renderPublications();
  renderProjects();
  renderExperience();
  renderNotes();
  renderContact();
  handleMobileNav();
  initReveal();
})();
