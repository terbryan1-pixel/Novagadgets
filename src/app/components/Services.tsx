import { Smartphone, Repeat, Wrench, Package } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Smartphone,
    title: 'New & Used Phones',
    description: 'Wide selection of latest smartphones and quality pre-owned devices at competitive prices.',
    image: 'https://images.unsplash.com/photo-1761907174062-c8baf8b7edb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lcyUyMGRpc3BsYXl8ZW58MXx8fHwxNzcxNjQ5NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Package,
    title: 'Accessories',
    description: 'Premium phone cases, screen protectors, chargers, earphones, and more accessories.',
    image: 'https://images.unsplash.com/photo-1647334864689-e140efbfd51f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3MTY0OTc3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Wrench,
    title: 'Phone Repair',
    description: 'Expert repair services for all brands. Screen replacement, battery change, and more.',
    image: 'https://images.unsplash.com/photo-1769763227060-726b7b926bf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMHJlcGFpciUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzcxNjQ5NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Repeat,
    title: 'Phone Swaps',
    description: 'Trade in your old phone for a new one. Get the best value for your device.',
    image: 'https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZXhjaGFuZ2UlMjB0cmFkZXxlbnwxfHx8fDE3NzE2NDk3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for your mobile phone, all in one place
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute top-4 right-4 bg-red-600 p-3 rounded-full">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <button className="mt-4 text-red-600 hover:text-red-700 font-semibold">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
