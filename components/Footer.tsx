import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">We are your trusted wholesale partner, providing quality products at competitive prices.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-white">Products</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><Phone size={16} className="mr-2" /> 1-800-123-4567</li>
              <li className="flex items-center"><Mail size={16} className="mr-2" /> info@wholesaleportal.com</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Twitter"><Twitter /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-300">
          © 2023 Wholesale Portal. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

