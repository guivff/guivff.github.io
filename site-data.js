window.siteData = {
  seo: {
    title: "Guiv Farmanfarmaian | ML Research Engineer",
    description:
      "ETH Zurich ML research engineer focused on LLM reasoning, RL post-training, test-time inference, graph learning, and careful empirical evaluation."
  },

  personal: {
    name: "Guiv Farmanfarmaian",
    shortName: "GF",
    eyebrow: "ETH Zurich · ML Research Engineering · Language-Model Reasoning",
    tagline: "ML research engineer focused on reasoning in language models, RL post-training, and test-time inference.",
    focusSummary:
      "Reasoning in language models via reinforcement learning, post-training, test-time recursion, and rigorous evaluation.",
    heroFacts: [
      {
        label: "Research focus",
        value: "LLM reasoning · RL post-training · test-time inference"
      },
      {
        label: "Background",
        value: "ETH MSc Computer Science · ETH BSc Mathematics"
      },
      {
        label: "Roles sought",
        value: "ML Research Engineer · Applied Scientist · ML Engineer"
      }
    ],
    meta: [
      "MSc Computer Science · ETH Zurich",
      "BSc Mathematics · ETH Zurich",
      "Reasoning · RL · Evaluation"
    ],
    profileImage: "assets/guivff_pic.jpg"
  },

  links: [
    { label: "CV", href: "assets/GuivFF_CV.pdf", style: "primary" },
    { label: "GitHub", href: "https://github.com/guivff", style: "ghost" },
    { label: "Email", href: "mailto:guivff@gmail.com", style: "ghost" }
  ],

  highlights: [
    { label: "Education", value: "ETH Zurich · MSc CS (AI)" },
    { label: "Research", value: "LLM reasoning · RLVR · test-time inference" },
    { label: "Technical depth", value: "Transformers · GNNs · evaluation pipelines" },
    { label: "Target roles", value: "ML Research Engineer · Applied Scientist" }
  ],

  about: [
    "I recently completed a Master’s in Computer Science at ETH Zurich, where I previously earned a BSc in Mathematics, and I am currently completing mandatory Swiss national service.",
    "My recent work focuses on reasoning in language models, especially reinforcement-learning-based post-training, sparse-reward reasoning problems, and test-time recursion. More broadly, I am interested in building intelligent systems that learn efficiently, adapt continually, and are evaluated with careful empirical methodology."
  ],

  interests: [
    "Reasoning in language models",
    "Reinforcement learning",
    "RL post-training",
    "Test-time inference",
    "Graph learning",
    "Continual learning",
    "Sample-efficient learning"
  ],

  projects: [
    {
      title: "Master’s Thesis Research — Reasoning in LLMs: RLVR & Test-Time Recursion",
      category: "ETH Zurich research · Data Analytics Lab",
      period: "2025 – Present",
      summary:
        "My current research at ETH Zurich focuses on improving reasoning in language models through reinforcement learning. In particular, I study limitations of GRPO-based post-training, including entropy collapse, weak learning signal on hard tasks, and how interventions such as teacher-hint conditioning can improve robustness and learning efficiency.",
      tags: ["LLM reasoning", "RL post-training", "RLVR", "Training Stability"],
      featured: true,
      links: []
    },
    {
      title: "RL for Hard Problems with Near-Zero Reward",
      category: "Research project · ongoing thesis work",
      period: "2025 – Present",
      summary:
        "Investigating how to recover learning signal when standard RL produces almost no reward on very difficult reasoning tasks. Current work explores teacher hints and minimal solution prefixes to make hard examples learnable instead of simply uninformative.",
      tags: ["RL for hard reasoning", "Sparse reward", "Reasoning", "Learning signal recovery"],
      featured: true,
      links: []
    },
    {
      title: "Test-Time Inference for Mathematical Reasoning",
      category: "Research project · ongoing thesis work",
      period: "2025 – Present",
      summary:
        "Evaluating recursive reasoning, refinement, and compute-allocation strategies at inference time for difficult math benchmarks. The goal is to understand when extra inference compute actually improves reasoning quality and when it merely adds cost.",
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
      tags: ["Computer Vision", "Motion Prediction", "GCN", "AMASS"],
      featured: false,
      links: [
        { label: "Report", href: "assets/reports/motion-prediction-report.pdf" },
        { label: "Code", href: "#" }
      ]
    }
  ],

  technicalReports: [
    {
      title: "Task Sequencing in Continual Learning",
      venue: "Technical report",
      year: "2024",
      href: "assets/reports/task-ordering-report.pdf"
    },
    {
      title: "Text Sentiment Classification with BERTweet and Custom Heads",
      venue: "Technical report",
      year: "2024",
      href: "assets/reports/twitter-sentiment-report.pdf"
    },
    {
      title: "Gene Expression Prediction from Chromatin Landscape",
      venue: "Technical report",
      year: "2024",
      href: "assets/reports/genomics-assignment.pdf"
    },
    {
      title: "Human Motion Prediction with Attention-Augmented GCNs",
      venue: "Technical report",
      year: "2024",
      href: "assets/reports/motion-prediction-report.pdf"
    }
  ],

  experience: [
    {
      role: "Master’s Thesis Researcher",
      org: "ETH Zurich · Data Analytics Lab",
      period: "2025–2026",
      summary:
        "Completed research on RL post-training and test-time inference methods for mathematical reasoning in language models.",
      bullets: [
        "Investigated GRPO-style RLVR failure modes on hard reasoning tasks, including weak learning signal and entropy collapse.",
        "Explored teacher-hint conditioning and minimal solution prefixes to recover learning signal on sparse-reward problems.",
        "Evaluated recursive reasoning and refinement methods for difficult mathematical reasoning benchmarks."
      ]
    },
    {
      role: "Semester Thesis Researcher",
      org: "ETH Zurich × confidential institutional investment partner",
      period: "2024",
      summary:
        "Worked on graph learning for financial prediction using large directed supply-chain graphs.",
      bullets: [
        "Built and evaluated GNN and Graph Transformer models on a large directed graph.",
        "Designed baselines, ablations, and evaluation pipelines for portfolio-relevant downstream signals.",
        "Kept dataset details, code, quantitative metrics, and results confidential."
      ]
    },
    {
      role: "Teaching Assistant, Computational Intelligence Lab",
      org: "ETH Zurich",
      period: "Feb 2025 – Jun 2025",
      summary:
        "Supported implementation-heavy machine learning coursework at ETH Zurich.",
      bullets: [
        "Helped students debug modeling, evaluation, and experimental-design questions.",
        "Guided students through technically demanding ML project work and course material."
      ]
    },
    {
      role: "Data Scientist",
      org: "Funding Circle Ltd",
      period: "Nov 2019 – Aug 2020",
      summary:
        "Worked on portfolio risk analysis, reporting automation, and data infrastructure.",
      bullets: [
        "Built Python/R reporting automation for recurring portfolio risk analysis workflows.",
        "Applied regression and clustering methods to analyze portfolio behavior and risk patterns.",
        "Implemented AWS-backed data pipelines and contributed to Random Forest prototypes for risk detection."
      ]
    },
    {
      role: "Software Intern",
      org: "Reply Sytel",
      period: "Apr 2017 – May 2017",
      summary:
        "Built software prototypes and wrote technical research material.",
      bullets: [
        "Developed front-end and back-end prototypes for new project initiatives.",
        "Wrote technical white papers on networking and proof-of-stake blockchain technology."
      ]
    }
  ],

notes: [
  {
    title: "Notes coming soon",
    summary:
      "I plan to use this section for short technical notes on language-model reasoning, RL post-training, and related experiments."
  }
],

  contact: {
    copy:
      "I am interested in ML Research Engineer, Applied Scientist, ML Engineer, and early research scientist roles, especially where rigorous experimentation and strong implementation matter.",
    links: [
      { label: "Email me", href: "mailto:guivff@gmail.com", style: "primary" },
      { label: "GitHub", href: "https://github.com/guivff", style: "ghost" },
      { label: "CV", href: "assets/GuivFF_CV.pdf", style: "ghost" }
    ]
  },

  footer: {
    text: "© Guiv Farmanfarmaian",
    note: "Built with plain HTML, CSS, and JavaScript for easy GitHub Pages deployment."
  }
};
