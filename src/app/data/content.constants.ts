// ─────────────────────────────────────────────────────────────────────────────
// CONTENT CONSTANTS
// Single source of truth for all static/dummy text across the portfolio site.
// Swap out any value here to update it site-wide.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name:        'Ebenezer Amankwaa',
  firstName:   'Ebenezer',
  tagline:     'Digital Marketer in UAE',
  location:    'Dubai, UAE',
  email:       'hello@ebenezeramankwaa.com',
  phone:       '+971 54 300 6568',
  whatsapp:    'https://wa.me/971543006568',
  social: {
    instagram: 'https://instagram.com/ebenezeramankwaa',
    linkedin:  'https://linkedin.com/in/ebenezeramankwaa',
    tiktok:    'https://tiktok.com/@ebenezeramankwaa',
    youtube:   'https://youtube.com/@ebenezeramankwaa',
  },
} as const;

export const NAV = {
  links: [
    { label: 'Home',      path: '/' },
    { label: 'About',     path: '/about' },
    { label: 'Work',      path: '/work' },
    { label: 'Services',  path: '/services' },
    { label: 'Lifestyle', path: '/lifestyle' },
    { label: 'Contact',   path: '/contact' },
  ],
} as const;

export const META = {
  home: {
    title:       'Daniel Mensah | Digital Marketer in UAE',
    description: 'Marketing strategist based in Dubai helping brands grow through data-driven campaigns, creative content, and performance marketing.',
  },
  about: {
    title:       'About | Daniel Mensah',
    description: 'Learn about Daniel Mensah — his journey, philosophy, skills, and the values that drive his approach to digital marketing.',
  },
  work: {
    title:       'Work | Daniel Mensah',
    description: 'Explore case studies and campaign results across paid advertising, social media, content strategy, and lead generation.',
  },
  services: {
    title:       'Services | Daniel Mensah',
    description: 'Digital marketing services including strategy, paid advertising, content, social media, email marketing, and analytics.',
  },
  lifestyle: {
    title:       'Lifestyle | Daniel Mensah',
    description: 'Life beyond the campaigns — fitness, travel, Dubai living, food, and personal development.',
  },
  contact: {
    title:       'Contact | Daniel Mensah',
    description: 'Get in touch to discuss your next campaign, project, or collaboration.',
  },
} as const;

export const HOME = {
  hero: {
    label:   'Based in Dubai, UAE',
    heading: 'Marketing that moves people and drives results.',
    subtext: 'I help brands across the UAE grow through data-driven strategies, creative content, and digital experiences designed to convert.',
    primaryCta:   "Let's Work Together",
    secondaryCta: 'View My Work',
    badge:        'Based in Dubai',
  },
  about: {
    label:   'ABOUT ME',
    heading: 'Strategy meets creativity.',
    body:    "I'm a digital marketer with over six years of experience working with brands across the Gulf — from luxury real estate and wellness to e-commerce and hospitality. I believe great marketing is equal parts analytical rigour and creative intuition.",
    col1: {
      number:  '01',
      title:   'Experience',
      text:    '6+ years crafting campaigns that have collectively driven millions in revenue across the UAE and GCC markets.',
    },
    col2: {
      number:  '02',
      title:   'Approach',
      text:    'I lead with data and follow with creative. Every campaign starts with understanding the audience deeply before a single post goes live.',
    },
    cta: 'More About Me',
  },
  work: {
    label:   'SELECTED WORK',
    heading: 'A few recent wins.',
    cta:     'View All Projects',
  },
  services: {
    label:   'SERVICES',
    heading: 'What I help brands with.',
  },
  lifestyle: {
    label:   'OUTSIDE WORK',
    heading: 'Fueling creativity and balance.',
    body:    "When I'm not thinking about campaigns and content, you'll probably find me training, exploring somewhere new, trying new food, or learning something that has nothing to do with marketing.",
  },
  testimonials: {
    label:   'KIND WORDS',
    heading: 'What clients say.',
  },
  cta: {
    heading: 'Ready to grow your brand?',
    body:    'Have a project, campaign, or idea in mind? Let\'s build something meaningful together.',
    button:  'Start a Project',
  },
} as const;

