import { FadeIn } from "./Home"; // Assuming you kept the FadeIn component in a shared file

const About = () => {
  const team =[
    { name: "Hoang Nhat (Leo)", role: "CO-FOUNDER", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDQXMZYvzXwAY6X2QAfDuVssgzKrbXZts_LHQYqbx4uAmDaHkHWzZAXxo0po_WLzASY7LH8OhYuFvbGOEizoLKL1lYI8hLFJbaUlfEyc-YJtjfjJA_t2_pxAhidFYsu1KnILl_TBUW6hAMtFkf6UqQCch3XPVZb3E3xJIrgA0K47mO_fqasH_yF5GpiJLDgPx2aU8IE9C_x7TVsRxH8qa9VtsZ5M2rcVaolZxieAmXAVHhZuAYUVvad5nBOZDqMpcimW9Lg_Bmq1TsTBA", bio: "Ex-Managing Director of Godee" },
    { name: "Pritesh Gupta", role: "CO-FOUNDER & CEO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaqExR4CVoPbWW3I9E_WLOqNuo7zXQluRRrOX_t8l1UcaBZ0sdMsYMCtes_xPRC9V1LSVcHGFJiKM_j3aS0ji9WjZ-DRyolykYV7fhvYwJqTu5PEBBlSulbnAv9FZF3tdVvj6Abb56UJNukkfBkmaKVD194qmbWsrdIX8nAwPO4nzA1Pvz7xhkZa-n690lHOIk-aY7HO6IJseb0zVz3B5QeMSW2dEhIqDMkgaVKKOm83voH_XvPMG70Bb_tDPz4OgMQRw2OOG1P8gXN8Q", bio: "Ex-VP of Ola Corp. Successful Exit for ZipGo." },
    { name: "Hoang William", role: "LAWYER PARTNER", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIOKU8EgoLv7P0RbVxHBZI3WJYLdMCyXpm1wTrnzPJ3V23P1IWeWN0Ti78mJAfNuz4I7La7T_5eXS0_ep4CM8IDlx0O2z_fB9ZFyFJF4NmukU5cYzARQoOstaD0FIR37nFNSiQL62j5gZqM3SDyfRX-V6ym70HBIZbqdhEEiSLcQssCFFkrk5ubSBV1zTSua-h3u9F9jxte62rrmfjyfPZj0dvcspVQGPbEqa2W-CcsY9kUF5lvouu5BesgwVcB1Gd4sK8Wra_721LcSA", bio: "MBA - Lawyer. Managing Partner of CBI Law Firm." },
    { name: "Max Tran", role: "TECHNICAL PARTNER", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNfOZu5afIiP-LU_JQI3cXaSSxQOB8BHqgMQLIhSIHD0wfZKX2swIQq6EWb9tsj4X8oQTs9NJiQwxm3is4Lc2AupwkaRJ3eL2757wzHEXFdJooRjZXIf33NvunusD_HfGn6b2gx1XpuXSDfowvbpJM6jF4POkrIbAGjnpDJQEZl76KLmykG4_J5zvMqd7YJWlUy1xJp0ua5S5qw3Q6jUTF4zK5Lf1XxUUSjNTknkuA2wSErhnRwyIgf9fCTPucyCujSjwMI-cyxFxqPYI", bio: "Oracle Certified Data Scientist. 8+ years experience." },
    { name: "Sam Dang", role: "MARKETING PARTNER", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7_R2dGC0m0XUYOKkb_KHmYjXqwH5WvnTfloJOdyuezUXoF7dK6Rqc4ciRtPQB20-dxbn7o5BFliYwmGNIb7GZtHPCzMDFAO8972AObfft9nCCkBiiX7TGTzYGE8rvYkTXE_dAt3eMYtUoc9oZ3cYnPZkFgffPQjMJICvcRmoZ6RHhegLEih3wctsCotu5Ou_mtt-PMHdWx1bMiF0EZjtMjLXLC8CY8NvB4_Pb9oyOKwsPMdk_LgBDJN5pwwtxYYw9Z3V7bSmeS5ZBswU", bio: "Director of External Relations – Bee Comm/Sakos." },
    { name: "Le Hoang Phuong", role: "PROGRAM DIRECTOR", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUciP8g7DP9rwBiLIsL2FMvbsuLnU40q6Y_yz3dKAGFKACQo1ia0lveYd6Fc-dptMIDh54bBElHwezcopqOfLpsiSKA_oqGuFcMHk-aKK1O4WzhIdkTz3soeZ4rYZ25pSAIrDtU-C7jVazaP-Qjc48JTegHqFCO0amaXkWbQJnre8nk_C_4LVCh0tfu9ZQ8iFtuoJT_NDI14L2oNi5t0yk8pWU4cnyzEmtwUSqZYZZQiNkLwX56LDgoTJESJ-c4s34EOVrAyWQrwExp3U", bio: "Head of Association Relations at InnoEx." },
  ];

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="pt-[160px] pb-24 px-6 max-w-[1280px] mx-auto text-center md:text-left">
        <FadeIn>
          <span className="font-label-caps text-secondary mb-6 block uppercase tracking-[0.2em]">About SonDoong Labs</span>
          <h1 className="font-display-lg text-4xl md:text-6xl mb-8 leading-[1.1]">
            Building Ventures With Founders, Operators, and <span className="italic font-normal">Long-Term Vision</span>.
          </h1>
        </FadeIn>
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
            <h2 className="text-2xl font-bold mb-8">Corporate Profile</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "ENTITY NAME", val: "CÔNG TY TNHH SONDOONG LABS" },
                { title: "HEADQUARTERS", val: "Saigon Paragon Building, HCMC, Vietnam." },
                { title: "SECTOR FOCUS", val: "Venture Builder" }
              ].map((item) => (
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
          <span className="text-secondary mb-4 block uppercase tracking-widest text-xs">01 / OUR VISION</span>
          <h3 className="text-2xl font-bold mb-6">To empower the next billion digital citizens.</h3>
          <p className="text-on-surface-variant">We look beyond the horizon to see a Southeast Asia that is interconnected and technologically sovereign.</p>
        </FadeIn>
        <FadeIn delay={200}>
          <span className="text-secondary mb-4 block uppercase tracking-widest text-xs">02 / OUR MISSION</span>
          <h3 className="text-2xl font-bold mb-6">Bridging high-finance strategy with ground energy.</h3>
          <p className="text-on-surface-variant">We combine institutional rigor with the agile, relationship-driven culture of the region.</p>
        </FadeIn>
      </section>

      {/* Leadership Grid */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto">
        <h2 className="text-2xl font-bold mb-16">Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, i) => (
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
                style={{ fontFamily: "Newsreader, Georgia, serif" }}
                >
                Ready to build the future of <br className="hidden md:block" /> your business?
                </h2>
                <button className="bg-[#A0D9FF] text-on-secondary-container px-10 py-5 font-label-caps text-label-caps rounded-lg hover:opacity-90 active:scale-95 transition-all uppercase tracking-widest">
                Meet us
                </button>
            </FadeIn>
            </div>
      </section>
    </main>
  );
};

export default About;