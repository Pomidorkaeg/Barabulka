export interface Coach {
  id: string;
  name: string;
  position: string;
  age: number;
  nationality: string;
  photo: string;
  experience: number;
  biography: string;
  achievements: string[];
  specializations: string[];
  socialLinks: {
    instagram?: string;
    twitter?: string;
    vk?: string;
  };
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
} 