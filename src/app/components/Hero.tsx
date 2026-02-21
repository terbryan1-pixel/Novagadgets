import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <p className="text-red-600 text-sm font-semibold tracking-wide uppercase mb-2">Elegance In Every Device</p>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Your Trusted Mobile <span className="text-red-600">Gadget Store</span>
            </h1>
            <p className="text-lg text-gray-300">
              Buy, sell, repair, and swap mobile phones with confidence. We offer the best deals on new and used smartphones, accessories, and expert repair services.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg transition-colors">
                Our Services
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761907174062-c8baf8b7edb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lcyUyMGRpc3BsYXl8ZW58MXx8fHwxNzcxNjQ5NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern smartphones display"
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-red-600/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}