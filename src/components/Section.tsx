import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  dark?: boolean;
}

export default function Section({ id, title, children, dark = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-20 ${dark ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">{title}</h2>
        {children}
      </div>
    </section>
  );
}