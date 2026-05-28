import { FadeIn } from "./Home";
import { useLanguage } from "../context/LanguageContext";
import {useNavigate} from "react-router-dom";

const services ={
  "en": [
  {
    icon: "dynamic_form",
    title: "Venture Building",
    items:[
      "Market Validation & Research",
      "Go-to-Market (GTM) Planning",
      "Operational Infrastructure"
    ]
  },
  {
    icon: "insights",
    title: "Growth Strategy",
    items:[
      "User Acquisition & Retention",
      "Regional Expansion Strategy",
      "Data Analytics & Insights"
    ]
  },
  {
    icon: "account_balance",
    title: "Capital Access",
    items:[
      "Seed & Series A Facilitation",
      "VC Network Connections",
      "Financial Modeling",
      "Pitch Deck & Narrative Coaching"
    ]
  },
  {
    icon: "groups",
    title: "Talent Acquisition",
    items:[
      "Executive Search & Hiring",
      "Leadership Mentorship",
      "Culture & HR Infrastructure"
    ]
  },
  {
    icon: "hub",
    title: "Strategic Networks",
    items:[
      "Local Ecosystem Integration",
      "Strategic Partnership Sourcing",
      "Industry Community Building"
    ]
  },
  {
    icon: "token",
    title: "Technology",
    items:[
      "Technology consulting for business operations",
      "System and workflow optimization"
    ]
  }
],
"vi":[
  {
    icon: "dynamic_form",
    title: "Venture Building",
    items:["Kiểm chứng thị trường & nghiên cứu", "Lập kế hoạch Go-to-Market (GTM)", "Xây dựng hạ tầng vận hành"]
  },
  {
    icon: "insights",
    title: "Growth Strategy",
    items:["Thu hút & giữ chân người dùng", "Chiến lược mở rộng khu vực", "Phân tích dữ liệu & insight"]
  },
  {
    icon: "account_balance",
    title: "Capital Access",
    items:["Hỗ trợ gọi vốn Seed & Series A", "Kết nối mạng lưới VC", "Financial Modeling", "Coaching Pitch Deck & Narrative"]
  },
  {
    icon: "groups",
    title: "Talent Acquisition",
    items:["Tuyển dụng & tìm kiếm nhân sự cấp cao", "Mentorship lãnh đạo", "Xây dựng văn hóa & hệ thống HR"]
  },
  {
    icon: "hub",
    title: "Strategic Networks",
    items:["Kết nối hệ sinh thái địa phương", "Tìm kiếm đối tác chiến lược", "Xây dựng cộng đồng ngành"]
  },
  {
    icon: "token",
    title: "Technology",
    items:["Tư vấn công nghệ cho vận hành doanh nghiệp", "Tối ưu hệ thống và quy trình làm việc"]
  }
]};

