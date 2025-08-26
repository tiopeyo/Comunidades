
import React from 'react';
import { Feather } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Feather className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-stone-800">Sabiduría Ancestral, Futuro Digital</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#oportunidades" className="text-base font-medium text-stone-500 hover:text-stone-900 transition-colors">Oportunidades</a>
            <a href="#desafios" className="text-base font-medium text-stone-500 hover:text-stone-900 transition-colors">Desafíos y Ética</a>
            <a href="#contacto" className="text-base font-medium text-stone-500 hover:text-stone-900 transition-colors">Contacto</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
