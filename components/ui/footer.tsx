import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-[#050A1C] border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">The Entrepreneurship Club</h3>
            <p className="text-blue-200 mb-4">Fostering innovation and entrepreneurship at PESU.</p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-blue-100 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-blue-200 hover:text-blue-100 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-blue-200 hover:text-blue-100 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-blue-200 hover:text-blue-100 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#archive" className="text-blue-200 hover:text-blue-100 transition-colors">
                  Archive
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <p className="text-blue-200 mb-2">Email: info@eclub.com</p>
            <p className="text-blue-200 mb-4">Location: PESU Campus, Bangalore</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get in Touch</Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-900/30 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            &copy; {new Date().getFullYear()} The Entrepreneurship Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
