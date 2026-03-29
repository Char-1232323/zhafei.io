import type { LanguageCode } from '../i18n/language'
import type { SiteContent } from '../types/content'

export const siteContentEn: SiteContent = {
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
    sectionLabel: 'About Me',
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
  experienceSection: {
    title: 'Experience',
    subtitle: "Where I've had the chance to build, learn, and grow alongside talented people."
  },
  experience: [
    {
      role: 'MS.Student',
      organization: 'Math Department, the Univeristy of Science and Technology',
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
      organization: 'Math Department, the University of Science and Technology',
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
      organization: 'Huaining middle school,Anhui Province',
      period: '2018.9 - 2021.6',
      technologies: ['Physics', 'Math', 'English'],
      summary: '',
      outcomes: []
    }
  ],
  publicationsSection: {
    title: 'Publications',
    subtitle: 'Selected research papers with author list and abstracts.'
  },
  projectsSection: {
    title: 'Featured Projects',
    subtitle: 'A collection of projects where I got to shape both the feeling and the function.',
    scrollerLabel: 'Featured projects horizontal scroller',
    scrollerRoleDescription: 'horizontal scroller'
  },
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
  contactSection: {
    title: "Let's Connect",
    message:
      "I'd love to hear from you - whether it's a question, a collaboration, or just to say hello.",
    copiedStatus: 'No mail app detected, email copied',
    copyFailedStatus: 'Unable to copy email, please copy manually'
  },
  contact: [
    { label: 'Email', href: 'mailto:zf210033@mail.ustc.edu.cn' },
    { label: 'GitHub', href: 'https://github.com/Char-1232323' },
    { label: 'CV', href: 'https://char-1232323.github.io/zhafei.io/' }
  ]
}

