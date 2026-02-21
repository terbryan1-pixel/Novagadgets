import { Star, Shield, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'All our products come with warranty and quality assurance',
  },
  {
    icon: Star,
    title: 'Best Prices',
    description: 'Competitive prices on all new and used mobile devices',
  },
  {
    icon: Clock,
    title: 'Fast Service',
    description: 'Quick repairs and efficient customer service',
  },
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Professional technicians with years of experience',
  },
];

export function Features() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="text-red-600">Nova Gadgets?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best mobile phone solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
