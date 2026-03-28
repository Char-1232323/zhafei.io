import type { SiteContent } from '../types/content'

export const siteContent: SiteContent = {
  profile: {
    name: 'Fey',
    role: 'Dreamy Builder / Student',
    targetRole: 'Open to creative frontend, product, and interaction-focused opportunities',
    intro:
      'I like building interfaces that feel soft, thoughtful, and quietly memorable, especially when design and code can support the same mood.',
    emotionalTagline:
      'A small corner of the internet for ideas, visuals, and projects I want to keep close.',
    actions: [
      { label: 'See My World', href: '#mood' },
      { label: 'Featured Projects', href: '#projects' },
      { label: 'Say Hello', href: '#contact' }
    ],
    stats: [
      { label: 'Mood', value: 'Soft, bright, and curious' },
      { label: 'Focus', value: 'Frontend + visual storytelling' },
      { label: 'Now', value: 'Learning, prototyping, refining' },
      { label: 'Style', value: 'Dreamy but practical' }
    ]
  },
  mood: {
    intro:
      'I enjoy products that feel gentle on the surface but precise underneath. I care about atmosphere, clarity, and the tiny details that make a page feel alive.',
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
      role: 'Frontend Intern',
      organization: 'Product Studio Team',
      period: '2025.06 - 2025.08',
      technologies: ['React', 'TypeScript', 'Vite'],
      summary:
        'Worked on internal interfaces and UI refinements, focusing on consistency and a smoother day-to-day product experience.',
      outcomes: [
        'Turned repeated interface patterns into reusable building blocks.',
        'Helped make feature delivery feel cleaner and easier to maintain.'
      ]
    },
    {
      role: 'Independent Maker',
      organization: 'Personal Projects',
      period: '2024 - present',
      technologies: ['React', 'Figma', 'CSS', 'Python'],
      summary:
        'Used personal projects to explore layout, frontend polish, and the balance between visual atmosphere and practical usability.',
      outcomes: [
        'Built small experiments that mix personal aesthetics with real interface structure.',
        'Developed a stronger sense for turning abstract visual ideas into working pages.'
      ]
    }
  ],
  projects: [
    {
      name: 'Dream Poster Homepage',
      purpose:
        'A personal homepage that feels more like a mood board and a self-introduction than a plain resume page.',
      contribution:
        'Shaped the page structure, visual tone, and component system to support a softer and brighter identity.',
      techStack: ['React', 'TypeScript', 'CSS Modules'],
      result:
        'Created a homepage concept that can hold personality, projects, and contact information at the same time.',
      mood: 'soft editorial'
    },
    {
      name: 'Interface Notes Lab',
      purpose: 'A small collection of interface studies exploring color, motion, and card composition.',
      contribution:
        'Designed and implemented the interaction patterns, testing how tiny visual changes shift the feeling of a page.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      result: 'Turned visual experiments into reusable patterns for future frontend work.',
      mood: 'playful studies'
    },
    {
      name: 'Creative Toolkit Experiments',
      purpose: 'A set of small prototypes for writing, visual organization, and idea capture.',
      contribution:
        'Built lightweight interfaces and explored how minimal tools can still feel emotionally warm.',
      techStack: ['React', 'Vite', 'Local data'],
      result: 'Collected a practical base of components and ideas for future personal products.',
      mood: 'quiet utility'
    }
  ],
  skills: [
    {
      title: 'Design and Frontend',
      items: ['React', 'TypeScript', 'Responsive UI', 'CSS composition', 'Interaction polish']
    },
    {
      title: 'Tools I Reach For',
      items: ['Vite', 'Git', 'Figma', 'JavaScript', 'Python']
    },
    {
      title: 'Things I Care About',
      items: ['Visual hierarchy', 'Readable structure', 'Gentle motion', 'Personal expression', 'Maintainable code']
    }
  ],
  education: [
    {
      school: 'Example University',
      program: 'B.S. in Computer Science',
      period: '2022 - 2026',
      highlights: ['Exploring human-computer interaction, software engineering, and interface design.']
    }
  ],
  contact: [
    { label: 'Email', href: 'mailto:fey@example.com' },
    { label: 'GitHub', href: 'https://github.com/Char-1232323' },
    { label: 'Pages', href: 'https://char-1232323.github.io/zhafei.io/' }
  ]
}
