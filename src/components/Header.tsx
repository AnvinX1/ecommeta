import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <Globe className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold">Metaverse Commerce</h1>
              <p className="text-sm text-gray-400">Strategic Analysis</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#overview" className="hover:text-gray-300 transition-colors">Overview</a>
            <a href="#opportunities" className="hover:text-gray-300 transition-colors">Opportunities</a>
            <a href="#challenges" className="hover:text-gray-300 transition-colors">Challenges</a>
            <a href="#future" className="hover:text-gray-300 transition-colors">Future Outlook</a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col space-y-4">
              <a href="#overview" className="hover:text-gray-300 transition-colors">Overview</a>
              <a href="#opportunities" className="hover:text-gray-300 transition-colors">Opportunities</a>
              <a href="#challenges" className="hover:text-gray-300 transition-colors">Challenges</a>
              <a href="#future" className="hover:text-gray-300 transition-colors">Future Outlook</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}