export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDetails: string;
  features: string[];
  image: string;
  size: 'normal' | 'wide' | 'tall';
}

export interface Project {
  id: string;
  title: string;
  type: string;
  location: string;
  timeline: string;
  description: string;
  scope: string[];
  beforeImage: string;
  afterImage: string;
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  projectType: string;
  rating: number;
  content: string;
  image?: string;
}

export interface EstimateRequest {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  description: string;
  files?: FileList;
}
