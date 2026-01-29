import React, { useState } from 'react'
import { ShoppingCart, Heart, Star, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight, Check, Plus, Minus } from 'lucide-react'
import './styles/bayer-theme.css'

function App() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('M')
  const [isFavorite, setIsFavorite] = useState(false)

  const product = {
    name: 'Bayer Premium Healthcare Monitor',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    images: [
      'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7659568/pexels-photo-7659568.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Advanced healthcare monitoring device with precision sensors and real-time data tracking. Designed for professional and home use.',
    features: [
      'Real-time health monitoring',
      'Bluetooth connectivity',
      '24/7 data tracking',
      'Medical-grade accuracy',
      'Long battery life',
      'Water resistant'
    ],
    specifications: {
      'Weight': '250g',
      'Battery Life': '48 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Display': '2.4" OLED',
      'Memory': '1GB',
      'Warranty': '2 years'
    }
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta))
  }

  return (
    <div className="min-h-screen lmnt-theme-surface-bg">
      {/* Header */}
      <header className="lmnt-theme-primary-bg lmnt-theme-on-primary shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold">Bayer Healthcare</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="lmnt-theme-on-primary-active hover:lmnt-theme-on-primary transition">Products</a>
                <a href="#" className="lmnt-theme-on-primary-active hover:lmnt-theme-on-primary transition">Solutions</a>
                <a href="#" className="lmnt-theme-on-primary-active hover:lmnt-theme-on-primary transition">Support</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="lmnt-theme-on-primary hover:lmnt-theme-on-primary-active transition p-2 rounded-full">
                <Heart className="w-6 h-6" />
              </button>
              <button className="lmnt-theme-on-primary hover:lmnt-theme-on-primary-active transition p-2 rounded-full relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 lmnt-theme-secondary-bg lmnt-theme-on-secondary text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 lmnt-theme-on-surface text-sm">
          <a href="#" className="hover:lmnt-theme-primary transition">Home</a>
          <span>/</span>
          <a href="#" className="hover:lmnt-theme-primary transition">Healthcare Devices</a>
          <span>/</span>
          <span className="lmnt-theme-primary font-medium">Monitor</span>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative lmnt-theme-background-bg rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className={`absolute top-4 right-4 p-3 rounded-full shadow-lg transition ${
                  isFavorite ? 'lmnt-theme-danger-bg' : 'lmnt-theme-background-bg'
                }`}
              >
                <Heart className={`w-6 h-6 ${isFavorite ? 'lmnt-theme-on-danger fill-current' : 'lmnt-theme-danger'}`} />
              </button>
              <button 
                onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 lmnt-theme-background-bg p-2 rounded-full shadow-lg hover:lmnt-theme-surface-variant-bg transition"
                disabled={selectedImage === 0}
              >
                <ChevronLeft className="w-6 h-6 lmnt-theme-on-surface" />
              </button>
              <button 
                onClick={() => setSelectedImage(Math.min(product.images.length - 1, selectedImage + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 lmnt-theme-background-bg p-2 rounded-full shadow-lg hover:lmnt-theme-surface-variant-bg transition"
                disabled={selectedImage === product.images.length - 1}
              >
                <ChevronRight className="w-6 h-6 lmnt-theme-on-surface" />
              </button>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === idx 
                      ? 'lmnt-theme-primary-border shadow-md' 
                      : 'border-transparent hover:lmnt-theme-primary-border'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-24 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold lmnt-theme-on-surface mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'lmnt-theme-secondary fill-current' : 'lmnt-theme-on-surface'}`}
                    />
                  ))}
                  <span className="ml-2 lmnt-theme-on-surface font-medium">{product.rating}</span>
                </div>
                <span className="lmnt-theme-on-surface">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-4">
              <span className="text-4xl font-bold lmnt-theme-primary">${product.price}</span>
              <span className="text-2xl lmnt-theme-on-surface line-through">${product.originalPrice}</span>
              <span className="lmnt-theme-success-bg lmnt-theme-on-success px-3 py-1 rounded-full text-sm font-medium">
                Save 25%
              </span>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 lmnt-theme-success" />
              <span className="lmnt-theme-success font-medium">In Stock - Ships within 24 hours</span>
            </div>

            {/* Description */}
            <p className="lmnt-theme-on-surface text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div>
              <label className="block lmnt-theme-on-surface font-medium mb-3">Select Size</label>
              <div className="flex space-x-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-lg border-2 font-medium transition ${
                      selectedSize === size
                        ? 'lmnt-theme-primary-bg lmnt-theme-on-primary lmnt-theme-primary-border'
                        : 'lmnt-theme-background-bg lmnt-theme-on-surface lmnt-theme-primary-border hover:lmnt-theme-surface-variant-bg'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block lmnt-theme-on-surface font-medium mb-3">Quantity</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="lmnt-theme-surface-variant-bg lmnt-theme-on-surface p-3 rounded-lg hover:lmnt-theme-primary-bg hover:lmnt-theme-on-primary transition"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="text-2xl font-bold lmnt-theme-on-surface w-12 text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="lmnt-theme-surface-variant-bg lmnt-theme-on-surface p-3 rounded-lg hover:lmnt-theme-primary-bg hover:lmnt-theme-on-primary transition"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full lmnt-theme-primary-bg lmnt-theme-on-primary py-4 rounded-lg font-bold text-lg hover:lmnt-theme-primary-variant-bg transition shadow-lg">
                Add to Cart
              </button>
              <button className="w-full lmnt-theme-secondary-bg lmnt-theme-on-secondary py-4 rounded-lg font-bold text-lg hover:lmnt-theme-secondary-variant-bg transition shadow-lg">
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="lmnt-theme-surface-variant-bg rounded-xl p-6 space-y-3">
              <h3 className="font-bold lmnt-theme-on-surface text-lg mb-4">Key Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 lmnt-theme-success flex-shrink-0 mt-0.5" />
                    <span className="lmnt-theme-on-surface">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Tabs */}
        <div className="mt-16">
          <div className="border-b lmnt-theme-primary-border">
            <div className="flex space-x-8">
              <button className="lmnt-theme-primary font-medium pb-4 border-b-2 lmnt-theme-primary-border">
                Specifications
              </button>
              <button className="lmnt-theme-on-surface hover:lmnt-theme-primary pb-4 transition">
                Reviews
              </button>
              <button className="lmnt-theme-on-surface hover:lmnt-theme-primary pb-4 transition">
                Shipping
              </button>
            </div>
          </div>

          <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="lmnt-theme-background-bg rounded-lg p-6 shadow-md">
                <div className="lmnt-theme-on-surface font-medium mb-2">{key}</div>
                <div className="lmnt-theme-primary text-xl font-bold">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="lmnt-theme-surface-variant-bg rounded-xl p-6 flex items-start space-x-4">
            <div className="lmnt-theme-primary-bg lmnt-theme-on-primary p-3 rounded-lg">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold lmnt-theme-on-surface mb-1">Free Shipping</h4>
              <p className="lmnt-theme-on-surface text-sm">On orders over $100</p>
            </div>
          </div>
          <div className="lmnt-theme-surface-variant-bg rounded-xl p-6 flex items-start space-x-4">
            <div className="lmnt-theme-secondary-bg lmnt-theme-on-secondary p-3 rounded-lg">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold lmnt-theme-on-surface mb-1">2 Year Warranty</h4>
              <p className="lmnt-theme-on-surface text-sm">Full coverage included</p>
            </div>
          </div>
          <div className="lmnt-theme-surface-variant-bg rounded-xl p-6 flex items-start space-x-4">
            <div className="lmnt-theme-success-bg lmnt-theme-on-success p-3 rounded-lg">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold lmnt-theme-on-surface mb-1">30-Day Returns</h4>
              <p className="lmnt-theme-on-surface text-sm">Hassle-free returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="lmnt-theme-primary-variant-bg lmnt-theme-on-primary mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Bayer Healthcare</h3>
            <p className="lmnt-theme-on-primary-inactive">Science For A Better Life</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App