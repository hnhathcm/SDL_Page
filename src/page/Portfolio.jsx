import { FadeIn } from "./Home"; // Assuming you have this component
import {useLanguage} from "../context/LanguageContext"; // Assuming you have this context
import { useNavigate } from "react-router-dom";

const PortfolioCard = ({ img, title, category, desc, metric }) => {
  return (
    <FadeIn className="group flex flex-col h-full">
      {/* Container with background and fixed aspect ratio */}
      <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6 bg-surface-container-low flex items-center justify-center">
        <img
          alt={title}
          // object-contain: keeps the whole image visible
          // p-8: Adds padding so logos don't touch the container edges
          className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
          src={img}
        />
      </div>
      
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-headline-md text-xl text-brand-navy">{title}</h3>
        <span className="px-2 py-1 bg-surface-container-high rounded text-[10px] font-label-md uppercase text-brand-navy/60">
          {category}
        </span>
      </div>
      
      <p className="font-body-md text-on-surface-variant mb-4 flex-grow text-sm">
        {desc}
      </p>
      
      <p className="font-label-md text-[10px] text-[#006493] font-bold uppercase tracking-tighter">
        {metric}
      </p>
    </FadeIn>
  );
};

const portfolioData ={
  "en": [
    { title: "Godee", category: "Mobility", desc: "Top 1 Bus management platform. Raised $2mils from VC, +3000 DAU for B2C, B2B for Industrial Parks.", metric: "26 routes & 62 buses in HCMC", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcCJBhJ53F7kePfxSYpkgECyoly6_emXKqtk0a0ZnSdH14JsDDhqTYa_nLzF3hkYNnaTuJR75j_ywMnLsbQENkSN3_uagia_s_qVLE0t8wymgp3BaajcRNFNxH13If0R4xgAj2bL27Y4uUfsLgdcNRpTKt8SK94fPdXnAtdiFHbAKymOCSH3F0qlRQH8T0L3hj5Tl9tnXFKNlK3PWTFNivD17W_eiRPjhpIN0aGDf4C0SO2k9c7dxc6M6hi9600Al44-bIHueV6Yl5" },
    { title: "OLA", category: "EV & Logistics", desc: "40% market share of EV in India, valuation $7bils. Scaled from 2 to 64 cities.", metric: "70k daily rides", img: "https://upload.wikimedia.org/wikipedia/en/0/0f/Ola_Cabs_logo.svg" },
    { title: "ZIPGO", category: "Acquisition", desc: "Top 1 Bus management platform in India. Successful exit to Essel Group.", metric: "$150mils Acquisition", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKmenlULd3KWqJN1VWVs_tI71MAnWZGmqC0jdd-o4TgRKUDxN4uk7hVjYbMlq62PxpX42GirX3EHnCtjeZ9D0mo8GJz77YGITJl9zBZhXAgHMqRA6k6yHF4OS12NQVr9LMlKAqUUsnS9yIMCRXt2Fbt5zBcdumA-GZ6hFH2237iiU5J1HVTnoo-8vNcDxYgc7dl6R4uiXy1TiqW_56TMkZP1DOHZy9dt4QSoZSVNtBZOzMP6MOrIfogp__MK54XbLnSXIr7LASq4K1" },
    { title: "Inflow", category: "Supply Chain", desc: "Vietnam's first B2B on-demand fashion supply chain platform for global brands. Strategic infrastructure development.", metric: "B2B Global Expansion", img: "https://asiatechdaily.com/wp-content/uploads/2023/11/inflow-COVER.jpg" },
    { title: "Levents Global", category: "Consumer", desc: "Leading GenZ fashion brand with significant regional footprint and exclusive Sanrio collaborations.", metric: "240B Annual Revenue (VND)", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj5p1GI2bCRFsDQ5EiurYz8qQlk2eC3akZbgyYegrEKYfBvAPZ2hDGvGw-nYSEFD-2avU-sYbI5jSW28Qzso62sGGnfwd0QfokmN30WBZVDaQMoD_YNeXnQq2zJiFuOlYg29dX8mlQ-6SkelZ_566gT3kiJD_eyEO6qfP994Nx1FnYQEhhFyhnLzRqZ7mdgM1ptfYJroRRmbLml-TLNeo2JPgFHhhT_yY9NqbPefUISW_CFKNjhFdgLtEZhv-rmVnZB86PCCUhy6sr" },
    { title: "Finfan", category: "Fintech", desc: "Supporting the next generation of international payment infrastructure. Series A Facilitation. VC Network Access.", metric: "Payment Infrastructure", img: "https://merchant-uat.finfan.io/logo-black.png" },
    { title: "Sazi Home", category: "Hospitality", desc: "Innovative lifestyle and hospitality brand.", metric: "Lifestyle Living", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXVrsFWMSu-Kqh6PTpyw4f2WJxMzzy7eHmQ3sv6ncRqHx70le6DCm-TE4w-MQgp7qGyOj0xsZm3l_K-OFdNCJNmYg6U1DxIZTB01sAyx86Jbl0OJXk9dYhuoMUWP9et9a0v6dpjmnqVFX-97C3AsHRR8393QSJkprZ-DV2CpaKycI6xiiAIVN0gg5kgySB0UVtrgbb3dX6gJwXwM88ksCDU6svPhPXclGM2ffSIqRDoThLFZpVDqOKUqtWQKpXi1lLD_7C6PI4cI8L" },
    { title: "Apptronik", category: "Robotics", desc: "Scaling Apollo humanoid robots with backing from B Capital and Google. Pioneering general-purpose robotics.", metric: "$350M Series A", img: "../assets/mercedesrobots01.jpg" },
    { title: "Blitz", category: "EV Logistics", desc: "Indonesian EV logistics company. Supporting capital raising and strategic business development.", metric: "Strategy & Capital", img: "https://www.third-derivative.org/hubfs/blitz-logoArtboard%201.png" }
  ],
  "vi": [
    { title: "Godee", category: "Di chuyển", desc: "Nền tảng quản lý xe bus số 1. Gọi vốn thành công 2 triệu USD từ VC, hơn 3000 DAU cho B2B, phục vụ các khu công nghiệp.", metric: "26 TUYẾN & 02 XE BUS TẠI HCMC", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcCJBhJ53F7kePfxSYpkgECyoly6_emXKqtk0a0ZnSdH14JsDDhqTYa_nLzF3hkYNnaTuJR75j_ywMnLsbQENkSN3_uagia_s_qVLE0t8wymgp3BaajcRNFNxH13If0R4xgAj2bL27Y4uUfsLgdcNRpTKt8SK94fPdXnAtdiFHbAKymOCSH3F0qlRQH8T0L3hj5Tl9tnXFKNlK3PWTFNivD17W_eiRPjhpIN0aGDf4C0SO2k9c7dxc6M6hi9600Al44-bIHueV6Yl5" }, 
    { title: "OLA", category: "EV & Logistics", desc: "Chiếm 40% thị phần EV tại Ấn Độ, định giá 7 tỷ USD. Mở rộng từ 2 lên 84 thành phố.", metric: "70K CHUYẾN ĐI MỖI NGÀY", img: "https://upload.wikimedia.org/wikipedia/en/0/0f/Ola_Cabs_logo.svg" },
    { title: "ZIPGO", category: "Acquisition", desc: "Nền tảng quản lý xe bus số 1 tại Ấn Độ. Exit thành công cho Essel Group.", metric: "THƯƠNG VỤ MUA LẠI 150 TRIỆU USD", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKmenlULd3KWqJN1VWVs_tI71MAnWZGmqC0jdd-o4TgRKUDxN4uk7hVjYbMlq62PxpX42GirX3EHnCtjeZ9D0mo8GJz77YGITJl9zBZhXAgHMqRA6k6yHF4OS12NQVr9LMlKAqUUsnS9yIMCRXt2Fbt5zBcdumA-GZ6hFH2237iiU5J1HVTnoo-8vNcDxYgc7dl6R4uiXy1TiqW_56TMkZP1DOHZy9dt4QSoZSVNtBZOzMP6MOrIfogp__MK54XbLnSXIr7LASq4K1" },
    { title: "Inflow", category: "Supply Chain", desc: "Nền tảng chuỗi cung ứng thời trang B2B on-demand đầu tiên tại Việt Nam dành cho thương hiệu toàn cầu. Phát triển hạ tầng chiến lược.", metric: "MỞ RỘNG B2B TOÀN CẦU", img: "https://asiatechdaily.com/wp-content/uploads/2023/11/inflow-COVER.jpg" },
    { title: "Levents Global", category: "Consumer", desc: "Thương hiệu thời trang GenZ hàng đầu với độ phủ khu vực mạnh mẽ và các collaboration độc quyền cùng Sanrio.", metric: "240 TỶ DOANH THU HÀNG NĂM (VND)", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj5p1GI2bCRFsDQ5EiurYz8qQlk2eC3akZbgyYegrEKYfBvAPZ2hDGvGw-nYSEFD-2avU-sYbI5jSW28Qzso62sGGnfwd0QfokmN30WBZVDaQMoD_YNeXnQq2zJiFuOlYg29dX8mlQ-6SkelZ_566gT3kiJD_eyEO6qfP994Nx1FnYQEhhFyhnLzRqZ7mdgM1ptfYJroRRmbLml-TLNeo2JPgFHhhT_yY9NqbPefUISW_CFKNjhFdgLtEZhv-rmVnZB86PCCUhy6sr" },
    { title: "Finfan", category: "Fintech", desc: "Hỗ trợ thế hệ hạ tầng thanh toán quốc tế tiếp theo. Hỗ trợ Series A, kết nối mạng lưới VC và cố vấn founder.", metric: "HẠ TẦNG THANH TOÁN", img: "https://merchant-uat.finfan.io/logo-black.png" },
    { title: "Sazi Home", category: "Hospitality", desc: "Thương hiệu lifestyle và hospitality.", metric: "KHÔNG GIAN SỐNG", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXVrsFWMSu-Kqh6PTpyw4f2WJxMzzy7eHmQ3sv6ncRqHx70le6DCm-TE4w-MQgp7qGyOj0xsZm3l_K-OFdNCJNmYg6U1DxIZTB01sAyx86Jbl0OJXk9dYhuoMUWP9et9a0v6dpjmnqVFX-97C3AsHRR8393QSJkprZ-DV2CpaKycI6xiiAIVN0gg5kgySB0UVtrgbb3dX6gJwXwM88ksCDU6svPhPXclGM2ffSIqRDoThLFZpVDqOKUqtWQKpXi1lLD_7C6PI4cI8L" },
    { title: "Apptronik", category: "Robotics", desc: "Mở rộng robot hình người Apollo với sự hậu thuẫn từ B Capital và Google. Tiên phong trong robotics đa mục đích.", metric: "SERIES A 350 TRIỆU USD", img: "../assets/mercedesrobots01.jpg" },
    { title: "Blitz", category: "EV Logistics", desc: "Công ty logistics EV tại Indonesia. Hỗ trợ gọi vốn và phát triển chiến lược kinh doanh để mở rộng khu vực.", metric: "CHIẾN LƯỢC & VỐN", img: "https://www.third-derivative.org/hubfs/blitz-logoArtboard%201.png" }
  ]
};

export default function Portfolio() {
  const {lang} = useLanguage();
  const navigate = useNavigate();
  return (
    <main className="bg-background">
      {/* Cinematic Hero */}
      <header className="pt-[120px] pb-16 px-6 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <p className="font-label-md text-[#006493] mb-4 uppercase tracking-widest">Portfolio</p>
            <h1 className="font-display-lg text-6xl md:text-[84px] leading-none mb-8 text-[#006493]" style={lang === "en" ? { fontFamily: "Merriweather Sans, sans-serif", fontWeight: 500 } : { fontFamily: "Akt, serif", fontWeight: 500 }}>
              <span className="italic font-normal text-black">{lang === "en" ? "Building the Future" : "Xây Dựng Tương Lai"}</span> {lang === "en" ? "of Growth." : "của Sự Phát Triển."}
            </h1>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end">
            <p className="font-body-lg text-on-surface-variant mb-6 border-l-2 border-secondary pl-6">
              {lang === "en" ? "A record of strategic support, capital facilitation, and operational excellence across Southeast Asia and global markets." : "Hành trình hỗ trợ chiến lược, kết nối vốn và vận hành doanh nghiệp tại Đông Nam Á và thị trường quốc tế."}
            </p>
          </div>
        </div>
      </header>

      {/* Portfolio Grid */}
      <section className="pb-[120px] px-6 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {portfolioData[lang].map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-outline-variant/10">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-2xl mb-8 text-[#04044A]" style={{fontFamily: "Manrope, sans-serif"}}>{lang === "en" ? "Ready to accelerate your next venture?" : "Sẵn sàng tăng tốc venture tiếp theo của bạn?"}</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => navigate('/contact')} className="bg-[#04044A] text-white px-10 py-4 rounded-full font-label-md hover:opacity-90 transition-all flex items-center gap-2">
              {lang === "en" ? "Start a Conversation" : "Bắt đầu cuộc trò chuyện"} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button onClick={() => navigate('/services')} className="border border-[#04044A]/30 text-[#04044A]  px-10 py-4 rounded-full font-label-md hover:bg-surface-container-low transition-all">
              {lang === "en" ? "View Methodology" : "Xem Phương Pháp Vận Hành"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