export const siteContentZh: SiteContent = {
  profile: {
    name: 'Fei Zha',
    role: '学生',
    targetRole: '对前沿且富有创造力的 AI 开发机会保持开放',
    intro: '我是中国科学技术大学的一名硕士生，热爱数学、人工智能技术和 ACG 文化。',
    emotionalTagline: '这里是我想认真收藏的想法、视觉灵感与项目的小角落。',
    actions: [
      { label: '看看我的世界', href: '#about' },
      { label: '精选项目', href: '#projects' },
      { label: '和我聊聊', href: '#contact' }
    ],
    stats: [
      { label: '状态', value: '柔和、明亮、充满好奇' },
      { label: '方向', value: '计算机视觉、人工智能' },
      { label: '近况', value: '在校学习与研究' },
      { label: '风格', value: '梦幻但务实' }
    ]
  },
  mood: {
    sectionLabel: '关于我',
    intro:
      '我目前是中国科学技术大学一年级硕士生，导师是张举勇教授。当前研究方向聚焦于三维视觉与扩散生成。我在中国科学技术大学图形与几何计算实验室完成了计算数学学士学位。',
    cards: [
      {
        title: '我喜欢做什么',
        description: '个人网站、精致界面，以及能把想法变成可见成果的小工具。'
      },
      {
        title: '我最先注意什么',
        description: '字体、色温、留白节奏，以及一个界面是否不仅能用而且让人愿意停留。'
      },
      {
        title: '我想持续深入的方向',
        description: '让设计审美、前端手艺与细腻情绪质感共存的项目。'
      }
    ],
    tags: ['柔和界面', '梦感布局', '前端打磨', '视觉氛围', '轻微动效']
  },
  experienceSection: {
    title: '经历',
    subtitle: '这些阶段让我在与优秀伙伴协作中不断构建、学习与成长。'
  },
  experience: [
    {
      role: '硕士研究生',
      organization: '中国科学技术大学数学学院',
      period: '2025.9 - 至今',
      technologies: ['AI', '3D vision', 'Diffusion'],
      summary: '通过个人项目探索页面布局、前端细节打磨，以及视觉氛围与实用性的平衡。',
      outcomes: ['完成了多项将个人审美与真实界面结构结合的小型实验。', '提升了将抽象视觉概念落地为可用页面的能力。']
    },
    {
      role: '本科生',
      organization: '中国科学技术大学数学学院',
      period: '2021.9 - 2025.6',
      technologies: ['Computational Mathmatics', 'Optimaization', 'Computer Graphics'],
      summary: '参与内部界面与 UI 体验优化工作，重点关注一致性与日常使用流畅度。',
      outcomes: ['将重复界面模式整理为可复用模块。', '帮助功能交付过程更清晰且更易维护。']
    },
    {
      role: '学生',
      organization: '安徽省怀宁中学',
      period: '2018.9 - 2021.6',
      technologies: ['Physics', 'Math', 'English'],
      summary: '',
      outcomes: []
    }
  ],
  publicationsSection: {
    title: '出版物',
    subtitle: '部分研究论文，附作者列表与摘要。'
  },
  projectsSection: {
    title: '精选项目',
    subtitle: '这些项目让我同时塑造体验感受与功能落地。',
    scrollerLabel: '精选项目横向滚动区域',
    scrollerRoleDescription: '横向滚动'
  },
  projects: [
    {
      name: 'MoEPOT',
      purpose: '面向大规模 PDE 预训练与跨域泛化的 Mixture-of-Experts operator transformer。',
      contribution: '参与稀疏专家路由与算子建模相关的研究、实验与评估工作。',
      techStack: ['PyTorch', 'Transformer', 'Mixture-of-Experts', 'Neural Operators'],
      result: '在异构 PDE 数据集上实现了高效激活参数下的强零样本迁移表现。',
      mood: '研究聚焦',
      imageUrl: 'https://raw.githubusercontent.com/haiyangxin/MoEPOT/main/resources/MoE-POT.png',
      imageAlt: 'MoEPOT 项目预览图',
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
        '预训练已被证明对 PDE 神经算子有效，但异构数据集与稠密模型扩展仍具挑战。MoE-POT 提出稀疏激活的 Mixture-of-Experts operator transformer，并使用逐层路由器从 16 个路由专家中选择 4 个，同时配合 2 个共享专家。在六个公开 PDE 数据集上以 30M 到 0.5B 参数规模预训练后，其 90M 激活参数模型相比现有 120M 激活参数基线，零样本误差最高可降低 40%。'
    },
    {
      title: 'Easy3E: Feed-Forward 3D Asset Editing via Rectified Voxel Flow',
      venue: 'CVPR 2026 (Easy3E)',
      year: '2026',
      link: 'https://arxiv.org/abs/2602.21499',
      authors: ['Shimin Hu', 'Yuanyi Wei', 'Fei Zha', 'Yudong Guo', 'Juyong Zhang'],
      abstract:
        'Easy3E 基于 TRELLIS 提出前馈式 3D 资产编辑框架，可从单个编辑视角完成 3D 模型编辑。方法在稀疏体素潜空间中引入 Voxel FlowEdit 以实现全局一致的三维形变，并通过法线引导的单视图到多视图模块恢复高频外观细节。实验结果表明该方法兼具速度、全局一致性与高保真质量。'
    }
  ],
  contactSection: {
    title: '联系我',
    message: '无论你是想提问、合作，还是只是打个招呼，我都很欢迎。',
    copiedStatus: '未检测到邮件应用，邮箱地址已复制',
    copyFailedStatus: '邮箱复制失败，请手动复制'
  },
  contact: [
    { label: '邮箱', href: 'mailto:zf210033@mail.ustc.edu.cn' },
    { label: 'GitHub', href: 'https://github.com/Char-1232323' },
    { label: 'CV', href: 'https://char-1232323.github.io/zhafei.io/' }
  ]
}

export function getSiteContent(language: LanguageCode): SiteContent {
  return language === 'zh' ? siteContentZh : siteContentEn
}
