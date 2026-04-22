# Guiv Farmanfarmaian personal website

Personal website for Guiv Farmanfarmaian, focused on ML research engineering, LLM reasoning, RL post-training, graph learning, and selected technical reports.

## Local preview

You can open `index.html` directly in a browser, but a local server is better because it matches GitHub Pages-style relative paths.

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Content editing

Most page content lives in `site-data.js`. The static HTML in `index.html` is intentionally also filled with real content so that crawlers, previews, and no-JS visitors never see placeholder text.
