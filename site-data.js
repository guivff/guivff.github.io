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
      title: "Reasoning in LLMs with RLVR and Test-Time Recursion",
      category: "ETH Zurich master’s thesis · Data Analytics Lab",
      period: "2025–2026",
      summary:
        "Studied how RL post-training and test-time inference can improve mathematical reasoning in language models. The work examines GRPO-style RLVR failure modes on hard tasks, including weak learning signal, entropy collapse, and sparse or near-zero rewards, and evaluates interventions such as teacher-hint conditioning, minimal solution prefixes, and recursive refinement.",
      tags: ["LLM reasoning", "RLVR", "GRPO", "Test-time inference", "Evaluation"],
      featured: true,
      links: []
    },
    {
      title: "Confidential Supply-Chain Graph Learning",
      category: "Semester thesis · confidential industry collaboration",
      period: "2024",
      summary:
        "Built and benchmarked GNN and Graph Transformer models on a large directed supply-chain graph in collaboration with an institutional investment partner. The project evaluated whether relational structure could improve financial prediction and portfolio-relevant downstream signals. Dataset details, code, metrics, and results are confidential.",
      tags: ["GNNs", "Graph Transformers", "Financial ML", "Ablations"],
      featured: true,
      links: []
    },
    {
      title: "Task Sequencing in Continual Learning",
      category: "Technical report · continual learning",
      period: "2024",
      summary:
        "Formulated task sequencing as a graph-optimization problem to reduce catastrophic forgetting without changing the learner itself. We combined curvature-based task interference with gradient alignment to construct similarity-aware task groups and optimize learning schedules. On MNIST-10, the best schedule improved final accuracy from 79.8% to 91.6% and reduced forgetting from 24.3% to 9.4%.",
      tags: ["Continual Learning", "Catastrophic Forgetting", "Task Similarity", "Optimization"],
      featured: true,
      links: [
        { label: "Report", href: "assets/reports/task-ordering-report.pdf" }
      ]
    },
    {
      title: "Text Sentiment Classification with BERTweet and Custom Heads",
      category: "Technical report · NLP",
      period: "2024",
      summary:
        "Developed a transformer-based sentiment classifier for noisy Twitter text. The system combined tweet-specific preprocessing, BERT-family fine-tuning, custom classification heads, and ensemble methods. We ran ablations over duplicate voting, hashtag segmentation, slang normalization, additive attention, self-attention, and KAN-style heads. The final system achieved 90.7% test accuracy.",
      tags: ["NLP", "Transformers", "BERTweet", "PyTorch", "Ablations"],
      featured: false,
      links: [
        { label: "Report", href: "assets/reports/twitter-sentiment-report.pdf" }
      ]
    },
    {
      title: "Gene Expression Prediction from Chromatin Landscape",
      category: "Technical report · genomics ML",
      period: "2024",
      summary:
        "Built a multimodal model for gene-expression prediction from DNA sequence, histone modifications, and DNase accessibility. The architecture used CNN layers for local regulatory features and transformer layers for longer-range multimodal interactions, then added thresholding and robust aggregation to better match the zero-inflated target distribution and Spearman-correlation evaluation setting.",
      tags: ["Genomics", "Transformers", "Epigenetics", "Sequence Modeling"],
      featured: false,
      links: [
        { label: "Report", href: "assets/reports/genomics-assignment.pdf" }
      ]
    },
    {
      title: "Human Motion Prediction with Attention-Augmented Graph Convolutions",
      category: "Technical report · sequence modeling",
      period: "2024",
      summary:
        "Implemented an attention-augmented Graph Convolutional Network for 3D human motion prediction on the AMASS dataset. The method used motion attention to retrieve relevant historical subsequences and combined them with a residual GCN in the DCT domain to forecast future poses. It achieved the best performance in our study with 1.69 joint-angle discrepancy on the public test set.",
      tags: ["Computer Vision", "Motion Prediction", "GCN", "AMASS"],
      featured: false,
      links: [
        { label: "Report", href: "assets/reports/motion-prediction-report.pdf" }
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

  notes: [],

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
