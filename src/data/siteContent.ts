import type { SiteContent } from '../types/content'

export const siteContent: SiteContent = {
  profile: {
    name: 'Fei Zha',
    role: 'Student',
    targetRole: 'Open to creative frontier AI development',
    intro:
      'I am a MS. student in USTC who loves Math, AI techniques and ACG culture',
    emotionalTagline:
      'A small corner of the internet for ideas, visuals, and projects I want to keep close.',
    actions: [
      { label: 'See My World', href: '#about' },
      { label: 'Featured Projects', href: '#projects' },
      { label: 'Say Hello', href: '#contact' }
    ],
    stats: [
      { label: 'Mood', value: 'Soft, bright, and curious' },
      { label: 'Focus', value: 'CV, AI' },
      { label: 'Now', value: 'Learning at school' },
      { label: 'Style', value: 'Dreamy but practical' }
    ]
  },
  mood: {
    intro:
      'I am a first-year M.S. student at the University of Science and Technology of China, advised by Prof. Juyong Zhang. My current research focuses on 3D vision and diffusion generation. I received my B.S. in Computational Mathematics from the Graphics & Geometric Computing Lab at the University of Science and Technology of China (USTC).',
    cards: [
      {
        title: 'What I enjoy building',
        description:
          'Personal websites, polished interfaces, and small tools that turn ideas into something visible and shareable.'
      },
      {
        title: 'What I notice first',
        description:
          'Typography, color temperature, spacing rhythm, and whether an interface feels welcoming instead of merely functional.'
      },
      {
        title: 'What I want more of',
        description:
          'Projects where design taste, frontend craft, and a little emotional texture can live in the same place.'
      }
    ],
    tags: ['soft ui', 'dreamy layout', 'frontend craft', 'visual mood', 'gentle motion']
  },
  experience: [
    {
      role: 'MS.Student',
      organization: 'the Univeristy of Science and Technology',
      period: '2025.9 - present',
      technologies: ['AI', '3D vision', 'Diffusion'],
      summary:
        'Used personal projects to explore layout, frontend polish, and the balance between visual atmosphere and practical usability.',
      outcomes: [
        'Built small experiments that mix personal aesthetics with real interface structure.',
        'Developed a stronger sense for turning abstract visual ideas into working pages.'
      ]
    },
    {
      role: 'Student',
      organization: 'the University of Science and Technology, Math Department',
      period: '2021.9 - 2025.6',
      technologies: ['Computational Mathmatics', 'Optimaization', 'Computer Graphics'],
      summary:
        'Worked on internal interfaces and UI refinements, focusing on consistency and a smoother day-to-day product experience.',
      outcomes: [
        'Turned repeated interface patterns into reusable building blocks.',
        'Helped make feature delivery feel cleaner and easier to maintain.'
      ]
    },
    {
      role: 'Student',
      organization: 'HuaiNing high school,Anhui Province',
      period: '2018.9 - 2021.6',
      technologies: ['Physics', 'Math', 'English'],
      summary:
        '',
      outcomes: [
      ]
    }
  ],
  projects: [
    {
      name: 'MoEPOT',
      purpose:
        'A Mixture-of-Experts operator transformer for large-scale PDE pre-training and better cross-domain generalization.',
      contribution:
        'Contributed to research, experimentation, and evaluation around sparse expert routing and operator modeling.',
      techStack: ['PyTorch', 'Transformer', 'Mixture-of-Experts', 'Neural Operators'],
      result:
        'Demonstrated strong zero-shot transfer performance across heterogeneous PDE datasets with efficient activated parameters.',
      mood: 'research spotlight',
      imageUrl: 'https://raw.githubusercontent.com/haiyangxin/MoEPOT/main/resources/MoE-POT.png',
      imageAlt: 'MoEPOT project preview',
      codeUrl: 'https://github.com/haiyangxin/MoEPOT'
    }
  ],
  publications: [
    {
      title: 'Mixture-of-Experts Operator Transformer for Large-Scale PDE Pre-Training',
      venue: 'NeurIPS 2025 Poster (MoE-POT)',
      year: '2025',
      link: 'https://neurips.cc/virtual/2025/loc/san-diego/poster/118221',
      authors: ['Hong Wang', 'Haiyang Xin', 'Jie Wang', 'Xuanze Yang', 'Fei Zha', 'huanshuo dong', 'Yan Jiang'],
      abstract:
        'Pre-training has proven effective for PDE neural operators, but heterogeneous datasets and dense model scaling remain challenging. MoE-POT introduces a sparse-activated Mixture-of-Experts operator transformer with a layer-wise router that selects 4 routed experts from 16 plus 2 shared experts. Pre-trained from 30M to 0.5B parameters on six public PDE datasets, the 90M activated-parameter model reports up to 40% lower zero-shot error than existing 120M activated-parameter baselines.'
    },
    {
      title: 'Easy3E: Feed-Forward 3D Asset Editing via Rectified Voxel Flow',
      venue: 'CVPR 2026 (Easy3E)',
      year: '2026',
      link: 'https://arxiv.org/abs/2602.21499',
      authors: ['Shimin Hu', 'Yuanyi Wei', 'Fei Zha', 'Yudong Guo', 'Juyong Zhang'],
      abstract:
        'Easy3E proposes a feed-forward 3D editing framework built on TRELLIS that edits 3D models from a single editing view. It introduces Voxel FlowEdit in sparse voxel latent space for globally consistent 3D deformation and a normal-guided single-to-multi-view module to restore high-frequency appearance details. Experiments show fast, globally consistent, and high-fidelity 3D model editing.'
    }
  ],
  contact: [
    { label: 'Email', href: 'mailto:fey@example.com' },
    { label: 'GitHub', href: 'https://github.com/Char-1232323' },
    { label: 'Pages', href: 'https://char-1232323.github.io/zhafei.io/' }
  ]
}
