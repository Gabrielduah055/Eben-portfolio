export const SITE = {
  name: 'Ebenezer Amankwaa',
  firstName: 'Ebenezer',
  tagline: 'Digital Marketer & Content Creator',
  experience: '6 months of hands-on learning and practice',
  email: 'ebenezeramankwaa908@gmail.com',
  social: {
    instagram: 'https://www.instagram.com/amankwaa3712/',
    youtube: 'https://www.youtube.com/@ebenezeramankwaa-b8e',
    threads: 'https://www.threads.com/@amankwaa3712',
    facebook: 'https://www.facebook.com/share/19WJXTtBTN/?mibextid=wwXIfr',
    linkedin: 'https://www.linkedin.com/in/ebenezer-amankwaa-172679305',
  },
} as const;

export const NAV = {
  links: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Work', path: '/work' },
    { label: 'Services', path: '/services' },
    { label: 'Outside Work', path: '/lifestyle' },
    { label: 'Contact', path: '/contact' },
  ],
} as const;

export const META = {
  home: {
    title: 'Ebenezer Amankwaa | Digital Marketer',
    description: 'Digital marketing, content creation, social media, email, and customer engagement by Ebenezer Amankwaa.',
  },
  about: {
    title: 'About | Ebenezer Amankwaa',
    description: 'Meet Ebenezer Amankwaa, an early-career digital marketer focused on useful, audience-first creative work.',
  },
  work: {
    title: 'Work | Ebenezer Amankwaa',
    description: 'Explore the marketing deliverables and creative capabilities Ebenezer is developing.',
  },
  services: {
    title: 'Services | Ebenezer Amankwaa',
    description: 'Social media, content creation, Canva design, email marketing, copywriting, and basic marketing analytics.',
  },
  lifestyle: {
    title: 'Outside Work | Ebenezer Amankwaa',
    description: 'A more personal view of Ebenezer beyond marketing work.',
  },
  contact: {
    title: 'Contact | Ebenezer Amankwaa',
    description: 'Contact Ebenezer Amankwaa about marketing opportunities, creative projects, and collaborations.',
  },
} as const;

export const HOME = {
  hero: {
    label: 'Digital marketer & content creator',
    heading: 'Marketing that connects.',
    subtext: 'I create clear digital content that helps brands earn attention and build meaningful customer relationships.',
    primaryCta: 'Get in touch',
    secondaryCta: 'View capabilities',
  },
  about: {
    heading: 'Early in the journey. Serious about the craft.',
    body: 'I am six months into digital marketing, building practical skills across content, social media, email, design, and audience engagement.',
    experienceTitle: 'Experience',
    experienceText: 'Six months of active learning, practice, and portfolio development.',
    approachTitle: 'Approach',
    approachText: 'Understand the audience, make the message clear, then create content with a purpose.',
    cta: 'Meet Ebenezer',
  },
  work: {
    heading: 'What I can create for a brand.',
    body: 'Useful marketing assets shaped around the audience, platform, and campaign goal.',
    cta: 'View capabilities',
  },
  services: {
    heading: 'A growing digital toolkit.',
    body: 'From social content to email and analytics, these are the skills I am actively putting into practice.',
    cta: 'Explore services',
  },
  lifestyle: {
    heading: 'Outside the campaign.',
    body: 'Personal style, new places, and everyday moments keep my creative eye active beyond the screen.',
    cta: 'See outside work',
  },
  social: {
    heading: 'Find me online.',
    body: 'Follow my content, professional growth, and day-to-day updates across my social channels.',
  },
} as const;

export const ABOUT = {
  hero: {
    label: 'About Ebenezer',
    heading: 'Curious, creative, and ready to grow.',
    subtext: 'I am building a career in digital marketing through focused learning, consistent practice, and real creative output.',
  },
  bio: [
    'I am an early-career digital marketer with six months of experience learning how brands attract attention, communicate clearly, and build stronger customer relationships online.',
    'My interests sit where strategy meets content. I enjoy shaping social posts, promotional visuals, short videos, email campaigns, and copy that gives people a clear reason to respond.',
    'I am continuing to learn through hands-on practice with Canva, CapCut, Meta Business Suite, email marketing platforms, and the core metrics behind campaign performance.',
  ],
  principles: [
    { title: 'Audience first', text: 'Start with the people the message needs to reach, not the platform or trend.' },
    { title: 'Clear over clever', text: 'Good content should be easy to understand and strong enough to remember.' },
    { title: 'Learn through making', text: 'Every brief is a chance to practise, review the result, and improve the next version.' },
  ],
  skills: {
    heading: 'What I am building confidence in.',
    items: [
      'Social Media Marketing',
      'Social Media Advertising',
      'Content Creation',
      'Photography & Videography',
      'Video & Photo Editing',
      'Canva Design',
      'Email Marketing',
      'Copywriting',
      'Basic Marketing Strategy',
      'Marketing Analytics',
    ],
  },
  tools: {
    heading: 'Tools I use',
    items: ['Canva', 'CapCut', 'Meta Business Suite', 'Email marketing platforms'],
  },
  lifestyle: {
    heading: 'A creative eye beyond work.',
    body: 'I draw ideas from personal style, places, people, and the visual details of everyday life.',
  },
} as const;

export const WORK = {
  label: 'Capabilities',
  heading: 'Practical marketing output, built with care.',
  subtext: 'My portfolio is growing. These are the deliverables I can currently create and support while I build deeper campaign experience.',
} as const;

export const SERVICES = {
  label: 'Services & skills',
  heading: 'Ways I can support your marketing.',
  subtext: 'Focused support for social content, creative production, customer communication, and entry-level campaign work.',
  cta: {
    heading: 'Have an opportunity in mind?',
    body: 'I am open to junior marketing roles, creative briefs, and collaborations that offer room to contribute and grow.',
    button: 'Get in touch',
  },
} as const;

export const LIFESTYLE = {
  label: 'Outside work',
  heading: 'The person behind the portfolio.',
  subtext: 'A look at the moments, places, and personal style that shape how I see and create.',
  blurb: 'Creativity does not begin and end with a brief. I stay observant, curious, and open to inspiration in everyday life.',
  social: {
    heading: 'Keep up with the journey.',
    body: 'See more of my content, interests, and progress on my social pages.',
  },
} as const;

export const CONTACT = {
  label: 'Contact',
  heading: 'Let us create something useful.',
  subtext: 'For junior marketing opportunities, content support, or a creative collaboration, send me an email or connect on social media.',
  emailLabel: 'Email Ebenezer',
  response: 'I will reply as soon as I can.',
} as const;

export const FOOTER = {
  tagline: 'Digital marketing, content, and customer-focused creative work.',
  copyright: `© ${new Date().getFullYear()} Ebenezer Amankwaa. All rights reserved.`,
} as const;

export const CTA_DEFAULT = {
  heading: 'Have an opportunity in mind?',
  body: 'I am open to junior marketing roles, creative briefs, and collaborations.',
  button: 'Get in touch',
  link: '/contact',
} as const;
