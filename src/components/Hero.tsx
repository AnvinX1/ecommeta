import { TrendingUp, Zap, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Metaverse E-commerce
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A comprehensive analysis of opportunities and challenges in virtual commerce
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-2 text-gray-700">
              <TrendingUp className="w-5 h-5" />
              <span>Market Growth Analysis</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Zap className="w-5 h-5" />
              <span>Technical Infrastructure</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Target className="w-5 h-5" />
              <span>Strategic Insights</span>
            </div>
          </div>
          <div className="bg-black text-white p-8 rounded-lg inline-block">
            <p className="text-lg font-semibold mb-2">Market Projection</p>
            <p className="text-3xl font-bold">$800B - $1.3T</p>
            <p className="text-gray-300">by 2030</p>
          </div>
        </div>
      </div>
    </section>
  );
}