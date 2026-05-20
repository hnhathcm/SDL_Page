const Footer = () => {
  return (
    <footer className="bg-[#04044A] w-full py-20 border-t border-white/10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mx-auto px-6">
        
        {/* Brand Column */}
        <div className="md:col-span-4">
          <img 
            alt="SonDoong Labs Logo" 
            className="h-10 w-auto object-contain brightness-0 invert mb-6" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ8C8EJ5BtTwJnHXUk0RaKKicm7_m307fDjjYl8oN1JNBeoppZcNtkRCj3AKzP7d0lXyk_C54mKV42UTpAREG2IKE7s0-QrS8uLghIHHu-C-kabu8iHhCIdjVLZyTQBRyuoAi4nOWZkK7QbFaBkQs6p240w5Gwjd9fh4gLYtwftu-ZfHVWEriUErGB30lmfpgO5SBEGa-CO5V3dvUM-VZb-tcmKrJkjg3_L7qixT-CECbdCQ3-lBDfJcn9ZTHQztoUPA4oYw9seoPKTRc"
          />
          <p className="font-body-md text-body-md text-white/70 max-w-sm">
            Bridging high-finance strategy and Southeast Asian growth. We are more than investors; we are operational partners.
          </p>
        </div>

        {/* Explore Links */}
        <div className="md:col-span-2">
          <h5 className="font-label-caps text-label-caps text-white mb-6">Explore</h5>
          <ul className="space-y-4">
            {['About', 'Portfolio', 'Services'].map(item => (
              <li key={item}>
                <a href={`/${item.toLowerCase()}`} className="font-body-md text-body-md text-white/70 hover:text-white transition-all hover:translate-x-1 inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="md:col-span-2">
          <h5 className="font-label-caps text-label-caps text-white mb-6">Company</h5>
          <ul className="space-y-4">
            {['Privacy Policy', 'Careers', 'Contact'].map(social => (
              <li key={social}>
                <a href="#" className="font-body-md text-body-md text-white/70 hover:text-white transition-all hover:translate-x-1 inline-block">
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
            <div className="md:col-span-4">
            <h5 className="font-label-caps text-label-caps text-white mb-6">Newsletter</h5>
            <div className="flex border-b border-white/30 pb-2">
                <input 
                className="bg-transparent border-none focus:ring-0 w-full p-0 font-body-md text-body-md text-white placeholder-white/40" 
                placeholder="Email address" 
                type="email" 
                />
                {/* Button with Left Arrow Icon */}
                <button className="text-white hover:text-secondary transition-colors flex items-center">
                <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className=" mx-auto px-6 mt-20 pt-8 border-t border-white/5">
        <p className="font-label-caps text-[10px] text-white/40 tracking-widest uppercase">
          © 2024 SONDOONG LABS. REFINING STRATEGY THROUGH SOUTHEAST ASIAN GROWTH.
        </p>
      </div>
    </footer>
  );
};

export default Footer;