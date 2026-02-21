import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'iPhone 17 Pro Max',
    price: 'UGX 4,000,000',
    condition: 'New',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1761907174062-c8baf8b7edb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lcyUyMGRpc3BsYXl8ZW58MXx8fHwxNzcxNjQ5NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24',
    price: 'UGX 2,500,000',
    condition: 'New',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1761907174062-c8baf8b7edb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lcyUyMGRpc3BsYXl8ZW58MXx8fHwxNzcxNjQ5NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    name: 'iPhone 13',
    price: 'UGX 1,000,OOO',
    condition: 'Used - Excellent',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1761907174062-c8baf8b7edb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lcyUyMGRpc3BsYXl8ZW58MXx8fHwxNzcxNjQ5NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    name: 'Google Pixel 8 Pro',
    price: 'UGX1,600,000',
    condition: 'New',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1761907174062-c8baf8b7edb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lcyUyMGRpc3BsYXl8ZW58MXx8fHwxNzcxNjQ5NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    name: 'Iphone 16',
    price: 'UGX 2,500,000',
    condition: 'New',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1761907174062-c8baf8b7edb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lcyUyMGRpc3BsYXl8ZW58MXx8fHwxNzcxNjQ5NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    name: 'Samsung S22 Ultra',
    price: 'UGX 1,000,000',
    condition: 'Used - Excellent',
    rating: 5,
    image: 'https://5.imimg.com/data5/ANDROID/Default/2025/1/478641129/OI/BH/DD/227561583/product-jpeg-500x500.jpg',
  },
];

export function Products() {
  return (
    <section id="products" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-red-600">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our collection of new and pre-owned smartphones
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm rounded-full">
                  {product.condition}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-black">{product.price}</span>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
