import { Phone, Mail, MapPin, Globe, Instagram, Facebook, Twitter, YouTube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About / School Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Sunshine Kids School</h3>
          <p className="text-sm">
            Inspiring young minds to learn, grow, and shine every day. We provide a safe, creative,
            and nurturing environment for children to thrive.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 hover:text-blue-300 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-pink-300 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <YouTube className="w-6 h-6 hover:text-red-500 transition-colors" />
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> 123 Sunshine Street, Bengaluru, India
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@sunshinekids.com
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4" /> www.sunshinekids.com
            </li>
          </ul>
        </div>

        {/* Opening Hours / Quick Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Info</h3>
          <ul className="space-y-2 text-sm">
            <li>Monday - Friday: 8:00 AM - 4:00 PM</li>
            <li>Saturday: 8:00 AM - 1:00 PM</li>
            <li>Sunday: Closed</li>
            <li>Follow us on social media for updates!</li>
          </ul>
        </div>

        {/* Google Map Embed */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Location</h3>
          <div className="w-full h-40 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456!2d77.594562!3d12.971599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17f1234567%3A0x1234567890abcdef!2sSunshine%20Kids%20School!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-white/30 pt-4 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Sunshine Kids School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
