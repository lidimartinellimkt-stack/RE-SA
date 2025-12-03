import { 
  Factory, 
  Flame, 
  Leaf, 
  Sprout, 
  Recycle, 
  Droplets, 
  FlaskConical, 
  Lightbulb, 
  Droplet, 
  Truck, 
  RotateCcw, 
  FileX, 
  BadgeCheck 
} from 'lucide-react';
import { ServiceItem, ContactInfo } from './types';

export const CONTACT_INFO: ContactInfo = {
  phone: "(16) 3202-1446",
  whatsapp: "(16) 99277-2146",
  email: "comercial@reusa.com.br",
  address: "Av. Alfeu Martini, 770, Distrito Industrial — Jaboticabal/SP",
  hours: "08h às 18h"
};

export const SERVICES: ServiceItem[] = [
  { title: "Blendagem para coprocessamento", icon: Factory },
  { title: "Incineração com recuperação energética", icon: Flame },
  { title: "Biodigestão", icon: Leaf },
  { title: "Compostagem", icon: Sprout },
  { title: "Produção de CDR", icon: Recycle },
  { title: "Tratamento de efluentes industriais", icon: Droplets },
  { title: "Tratamento de resíduos químicos", icon: FlaskConical },
  { title: "Descontaminação de lâmpadas", icon: Lightbulb },
  { title: "Reciclagem e reciclagem de óleos", icon: Droplet },
  { title: "Logística reversa", icon: Truck },
  { title: "Remanufatura reversa", icon: RotateCcw },
  { title: "Destruição de documentos confidenciais", icon: FileX },
  { title: "Operador homologado de logística reversa", icon: BadgeCheck },
];