window.siteData = {
  seo: {
    title: "Guiv Farmanfarmaian | ML Research Engineer / Scientist",
    description:
      "ETH Zurich ML researcher focused on reasoning in language models, reinforcement learning, and test-time inference."
  },

  personal: {
    name: "Guiv Farmanfarmaian",
    shortName: "GF",
    eyebrow: "ETH Zurich · Machine Intelligence · Data Analytics Lab",
    tagline: "",
    focusSummary:
      "Reasoning in language models via reinforcement learning, post-training, and test-time recursion.",
    heroFacts: [
      {
        label: "Positions sought",
        value: "ML Research Engineer · ML Research Scientist"
      },
      {
        label: "Citizenships",
        value: "Swiss · US"
      },
      {
        label: "Current lab",
        value: "Data Analytics Lab, ETH Zurich"
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
    { label: "Education", value: "ETH Zurich · MSc CS (AI)" },
    { label: "Background", value: "BSc Mathematics" },
    { label: "Current thesis", value: "Reasoning in LLMs: RLVR & Test-Time Recursion" },
    { label: "Roles", value: "ML Research Engineer · ML Research Scientist" }
  ],

  about: [
    "I recently graduated with a Master’s in Computer Science from ETH Zurich, where I previously earned a BSc in Mathematics, and I am currently completing my mandatory Swiss national service.",
    "My recent work has focused on reasoning in language models, including reinforcement learning for hard reasoning problems, test-time recursion, and improving post-training methods such as GRPO. More broadly, I am interested in building truly intelligent systems. I believe progress toward this will require advances in sample-efficient learning, continual learning, and novel model architectures."
  ],

  interests: [
    "Reasoning in language models",
    "Reinforcement learning",
    "RL post-training",
    "Test-time inference",
    "Sample-efficient learning",
    "Continual learning"
  ],

  goals: [
    "ML Research Engineer roles with strong experimental and implementation depth.",
    "ML Research Scientist roles in reasoning, reinforcement learning, and language models.",
    "Work spanning training, evaluation, post-training, and careful empirical analysis.",
    "Teams that value both research taste and high-quality execution." 
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
        "Investigating collapse prevention in GRPO-based RL for hard reasoning tasks.",
        "Recovering RL signal on near-zero-reward problems with teacher hints and minimal solution prefixes.",
        "Evaluating recursive reasoning and refinement methods on difficult math benchmarks."
      ]
    },
    {
      role: "Semester Thesis Researcher",
      org: "ETH Zurich × leading investment firm",
      period: "2024",
      summary:
        "Worked on graph learning for portfolio-relevant metrics using large directed supply-chain graphs.",
      bullets: [
        "Built and evaluated GNN and Graph Transformer models on a large directed graph.",
        "Ran ablations and baseline comparisons on financial prediction and downstream portfolio metrics."
      ]
    },
    {
      role: "Teaching Assistant, Computational Intelligence Lab (CIL)",
      org: "ETH Zurich",
      period: "Feb 2025 – Jun 2025",
      summary:
        "Supported teaching in machine learning coursework at ETH Zurich.",
      bullets: [
        "Helped students with technically demanding machine learning material.",
        "Supported the course through teaching and guidance."
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
      "I am especially interested in ML Research Engineer, ML Research Scientist, Applied Scientist, and ML Engineer roles. Feel free to reach out about opportunities, collaboration, or interesting problems.",
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
