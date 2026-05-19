import { FadeIn } from "./Home"; // Assuming you kept the FadeIn component in a shared file

const About = () => {
  const team =[
    { name: "Hoang Nhat (Leo)", role: "CO-FOUNDER", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCI9QpoNRV-27b1v-dhdU3IwQeqH8j2Gz4LvwhZXGhW5m3sX6MZaO3Up-El7ZkJaXXJzQqOvUyFaIuLWM7iNqq9c4wSE11fN4gglfEk1E5JqBCdGoh5sXncUiuPKRFWiQGI16C34alp62SyYtXWgWTM2P2FF8w9l4IZnjxfcz_e15wZEIxXJpwq3gpcVcft04Ioj2VpRx7T_VbjBJa3auNrkDh__N0MZGOO5wyeyIwfLKsqoAJN0AJgZ80ffNcHK_T26uJPijEpdRVWkzM", bio: "Ex-Managing Director of Godee" },
    { name: "Pritesh Gupta", role: "CO-FOUNDER & CEO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvT7acsb0rafaTR1UqtJmsR8GKWuYXvK6ruBzLO_f_QKQ1ML-MxZ1s5gfzcaq-vZbSglbjZPY9lQhDbHAxhhBYl25WD17mwsmSljfU6hGPD0P0CJ6o9u_NK3tA-HBt_y6ZR5BbTkMs3cpWhRzYTdtkoRl6Y3m7mcnN9-qNS6dexsVJNBKVFw7pYRVK_S3VKmnLENkszUWOlDcjgnMJm5DjIuOEPFyaiRBTd0Q6WXAMxN_M8P4KzBOMvZSXXXC0Q_L5W28KrY6xwOsL3cw", bio: "Ex-VP of Ola Corp. Successful Exit for ZipGo." },
    { name: "Hoang William", role: "LAWYER PARTNER", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCADBZoXBqyywJQwPcv6foae6qIsMdXMWexo1KERmuqJsKizo9TJ9ct_Bl77FEQ516DkCXmH-z_bdUgZJyY04fmz2mlxHrR5sONbgwKUjWsu-mluNYI_03Lz_Mtey_JAQNIZ4OJb35e8BFViBIOTtKbvXCKJ0SCooaRklzVx-Rx9r-JAICFVTmoQuN2Rptn1eL9Y_E0fteG5JSe7LK1sKolJmC4SX6Vivhve58fQVWYWVzML8S4S8P8UivaEyB_zaPdnFHSz7dAXTO6-nI", bio: "MBA - Lawyer. Managing Partner of CBI Law Firm." },
    { name: "Max Tran", role: "TECHNICAL PARTNER", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDETHrqke3LAn-MILYzfe585JfEWJeyqiJhgjg4tZcBJ7OJYvsJRpeoYIrEZnsr6wWoZ8lQCnUzZqCWnZSALzx-Ctz31wFmF8KHS1Z9x5LrSg9iDVJ8Eo5pwtWNGdhgzQx_6KHKiQOzlEqDUjRID_mhvdCYOdmfAifb7A2LyJxxQmnuDfmvmh9wMLJyyTuQMFjH1CaMdUwPjmhwKuQwFytHgSgMWRFSBxABMgCcJTMQdH-lSI6AiFGMN2eXsyxOERmuMHkqJk50BpE3arU", bio: "Oracle Certified Data Scientist. 8+ years experience." },
    { name: "Sam Dang", role: "MARKETING PARTNER", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKM9uTw4ciQvFlkzQdlSd1VZc1w927SsoZOpmfACsZwrDnYuOFZJE-G2XV_4NT9pgSY8ADbodZL3zl9Psf265eEql8vduLgFDwLsRL3acLKc6IZ5LRSg4vPocQ1uYbM8qCB_pixYowcFGISImxPIXcCa-8kOqDl9lvEn-XjqIiVeUugflCMNGlPasUPDkmcDAlHC0fck-wiNnkFJCWN0oF6txMV1syxFXmKXOniJ5Clej2D0wenEa8adryZZa-WK0VI2DE_0GaRo-JDeA", bio: "Director of External Relations – Bee Comm/Sakos." },
    { name: "Le Hoang Phuong", role: "PROGRAM DIRECTOR", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6TghveMQRuxpmNQR-4qQHHHcfpVpWzVH_qGhRCOeFLbvU_S566vAad5IEXEbd7e6guAO5T8hUnhWEceZw1v5wcR1DDZ40uY9z_0uXOtiyjyoWAvX_gU9PcsL4HkU0laakZz8HflcyhlISMO2joGSE40Ax0vnmu4CkrMjhFaHbcSo3yOqstYzcOvcA_3S9N64-MbnYn0YGUlKWttqatW-qRvot0FxwSdMYNnMZPY7AJetaOrIeCn0uxYhhdnbrB_eNnlXwAupMZ28g7tg", bio: "Head of Association Relations at InnoEx." },
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
            <div className="aspect-square bg-black rounded-xl flex items-center justify-center p-12">
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
      <section className="py-[120px] bg-[#2c2e2e] text-on-primary">
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