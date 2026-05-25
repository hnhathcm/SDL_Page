import { FadeIn } from "./Home";
import SimpleMap  from "../components/SimpleMap";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const {lang} = useLanguage();
  return (
    <main className="bg-background text-on-surface">
      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8">
            <FadeIn>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-4 block">
                {lang === "en" ? "Connect With Us" : "KẾT NỐI CÙNG CHÚNG TÔI"}
              </span>
              <h1 className="font-display-lg text-4xl md:text-6xl mb-8 text-[#04044A]">
                {lang === "en" ? 'Let\'s Build the Next Stage of Growth Together' : 'Hãy Cùng Xây Dựng Giai Đoạn Tăng Trưởng Tiếp Theo'}
              </h1>
            </FadeIn>
          </div>
          <div className="md:col-span-4 flex items-end pb-8">
            <FadeIn delay={200}>
              <p className="font-body-lg text-on-surface-variant">
                {lang === "en" ? "We bridge global capital with local operational excellence. Reach out to start a conversation about growth, strategy, or partnership." : "Chúng tôi kết nối nguồn vốn toàn cầu với năng lực vận hành địa phương. Liên hệ với chúng tôi để bắt đầu cuộc trao đổi về tăng trưởng, chiến lược hoặc hợp tác."}
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
                  <FormField label={lang === "en" ? "Name" : "Họ và tên"} placeholder={lang === "en" ? "Your full name" : "Họ và tên"} />
                  <FormField label={lang === "en" ? "Email Address" : "Địa chỉ Email"} placeholder={lang === "en" ? "email@company.com" : "email@company.com"} type="email" />
                </div>
                <FormField label={lang === "en" ? "Company / Organization" : "Tên doanh nghiệp / tổ chức"} placeholder={lang === "en" ? "Entity name" : "Tên đơn vị"} />
                <div className="space-y-1">
                  <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">{lang === "en" ? "Message" : "Tin nhắn"}</label>
                  <textarea 
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline focus:ring-0 focus:border-[#04044A] transition-colors py-2 px-0 font-body-md placeholder:text-outline/60 text-[#04044A] resize-none" 
                    placeholder={lang === "en" ? "How can we assist your venture?" : "Chúng tôi có thể hỗ trợ gì cho doanh nghiệp của bạn?"} rows="4" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-[#cae6ff] text-[#001e30] px-12 py-4 font-label-caps font-bold hover:opacity-90 transition-all active:scale-[0.98] shadow-md"
                >
                  {lang === "en" ? "Send Inquiry" : "Gửi Yêu Cầu"}
                </button>
              </form>
            </FadeIn>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between py-4">
            <FadeIn delay={400} className="space-y-12">
              <div>
                <h3 className="font-headline-sm text-2xl mb-6 text-[#04044A]">{lang === "en" ? "General Inquiries" : "Thông Tin Liên Hệ Chung"}</h3>
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
                <div className="flex flex-wrap gap-10">
                  
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/company/sondoonglabs/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-secondary text-[#04044A]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a href="https://www.facebook.com/sondoonglabs/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-secondary text-[#04044A]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 24 24" width="25" fill="currentColor">
                      <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"/>
                    </svg>
                  </a>

                  {/* Email (mailto) */}
                  <a href="mailto:startup@sondoonglabs.asia" className="transition-colors hover:text-secondary text-[#04044A]">
                    <span className="material-symbols-outlined text-[28px]">alternate_email</span>
                  </a>
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
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">{lang === 'en' ? "Our Regional HQ" : "Trụ Sở Khu Vực"}</span>
              <h2 className="font-headline-md text-3xl text-[#04044A]">{lang === 'en' ? "Ho Chi Minh City: The Gateway to Vietnam's Innovation" : "Thành phố Hồ Chí Minh: Cánh Cửa Đổi Mới Sáng Tạo Của Việt Nam"}</h2>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-on-surface-variant mt-1">location_on</span>
                <div>
                  <p className="font-bold text-[#04044A]">SONDOONG LABS</p>
                  <p className="text-on-surface-variant">{lang === 'en' ? "2nd Floor, Saigon Paragon Building, No. 3 Nguyen Luong Bang, Tan My Ward, Ho Chi Minh City, Vietnam" : "Tầng 2, Tòa nhà Saigon Paragon, Số 3 Nguyễn Lương Bằng, Phường Tân Mỹ, Thành phố Hồ Chí Minh, Việt Nam"}</p>
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