window.siteData = {
  seo: {
    title: "Guiv Farmanfarmaian | ML Research & Engineering",
    description:
      "ETH Zurich ML researcher focused on reasoning in language models, reinforcement learning, and test-time inference. Author of \u201cSelection, Recombination, or a Fresh Solve?\u201d, accepted at the COLM 2026 Workshop on Efficient Reasoning."
  },

  // Short announcements shown in the news banner under the hero.
  // Leave the array empty to hide the banner entirely.
  news: [
    {
      date: "Aug 2026",
      dateTime: "2026-08",
      text: "Paper accepted at the COLM 2026 Workshop on Efficient Reasoning",
      href: "#publications",
      linkLabel: "Read the paper entry"
    }
  ],

  // Peer-reviewed / workshop papers, newest first. Rendered at the top of the
  // Research section, above the research project cards.
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
        "Introduces a candidate-free control for test-time aggregation and shows a sign reversal: conditioning on candidate solutions helps when multiple candidates are correct but hurts when all are wrong, reversing the usual interpretation of \u201call-wrong recovery\u201d.",
      // Links with an empty `href` are skipped when rendering.
      links: [
        {
          label: "PDF",
          href: "assets/papers/farmanfarmaiancolm2026_candidate_free_control.pdf"
        },
        { label: "arXiv", href: "https://arxiv.org/abs/2608.18379" },
        { label: "OpenReview", href: "https://openreview.net/forum?id=kYFPvwqplw" }
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
    eyebrow: "ETH Zurich · Machine Intelligence · Data Analytics Lab",
    tagline: "",
    focusSummary:
      "Reasoning in language models via reinforcement learning, post-training, and test-time recursion.",
    heroFacts: [
      {
        label: "Latest publication",
        value: "COLM 2026 Workshop on Efficient Reasoning"
      },
      {
        label: "Current lab",
        value: "Data Analytics Lab, ETH Zurich"
      },
      {
        label: "Citizenships",
        value: "Swiss · US · Canadian"
      }
    ],
    meta: [
      "MSc Computer Science · ETH Zurich",
      "BSc Mathematics · ETH Zurich",
      "Reasoning · RL · Test-time inference"
    ],
    profileImage: "assets/guivff_pic.jpg"
  },

  links: [
    { label: "CV", href: "assets/GuivFF_CV.pdf", style: "primary" },
    { label: "GitHub", href: "https://github.com/guivff", style: "ghost" },
    { label: "Email", href: "mailto:guivff@gmail.com", style: "ghost" }
  ],

  highlights: [
    { label: "Education", value: "MSc Computer Science · ETH Zurich" },
    { label: "Background", value: "BSc Mathematics · ETH Zurich" },
    { label: "Current research", value: "Stable RL post-training for LLM reasoning" },
    { label: "Latest paper", value: "COLM 2026 Workshop on Efficient Reasoning" }
  ],

  about: [
    "I am a machine learning researcher working on reasoning in large language models. I recently completed my MSc in Computer Science at ETH Zurich, where I also earned a BSc in Mathematics, and I am currently completing my Swiss national service.",
    "My recent research spans reinforcement learning on hard reasoning problems, stabilizing GRPO-based RLVR post-training, and test-time inference. More broadly, I am interested in what it takes to build genuinely intelligent systems — I expect progress to require advances in sample-efficient learning, continual learning, and new model architectures."
  ],

  interests: [
    "Reasoning in language models",
    "Reinforcement learning",
    "RL post-training",
    "Test-time inference",
    "Sample-efficient learning",
    "Continual learning"
  ],

  projects: [
    {
      title: "Stable RL Post-Training for LLM Reasoning",
      category: "ETH Zurich research · Data Analytics Lab · confidential, manuscript in preparation",
      period: "2025 – Present",
      summary:
    "My current research at ETH Zurich develops new methods for stable RL post-training of language models on mathematical reasoning problems. I designed a GRPO variant that prevents RLVR mode collapse, yielding +54% policy entropy, ~9× lower KL divergence vs. GRPO, and +3 pp on unhinted MATH-500 pass@8. Selected technical details remain confidential while the manuscript is in preparation.",
      metrics: [
        { value: "+54%", key: "policy entropy" },
        { value: "~9\u00d7", key: "lower KL vs. GRPO" },
        { value: "+3 pp", key: "MATH-500 pass@8" }
      ],
      tags: ["LLM reasoning", "RL post-training", "RLVR", "Training Stability"],
      featured: true,
      links: []
    },
    {
      title: "RL for Hard Problems with Near-Zero Reward",
      category: "Research project · thesis work",
      period: "2025 – Present",
      summary:
        "Developed a minimal-prefix solution-conditioning method for hard reasoning problems where standard RLVR receives almost no reward signal. The method restores learning signal on problems with zero pass@16 and improves the unhinted target benchmark by +5 pp, directly addressing the cold-start problem in RL for verifiable reasoning.",
      metrics: [
        { value: "+5 pp", key: "unhinted target benchmark" },
        { value: "0", key: "baseline pass@16" }
      ],
      tags: ["RL for hard reasoning", "Sparse reward", "Reasoning", "Learning signal recovery"],
      featured: true,
      links: [
        { label: "Code", href: "https://github.com/guivff/prefix-guided-rlvr" }
        ]
    },
    {
      title: "Test-Time Inference for Mathematical Reasoning",
      category: "Research project · thesis work",
      period: "2025 – Present",
      summary:
        "Implemented and evaluated recursive reasoning, self-refinement, and best-of-N inference strategies on hard mathematical reasoning benchmarks. The project analyzes when additional test-time compute improves reasoning performance, when gains plateau, and how such gains could potentially be distilled into the base model.",
      tags: ["Inference-Time Compute", "Reasoning", "LLMs", "Model Evaluation", "Test-Time Recursion"],
      featured: true,
      links: []
    },
    {
      title: "Supply-Chain Graph Learning (ADIA)",
      category: "Research project · semester thesis",
      period: "2024",
      summary:
        "Built and benchmarked GNN and Graph Transformer models on a large directed supply-chain graph in collaboration with a leading investment firm. The project tested whether graph structure improves financial prediction and downstream portfolio-relevant metrics, with careful ablations and baseline comparisons.",
      tags: ["GNNs", "Graph Transformers", "Finance"],
      featured: true,
      links: []
    },
    {
      title: "Task Sequencing in Continual Learning",
      period: "2024",
      summary:
        "Formulated task sequencing as a graph-optimization problem to reduce catastrophic forgetting in continual learning without changing the learner itself. We introduced a gradient-augmented task-dissimilarity metric by combining curvature-based task interference with gradient alignment, used it to construct similarity-aware task groups, and optimized learning schedules with cut-based ordering objectives. On MNIST-10, the best schedule improved final accuracy from 79.8% to 91.6% and reduced forgetting from 24.3% to 9.4%.",
      metrics: [
        { value: "79.8 \u2192 91.6%", key: "final accuracy, MNIST-10" },
        { value: "24.3 \u2192 9.4%", key: "forgetting" }
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

  research: {
    thesisTitle: "Master's Thesis — Reasoning in LLMs: RLVR & Test-Time Recursion",
    thesisSummary:
      "My current thesis at ETH Zurich studies how to improve reasoning performance on hard problems using RL post-training and test-time inference. A central theme is how to recover or strengthen learning signals on difficult tasks while preserving robustness and diversity.",
    bullets: [
      "Studying RL post-training for math reasoning with GRPO-based RLVR.",
      "Exploring teacher-hint conditioning and minimal-solution-prefix methods to recover learning signal on hard problems.",
      "Evaluating recursive reasoning and refinement methods for challenging reasoning benchmarks."
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
      role: "Master's Thesis Researcher",
      org: "ETH Zurich",
      period: "2025 – Present",
      summary:
        "Researching RL post-training and test-time inference methods for mathematical reasoning.",
      bullets: [
        "Developed a method to mitigate mode collapse in GRPO-based RLVR, hence preserving entropy and improving sampling diversity.",
        "Recovering RL signal on near-zero-reward problems with teacher hints and minimal solution prefixes.",
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
        "Introduced Course Projects and Graded Final Submissions."
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
  to add more featured research, project cards, notes, or report links later.

  1) FEATURED RESEARCH CARD
  Add this inside the `projects` array and keep `featured: true`.

  {
    title: "New Research Title",
    category: "Research project · lab / collaboration",
    period: "2026",
    summary:
      "Two to four sentences explaining the problem, what you did, and what mattered.",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    featured: true,
    links: [
      { label: "Code", href: "https://github.com/your-repo" },
      { label: "Report", href: "assets/reports/your-report.pdf" }
    ]
  }

  2) STANDARD PROJECT CARD
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

  3) NOTE CARD
  Add this inside the `notes` array.

  {
    title: "Short note title",
    summary: "One or two sentences describing the note.",
    href: "notes/your-note.html"
  }

  4) PUBLICATION ENTRY (Research section, above the research project cards)
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

  6) TECHNICAL REPORT / WRITE-UP LINK
  Add this inside `research.publications` if you want another report-style link.

  {
    title: "Report title",
    venue: "Project report",
    year: "2026",
    href: "assets/reports/your-report.pdf"
  }

  Tip:
  - `featured: true` => Research section card
  - `featured: false` => Projects section card
  - You can keep Code links as `#` temporarily, but real URLs are better.
*/
