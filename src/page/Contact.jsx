import { FadeIn } from "./Home";
import SimpleMap  from "../components/SimpleMap";

export default function Contact() {
  return (
    <main className="bg-background text-on-surface">
      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8">
            <FadeIn>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-4 block">
                Connect With Us
              </span>
              <h1 className="font-display-lg text-4xl md:text-6xl mb-8 text-[#04044A]">
                Let's Build the Next Stage of Growth Together
              </h1>
            </FadeIn>
          </div>
          <div className="md:col-span-4 flex items-end pb-8">
            <FadeIn delay={200}>
              <p className="font-body-lg text-on-surface-variant">
                We bridge global capital with local operational excellence. Reach out to start a conversation about growth, strategy, or partnership.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Contact Split: Form & Info ────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={300} className="p-8 md:p-12 rounded-xl border border-[#04044A]/10 shadow-sm backdrop-blur-xl bg-white/50">
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <FormField label="Name" placeholder="Your full name" />
                  <FormField label="Email Address" placeholder="email@company.com" type="email" />
                </div>
                <FormField label="Company / Organization" placeholder="Entity name" />
                <div className="space-y-1">
                  <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">Message</label>
                  <textarea 
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline focus:ring-0 focus:border-[#04044A] transition-colors py-2 px-0 font-body-md placeholder:text-outline/60 text-[#04044A] resize-none" 
                    placeholder="How can we assist your venture?" rows="4" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-[#cae6ff] text-[#001e30] px-12 py-4 font-label-caps font-bold hover:opacity-90 transition-all active:scale-[0.98] shadow-md"
                >
                  Send Inquiry
                </button>
              </form>
            </FadeIn>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between py-4">
            <FadeIn delay={400} className="space-y-12">
              <div>
                <h3 className="font-headline-sm text-2xl mb-6 text-[#04044A]">General Inquiries</h3>
                <div className="space-y-4">
                  <a href="mailto:startup@sondoonglabs.asia" className="flex items-center gap-4 text-body-lg text-[#04044A] hover:text-secondary transition-colors">
                    <span className="material-symbols-outlined text-secondary">mail</span>
                    startup@sondoonglabs.asia
                  </a>
                  <a href="tel:+840934816463" className="flex items-center gap-4 text-body-lg text-[#04044A] hover:text-secondary transition-colors">
                    <span className="material-symbols-outlined text-secondary">call</span>
                    0934816463
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase tracking-widest">Connect Digital</h3>
                <div className="flex gap-10">
                  {/* Icons Placeholder */}
                  <span className="material-symbols-outlined text-2xl text-[#04044A] hover:text-secondary transition-colors">link</span>
                  <span className="material-symbols-outlined text-2xl text-[#04044A] hover:text-secondary transition-colors">facebook</span>
                  <span className="material-symbols-outlined text-2xl text-[#04044A] hover:text-secondary transition-colors">alternate_email</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Regional HQ Map/Location Section ──────────────────────────── */}
      <section className="w-full py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <FadeIn className="flex flex-col justify-center space-y-8 pr-0 lg:pr-12">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Our Regional HQ</span>
              <h2 className="font-headline-md text-3xl text-[#04044A]">Ho Chi Minh City: The Gateway to Vietnam's Innovation</h2>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-on-surface-variant mt-1">location_on</span>
                <div>
                  <p className="font-bold text-[#04044A]">SONDOONG LABS</p>
                  <p className="text-on-surface-variant">2nd Floor, Saigon Paragon Building, No. 3 Nguyen Luong Bang, Tan My Ward, Ho Chi Minh City, Vietnam</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={200} className="h-[500px] rounded-xl overflow-hidden relative">
              <div className="h-[500px] rounded-xl overflow-hidden shadow-2xl relative">
                <SimpleMap /> 
                </div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/50 backdrop-blur-md p-6 rounded-lg flex items-center justify-between border border-[#04044A]/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#04044A] flex items-center justify-center rounded-full text-white">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#04044A]">SAIGON PARAGON</p>
                    <p className="text-xs text-on-surface-variant">District 7, Ho Chi Minh City</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}

// ── Reusable Form Component ──────────────────────────────────────────
function FormField({ label, placeholder, type = "text" }) {
  return (
    <div className="relative">
      <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">{label}</label>
      <input 
        className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline focus:ring-0 focus:border-[#04044A] transition-colors py-2 px-0 font-body-md placeholder:text-outline/60 text-[#04044A]" 
        placeholder={placeholder} type={type} 
      />
    </div>
  );
}