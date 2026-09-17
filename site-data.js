window.siteData = {
  seo: {
    title: "Guiv Farmanfarmaian | Machine Learning Researcher",
    description:
      "Machine-learning researcher working on LLM reasoning, reinforcement-learning post-training, RLVR/GRPO, mechanistic interpretability, and test-time inference. MSc Computer Science and BSc Mathematics from ETH Zurich; COLM 2026 workshop author.",
    url: "https://guivff.github.io/",
    image: "https://guivff.github.io/assets/guivff_pic.jpg"
  },

  // Short dated announcements shown in a banner under the hero.
  // Leave the array empty to hide the banner entirely. The standing items
  // (current research, SPAR, latest paper) live in `current` instead.
  news: [],

  // Peer-reviewed / workshop papers, newest first.
  publications: [
    {
      badge: "COLM 2026 Workshop",
      title:
        "Selection, Recombination, or a Fresh Solve? A Candidate-Free Control for Single-Pass Test-Time Aggregation",
      authors: "Guiv Farmanfarmaian",
      affiliation: "ETH Zurich",
      venue: "Accepted at the COLM 2026 Workshop on Efficient Reasoning",
      year: "2026",
      summary:
        "Introduces a candidate-free control for test-time aggregation and shows a sign reversal: conditioning on candidate solutions helps when multiple candidates are correct but hurts when all are wrong, reversing the usual interpretation of “all-wrong recovery”.",
      // Links with an empty `href` are skipped when rendering.
      links: [
        {
          label: "PDF",
          href: "assets/papers/farmanfarmaiancolm2026_candidate_free_control.pdf"
        },
        { label: "arXiv", href: "https://arxiv.org/abs/2608.18379" },
        { label: "OpenReview", href: "https://openreview.net/forum?id=kYFPvwqplw" },
        {
          label: "Code",
          href: "https://github.com/guivff/candidate-free-test-time-aggregation"
        }
      ],
      bibtexKey: "farmanfarmaian2026candidatefree",
      bibtex: [
        "@inproceedings{farmanfarmaian2026candidatefree,",
        "  title={Selection, Recombination, or a Fresh Solve? A Candidate-Free",
        "         Control for Single-Pass Test-Time Aggregation},",
        "  author={Farmanfarmaian, Guiv},",
        "  booktitle={COLM 2026 Workshop on Efficient Reasoning},",
        "  year={2026}",
        "}"
      ].join("\n")
    }
  ],

  personal: {
    name: "Guiv Farmanfarmaian",
    shortName: "GF",
    // Optional mono label above the name. Empty hides it.
    eyebrow: "Machine Learning Research · LLM Reasoning · Reinforcement Learning",
    role: "Machine Learning Researcher",
    tagline: "Reasoning, reinforcement learning & post-training for language models",
    // Hero paragraphs: who I am and what I research. Keep to two short paragraphs;
    // background and motivation live in `about`.
    intro: [
      "I work on reasoning and reinforcement learning in language models, in particular RL post-training with RLVR/GRPO and test-time inference.",
      "I completed an MSc in Computer Science (Machine Intelligence) at ETH Zurich after a BSc in Mathematics. My current work centres on independent research on RL post-training for reasoning models, alongside research programmes in RL distillation and mechanistic interpretability."
    ],
    heroFacts: [
      {
        label: "Current research",
        value: "RL post-training / RLVR for reasoning models"
      },
      {
        label: "MATS",
        value: "Neel Nanda Exploration Phase, Winter 2027"
      },
      {
        label: "Research programme",
        value: "SPAR Fall 2026"
      },
      {
        label: "Publication",
        value: "COLM 2026 Workshop on Efficient Reasoning"
      },
      {
        label: "Citizenship",
        value: "U.S. & Swiss citizen"
      }
    ],
    // Small uppercase line under the hero links. Empty hides it.
    meta: [],
    profileImage: "assets/guivff_pic.jpg"
  },

  links: [
    { label: "CV", href: "assets/GuivFF_CV.pdf", style: "primary" },
    { label: "GitHub", href: "https://github.com/guivff", style: "ghost" },
    { label: "Email", href: "mailto:guivff@gmail.com", style: "ghost" }
  ],

  // Compact "Current" section under the hero: what I am actively doing now.
  // `status` is a short mono label (dates or programme). `href` is optional.
  current: [
    {
      status: "Independent research · 2026 – present",
      title: "RL Post-Training for Reasoning Models",
      text:
        "GRPO/RLVR training dynamics, retention of reasoning modes, diversity and mode collapse, sparse rewards, and stable post-training.",
      href: "#research-current",
      linkLabel: "Research entry"
    },
    {
      status: "MATS Winter 2027 · Sep – Oct 2026",
      title: "Neel Nanda Exploration Phase",
      text: "Mechanistic interpretability research. Funded offer · ~4% selection rate.",
      href: "#research-current",
      linkLabel: "Programme entry"
    },
    {
      status: "SPAR Fall 2026",
      title: "Does Phantom transfer occur in RL distillation?",
      text: "RL-distillation research project with May Dixit.",
      href: "#research-current",
      linkLabel: "Project entry"
    },
    {
      status: "COLM 2026 · accepted Aug 2026",
      title: "Selection, Recombination, or a Fresh Solve?",
      text: "Candidate-free test-time aggregation paper, accepted at the COLM 2026 Workshop on Efficient Reasoning.",
      href: "#publications",
      linkLabel: "Publication entry"
    }
  ],

  // Optional four-up facts row. Empty hides it.
  highlights: [],

  // About section: concise background and broader motivation. Distinct from
  // the hero intro, which states who I am and what I research.
  about: [
    "I am a machine-learning researcher working on reasoning in large language models. My background is in mathematics: I completed a BSc in Mathematics at ETH Zurich before moving to the Machine Intelligence track of the MSc in Computer Science, where my thesis studied how to improve reasoning on hard problems with RLVR in sparse-reward settings, teacher-hint and solution-prefix conditioning, and recursive test-time inference.",
    "That work led to my first publication, on test-time aggregation, and to the questions I now pursue independently: how RL post-training changes the repertoire of reasoning behaviours a model can express, when rare behaviours disappear, and how training choices trade task performance against diversity. More broadly, I am interested in reasoning, interpretability, and alignment: in how learning and inference procedures can produce systems that reason robustly, remain understandable, and keep improving beyond static pretraining.",
    "Alongside my research, I work part-time on applied AI engineering and consulting. Before returning to research I worked as a data scientist at Funding Circle in London. I am a U.S. and Swiss citizen."
  ],

  interests: [
    "Reasoning in language models",
    "Reinforcement learning & RL post-training",
    "RLVR / GRPO",
    "Test-time inference & inference-time compute",
    "Sparse- and hard-reward learning",
    "Training dynamics, diversity & mode collapse",
    "Mechanistic interpretability",
    "AI safety & alignment"
  ],

  // Research groups rendered in the Research section, in order. Projects join a
  // group via their `group` key. Projects without a group (or with
  // `featured: false`) fall through to the Selected Projects section.
  researchGroups: [
    {
      key: "current",
      id: "research-current",
      title: "Current research",
      lead: "Ongoing programmes, 2026 – present."
    },
    {
      key: "eth",
      id: "research-eth",
      title: "Previous research — ETH Zurich",
      lead:
        "Completed master's and semester thesis research, 2024 – 2026. Results below are from the thesis work.",
      archived: true
    }
  ],

  projects: [
    {
      title: "RL Post-Training for Reasoning Models",
      category: "Independent research · 2026 – present",
      period: "2026 – present",
      summary:
        "My current research studies the dynamics of reinforcement-learning post-training for language-model reasoning, particularly GRPO/RLVR. I am interested in how post-training changes the repertoire of reasoning behaviours available to a model, when rare or alternative behaviours disappear, and how training choices affect the trade-off between task performance and behavioural diversity. Related questions include learning under sparse rewards and what makes post-training stable.",
      tags: ["RL post-training", "RLVR / GRPO", "Training dynamics", "Diversity & mode collapse", "Sparse rewards"],
      featured: true,
      group: "current",
      links: []
    },
    {
      title: "MATS Winter 2027 — Neel Nanda Exploration Phase",
      category: "MATS Winter 2027 · Exploration Phase · mechanistic interpretability research",
      period: "Sep – Oct 2026",
      summary:
        "Selected for Neel Nanda’s MATS Winter 2027 Exploration Phase in mechanistic interpretability, which includes a preparation period followed by a full-time research sprint.",
      tags: ["Mechanistic interpretability", "MATS", "Model behaviour"],
      featured: true,
      group: "current",
      links: []
    },
    {
      title: "Does Phantom transfer occur in RL distillation?",
      category: "SPAR Fall 2026 · research participant · with May Dixit",
      period: "Fall 2026",
      summary:
        "Research project within the SPAR Fall 2026 programme, with May Dixit. We investigate whether behavioural or latent properties can transfer through RL-based distillation, and under what training conditions such transfer emerges.",
      tags: ["RL distillation", "Transfer", "Model behaviour", "AI safety"],
      featured: true,
      group: "current",
      links: []
    },
    {
      title: "Preventing Mode Collapse in GRPO-based RLVR",
      category: "Master's thesis · Data Analytics Lab, ETH Zurich · confidential, manuscript in preparation",
      period: "2025 – 2026",
      summary:
        "Developed a GRPO variant that conditions on teacher hints during training to prevent RLVR mode collapse on mathematical reasoning problems, yielding +54% policy entropy, ~9× lower KL divergence vs. GRPO, and +3 pp on unhinted MATH-500 pass@8. Selected technical details remain confidential while the manuscript is in preparation.",
      metrics: [
        { value: "+54%", key: "policy entropy" },
        { value: "~9×", key: "lower KL vs. GRPO" },
        { value: "+3 pp", key: "MATH-500 pass@8" }
      ],
      tags: ["LLM reasoning", "RL post-training", "RLVR", "Training stability"],
      featured: true,
      group: "eth",
      links: []
    },
    {
      title: "RL for Hard Problems with Near-Zero Reward",
      category: "Master's thesis · ETH Zurich",
      period: "2025 – 2026",
      summary:
        "Developed a minimal-prefix solution-conditioning method for hard reasoning problems where standard RLVR receives almost no reward signal. The method restores learning signal on problems with zero pass@16 and improves the unhinted target benchmark by +5 pp, directly addressing the cold-start problem in RL for verifiable reasoning.",
      metrics: [
        { value: "+5 pp", key: "unhinted target benchmark" },
        { value: "0", key: "baseline pass@16" }
      ],
      tags: ["RL for hard reasoning", "Sparse reward", "Reasoning", "Learning signal recovery"],
      featured: true,
      group: "eth",
      links: [
        { label: "Code", href: "https://github.com/guivff/prefix-guided-rlvr" }
      ]
    },
    {
      title: "Test-Time Inference for Mathematical Reasoning",
      category: "Master's thesis · ETH Zurich",
      period: "2025 – 2026",
      summary:
        "Implemented and evaluated recursive reasoning, self-refinement, and best-of-N inference strategies on hard mathematical reasoning benchmarks. The project analyses when additional test-time compute improves reasoning performance, when gains plateau, and how such gains could potentially be distilled into the base model.",
      tags: ["Inference-time compute", "Reasoning", "LLMs", "Model evaluation", "Test-time recursion"],
      featured: true,
      group: "eth",
      links: []
    },
    {
      title: "Supply-Chain Graph Learning (ADIA)",
      category: "Semester thesis · ETH Zurich × ADIA",
      period: "2024",
      summary:
        "Built and benchmarked GNN and Graph Transformer models on a large directed supply-chain graph in collaboration with a leading investment firm. The project tested whether graph structure improves financial prediction and downstream portfolio-relevant metrics, with careful ablations and baseline comparisons.",
      tags: ["GNNs", "Graph Transformers", "Finance"],
      featured: true,
      group: "eth",
      links: []
    },
    {
      title: "Task Sequencing in Continual Learning",
      period: "2024",
      summary:
        "Formulated task sequencing as a graph-optimization problem to reduce catastrophic forgetting in continual learning without changing the learner itself. We introduced a gradient-augmented task-dissimilarity metric by combining curvature-based task interference with gradient alignment, used it to construct similarity-aware task groups, and optimized learning schedules with cut-based ordering objectives. On MNIST-10, the best schedule improved final accuracy from 79.8% to 91.6% and reduced forgetting from 24.3% to 9.4%.",
      metrics: [
        { value: "79.8 → 91.6%", key: "final accuracy, MNIST-10" },
        { value: "24.3 → 9.4%", key: "forgetting" }
      ],
      tags: ["Continual Learning", "Catastrophic Forgetting", "Task Similarity", "Representation Analysis"],
      featured: false,
      links: [
        { label: "Report", href: "assets/reports/task-ordering-report.pdf" },
        { label: "Code", href: "#" }
      ]
    },
    {
      title: "Text Sentiment Classification with BERTweet and Custom Heads",
      period: "2024",
      summary:
        "Developed and rigorously evaluated a transformer-based approach to sentiment classification on noisy Twitter text. We combined tweet-specific preprocessing, fine-tuning of BERT-family backbones, custom classification heads, and ensemble methods. We studied preprocessing choices such as duplicate-voting, hashtag segmentation, and slang normalization. Additionally, we ran extensive ablations over several classification heads, such as additive attention, self-attention, and KAN-based classifiers. The final system achieved 90.7% test accuracy.",
      metrics: [{ value: "90.7%", key: "test accuracy" }],
      tags: ["NLP", "Transformers", "BERTweet", "PyTorch"],
      featured: false,
      links: [
        { label: "Report", href: "assets/reports/twitter-sentiment-report.pdf" },
        { label: "Code", href: "#" }
      ]
    },
    {
      title: "Gene Expression Prediction from Chromatin Landscape",
      period: "2024",
      summary:
        "Developed a multimodal model for predicting gene expression from regulatory context around each gene. We combined histone modifications, DNase accessibility, and DNA sequence in a staged CNN + Transformer architecture, using convolutional layers to extract local regulatory features and transformer layers to model longer-range interactions across modalities. The main transformer fused these inputs into a learned latent-token representation, and a second transformer used those latent representations together with a dedicated gene-expression token for final regression. To better match the zero-inflated target distribution and the Spearman-correlation evaluation setting, we also introduced thresholding and robust prediction aggregation.",
      tags: ["Genomics", "Transformers", "Epigenetics", "Sequence Modeling"],
      featured: false,
      links: [
        { label: "Assignment", href: "assets/reports/genomics-assignment.pdf" },
        { label: "Code", href: "#" }
      ]
    },
    {
      title: "Human Motion Prediction with Attention-Augmented Graph Convolutions",
      period: "2024",
      summary:
        "This repository contains our implementation of an attention-augmented Graph Convolutional Network for 3D human motion prediction on the AMASS dataset. The method uses motion attention to retrieve relevant historical subsequences and combines them with a residual GCN in the DCT domain to forecast future poses. We benchmarked the approach against various transformer, recurrent, and graph-based baselines, and it achieved the best performance in our study with 1.69 joint-angle discrepancy on the public test set.",
      metrics: [{ value: "1.69", key: "joint-angle discrepancy" }],
      tags: ["Computer Vision", "Motion Prediction", "GCN", "AMASS"],
      featured: false,
      links: [
        { label: "Report", href: "assets/reports/motion-prediction-report.pdf" },
        { label: "Code", href: "#" }
      ]
    }
  ],

  // Legacy block, not rendered by script.js. Kept for reference.
  research: {
    thesisTitle: "Master's Thesis — Improving LLM Reasoning on Challenging Problems",
    thesisSummary:
      "My master's thesis at ETH Zurich studied how to improve reasoning performance on hard problems using RL post-training and test-time inference. A central theme was how to recover or strengthen learning signals on difficult tasks while preserving robustness and diversity.",
    bullets: [
      "Studied RL post-training for math reasoning with GRPO-based RLVR.",
      "Explored teacher-hint conditioning and minimal-solution-prefix methods to recover learning signal on hard problems.",
      "Evaluated recursive reasoning and refinement methods for challenging reasoning benchmarks."
    ],
    publications: [
      {
        title: "Task Sequencing in Continual Learning",
        venue: "Project report",
        year: "2024",
        href: "assets/reports/task-ordering-report.pdf"
      },
      {
        title: "Text Sentiment Classification with BERTweet and Custom Heads",
        venue: "Project report",
        year: "2024",
        href: "assets/reports/twitter-sentiment-report.pdf"
      },
      {
        title: "Human Motion Prediction with Attention-Augmented GCNs",
        venue: "Project report",
        year: "2024",
        href: "assets/reports/motion-prediction-report.pdf"
      }
    ]
  },

  experience: [
    {
      role: "AI Engineering & Consulting",
      org: "Applied AI · London",
      period: "Apr 2026 – present · part-time",
      summary:
        "Applied AI engineering and consulting for software used in regulated life-sciences manufacturing (GAMP-5 / 21 CFR Part 11 environments).",
      bullets: [
        "Lead AI development for the product.",
        "Build LLM-assisted workflows for regulated documentation, including requirements mapping and traceability."
      ]
    },
    {
      role: "Swiss Civil Service",
      org: "Switzerland",
      period: "2026 – present",
      summary: "Compulsory national service.",
      bullets: []
    },
    {
      role: "Master's Thesis Researcher",
      org: "ETH Zurich · Data Analytics Lab",
      period: "2025 – 2026",
      summary:
        "Researched RL post-training and test-time inference methods for mathematical reasoning.",
      bullets: [
        "Developed a method to mitigate mode collapse in GRPO-based RLVR, preserving entropy and improving sampling diversity.",
        "Recovered RL signal on near-zero-reward problems with teacher hints and minimal solution prefixes.",
        "Evaluated recursive test-time reasoning and self-refinement approaches for improving mathematical reasoning in LLMs, where candidate reasoning chains are iteratively refined and combined to solve difficult benchmarks."
      ]
    },
    {
      role: "Semester Thesis Researcher",
      org: "ETH Zurich × ADIA",
      period: "2024",
      summary:
        "Worked on graph learning for financial prediction using large directed supply-chain graphs.",
      bullets: [
        "Built and evaluated GNN and Graph Transformer models on a large directed graph.",
        "Designed baselines, ablations, and evaluation pipelines for portfolio-relevant downstream signals."
      ]
    },
    {
      role: "Teaching Assistant, Computational Intelligence Lab (CIL)",
      org: "ETH Zurich",
      period: "Feb 2025 – Jun 2025",
      summary:
        "Supported teaching in machine learning coursework at ETH Zurich.",
      bullets: [
        "Led tutorials for ~200 students on linear algebra and optimization for ML.",
        "Taught PyTorch fundamentals.",
        "Introduced course projects and graded final submissions."
      ]
    },
    {
      role: "Data Scientist",
      org: "Funding Circle Ltd",
      period: "Nov 2019 – Aug 2020",
      summary:
        "Worked on portfolio risk analysis, reporting automation, and data infrastructure.",
      bullets: [
        "Implemented regression and clustering methods to analyze portfolio risk.",
        "Automated reporting tools using Python and R.",
        "Implemented data pipelines using AWS.",
        "Participated in hackathons to develop Random Forest models for risk detection."
      ]
    },
    {
      role: "Intern",
      org: "Reply Sytel",
      period: "Apr 2017 – May 2017",
      summary:
        "Worked on software prototypes and technical white papers.",
      bullets: [
        "Wrote front-end and back-end software to showcase new project initiatives.",
        "Wrote white papers on networking and proof-of-stake blockchain technology."
      ]
    }
  ],

  education: [
    {
      degree: "MSc Computer Science",
      org: "ETH Zurich",
      period: "2023 – 2026",
      summary: "Major in Machine Intelligence, minor in Theoretical Computer Science.",
      bullets: [
        "Master's thesis: Improving LLM Reasoning on Challenging Problems (supervised by Dr. Amir Joudaki and Prof. Dr. Thomas Hofmann).",
        "Semester thesis: Improving Investment Strategies with GNNs (supervised by Florian Grötschla, Joel Mathys, and Prof. Dr. Roger Wattenhofer; in collaboration with a leading investment firm, under confidentiality)."
      ]
    },
    {
      degree: "BSc Mathematics",
      org: "ETH Zurich",
      period: "2020 – 2023",
      summary: "Focus areas: number theory and theoretical computer science.",
      bullets: [
        "Selected coursework: Probability Theory, Convex Optimization, Number Theory I & II, Algorithms, Probability and Computing."
      ]
    }
  ],

  notes: [],

  contact: {
    copy:
      "Happy to talk about reasoning in language models, reinforcement learning, and test-time inference — or anything else you think I would find interesting. Email is the fastest way to reach me.",
    links: [
      { label: "Email me", href: "mailto:guivff@gmail.com", style: "primary" },
      { label: "GitHub", href: "https://github.com/guivff", style: "ghost" }
    ]
  },

  footer: {
    text: "© Guiv Farmanfarmaian",
    note: "Built with plain HTML, CSS, and JavaScript for easy GitHub Pages deployment."
  }
};


