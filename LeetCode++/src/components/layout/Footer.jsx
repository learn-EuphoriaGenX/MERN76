import { Flame, } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' },
    ],
    Product: [
      { name: 'Problems', href: '#' },
      { name: 'Contest', href: '#' },
      { name: 'Discuss', href: '#' },
      { name: 'Premium', href: '#' },
      { name: 'Mock Interview', href: '#' },
    ],
    Resources: [
      { name: 'Interview Tips', href: '#' },
      { name: 'Learning Resources', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Bug Bounty', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer className="bg-[#0a0c12] border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#f9b13f] rounded flex items-center justify-center text-black font-bold text-2xl">
                L
              </div>
              <span className="text-white font-semibold text-3xl">LeetCode</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Helping millions of developers practice and improve their coding skills.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-white transition"><Flame size={20} /></a>
              <a href="#" className="hover:text-white transition"><Flame size={20} /></a>
              <a href="#" className="hover:text-white transition"><Flame size={20} /></a>
              <a href="#" className="hover:text-white transition"><Flame size={20} /></a>
              <a href="#" className="hover:text-white transition"><Flame size={20} /></a>
              <a href="#" className="hover:text-white transition"><Flame size={20} /></a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], idx) => (
            <div key={idx}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2.5 text-sm">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="hover:text-white transition">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>
            © 2026 LeetCode. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-xs md:text-sm">
            <a href="#" className="hover:text-white transition">Status</a>
            <a href="#" className="hover:text-white transition">Feedback</a>
            <a href="#" className="hover:text-white transition">Contact Us</a>
          </div>

          <div className="text-gray-500 text-xs md:text-sm">
            Made with ❤️ for developers
          </div>
        </div>
      </div>
    </footer>
  );
}