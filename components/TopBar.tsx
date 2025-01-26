import { Phone, Facebook, Twitter, Instagram } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-blue-900 text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Phone size={16} className="mr-2" />
          <span>Toll Free: 1-800-123-4567</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Facebook">
            <Facebook size={16} />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter size={16} />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a href="/contact" className="text-sm">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