export const ABOUT = {
  hero: {
    label:   'ABOUT ME',
    heading: 'I build brands people remember.',
    subtext: "Six years in the industry have taught me that the best marketing doesn't feel like marketing. It tells a story, solves a problem, and earns attention rather than buying it.",
  },
  bio: [
    "Born in Accra and based in Dubai since 2018, I've had the privilege of working across some of the most competitive and creative markets in the world. The UAE's pace — its ambition, its diversity, its appetite for quality — has shaped how I think about every brief I take on.",
    "My background spans performance marketing, brand strategy, and content creation. I've worked in-house at a fast-growing e-commerce brand, run campaigns for luxury hospitality groups, and built organic strategies that turned small accounts into regional voices.",
    "Outside of client work, I invest heavily in my own growth — through fitness, reading, travel, and staying obsessively curious about culture, technology, and what makes people pay attention.",
  ],
  philosophy: {
    label:   'MY PHILOSOPHY',
    heading: 'How I think about marketing.',
    points: [
      { title: 'Audience first.',    text: 'I start with people, not platforms. Understanding who we are talking to shapes every creative and media decision.' },
      { title: 'Data tells, story sells.', text: 'Numbers reveal what is working. Narrative is what makes it work harder. I use both, always.' },
      { title: 'Long-term over short-term.', text: 'Quick wins are satisfying, but sustainable brand equity is what separates great marketing from noise.' },
      { title: 'Creative integrity.', text: 'I push back when an idea compromises the brand. Good clients appreciate the honesty.' },
    ],
  },
  timeline: {
    label:   'CAREER JOURNEY',
    heading: 'How I got here.',
    items: [
      { year: '2018', role: 'Junior Digital Marketer', company: 'Pulse Creative, Dubai',  desc: 'Started my UAE career managing paid social campaigns for retail and hospitality clients across the Gulf.' },
      { year: '2019', role: 'Performance Marketing Specialist', company: 'LuxeStay Group',  desc: 'Led paid media for a luxury short-term rental brand, scaling from 200 to 1,200 bookings per month through Meta and Google Ads.' },
      { year: '2021', role: 'Senior Digital Strategist', company: 'Meridian Agency',  desc: 'Managed a portfolio of 12 brand accounts including real estate, skincare, and F&B, leading a team of three and overseeing AED 4M+ in annual ad spend.' },
      { year: '2023', role: 'Head of Growth Marketing', company: 'Nova Commerce', desc: 'Took ownership of full-funnel strategy for a D2C e-commerce brand, achieving 3.2x ROAS in under six months and growing the email list to 85,000 subscribers.' },
      { year: '2024', role: 'Independent Consultant',  company: 'Self', desc: 'Launched my independent practice, working directly with founders and CMOs on strategy, execution, and team building across the UAE and GCC.' },
    ],
  },
  skills: {
    label:   'CORE SKILLS',
    heading: 'What I bring to the table.',
    items: [
      'Performance Marketing', 'Brand Strategy', 'Content Strategy',
      'Social Media Marketing', 'Email Marketing', 'SEO & SEM',
      'Marketing Analytics', 'Campaign Planning', 'Audience Research',
      'Creative Direction', 'Copywriting', 'Community Building',
    ],
  },
  tools: {
    label:   'TOOLS & PLATFORMS',
    items: [
      'Meta Ads Manager', 'Google Ads', 'TikTok Ads',
      'HubSpot', 'Klaviyo', 'Mailchimp',
      'Google Analytics 4', 'Looker Studio', 'Semrush',
      'Canva', 'CapCut', 'Notion',
      'Ahrefs', 'Hotjar', 'Zapier',
    ],
  },
  industries: {
    label:   'INDUSTRIES',
    items: [
      'Luxury Real Estate', 'Hospitality & Travel', 'E-commerce & D2C',
      'Health & Fitness', 'Beauty & Skincare', 'Food & Beverage',
      'Technology & SaaS', 'Education & Coaching', 'Fashion & Lifestyle',
    ],
  },
  certifications: [
    'Meta Certified Digital Marketing Associate',
    'Google Ads Certified — Search, Display & Video',
    'HubSpot Inbound Marketing Certification',
    'Google Analytics 4 Certification',
    'CXL Growth Marketing Certified',
  ],
  lifestyle: {
    label:   'BEYOND MARKETING',
    heading: "There's more to me than campaigns.",
    body:    "Marketing is how I make my living. Fitness, travel, food, and culture are how I stay sharp. I believe the best marketers are those who stay genuinely curious about the world — and I use everything I experience outside of work to inform how I think inside of it.",
  },
} as const;

