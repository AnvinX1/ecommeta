import { Globe, Mail, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-6 h-6" />
              <span className="text-lg font-bold">Metaverse Commerce</span>
            </div>
            <p className="text-gray-400">
              Strategic analysis and insights for the future of virtual commerce.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Analysis Sections</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#overview" className="hover:text-white transition-colors">Current State</a></li>
              <li><a href="#opportunities" className="hover:text-white transition-colors">Opportunities</a></li>
              <li><a href="#challenges" className="hover:text-white transition-colors">Challenges</a></li>
              <li><a href="#future" className="hover:text-white transition-colors">Future Outlook</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Key Insights</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <FileText className="w-4 h-4" />
                <span>1,500+ word analysis</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>Strategic recommendations</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Metaverse Commerce Analysis. Strategic insights for digital transformation.</p>
        </div>
      </div>
    </footer>
  );
}