/*
  OPTIONAL COPY-PASTE TEMPLATES
  -----------------------------
  Keep the current visible site unchanged, but use these templates when you want
  to add more research entries, project cards, notes, or report links later.

  1) RESEARCH ENTRY (Research section)
  Add this inside the `projects` array with `featured: true` and a `group`
  matching one of the keys in `researchGroups` ("current" or "eth").

  {
    title: "New Research Title",
    category: "Independent research · 2026 – present",
    period: "2026 – present",
    summary:
      "Two to four sentences explaining the problem, what you did, and what mattered.",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    featured: true,
    group: "current",
    links: [
      { label: "Code", href: "https://github.com/your-repo" },
      { label: "Report", href: "assets/reports/your-report.pdf" }
    ]
  }

  2) STANDARD PROJECT CARD (Selected Projects section)
  Add this inside the `projects` array and keep `featured: false`.

  {
    title: "New Project Title",
    period: "2026",
    summary:
      "A concise description of the task, method, and result.",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    featured: false,
    links: [
      { label: "Report", href: "assets/reports/your-report.pdf" },
      { label: "Code", href: "https://github.com/your-repo" }
    ]
  }

  3) CURRENT ITEM (compact "Current" section under the hero)
  Add this inside the top-level `current` array. `href` and `linkLabel` are
  optional.

  {
    status: "Programme or dates",
    title: "Short title",
    text: "One sentence on what it is.",
    href: "#research-current",
    linkLabel: "Research entry"
  }

  4) PUBLICATION ENTRY (Publications section)
  Add this inside the top-level `publications` array. Links with an empty
  `href` are skipped, so you can leave `arXiv` blank until the URL exists.

  {
    badge: "Venue 2026",
    title: "Paper title",
    authors: "Farmanfarmaian, Guiv",
    affiliation: "ETH Zurich",
    venue: "Accepted at Venue 2026",
    year: "2026",
    summary: "One or two sentences on the contribution.",
    links: [
      { label: "PDF", href: "assets/papers/your-paper.pdf" },
      { label: "arXiv", href: "" }
    ],
    bibtexKey: "citationkey",
    bibtex: [
      "@inproceedings{citationkey,",
      "  title={Paper title},",
      "  author={Farmanfarmaian, Guiv},",
      "  booktitle={Venue 2026},",
      "  year={2026}",
      "}"
    ].join("\n")
  }

  5) NEWS ENTRY
  Add this inside the top-level `news` array (newest first). An empty array
  hides the banner under the hero.

  {
    date: "Aug 2026",
    dateTime: "2026-08",
    text: "Short announcement",
    href: "#publications",
    linkLabel: "Read the paper entry"
  }

  6) EDUCATION ENTRY
  Add this inside the top-level `education` array.

  {
    degree: "Degree name",
    org: "Institution",
    period: "2020 – 2023",
    summary: "One line on focus or major.",
    bullets: ["Optional detail."]
  }

  7) NOTE CARD
  Add this inside the `notes` array.

  {
    title: "Short note title",
    summary: "One or two sentences describing the note.",
    href: "notes/your-note.html"
  }

  Tip:
  - `featured: true` + `group` => Research section, under that group
  - `featured: false` => Selected Projects section
  - Code links set to `#` are hidden until a real URL is added.
*/
