export interface Project {
  id: number; title: string; description: string; technologies: string[]; features: string[];
  categories: string[]; image?: string; github?: string; liveDemo?: string;
}
export interface SkillGroup { category: string; items: string[] }
export interface TimelineItem { title: string; subtitle?: string; period?: string; details?: string[]; tags?: string[] }
export interface Internship {
  organization: string; title: string; type: string; status: string; duration: string;
  skills: string[]; description: string; certificate?: string;
}
export interface Achievement { title: string; organization: string; date?: string; credentialId?: string; link?: string }
