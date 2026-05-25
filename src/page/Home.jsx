import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext"; // Adjust path to your context
import ReactPlayer from 'react-player';
import video from "../assets/Introduction_SDL.mp4"

// ── Reusable fade-in-on-scroll hook ──────────────────────────────────────────
function useFadeIn(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── Service cards data ────────────────────────────────────────────────────────
const services = {
  "en": [
      {
    icon: "dynamic_form",
    title: "Venture Building",
    desc: "Full-stack operational support from day zero, including product design and market validation.",
    variant: "light",
  },
  {
    icon: "insights",
    title: "Growth Strategy",
    desc: "Leveraging data-driven methodologies to scale user bases across Southeast Asian borders.",
    variant: "light",
  },
  {
    icon: "account_balance",
    title: "Capital Access",
    desc: "Connecting founders with a global network of investors and venture capital.",
    variant: "light",
  },
  {
    icon: "groups",
    title: "Talent Acquisition",
    desc: "Embedding core technical and leadership talent into early-stage ventures.",
    variant: "light",
  },
  {
    icon: "hub",
    title: "Strategic Networks",
    desc: "Direct pathways to Vietnam startup ecosystems and investor network.",
    variant: "light",
  },
  {
    icon: "token",
    title: "Technology",
    desc: "Unique business requires unique technology solution to multiply your business.",
    variant: "light",
  },
  ],
  "vi": [
      {
    icon: "dynamic_form",
    title: "Xây Dựng Doanh Nghiệp",
    desc: "Hỗ trợ vận hành toàn diện từ ngày đầu tiên, bao gồm thiết kế sản phẩm, kiểm chứng thị trường và xây dựng nền tảng phát triển.",
    variant: "light",
  },
  {
    icon: "insights",
    title: "Chiến Lược Phát Triển",
    desc: "Ứng dụng các phương pháp tiếp cận dựa trên dữ liệu để mở rộng tệp khách hàng và tăng trưởng xuyên biên giới tại Đông Nam Á.",
    variant: "light",
  },
  {
    icon: "account_balance",
    title: "Tiếp Cận Nguồn Vốn",
    desc: "Kết nối nhà sáng lập với mạng lưới nhà đầu tư và quỹ đầu tư mạo hiểm toàn cầu.",
    variant: "light",
  },
  {
    icon: "groups",
    title: "Thu Hút Nhân Tài",
    desc: "Bổ sung và kết nối đội ngũ công nghệ, quản lý và lãnh đạo cốt lõi cho các startup giai đoạn đầu.",
    variant: "light",
  },
  {
    icon: "hub",
    title: "Mạng Lưới Chiến Lược",
    desc: "Mở ra cơ hội tiếp cận trực tiếp hệ sinh thái khởi nghiệp Việt Nam cùng mạng lưới nhà đầu tư trong và ngoài nước.",
    variant: "light",
  },
  {
    icon: "token",
    title: "Công Nghệ",
    desc: "Mỗi mô hình kinh doanh đều cần một giải pháp công nghệ riêng biệt để tối ưu hiệu quả và thúc đẩy tăng trưởng đột phá.",
    variant: "light",
  },
  ]
};

// ── Why us pillars ────────────────────────────────────────────────────────────
const pillars = {
    "en": [
    {
      num: "01",
      title: "Localized Intelligence",
      desc: "We navigate the nuances of the Vietnamese market with native precision and global standards.",
    },
    {
      num: "02",
      title: "Hands-on Partnership",
      desc: "We are builders, not just advisors. We get into the trenches with you to solve complex technical hurdles.",
    },
    {
      num: "03",
      title: "Founder Experience",
      desc: "Having built and successfully exited our own startup, we know firsthand the struggles founders face and what it takes to succeed at each stage.",
    },
  ],
    "vi": [
    {
      num: "01",
      title: "Am Hiểu Thị Trường Bản Địa",
      desc: "Chúng tôi thấu hiểu sâu sắc thị trường Việt Nam với góc nhìn địa phương và tiêu chuẩn vận hành quốc tế.",
    },
    {
      num: "02",
      title: "Đồng Hành Thực Chiến",
      desc: "Chúng tôi là những người trực tiếp xây dựng doanh nghiệp, không chỉ là cố vấn. SonDoong Labs làm việc sát cánh cùng nhà sáng lập để giải quyết các bài toán vận hành và tăng trưởng.",
    },
    {
      num: "03",
      title: "Kinh Nghiệm Từ Nhà Sáng Lập",
      desc: "Đã từng xây dựng và thoái vốn thành công từ chính startup của mình, chúng tôi hiểu rõ những khó khăn mà nhà sáng lập phải đối mặt và biết điều gì cần thiết để thành công ở từng giai đoạn phát triển.",
    },
  ]
};

// ── Portfolio data ────────────────────────────────────────────────────────────
const portfolio = {
    "en": [
    {
      name: "Finfan",
      sub: "International payment company (Licensed)",
      tag: "FINTECH",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1-kSSRWj7kki_hWbpdZj9tsFgCVA4cyGM5r4wiiRtDve7Jds2Q_WutYIwfu5OoXdOf5IKBhQenoaJFR_PiNFVHN1-2a6FMNWIpUuQyHfEjGtZ9YoK9W1dWGnDEeN1vlAhnNK8mfNnn9k9hYVCF2LNOP_SjtFYPTC991P-SaAoi_wnplEcI6FYRAsJripP9QrJRuy4Pg4u85OPMMlNe4IlLIxxEJSn5J1_hx7KtwGn-a5Zd19QhGw-AS7m5IHBDj7mC-k8BrLNPEwnN4o",
    },
    {
      name: "Levents Global",
      sub: "Fashion Brand for GenZ with 10M+/year",
      tag: "CONSUMER",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEmB9YscXNPopAL8TIah-DRBQ-cEooGTXHoROAahwwN6iP-6oyc7Q1W4I9ub5UnAQ8UaIga6LcNpdZsHQp8qAf_8jr4e33Chw4h-5XTMLg3b6NdpzalXCFxNf6JC9f0dQnBFl0TVX10NS7MrW6paIp2IsQIlflm1Mc3bAtICtwTzFBg8yClNI_V8ciyKX2bKVZ5Ew6SgUSk8OlJpDkBQz8j9tXk1D0nYjaD0o9GVCGWbjfpGHv_kUANOP1NDDp8f2v5z1UaViMX02Yzm0",
    },
  ],
    "vi": [
    {
      name: "Finfan",
      sub: "Doanh nghiệp thanh toán quốc tế được cấp phép hoạt động",
      tag: "FINTECH",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1-kSSRWj7kki_hWbpdZj9tsFgCVA4cyGM5r4wiiRtDve7Jds2Q_WutYIwfu5OoXdOf5IKBhQenoaJFR_PiNFVHN1-2a6FMNWIpUuQyHfEjGtZ9YoK9W1dWGnDEeN1vlAhnNK8mfNnn9k9hYVCF2LNOP_SjtFYPTC991P-SaAoi_wnplEcI6FYRAsJripP9QrJRuy4Pg4u85OPMMlNe4IlLIxxEJSn5J1_hx7KtwGn-a5Zd19QhGw-AS7m5IHBDj7mC-k8BrLNPEwnN4o",
    },
    {
      name: "Levents Global",
      sub: "Thương hiệu thời trang cho GenZ với doanh thu 10M+/năm",
      tag: "CONSUMER",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEmB9YscXNPopAL8TIah-DRBQ-cEooGTXHoROAahwwN6iP-6oyc7Q1W4I9ub5UnAQ8UaIga6LcNpdZsHQp8qAf_8jr4e33Chw4h-5XTMLg3b6NdpzalXCFxNf6JC9f0dQnBFl0TVX10NS7MrW6paIp2IsQIlflm1Mc3bAtICtwTzFBg8yClNI_V8ciyKX2bKVZ5Ew6SgUSk8OlJpDkBQz8j9tXk1D0nYjaD0o9GVCGWbjfpGHv_kUANOP1NDDp8f2v5z1UaViMX02Yzm0",
    },
  ]
};

// ── Contact info ──────────────────────────────────────────────────────────────
const contacts = [
  { icon: "mail", text: "startup@sondoonglabs.asia" },
  { icon: "location_on", text: "Tan My Ward, Ho Chi Minh City, Vietnam" },
];

// ════════════════════════════════════════════════════════════════════════════
export default function Home() {
  const [formData, setFormData] = useState({
    name: "", email: "", interest: "Venture Building", message: "",
  });
  const { lang } = useLanguage()
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="font-sans antialiased text-[#1c1b1b] bg-[#fcf9f8]">

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <header className="relative flex items-center overflow-hidden bg-[#424444] h-[calc(100vh-70px)]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPkuThYIAIt4YJMsbpaGeb98s8Hf3Zmvi24PeWCLI1MI0O6MF29Upu7VwVYDDdYPD3oXkJZUnL0-eU8bjADe91aDO4OmhQQUQsqqzM3iZviG1ZP4hsprOlkZQCg-SaLFo7oSS6clpIItZ7JyeTRJ1vPpeljP84BiexL8IuaH-8ziLhiy7lPz94KPSjXFttLWZQYbr4_CHSGAUipHK05Z_KZESYcrftKAqLdcGveUZMnvg0oQ3cBJ__9iI5wG_UYsG6sGEqW116faOb7gw"
            alt="Dramatic cave interior with light rays"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay object-center"
          />
        </div>

        {/* gradient overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full pt-16 pb-24">
          <div className="max-w-4xl">
            <span
              className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase text-[#71c3fe] mb-6 bg-[#006493]/30 px-3 py-1 rounded"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {lang === "en" ? "VENTURE BUILDER" : "ƯƠM MẦM KHỞI NGHIỆP"}
            </span>

            <h1
              className="text-[42px] md:text-[64px] text-white mb-8 leading-[1.1] font-medium tracking-[-0.02em]"
              style={{ fontFamily: "Newsreader, Georgia, serif" }}
            >
              {lang === "en" ? "A Startup Program for Founders by Founders" : "Chương Trình Khởi Nghiệp Dành Cho Nhà Sáng Lập, Được Xây Dựng Bởi Chính Những Nhà Sáng Lập"}
            </h1>

            <p className="text-[16px] text-[#d8d8d8] max-w-2xl mb-10 leading-relaxed">
              {lang === "en"
                ? '"SonDoong Labs is an independent privately owned venture builder cum investment management company that aims to support early-stage and growth startups."'
                : '"SonDoong Labs là một công ty xây dựng doanh nghiệp (venture builder) kết hợp quản lý đầu tư độc lập, thuộc sở hữu tư nhân, với sứ mệnh hỗ trợ các startup giai đoạn đầu và đang tăng trưởng phát triển bền vững. Labs là một công ty xây dựng doanh nghiệp độc lập và sở hữu tư nhân, kết hợp với quản lý đầu tư, nhằm hỗ trợ các startup giai đoạn đầu và có tiềm năng tăng trưởng."'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#71c3fe] text-[#001e30] px-8 py-4 rounded-lg font-bold text-[15px] hover:opacity-90 transition-opacity">
                {lang === "en" ? "Start a Venture" : "Khởi Tạo Dự Án"}
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-[15px] hover:bg-white/10 transition-colors backdrop-blur-sm">
                {lang === "en" ? "View Portfolio" : "Xem Danh Mục Đầu Tư"}
              </button>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce">
          <span className="text-[10px] tracking-[0.15em] font-semibold" style={{ fontFamily: "Manrope, sans-serif" }}>
            {lang === "en" ? "SCROLL" : "KÉO XUỐNG"}
          </span>
          <span className="material-symbols-outlined text-[20px]">expand_more</span>
        </div>
      </header>

      {/* ── ABOUT ───────────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#fcf9f8]">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center gap-16">
          <div className="max-w-3xl text-center">
            <FadeIn>
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#2c2e2e] mb-4 block" style={{ fontFamily: "Manrope, sans-serif" }}>
                {lang === "en" ? "ABOUT SONDOONG LABS" : "VỀ SONDOONG LABS"}
              </span>
              <h2 className="text-[24px] text-[#2c2e2e] mb-6 italic font-semibold leading-[1.4]" style={{ fontFamily: "Newsreader, serif" }}>
                {lang === "en"
                  ? "Beyond capital, we help build the foundation behind enduring companies."
                  : "Không chỉ là nguồn vốn, chúng tôi xây dựng nền tảng cho những doanh nghiệp trường tồn."}
              </h2>
              <div className="w-12 h-[3px] bg-[#71c3fe] mb-8 mx-auto rounded-full" />
              <p className="text-[14px] text-[#42474e] leading-relaxed">
                {lang === "en"
                  ? "Sondoong Labs through its venture builder arm enters a startup in different situations with different contexts: at a time when the company has just been incorporated, when the business is fledgling and lacks the growth momentum, or when the venture has immense potential but lacks investors & people interest to join as partners / key hires, or even when the venture is stuck in myriad growth problems."
                  : "Thông qua mô hình venture builder, SonDoong Labs đồng hành cùng startup trong nhiều bối cảnh khác nhau: khi doanh nghiệp vừa được thành lập, khi hoạt động kinh doanh còn non trẻ và thiếu động lực tăng trưởng, khi dự án sở hữu tiềm năng lớn nhưng chưa thu hút được nhà đầu tư hoặc nhân sự chủ chốt, hoặc khi doanh nghiệp đang mắc kẹt trong những thách thức tăng trưởng phức tạp."}
              </p>
            </FadeIn>
          </div>

          {/* video thumbnail */}
          <FadeIn delay={100} className="w-full max-w-5xl">
            <div className="aspect-video bg-[#424444] rounded-xl overflow-hidden relative group shadow-2xl">
              <video
                className="w-full h-full object-cover"
                controls
                poster="https://lh3.googleusercontent.com/aida-public/AB6AXuAAzh7jAiJRutg8IyCgWnzR92x5drT25WdUKZVj309P6Mgclw8kbnqBd6FdP3lafDTbd1Wlba3ai33uRPfph2Lkm-eRBWs7KMU8K5SY6sEo9cAv4fNt_yU75639SPPKOA8bb-5I3bV-beZHmMpDCtpjy3RN2YETk_-UL0VkOm4ow35_kZS06wffsYiQkr-UKmtTUpxwZ6zXo3riJpDQalUNELZesqw9PF0zgO-iA5jL9zDN1PKvxJP7d9mCx1NlfubaPdcBga4rgatW" // Image shown before play
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#f6f3f2]">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn className="mb-16 text-center">
            <h2 className="text-[24px] font-bold text-[#2c2e2e] mb-3">{lang === "en" ? "What We Do" : "Chúng Tôi Làm Gì"}</h2>
            <p className="text-[14px] text-[#42474e] max-w-xl mx-auto">
              {lang === "en"
                ? '"A comprehensive ecosystem designed to de-risk startup growth from ideation to exit."'
                : '"Một hệ sinh thái toàn diện giúp giảm thiểu rủi ro tăng trưởng cho startup từ giai đoạn hình thành ý tưởng đến khi mở rộng hoặc thoái vốn."'}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services[lang].map((s, i) => (
              <FadeIn key={s.title} delay={i * 60}>
                <ServiceCard {...s} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#04044A]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            {/* text */}
            <div>
              <FadeIn>
                <h2
                  className="text-[36px] md:text-[42px] text-white mb-10 italic font-medium leading-[1.15]"
                  style={{ fontFamily: "Newsreader, serif" }}
                >
                  {lang === "en" ? "Why SonDoong Labs?" : "Vì Sao Là SonDoong Labs?"}
                </h2>
              </FadeIn>
              <div className="space-y-10">
                {pillars[lang].map((p, i) => (
                  <FadeIn key={p.num} delay={i * 100}>
                    <div className="flex gap-6">
                      <div className="text-[#71c3fe] text-[22px] font-semibold tabular-nums shrink-0 leading-tight mt-0.5">
                        {p.num}
                      </div>
                      <div>
                        <h4 className="text-[18px] font-semibold text-white mb-2">{p.title}</h4>
                        <p className="text-[14px] text-[#c2c7cf] leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* image */}
            <FadeIn delay={200} className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#71c3fe]/10 blur-3xl rounded-full pointer-events-none" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe2B69I91h0c1DSuqMAYdyxbdOcPMc7PH0ocZ8AgKy0ikyLCPZGnIFC2poGlkdAiJXCRoQaHSDXxdczVROAOzFPTxbEMZlYyyA7u4OWHG5TUA892OZmzMPlTEr7rAp2t1AnYgUYz15yya6MzqUr2FRrVG4wvlIfQW19jKeG3dxC7vxXyqAkXfVQpf0kkTYK0RPBV7xdP7__v1Si79ODno775m4_KoOUsQRkWfzWi4B6HwLbISf6k3bFjHGPocT2Af3F1QmaUrHVv2vzjM"
                alt="Architectural blueprints"
                className="rounded-2xl w-full object-cover"
                style={{ aspectRatio: "4/5" }}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ───────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#fcf9f8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn className="flex justify-between items-end mb-14">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#006493] mb-3 block" style={{ fontFamily: "Manrope, sans-serif" }}>
                {lang === "en" ? "PORTFOLIO HIGHLIGHTS" : "DỰ ÁN TIÊU BIỂU"}
              </span>
              <h2 className="text-[24px] font-bold text-[#2c2e2e]">
                {lang === "en" ? "Featured Ventures" : "Các Doanh Nghiệp Nổi Bật"}
              </h2>
            </div>
            <a
              href="/portfolio"
              className="text-[14px] font-semibold text-[#2c2e2e] border-b border-[#2c2e2e] hover:text-[#006493] hover:border-[#006493] transition-colors"
            >
              {lang === "en" ? "View full directory" : "Xem toàn bộ danh mục"}
            </a>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio[lang].map((p, i) => (
              <FadeIn key={p.name} delay={i * 100}>
                <PortfolioCard {...p} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / CONTACT ───────────────────────────────────────────────── */}
      <section className="py-28 bg-[#fcf9f8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
              {/* left panel */}
              <div className="md:w-1/2 bg-[#04044A] p-12 md:p-20 text-white flex flex-col justify-center">
                <h2
                  className="text-[36px] md:text-[42px] mb-5 italic font-medium leading-[1.15]"
                  style={{ fontFamily: "Newsreader,  serif" }}
                >
                  {lang === "en" ? "Ready to build?" : "Sẵn Sàng Xây Dựng Điều Lớn Lao?"}
                </h2>
                <p className="text-[15px] text-[#c2c7cf] mb-8 leading-relaxed">
                  {lang === "en"
                    ? '"We are looking for elite founders, strategic partners, and technical innovators to shape Vietnam\'s next decade."'
                    : '"Chúng tôi tìm kiếm những nhà sáng lập đầy tham vọng, các đối tác chiến lược và nhà đầu tư cùng chung tầm nhìn về làn sóng tăng trưởng tiếp theo của Việt Nam."'}
                </p>
                <div className="space-y-4">
                  {contacts.map((c) => (
                    <div key={c.text} className="flex items-center gap-4 text-[#71c3fe]">
                      <span className="material-symbols-outlined text-[20px]">{c.icon}</span>
                      <span className="text-[14px] text-white">{c.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* right panel — form */}
              <div className="md:w-1/2 bg-white p-12 md:p-20">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                    <span className="material-symbols-outlined text-[48px] text-[#71c3fe]">check_circle</span>
                    <h3 className="text-[20px] font-semibold text-[#2c2e2e]">{lang === "en" ? "Inquiry sent!" : "Đã gửi yêu cầu!"}</h3>
                    <p className="text-[14px] text-[#42474e]">{lang === "en" ? "We'll be in touch soon." : "Chúng tôi sẽ sớm liên lạc với bạn."}</p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        label={lang === "en" ? "FULL NAME" : "HỌ VÀ TÊN"}
                        type="text"
                        placeholder={lang === "en" ? "John Doe" : "Nguyễn Văn A"}
                        value={formData.name}
                        onChange={(v) => setFormData((p) => ({ ...p, name: v }))}
                      />
                      <FormField
                        label={lang === "en" ? "EMAIL ADDRESS" : "ĐỊA CHỈ EMAIL"}
                        type="email"
                        placeholder={lang === "en" ? "john@example.com" : "john@example.com"}
                        value={formData.email}
                        onChange={(v) => setFormData((p) => ({ ...p, email: v }))}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#42474e]" style={{ fontFamily: "Manrope, sans-serif" }}>
                        {lang === "en" ? "INTEREST AREA" : "NỘI DUNG QUAN TÂM"}
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData((p) => ({ ...p, interest: e.target.value }))}
                        className="w-full border-0 border-b border-[#c2c7cf] focus:ring-0 focus:border-[#2c2e2e] transition-colors py-2 px-0 text-[14px] bg-transparent outline-none"
                      >
                        {["Venture Building", "Investment Partnership", "Careers", "Press Inquiry"].map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#42474e]" style={{ fontFamily: "Manrope, sans-serif" }}>
                        {lang === "en" ? "HOW CAN WE HELP?" : "CHÚNG TÔI CÓ THỂ HỖ TRỢ BẠN NHƯ THẾ NÀO?"}
                      </label>
                      <textarea
                        rows={4}
                        placeholder={lang === "en" ? "Tell us about your vision..." : "Hãy cho chúng tôi biết về tầm nhìn của bạn..."}
                        value={formData.message}
                        onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                        className="w-full border-0 border-b border-[#c2c7cf] focus:ring-0 focus:border-[#2c2e2e] transition-colors py-2 px-0 text-[14px] resize-none bg-transparent outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#2c2e2e] text-white py-4 font-bold text-[14px] hover:bg-[#424444] transition-colors rounded shadow-lg tracking-wide"
                    >
                      {lang === "en" ? "Submit Inquiry" : "Gửi Yêu Cầu"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function ServiceCard({ icon, title, desc }) {
  return (
    /* 
       h-full: Ensures the card fills the grid cell height.
       flex flex-col: Allows the internal content to align vertically.
       transition-all: Smoothly animates both the bg color and the lift.
       hover:bg-[#2c2e2e]: The dark grey background on hover.
       hover:text-white: Changes all text inside the card to white on hover.
    */
    <div className="bg-white p-10 rounded-xl shadow-sm border border-[#c2c7cf]/40 
                    hover:bg-[#04044A] hover:text-white 
                    hover:-translate-y-2 transition-all duration-300 
                    cursor-default flex flex-col h-full group">
      
      {/* Icon: Changes color on group-hover */}
      <span className="material-symbols-outlined text-4xl mb-6 block text-[#71c3fe] group-hover:text-white transition-colors">
        {icon}
      </span>
      
      {/* Title */}
      <h3 
        className="text-[22px] font-medium mb-3 leading-snug text-[#2c2e2e] group-hover:text-white transition-colors" 
        style={{ fontFamily: "Newsreader, serif" }}
      >
        {title}
      </h3>
      
      {/* Description: flex-grow ensures the card stretches if text is long */}
      <p className="text-[14px] leading-relaxed text-[#42474e] group-hover:text-[#c2c7cf] transition-colors flex-grow">
        {desc}
      </p>
    </div>
  );
}

function PortfolioCard({ img, name, sub, tag }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[16/10] overflow-hidden rounded-lg mb-5 bg-[#e5e2e1]">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h4
            className="text-[22px] font-medium text-[#2c2e2e] group-hover:text-[#006493] transition-colors"
            style={{ fontFamily: "Newsreader, Georgia, serif" }}
          >
            {name}
          </h4>
          <p className="text-[13px] text-[#42474e] italic mt-1">{sub}</p>
        </div>
        <span
          className="text-[10px] font-semibold tracking-[0.12em] bg-[#f0edec] text-[#42474e] px-2 py-1 shrink-0 mt-1"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {tag}
        </span>
      </div>
    </div>
  );
}

function FormField({ label, type, placeholder, value, onChange }) {
  return (
    <div className="space-y-1">
      <label className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#42474e]" style={{ fontFamily: "Manrope, sans-serif" }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-0 border-b border-[#c2c7cf] focus:ring-0 focus:border-[#2c2e2e] transition-colors py-2 px-0 text-[14px] bg-transparent outline-none placeholder-[#888780]"
      />
    </div>
  );
}