const partners =[
  { alt: "SeedStars", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPC-E1UoQwBo_3zhEEmlBVq1jVgPANQrhxgSXo5Qjc6rgnBXsehq8U_hOE2SmbtHzUEul7puNhn5R8vSKIzuKliRamZqbcxGQimMIxHUwRWEm4pjQW6Wp1W8X7D49Sdei41kfM-0aJF4ZK7U5zmU-srr1RYgqCg1TW4h2Sf2qjy-dkRQ5wFZLeBDVbqtnvO0dRVS-v1qTatxr5ThRKWnseMdHkY5vOCg1q9P5JCBOOD2zmh0RNCMC--qsAem9AwU-8REhcx6vUL9i-" },
  { alt: "Razor Capital", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhoYY6ppCkQGlzw9xqs3B5iSVVo8-lIyxAyx7wleKT5NLqXr12sMqt0M2aWjuoHWccu0Gm_06DjPw24hEfSu6pO7TG5v6I1IEjnsFqKfjPHU1BD7_RXea8MInVMlrjtiyVrR6p74WQozKd5LcBfdpjZgMPRMVfR7jtJCR-cue9tCtwZ_-FWfTYXYZhr-e1slf_wnR_PhcodCIuizL3ef2PlV2-qNzyY1_oHac-mGbLGD7C2sV0xom7_P_VWIlhCzAa-oSzDDRaeJoF" },
  { alt: "myAsiaVC", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSMts5dvAri-4XuZWUoQDZSdq6vmm-8tk_43t1JqmDX8c7iHtW560UXtbV-mx6KgHYZXlqu0Q_MLFdKcDYWgKZ8zXhcQwStwie1IrIId6_zooFqx6Av_k2O1jCJNEcLoaHIyugVt8j8_43xm6CkFt2gkcSfESyAd0r6kQGkl71_clEbI5A8rUNgLjJHSCxVxGJd8AVkBokcCWLEr3F057piCcq0uV_A_vwrHqStgNaX6A45nvxN5ebQJiT5gEPm7DwHfAzUxshyay3" }
];

export default function Services() {
  const {lang} = useLanguage();
  const navigate = useNavigate();
  return (
    <main className="bg-background text-on-background">
      {/* Editorial Hero Section */}
      <section className="relative pt-[120px] pb-24 overflow-hidden bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <FadeIn>
              <span className="font-label-caps text-secondary mb-6 block uppercase tracking-widest" style={{ fontFamily: "Manrope, sans-serif" }}>{lang === "en" ? "OUR CAPABILITIES" : "NĂNG LỰC CỦA CHÚNG TÔI"}</span>
              <h1 className="font-display-lg text-4xl md:text-6xl mb-8 max-w-4xl font-medium text-on-surface" style={lang === "en" ? { fontFamily: "Merriweather Sans, sans-serif", fontWeight: 500 } : { fontFamily: "Akt, serif", fontWeight: 500 }}>
                <span className="italic text-[#006493]">{lang === "en" ? "Strategic Support" : "Hỗ Trợ Chiến Lược"} </span>{lang === "en" ? "for High-Growth Startups" : "cho Các Startup Tăng Trưởng Cao"}
              </h1>
            </FadeIn>
          </div>
          <div className="md:col-span-4 pb-4">
            <FadeIn delay={200}>
              <p className="font-body-lg text-on-surface-variant leading-relaxed border-l-2 border-secondary-fixed pl-6 mb-8">
                {lang === "en" ? "From venture building and growth strategy to talent, technology, and capital support, we help startups scale sustainably." : "Từ venture building và chiến lược tăng trưởng đến nhân sự, công nghệ và hỗ trợ gọi vốn, chúng tôi giúp startup phát triển bền vững."}
              </p>
            </FadeIn>
          </div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-6 mt-16">
          <FadeIn delay={400}>
            <div className="aspect-[21/9] w-full overflow-hidden rounded-xl editorial-shadow">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7LDYbGm4ADlpoVD__GLHUML1JRC79A4ak-Tz8IA9nEUXOjCutV2Cw0oqqBnh2_5W36I1tZ6yfLbxZbSCaJ9PflB5RZHpLg_yKQwnsgoWMJ_UaQbxJqSdZoqs260BS5wKwPotVpQOrEbmLwQuv3W2w0hb1s2zIYkXaAzrfdkqpR5TRbj77fSYr0VpLr4Z3ypLmsvmEy6MH80gm4EUM7wP4rIBak4NSWe7eAWHBGxk-X8B2AGoryMaIpfzhIMp2o37hfitHsK7WojdCJ3k" 
                alt="Strategic team meeting" 
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-surface-container-low py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[lang].map((s, i) => (
              <ServiceCard key={i} icon={s.icon} title={s.title} items={s.items} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. VC Partners */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="font-display-lg text-4xl md:text-5xl text-center mb-16 font-medium text-on-surface" style={lang === "en" ? { fontFamily: "Merriweather Sans, sans-serif", fontWeight: 500 } : { fontFamily: "Akt, serif", fontWeight: 500 }}>{lang === "en" ? "Our VC Partners" : "Đối Tác VC Của Chúng Tôi"}</h2>
          <div className="flex flex-wrap justify-center items-center gap-y-16 gap-x-48 opacity-70">
            {partners.map((p, i) => (
              <FadeIn key={i} delay={i * 100}>
                <img src={p.src} alt={p.alt} className="h-32 md:h-40 object-contain hover:scale-105 transition-transform" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-[120px] bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-display-lg text-4xl md:text-5xl mb-12 text-on-surface" style={lang === "en" ? { fontFamily: "Merriweather Sans, sans-serif", fontWeight: 500 } : { fontFamily: "Akt, serif", fontWeight: 500 }}>
              {lang === "en" ? "Ready to build the future of your business?" : "Sẵn sàng xây dựng tương lai cho doanh nghiệp của bạn?"}
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button onClick={() => navigate('/contact')} className="bg-[#04044A] text-white px-10 py-4 rounded-full font-label-caps hover:opacity-90 transition-all uppercase">
                {lang === "en" ? "START A VENTURE" : "BẮT ĐẦU MỘT VENTURE"}
              </button>
              <button onClick={() => navigate('/portfolio')} className="border border-outline text-on-surface px-10 py-4 rounded-full font-label-caps hover:bg-surface-container-low transition-all uppercase">
                {lang === "en" ? "REQUEST PORTFOLIO" : "XEM PORTFOLIO"}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ icon, title, items }) {
  return (
    <div className="bg-white p-10 rounded-xl editorial-shadow border border-[#c2c7cf]/40 
                    hover:bg-[#04044A] hover:text-white 
                    hover:-translate-y-2 transition-all duration-300 
                    cursor-default flex flex-col h-full group">
      
      {/* Icon: Using material symbols */}
      <span className="material-symbols-outlined text-4xl mb-6 block text-[#71c3fe] group-hover:text-white transition-colors">
        {icon}
      </span>
      
      {/* Title */}
      <h3 
        className="text-[22px] font-medium mb-6 leading-snug text-[#04044A] group-hover:text-white transition-colors" 
        style={{ fontFamily: "Newsreader, Georgia, serif" }}
      >
        {title}
      </h3>
      
      {/* Feature List: Stretches the card using flex-grow */}
      <ul className="space-y-3 flex-grow">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-[14px] text-[#42474e] group-hover:text-[#c2c7cf] transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#71c3fe] group-hover:bg-white transition-colors" />
            {item}
          </li>
        ))}
      </ul>

      {/* Arrow Icon at bottom */}
      <div className="mt-8">
         <span className="material-symbols-outlined text-[#71c3fe] group-hover:text-white transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>
           arrow_outward
         </span>
      </div>
    </div>
  );
}