export const WORK = {
  label:   'MY WORK',
  heading: 'Work that creates impact.',
  subtext: 'A selection of campaigns, strategies, and brand stories built across the UAE and beyond.',
  filters: ['All', 'Paid Advertising', 'Social Media', 'Content', 'Strategy', 'Lead Generation', 'E-commerce'],
  cta:     'View Case Study',
} as const;

export const PROJECT_DETAIL = {
  sections: {
    overview:       'Project Overview',
    challenge:      'The Challenge',
    strategy:       'The Strategy',
    execution:      'Execution',
    results:        'Results',
    lessons:        'Key Takeaways',
    next:           'Next Project',
  },
} as const;

export const SERVICES = {
  label:   'SERVICES',
  heading: 'What I help brands with.',
  subtext: 'Whether you need a full growth strategy or a specific campaign executed with precision, I bring the thinking and the doing together.',
  cta: {
    heading: 'Not sure what you need?',
    body:    "Let's have a conversation. I'll help you figure out what the right first step looks like for your brand.",
    button:  "Let's Talk",
  },
} as const;

export const LIFESTYLE = {
  label:   'LIFE BEYOND WORK',
  heading: 'Life beyond the work.',
  subtext: "I believe who you are outside of work shapes what you bring to it. Here is a look into the things that keep me balanced, grounded, and inspired.",
  categories: [
    { id: 'fitness',  label: 'Fitness & Training' },
    { id: 'dubai',   label: 'Dubai Life' },
    { id: 'style',   label: 'Style' },
    { id: 'brand',   label: 'Personal Brand' },
    { id: 'personal',label: 'Personal Moments' },
  ],
  blurb: "When I'm not thinking about campaigns and content, you'll probably find me training, exploring somewhere new, trying new food, or learning something that has nothing to do with marketing.",
  social: {
    heading: 'Follow the journey.',
    body:    'Day-to-day life, travel, and behind-the-scenes marketing — all on my socials.',
  },
} as const;

export const CONTACT = {
  label:   'GET IN TOUCH',
  heading: "Let's build something meaningful.",
  subtext: 'Have a project, campaign, or idea in mind? I work with a small number of clients at a time so I can give every project the attention it deserves.',
  form: {
    name:        { label: 'Full Name',     placeholder: 'Your full name' },
    email:       { label: 'Email Address', placeholder: 'your@email.com' },
    company:     { label: 'Company',       placeholder: 'Your company or brand (optional)' },
    projectType: {
      label:   'Project Type',
      options: [
        'Paid Advertising Campaign',
        'Social Media Strategy',
        'Content Strategy',
        'Full Digital Strategy',
        'Lead Generation',
        'Email Marketing',
        'Analytics & Reporting',
        'Other',
      ],
    },
    budget: {
      label:   'Budget Range',
      options: [
        'Under AED 5,000 / month',
        'AED 5,000 – 15,000 / month',
        'AED 15,000 – 30,000 / month',
        'AED 30,000+ / month',
        'One-off project — let\'s discuss',
      ],
    },
    message:     { label: 'Message',      placeholder: 'Tell me about your project, goals, and timeline...' },
    submit:      'Send Message',
    sending:     'Sending...',
  },
  success: {
    heading: 'Message sent!',
    body:    "Thank you for reaching out. I'll be in touch within one business day.",
  },
  info: {
    heading: 'Other ways to connect.',
    email:   SITE.email,
    phone:   SITE.phone,
    location: SITE.location,
    whatsapp: '+971 54 300 6568',
    response: 'Typically responds within 24 hours.',
  },
} as const;

export const FOOTER = {
  tagline:   'Helping brands grow through strategy, creativity, and data.',
  copyright: `© ${new Date().getFullYear()} Ebenezer Amankwaah. All rights reserved.`,
  built:     'Built with passion in Dubai.',
} as const;

export const CTA_DEFAULT = {
  heading: 'Ready to grow your brand?',
  body:    "Have a project, campaign, or idea in mind? Let's build something meaningful together.",
  button:  'Start a Project',
  link:    '/contact',
} as const;
