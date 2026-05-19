import { FadeIn } from "./Home";

const serviceData =[
  {
    num: "01",
    title: "Venture Building",
    desc: "We partner with founders and corporations to design, build, and launch new digital businesses from zero to one. Our approach combines institutional-grade financial modeling with rapid prototyping.",
    features: ["Market Validation & Feasibility", "Cap Table Architecture", "Interim Leadership Sourcing"],
    bg: "bg-surface",
    titleColor: "text-[#2c2e2e]",
    textColor: "text-[#42474e]"
  },
  {
    num: "02",
    title: "Startup Strategy",
    desc: "Refining the narrative for global investors. We specialize in fundraising strategy and operational roadmaps for Series A+ ventures entering the SEA market.",
    features:["Fundraising Strategy", "Operational Roadmaps", "Market Entry Strategy"],
    bg: "bg-[#1e466b]", // tertiary-container
    titleColor: "text-white",
    textColor: "text-[#8fb4df]" // on-tertiary-container
  },
  {
    num: "03",
    title: "Branding & Growth",
    desc: "Narrative-driven identity and performance marketing engines that resonate across diverse cultural landscapes.",
    features: ["Identity & Narrative", "Performance Marketing", "GTM Execution"],
    bg: "bg-surface",
    titleColor: "text-[#2c2e2e]",
    textColor: "text-[#42474e]"
  },
  {
    num: "04",
    title: "Product & Technology",
    desc: "Engineering high-performance digital products. Our tech stack is built for scale, focusing on mobile-first economies.",
    features: ["High-Performance Engineering", "Scalable Architecture", "Mobile-First Solutions"],
    bg: "bg-[#cae6ff]", // secondary-fixed
    titleColor: "text-[#001e30]",
    textColor: "text-[#004b70]"
  }
];

export default function Services() {
  return (
    <main className="bg-background">
      {/* Editorial Hero */}
      <section className="relative pt-[120px] pb-24 overflow-hidden bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-end">
          <div className="md:col-span-8">
            <FadeIn>
              <span className="font-label-caps text-secondary mb-6 block uppercase tracking-[0.2em]">Our Capabilities</span>
              <h1 className="font-display-lg text-4xl md:text-6xl mb-8 max-w-4xl">
                <span className="italic text-secondary">Strategic Support</span> for High-Growth Startups
              </h1>
            </FadeIn>
          </div>
          <div className="md:col-span-4 pb-4">
            <FadeIn delay={200}>
              <p className="font-body-lg text-on-surface-variant leading-relaxed border-l-2 border-secondary pl-6 mb-8">
                From venture building and growth strategy to talent, technology, and capital support, we help startups scale sustainably.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-[1280px] mx-auto px-6 mt-16">
          <FadeIn delay={400}>
            <div className="aspect-[21/9] w-full overflow-hidden rounded-xl editorial-shadow">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7LDYbGm4ADlpoVD__GLHUML1JRC79A4ak-Tz8IA9nEUXOjCutV2Cw0oqqBnh2_5W36I1tZ6yfLbxZbSCaJ9PflB5RZHpLg_yKQwnsgoWMJ_UaQbxJqSdZoqs260BS5wKwPotVpQOrEbmLwQuv3W2w0hb1s2zIYkXaAzrfdkqpR5TRbj77fSYr0VpLr4Z3ypLmsvmEy6MH80gm4EUM7wP4rIBak4NSWe7eAWHBGxk-X8B2AGoryMaIpfzhIMp2o37hfitHsK7WojdCJ3k" 
                alt="Office space" 
                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700 grayscale"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceData.map((s, i) => (
              <FadeIn key={s.num} delay={i * 100}>
                <div className={`${s.bg} p-12 rounded-xl editorial-shadow border border-white/10 flex flex-col h-full`}>
                  <span className={`font-display-lg italic opacity-30 block mb-4 ${s.titleColor}`}>{s.num}</span>
                  <h3 className={`text-2xl font-bold mb-6 ${s.titleColor}`}>{s.title}</h3>
                  <p className={`font-body-md mb-8 leading-relaxed ${s.textColor}`}>{s.desc}</p>
                  <ul className="space-y-4 mt-auto">
                    {s.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="font-label-caps text-xs uppercase">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display-lg mb-12">Ready to define the next decade of growth?</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button className="bg-primary text-white px-10 py-4 rounded-full font-label-caps hover:opacity-90 transition-all uppercase">Start a Venture</button>
              <button className="border border-outline px-10 py-4 rounded-full font-label-caps hover:bg-surface-container-low transition-all uppercase">Request Portfolio</button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}