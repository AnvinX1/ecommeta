import { ReactNode } from 'react';
import { Video as LucideIcon } from 'lucide-react';

interface CardProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  dark?: boolean;
}

export default function Card({ icon: Icon, title, children, dark = false }: CardProps) {
  return (
    <div className={`p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
      dark 
        ? 'bg-white text-black border-gray-300 hover:border-black' 
        : 'bg-black text-white border-gray-700 hover:border-white'
    }`}>
      <div className="flex items-center space-x-3 mb-4">
        <Icon className="w-6 h-6" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className={dark ? 'text-gray-700' : 'text-gray-300'}>
        {children}
      </div>
    </div>
  );
}