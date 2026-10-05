import React from 'react';
import { 
  Megaphone, 
  Palette, 
  Telescope, 
  Sparkles, 
  HeartHandshake, 
  Users, 
  Compass 
} from 'lucide-react';

const iconMap = {
  Megaphone,
  Palette,
  Telescope,
  Sparkles,
  HeartHandshake,
  Users,
};

export default function TeamIcon({ name, className = "w-6 h-6", size }) {
  const IconComponent = iconMap[name] || Compass;
  return <IconComponent className={className} size={size} />;
}
