import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext'; // Adjust path to your context

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  const links =[
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="sticky top-0 w-full z-50 backdrop-blur-xl border-b border-white/10 shadow-sm bg-[#04044A]">
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-6 py-4">
          
          {/* LEFT SIDE: Logo + Links */}
          <div className="flex items-center gap-12">
            <img 
              alt="Logo" 
              className="h-10 w-auto object-contain brightness-0 invert" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcz8suMjFuMj0xc0Xi-sjKJmsEUGGFc-qJ5mF6KX8LY3Ncnk67cAia8HN3AJz4VpauX7c2QlcvluxYlzlbU0D5nDjJa4uQHLHbcmUi651IgupGNlDL3RcOBq9Mv_Ffq019dKzSEX20VHwceDrkZuJmX291qjb8VMkjylmjl4j4Fw50VSxfHiyrPujaYHiAO6WOqEPSNgMNHFwJp2LFCynLMZz06CxJ-Q4XVFXBKG7JHaUc2biphe62u06fIQqtl1l4vWtqzgrym2NiUa4" 
            />

            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.path} 
                  className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Language Toggle + CTA */}
          <div className="flex items-center gap-6">
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLang} 
              className="text-white font-bold text-sm hover:text-[#71c3fe] transition-colors uppercase"
            >
              {lang === 'en' ? 'EN' : 'VI'}
            </button>

            {/* Mobile Hamburger */}
            <button onClick={() => setIsOpen(true)} className="md:hidden text-white">
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>

            {/* Desktop CTA Button */}
            <button className="hidden md:block px-6 py-2.5 rounded-xl font-label-caps text-label-caps bg-[#71c3fe] text-[#04044A] hover:opacity-80 transition-all">
              Work With Us
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 z-[100] bg-[#04044A] transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col p-6 h-full">
          <div className="flex justify-between items-center mb-10">
            <button onClick={toggleLang} className="text-white font-bold text-lg uppercase">
              {lang === 'en' ? 'EN / VI' : 'VI / EN'}
            </button>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>
          
          <div className="flex flex-col gap-6 mt-10">
            {links.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="text-3xl text-white font-display"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;