import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description?: string;
  icon: LucideIcon;
}

export interface SectorItem {
  title: string;
  image: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
}