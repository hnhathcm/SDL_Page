import { FadeIn } from "./Home"; // Assuming you kept the FadeIn component in a shared file
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
const About = () => {
  const {lang} = useLanguage();
  const navigate = useNavigate();
  const team ={
    "en":[
    { name: "Hoang Nhat (Leo)", role: "CO-FOUNDER", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDQXMZYvzXwAY6X2QAfDuVssgzKrbXZts_LHQYqbx4uAmDaHkHWzZAXxo0po_WLzASY7LH8OhYuFvbGOEizoLKL1lYI8hLFJbaUlfEyc-YJtjfjJA_t2_pxAhidFYsu1KnILl_TBUW6hAMtFkf6UqQCch3XPVZb3E3xJIrgA0K47mO_fqasH_yF5GpiJLDgPx2aU8IE9C_x7TVsRxH8qa9VtsZ5M2rcVaolZxieAmXAVHhZuAYUVvad5nBOZDqMpcimW9Lg_Bmq1TsTBA", bio: "Ex-Managing Director of Godee" },
    { name: "Pritesh Gupta", role: "CO-FOUNDER & CEO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaqExR4CVoPbWW3I9E_WLOqNuo7zXQluRRrOX_t8l1UcaBZ0sdMsYMCtes_xPRC9V1LSVcHGFJiKM_j3aS0ji9WjZ-DRyolykYV7fhvYwJqTu5PEBBlSulbnAv9FZF3tdVvj6Abb56UJNukkfBkmaKVD194qmbWsrdIX8nAwPO4nzA1Pvz7xhkZa-n690lHOIk-aY7HO6IJseb0zVz3B5QeMSW2dEhIqDMkgaVKKOm83voH_XvPMG70Bb_tDPz4OgMQRw2OOG1P8gXN8Q", bio: "Ex - VP of Ola Corp, Successful Exit for ZipGo. Invested in startup companies in SEA. General Partner of Razor Capital. IC Member of Seedstars VC" },
    { name: "Hoang William", role: "LAWYER PARTNER", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIOKU8EgoLv7P0RbVxHBZI3WJYLdMCyXpm1wTrnzPJ3V23P1IWeWN0Ti78mJAfNuz4I7La7T_5eXS0_ep4CM8IDlx0O2z_fB9ZFyFJF4NmukU5cYzARQoOstaD0FIR37nFNSiQL62j5gZqM3SDyfRX-V6ym70HBIZbqdhEEiSLcQssCFFkrk5ubSBV1zTSua-h3u9F9jxte62rrmfjyfPZj0dvcspVQGPbEqa2W-CcsY9kUF5lvouu5BesgwVcB1Gd4sK8Wra_721LcSA", bio: "MBA - Lawyer. Managing Partner of CBL Law Firm 15+ years of experience in corporate and investment law, project, and internet law." },
    { name: "Max Tran", role: "TECHNICAL PARTNER", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNfOZu5afIiP-LU_JQI3cXaSSxQOB8BHqgMQLIhSIHD0wfZKX2swIQq6EWb9tsj4X8oQTs9NJiQwxm3is4Lc2AupwkaRJ3eL2757wzHEXFdJooRjZXIf33NvunusD_HfGn6b2gx1XpuXSDfowvbpJM6jF4POkrIbAGjnpDJQEZl76KLmykG4_J5zvMqd7YJWlUy1xJp0ua5S5qw3Q6jUTF4zK5Lf1XxUUSjNTknkuA2wSErhnRwyIgf9fCTPucyCujSjwMI-cyxFxqPYI", bio: "Oracle Certified Data Scientist. Level 4 Developers in Data Science & systems of experience in providing data solutions for businesses, Vietnam & US." },
    { name: "Sam Dang", role: "MARKETING PARTNER", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7_R2dGC0m0XUYOKkb_KHmYjXqwH5WvnTfloJOdyuezUXoF7dK6Rqc4ciRtPQB20-dxbn7o5BFliYwmGNIb7GZtHPCzMDFAO8972AObfft9nCCkBiiX7TGTzYGE8rvYkTXE_dAt3eMYtUoc9oZ3cYnPZkFgffPQjMJICvcRmoZ6RHhegLEih3wctsCotu5Ou_mtt-PMHdWx1bMiF0EZjtMjLXLC8CY8NvB4_Pb9oyOKwsPMdk_LgBDJN5pwwtxYYw9Z3V7bSmeS5ZBswU", bio: "Director of External Relations — Bee Comm/Sakos Lecturer and Marketing, PR & Communications Advisor at Van Lang University, VOV College, VEF. Over 10 years of experience in PR, communications, KOLs, and viral." },
    { name: "Le Hoang Phuong", role: "ENTERPRISE PROGRAM DIRECTOR", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUciP8g7DP9rwBiLIsL2FMvbsuLnU40q6Y_yz3dKAGFKACQo1ia0lveYd6Fc-dptMIDh54bBElHwezcopqOfLpsiSKA_oqGuFcMHk-aKK1O4WzhIdkTz3soeZ4rYZ25pSAIrDtU-C7jVazaP-Qjc48JTegHqFCO0amaXkWbQJnre8nk_C_4LVCh0tfu9ZQ8iFtuoJT_NDI14L2oNi5t0yk8pWU4cnyzEmtwUSqZYZZQiNkLwX56LDgoTJESJ-c4s34EOVrAyWQrwExp3U", bio: "Head of Association Relations and Intel Program Manager at SGSI. Innovex, Experiential Entrepreneurship Lecturer at FTU University. Senior Business Development Executive at Selix Motors" },
  ],
    "vi":[
      { name: "Hoang Nhat (Leo)", role: "ĐỒNG SÁNG LẬP", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDQXMZYvzXwAY6X2QAfDuVssgzKrbXZts_LHQYqbx4uAmDaHkHWzZAXxo0po_WLzASY7LH8OhYuFvbGOEizoLKL1lYI8hLFJbaUlfEyc-YJtjfjJA_t2_pxAhidFYsu1KnILl_TBUW6hAMtFkf6UqQCch3XPVZb3E3xJIrgA0K47mO_fqasH_yF5GpiJLDgPx2aU8IE9C_x7TVsRxH8qa9VtsZ5M2rcVaolZxieAmXAVHhZuAYUVvad5nBOZDqMpcimW9Lg_Bmq1TsTBA", bio: "Cựu Managing Director của Godee" },
      { name: "Pritesh Gupta", role: "ĐỒNG SÁNG LẬP & CEO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaqExR4CVoPbWW3I9E_WLOqNuo7zXQluRRrOX_t8l1UcaBZ0sdMsYMCtes_xPRC9V1LSVcHGFJiKM_j3aS0ji9WjZ-DRyolykYV7fhvYwJqTu5PEBBlSulbnAv9FZF3tdVvj6Abb56UJNukkfBkmaKVD194qmbWsrdIX8nAwPO4nzA1Pvz7xhkZa-n690lHOIk-aY7HO6IJseb0zVz3B5QeMSW2dEhIqDMkgaVKKOm83voH_XvPMG70Bb_tDPz4OgMQRw2OOG1P8gXN8Q", bio: "Cựu VP tại Ola Corp, exit thành công với ZipGo. Đầu tư vào nhiều startup tại Đông Nam Á. General Partner tại Razor Capital. Thành viên hội đồng đầu tư Seedstars VC." },
      { name: "Hoang William", role: "ĐỐI TÁC PHÁP LÝ & THUẾ", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIOKU8EgoLv7P0RbVxHBZI3WJYLdMCyXpm1wTrnzPJ3V23P1IWeWN0Ti78mJAfNuz4I7La7T_5eXS0_ep4CM8IDlx0O2z_fB9ZFyFJF4NmukU5cYzARQoOstaD0FIR37nFNSiQL62j5gZqM3SDyfRX-V6ym70HBIZbqdhEEiSLcQssCFFkrk5ubSBV1zTSua-h3u9F9jxte62rrmfjyfPZj0dvcspVQGPbEqa2W-CcsY9kUF5lvouu5BesgwVcB1Gd4sK8Wra_721LcSA", bio: "MBA - Luật sư. Managing Partner của CBL Law Firm. Hơn 15 năm kinh nghiệm trong lĩnh vực luật doanh nghiệp, đầu tư, dự án và internet." },
      { name: "Max Tran", role: "ĐỐI TÁC CÔNG NGHỆ", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNfOZu5afIiP-LU_JQI3cXaSSxQOB8BHqgMQLIhSIHD0wfZKX2swIQq6EWb9tsj4X8oQTs9NJiQwxm3is4Lc2AupwkaRJ3eL2757wzHEXFdJooRjZXIf33NvunusD_HfGn6b2gx1XpuXSDfowvbpJM6jF4POkrIbAGjnpDJQEZl76KLmykG4_J5zvMqd7YJWlUy1xJp0ua5S5qw3Q6jUTF4zK5Lf1XxUUSjNTknkuA2wSErhnRwyIgf9fCTPucyCujSjwMI-cyxFxqPYI", bio: "Oracle Certified Data Scientist. Level 4 Developers về Data Science & Systems với kinh nghiệm triển khai giải pháp dữ liệu cho doanh nghiệp tại Việt Nam và Mỹ." },
      { name: "Sam Dang", role: "ĐỐI TÁC MARKETING", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7_R2dGC0m0XUYOKkb_KHmYjXqwH5WvnTfloJOdyuezUXoF7dK6Rqc4ciRtPQB20-dxbn7o5BFliYwmGNIb7GZtHPCzMDFAO8972AObfft9nCCkBiiX7TGTzYGE8rvYkTXE_dAt3eMYtUoc9oZ3cYnPZkFgffPQjMJICvcRmoZ6RHhegLEih3wctsCotu5Ou_mtt-PMHdWx1bMiF0EZjtMjLXLC8CY8NvB4_Pb9oyOKwsPMdk_LgBDJN5pwwtxYYw9Z3V7bSmeS5ZBswU", bio: "Director of External Relations — Bee Comm/Sakos. Giảng viên và cố vấn Marketing, PR & Communications tại Đại học Văn Lang, VOV College, VEF. Hơn 10 năm kinh nghiệm về PR, truyền thông, KOLs và viral." },
      { name: "Le Hoang Phuong", role: "GIÁM ĐỐC CHƯƠNG TRÌNH DOANH NGHIỆP", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUciP8g7DP9rwBiLIsL2FMvbsuLnU40q6Y_yz3dKAGFKACQo1ia0lveYd6Fc-dptMIDh54bBElHwezcopqOfLpsiSKA_oqGuFcMHk-aKK1O4WzhIdkTz3soeZ4rYZ25pSAIrDtU-C7jVazaP-Qjc48JTegHqFCO0amaXkWbQJnre8nk_C_4LVCh0tfu9ZQ8iFtuoJT_NDI14L2oNi5t0yk8pWU4cnyzEmtwUSqZYZZQiNkLwX56LDgoTJESJ-c4s34EOVrAyWQrwExp3U", bio: "Head of Association Relations and Intel Program Manager tại SGSI. Giảng viên Experiential Entrepreneurship tại FTU University. Senior Business Development Executive tại Selix Motors." },

    ]
};
  const info = {
    "en": [
                { title: "ENTITY NAME", val: "SONDOONG LABS COMPANY LIMITED" },
                { title: "HEADQUARTERS", val: "Saigon Paragon Building, HCMC, Vietnam." },
                { title: "SECTOR FOCUS", val: "Venture Builder" }
              ],
    "vi": [
                { title: "TÊN PHÁP NHÂN", val: "CÔNG TY TNHH SONDOONG LABS" },
                { title: "TRỤ SỞ", val: "Tòa nhà Saigon Paragon, HCM, Việt Nam." },
                { title: "LĨNH VỰC", val: "Venture Builder" }
              ]
  }

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="pt-[160px] pb-24 px-6 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Title (8 columns) */}
          <div className="md:col-span-8">
            <FadeIn>
              <span className="font-label-caps text-secondary mb-6 block uppercase tracking-[0.2em]">
                {lang === "en" ? "ABOUT SONDOONG LABS" : "VỀ SONDOONG LABS"}
              </span>
              <h1 className="font-display-lg text-4xl md:text-[64px] mb-8 leading-[1.1] text-brand-navy" style = {lang === "en" ? { fontFamily: "Merriweather Sans, sans-serif", fontWeight: 500 } : { fontFamily: "Akt, serif", fontWeight: 500 }}>
                {lang === "en" ? "Building Ventures With Founders, Operators and " : "Xây Dựng Venture Cùng Founder, Operator Và"} 
                <span className="italic font-normal text-[#006493]" >
                  {lang === "en" ? "Long-Term Vision" : "Tầm Nhìn Dài Hạn"}
                </span>
              </h1>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: Description (4 columns) */}
          <div className="md:col-span-4 flex items-start pt-2">
            <FadeIn delay={200}>
              <p className="font-body-lg text-on-surface-variant leading-relaxed border-l-2 border-secondary pl-6">
                {lang === "en" 
                  ? "Learn more about SonDoong Labs, our philosophy, leadership team, and the operational approach behind the companies we support."
                  : "Tìm hiểu thêm về SonDoong Labs, triết lý, đội ngũ lãnh đạo và cách tiếp cận vận hành đằng sau các công ty mà chúng tôi hỗ trợ."
                }
              </p>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* Corporate Profile */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="aspect-square bg-[#04044A] rounded-xl flex items-center justify-center p-12">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ8C8EJ5BtTwJnHXUk0RaKKicm7_m307fDjjYl8oN1JNBeoppZcNtkRCj3AKzP7d0lXyk_C54mKV42UTpAREG2IKE7s0-QrS8uLghIHHu-C-kabu8iHhCIdjVLZyTQBRyuoAi4nOWZkK7QbFaBkQs6p240w5Gwjd9fh4gLYtwftu-ZfHVWEriUErGB30lmfpgO5SBEGa-CO5V3dvUM-VZb-tcmKrJkjg3_L7qixT-CECbdCQ3-lBDfJcn9ZTHQztoUPA4oYw9seoPKTRc" alt="Logo" className="h-auto w-auto object-contain mb-6" />
            </div>
          </div>
          <div className="md:col-span-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-8">{lang === "en" ? "Corporate Profile" : "Hồ sơ doanh nghiệp"}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {info[lang]?.map((item) => (
                <div key={item.title} className="border-l-2 border-secondary pl-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">{item.title}</p>
                  <p className="font-bold text-lg">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto grid md:grid-cols-2 gap-24">
        <FadeIn>
          <span className="text-secondary mb-4 block uppercase tracking-widest text-xs">{lang === "en" ? "01 / OUR VISION" : "01 / TẦM NHÌN"}</span>
          <h3 className="text-2xl font-bold mb-6">{lang === "en" ? "To build a stronger foundation for the next generation of startups in Southeast Asia." : "Xây dựng nền tảng vững chắc cho thế hệ startup tiếp theo tại Đông Nam Á.."}</h3>
          <p className="text-on-surface-variant">{lang === "en" ? "We believe ambitious founders need more than capital to scale. SonDoong Labs supports ventures through operational execution, strategic guidance, talent networks, and long-term partnerships that help businesses grow sustainably." : "Chúng tôi tin rằng founder cần nhiều hơn chỉ nguồn vốn để phát triển doanh nghiệp. SonDoong Labs đồng hành cùng startup thông qua hỗ trợ vận hành, chiến lược, mạng lưới nhân sự và hợp tác dài hạn nhằm giúp doanh nghiệp tăng trưởng bền vững."}</p>
        </FadeIn>
        <FadeIn delay={200}>
          <span className="text-secondary mb-4 block uppercase tracking-widest text-xs">{lang === "en" ? "02 / OUR MISSION" : "02 / SỨ MỆNH"}</span>
          <h3 className="text-2xl font-bold mb-6">{lang === "en" ? "To work alongside founders in building scalable and resilient businesses." : "Đồng hành cùng founder để xây dựng những doanh nghiệp có khả năng tăng trưởng bền vững."}</h3>
          <p className="text-on-surface-variant">{lang === "en" ? "We support startups across growth, operations, talent, positioning, and fundraising through hands-on execution and ecosystem connectivity, helping ventures overcome scaling challenges from early stage to expansion." : "Chúng tôi hỗ trợ startup trong các lĩnh vực tăng trưởng, vận hành, nhân sự, định vị và gọi vốn thông qua thực thi thực tế và kết nối hệ sinh thái, giúp doanh nghiệp vượt qua những thách thức trong quá trình mở rộng."}</p>
        </FadeIn>
      </section>

      {/* Leadership Grid */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto">
        <h2 className="text-2xl font-bold mb-16">{lang === "en" ? "Leadership Team" : "Đội ngũ lãnh đạo"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {team[lang].map((member, i) => (
            <FadeIn key={member.name} delay={i * 50}>
              <div className="group">
                <div className="aspect-[4/5] bg-surface-container rounded-lg mb-6 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
                </div>
                <p className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-1">{member.role}</p>
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className="text-sm text-on-surface-variant">{member.bio}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <section className="py-[120px] bg-[#04044A] text-on-primary">
            <div className="max-w-[1280px] mx-auto px-6 text-center">
            <FadeIn>
                <h2 
                className="text-[32px] md:text-[56px] mb-10 leading-tight italic font-medium text-white"
                style={lang === "en" ? { fontFamily: "Merriweather Sans, sans-serif", fontWeight: 500 } : { fontFamily: "Akt, serif", fontWeight: 500 }}
                >
                {lang === "en" ? "Ready to build the future of " : "Sẵn sàng xây dựng tương lai cho "} <br className="hidden md:block" /> {lang === "en" ? "your business?" : "doanh nghiệp của bạn?"}
                </h2>
                <button onClick={() => navigate('/contact')} className="bg-[#A0D9FF] text-on-secondary-container px-10 py-5 font-label-caps text-label-caps rounded-lg hover:opacity-90 active:scale-95 transition-all uppercase tracking-widest">
                {lang === "en" ? "Meet us" : "Làm việc cùng chúng tôi"}
                </button>
            </FadeIn>
            </div>
      </section>
    </main>
  );
};

export default About;