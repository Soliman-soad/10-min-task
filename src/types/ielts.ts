// TypeScript interfaces for IELTS API response
export interface Medium {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export type Seo = any[]; // Update if you have a structure

export interface CtaText {
  name: string;
  value: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[]; // Can be refined further if needed
}

export interface Data {
  slug: string;
  id: number;
  title: string;
  description: string; // HTML string
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
  // Add other fields as needed
} 