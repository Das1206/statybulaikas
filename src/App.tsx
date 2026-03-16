import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GoogleGenAI } from '@google/genai';
import { 
  Building2, 
  PaintRoller, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Menu,
  X,
  Landmark,
  Droplets,
  ChevronRight,
  Award,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="flex flex-col items-center">
      <div className="w-8 h-6 border-t-[3px] border-b-[3px] border-gray-500 flex justify-between px-1 py-0.5">
        <div className="w-1.5 h-full bg-gradient-to-b from-gray-400 to-gray-500"></div>
        <div className="w-1.5 h-full bg-gradient-to-b from-gray-400 to-gray-500"></div>
      </div>
      <div className="w-10 h-1 bg-gray-500 mt-0.5"></div>
      <div className="w-12 h-1 bg-[#A6192E] mt-0.5"></div>
    </div>
    <div className="flex flex-col">
      <span className="text-[#A6192E] font-extrabold text-xl leading-none tracking-wider font-sans">STATYBŲ LAIKAS</span>
      <span className="text-gray-600 text-[0.45rem] tracking-[0.2em] uppercase mt-1 font-medium">Uždaroji Akcinė Bendrovė</span>
    </div>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [images] = useState({
    hero: "https://image.pollinations.ai/prompt/historic%20building%20restoration%20construction%20scaffolding%20professional%20photography?width=1920&height=1080&nologo=true",
    problem: "https://image.pollinations.ai/prompt/close%20up%20masonry%20historic%20restoration%20construction%20details?width=800&height=600&nologo=true",
    theater: "https://image.pollinations.ai/prompt/grand%20historic%20theater%20building%20restored%20facade%20architecture?width=800&height=450&nologo=true",
    chapel: "https://image.pollinations.ai/prompt/small%20historic%20chapel%20restored%20architecture%20nature?width=800&height=450&nologo=true"
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#A6192E] selection:text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
              <Logo />
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollTo('apie')} className="text-sm font-semibold text-gray-700 hover:text-[#A6192E] transition-colors uppercase tracking-wide">Apie</button>
              <button onClick={() => scrollTo('paslaugos')} className="text-sm font-semibold text-gray-700 hover:text-[#A6192E] transition-colors uppercase tracking-wide">Paslaugos</button>
              <button onClick={() => scrollTo('projektai')} className="text-sm font-semibold text-gray-700 hover:text-[#A6192E] transition-colors uppercase tracking-wide">Projektai</button>
              <button onClick={() => scrollTo('procesas')} className="text-sm font-semibold text-gray-700 hover:text-[#A6192E] transition-colors uppercase tracking-wide">Procesas</button>
              <button onClick={() => scrollTo('kontaktai')} className="bg-[#A6192E] text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-[#8a1425] transition-colors uppercase tracking-wide">
                Susisiekti
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
            <button onClick={() => scrollTo('apie')} className="text-left text-gray-800 font-semibold py-2 border-b border-gray-50">Apie</button>
            <button onClick={() => scrollTo('paslaugos')} className="text-left text-gray-800 font-semibold py-2 border-b border-gray-50">Paslaugos</button>
            <button onClick={() => scrollTo('projektai')} className="text-left text-gray-800 font-semibold py-2 border-b border-gray-50">Projektai</button>
            <button onClick={() => scrollTo('procesas')} className="text-left text-gray-800 font-semibold py-2 border-b border-gray-50">Procesas</button>
            <button onClick={() => scrollTo('kontaktai')} className="bg-[#A6192E] text-white px-6 py-3 rounded text-center font-semibold mt-2">Susisiekti</button>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src={images.hero} 
              alt="Statybų ir restauravimo darbai" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                  <ShieldCheck size={16} className="text-[#A6192E]" />
                  <span>Sertifikuoti Ekspertai</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Profesionalūs Statybos ir <span className="text-[#A6192E]">Restauravimo</span> Darbai Jūsų Projektams.
                </h1>
                <p className="text-xl text-gray-200 mb-4 font-medium">
                  Sertifikuota ekspertų komanda, kuria pasitiki didžiausi Lietuvos objektai. Kokybė, patikrinta laiko.
                </p>
                <p className="text-base text-gray-400 mb-10 max-w-2xl">
                  Pasitikėkite profesionalais, turinčiais patirtį dirbant su svarbiausiais Lietuvos kultūros paveldo objektais. Naudojame tik sertifikuotas medžiagas ir inovatyvius sprendimus.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => scrollTo('kontaktai')} className="bg-[#A6192E] text-white px-8 py-4 rounded font-bold hover:bg-[#8a1425] transition-colors flex items-center justify-center gap-2 text-lg">
                    Susisiekite dabar <ChevronRight size={20} />
                  </button>
                  <button onClick={() => scrollTo('paslaugos')} className="bg-white/10 text-white border border-white/30 px-8 py-4 rounded font-bold hover:bg-white/20 transition-colors flex items-center justify-center text-lg">
                    Mūsų paslaugos
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="apie" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Iššūkis: Kokybės ir Autentikos Išsaugojimas</h2>
                <div className="w-16 h-1 bg-[#A6192E] mb-8"></div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Statybos ir restauravimo darbai reikalauja daugiau nei tik darbo jėgos – jiems būtinas tikslumas, specializuotos medžiagos ir oficialūs sertifikatai.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Rasti patikimą partnerį, galintį atlikti tiek modernią renovaciją, tiek jautrų istorinį restauravimą, neaukojant kokybės, yra didžiausias iššūkis nekilnojamojo turto savininkams.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl relative z-10">
                  <img src={images.problem} alt="Restauravimo detalės" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#A6192E] rounded-lg z-0"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="paslaugos" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mūsų Sprendimai</h2>
              <div className="w-20 h-1 bg-[#A6192E] mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">Konsoliduotas paslaugų paketas, pritaikytas aukščiausiems standartams.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Landmark size={32} />,
                  title: "Restauravimo Darbai",
                  desc: "Kultūros paveldo objektų išsaugojimas ir atkūrimas, laikantis griežčiausių reikalavimų."
                },
                {
                  icon: <Building2 size={32} />,
                  title: "Pastatų Renovacija",
                  desc: "Modernių ir senos statybos pastatų atnaujinimas, didinant jų vertę ir ilgaamžiškumą."
                },
                {
                  icon: <PaintRoller size={32} />,
                  title: "Apdailos Darbai",
                  desc: "Aukščiausios kokybės vidaus ir išorės apdaila naudojant „Caparol“ ir „Remmers“ technologijas."
                },
                {
                  icon: <Droplets size={32} />,
                  title: "Specializuotos Paslaugos",
                  desc: "Darbas su specifinėmis medžiagomis ir technologijomis (hidroizoliacija, fasadų apsauga)."
                }
              ].map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center text-[#A6192E] mb-6 group-hover:bg-[#A6192E] group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section id="projektai" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reikšmingi Objektai</h2>
              <div className="w-20 h-1 bg-[#A6192E] mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">Sėkmingai atlikti darbai, kuriais didžiuojamės.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div className="group relative overflow-hidden rounded-xl shadow-lg aspect-[16/9]">
                <img src={images.theater} alt="Kauno valstybinis dramos teatras" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Kauno valstybinis dramos teatras</h3>
                  <p className="text-gray-300">Kompleksiniai restauravimo ir atnaujinimo darbai</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg aspect-[16/9]">
                <img src={images.chapel} alt="Veliuonos koplyčia" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Veliuonos koplyčia</h3>
                  <p className="text-gray-300">Istorinio paveldo išsaugojimas ir atkūrimas</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Award className="text-[#A6192E]" /> Oficialūs Sertifikatai
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <ShieldCheck className="text-[#A6192E] shrink-0" />
                        <span className="text-sm font-semibold text-gray-700">Kvalifikacijos Atestatas #{i}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <CheckCircle2 className="text-[#A6192E]" /> Patikimi Partneriai
                  </h3>
                  <div className="flex flex-wrap gap-8 items-center">
                    <div className="text-2xl font-black text-gray-400 uppercase tracking-widest">CAPAROL</div>
                    <div className="text-2xl font-black text-gray-400 uppercase tracking-widest">REMMERS</div>
                    <div className="text-2xl font-black text-gray-400 uppercase tracking-widest">SCHOMBURG</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="procesas" className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Darbo Procesas</h2>
              <div className="w-20 h-1 bg-[#A6192E] mx-auto mb-6"></div>
              <p className="text-gray-400 text-lg">Skaidrus ir efektyvus bendradarbiavimas nuo idėjos iki rezultato.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-800 z-0"></div>
              
              {[
                { step: "01", title: "Konsultacija", desc: "Įvertiname objektą ir kliento poreikius." },
                { step: "02", title: "Planavimas", desc: "Paruošiame technologinį planą ir sąmatą." },
                { step: "03", title: "Įgyvendinimas", desc: "Darbai atliekami naudojant sertifikuotas medžiagas ir profesionalią įrangą." },
                { step: "04", title: "Pridavimas", desc: "Garantuojame kokybę ir ilgaamžiškumą." }
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-800 border-4 border-gray-900 flex items-center justify-center mb-6 shadow-xl">
                    <span className="text-3xl font-black text-[#A6192E]">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontaktai" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Susisiekite su mumis</h2>
                <div className="w-16 h-1 bg-[#A6192E] mb-8"></div>
                <p className="text-lg text-gray-600 mb-10">
                  Turite projektą? Aptarkime jį. Užpildykite formą arba susisiekite tiesiogiai.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 text-[#A6192E]">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Telefonas</p>
                      <a href="tel:+37068725099" className="text-xl font-bold text-gray-900 hover:text-[#A6192E] transition-colors">8 (6) 8725099</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 text-[#A6192E]">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">El. paštas</p>
                      <a href="mailto:info@statybulaikas.lt" className="text-xl font-bold text-gray-900 hover:text-[#A6192E] transition-colors">info@statybulaikas.lt</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 text-[#A6192E]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Buveinė</p>
                      <p className="text-lg font-medium text-gray-900">Veiverių g. 151-312, Kaunas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Vardas</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#A6192E] focus:ring-2 focus:ring-[#A6192E]/20 outline-none transition-all" placeholder="Jūsų vardas" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Telefonas</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#A6192E] focus:ring-2 focus:ring-[#A6192E]/20 outline-none transition-all" placeholder="+370 600 00000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">El. paštas</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#A6192E] focus:ring-2 focus:ring-[#A6192E]/20 outline-none transition-all" placeholder="el.pastas@pavyzdys.lt" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Projekto tipas / Tema</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#A6192E] focus:ring-2 focus:ring-[#A6192E]/20 outline-none transition-all" placeholder="Pvz. Fasado renovacija" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Žinutė</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#A6192E] focus:ring-2 focus:ring-[#A6192E]/20 outline-none transition-all resize-none" placeholder="Trumpai aprašykite savo poreikius..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#A6192E] text-white font-bold py-4 rounded-lg hover:bg-[#8a1425] transition-colors">
                    Siųsti užklausą
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="mb-6 inline-block bg-white p-4 rounded">
                <Logo />
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                „Statybų laikas“ – tai patyrusi specialistų komanda, kuriai vadovauja Kęstutis Grigas. Mes specializuojamės sudėtinguose statybos ir restauravimo projektuose, užtikrindami aukščiausius kokybės standartus. Mūsų darbai kalba patys už save – nuo valstybinių teatrų iki istorinių koplyčių.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Rekvizitai</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-gray-300">Vadovas:</span>
                  <span>Kęstutis Grigas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-gray-300">Buveinė:</span>
                  <span>Veiverių g. 151-312, Kaunas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-gray-300">Registracija:</span>
                  <span>Raguvos g. 4, Kaunas</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Darbo Laikas</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-[#A6192E]" />
                  <span>Pr. - Pn. 8:00 - 17:00</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-gray-600" />
                  <span className="text-gray-500">Šeštadienis - Uždaryta</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-gray-600" />
                  <span className="text-gray-500">Sekmadienis - Uždaryta</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© {new Date().getFullYear()} UAB „Statybų laikas“. Visos teisės saugomos.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privatumo politika</a>
              <a href="#" className="hover:text-white transition-colors">Slapukų politika</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
