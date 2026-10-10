export interface SocialLinks {
  facebook: string;
  x: string;
  linkedin: string;
}

export interface SiteSettings {
  firmName: string;
  tagline: string;
  heroHeadline: string;
  heroSubline: string;
  trustLine: string;
  logo: string;
  siteUrl: string;
  phone: string;
  email: string;
  whatsappNumber: string;
  whatsappPrefill: string;
  address: string;
  mapEmbed: string;
  officeHours: string;
  social: SocialLinks;
  videoUrl: string;
  videoPoster: string;
  defaultOgImage: string;
  copyrightText: string;
  brandStatement: string;
  generalDisclaimer: string;
  cookieBannerText: string;
}

export interface NavItem {
  label: string;
  href: string;
  order: number;
  visible: boolean;
  children?: NavItem[];
}

export interface NavigationConfig {
  items: NavItem[];
  ctaButton: {
    label: string;
    href: string;
  };
}

export interface PageSection {
  type: string;
  title?: string;
  content?: string;
  items?: string[];
}

export interface PageRecord {
  slug: string;
  title: string;
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  noindex: boolean;
  background: string;
  ogImage: string;
  sections: PageSection[];
}

export interface ServiceRecord {
  slug: string;
  name: string;
  category: string;
  summary: string;
  intro: string;
  howWeHelp: string[];
  faq: { question: string; answer: string }[];
  image: string;
  background: string;
  flagship: boolean;
  order: number;
  relatedTeam: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  isManagingPartner: boolean;
  quote: string;
  practiceAreas: string[];
  bio: string;
  photo: { src: string; width: number; height: number; alt: string };
  linkedin: string;
  email: string;
  order: number;
}

export interface ReviewRecord {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  date: string;
  serviceRef: string;
  approved: boolean;
  featured: boolean;
  order: number;
}

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  featuredImage: string;
  author: string;
  category: string;
  tags: string[];
  publishDate: string;
  draft: boolean;
}

export interface FaqRecord {
  id: string;
  question: string;
  answer: string;
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export interface FooterConfig {
  columns: FooterColumn[];
  legalLinks: { label: string; href: string }[];
}

export interface BackgroundRecord {
  id: string;
  name: string;
  image: string;
  focusPosition: string;
  alt: string;
}

export interface RedirectRule {
  from: string;
  to: string;
  permanent: boolean;
}

export interface StringsRecord {
  bookConsultation: string;
  chatWhatsApp: string;
  viewAllServices: string;
  readMore: string;
  formLabels: {
    fullName: string;
    phone: string;
    areaOfLaw: string;
    message: string;
    send: string;
    copyEnquiry: string;
    search: string;
  };
  errors: {
    required: string;
    invalidEmail: string;
    shortMessage: string;
  };
}
