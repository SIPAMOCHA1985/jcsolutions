/*
Design philosophy reminder — Quiet Luxury Arquitectónico:
Base carbón profundo, marfil cálido, champagne controlado y verde ciprés. La página debe sentirse como una firma seria de construcción y project management premium en Central Florida: editorial, sobria, confiable, con líneas finas tipo plano, paneles translúcidos y CTAs consultivos.
*/
import { useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  Clock3,
  CreditCard,
  Hammer,
  HardHat,
  HomeIcon,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  Waves,
  X,
} from "lucide-react";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663441756816/8cZmsdASAYmcvVDaLZTPYh/jcs-hero-architectural-luxury-cCg6nCsqv3RcrER2r9MfXo.webp";
const blueprintImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663441756816/8cZmsdASAYmcvVDaLZTPYh/jcs-services-blueprint-eqyETfSgzQwNRmfFZy69xt.webp";
const poolRoofingImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663441756816/8cZmsdASAYmcvVDaLZTPYh/jcs-pool-roofing-luxury-7XUpfziCfU6cK3d7nT26NA.webp";
const logisticsImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663441756816/8cZmsdASAYmcvVDaLZTPYh/jcs-logistics-project-management-3KBzFPcvvkDp8QcPqcozQa.webp";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Método", href: "#metodo" },
  { label: "Marcas", href: "#marcas" },
  { label: "Pagos", href: "#pagos" },
  { label: "Contacto", href: "#contacto" },
];

const stats = [
  { value: "30+", label: "proyectos entregados" },
  { value: "5+", label: "líneas de servicio" },
  { value: "100%", label: "enfoque en ejecución" },
];

const services = [
  {
    number: "01",
    title: "General Contractor",
    description:
      "Gestión de proyectos residenciales y comerciales desde permisos, coordinación de vendors y ejecución en campo hasta inspección final.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Roofing",
    description:
      "Instalación, reparación y reemplazo de techos con enfoque en cumplimiento, protección patrimonial y respuesta ante daños por tormenta.",
    icon: HomeIcon,
  },
  {
    number: "03",
    title: "Pool Construction",
    description:
      "Diseño y construcción de piscinas personalizadas para propiedades residenciales y comerciales con acabados premium.",
    icon: Waves,
  },
  {
    number: "04",
    title: "Remodeling & Interiors",
    description:
      "Transformación de cocinas, baños, interiores y espacios comerciales con una lectura clara de presupuesto, estilo y cronograma.",
    icon: Hammer,
  },
  {
    number: "05",
    title: "Logistics & Distribution",
    description:
      "Sourcing de materiales, coordinación de importación, almacenamiento y entrega a obra para reducir fricción operativa.",
    icon: Truck,
  },
  {
    number: "06",
    title: "Project Management",
    description:
      "Un punto de control para timelines, vendors, materiales, presupuesto y comunicación bilingüe durante todo el proyecto.",
    icon: Layers3,
  },
];

const process = [
  {
    title: "Diagnóstico claro",
    text: "Escuchamos alcance, presupuesto, timeline y prioridades antes de recomendar una ruta de ejecución.",
  },
  {
    title: "Plan ejecutivo",
    text: "Convertimos el proyecto en fases, responsables, materiales críticos y próximos pasos concretos.",
  },
  {
    title: "Coordinación de obra",
    text: "JCS centraliza comunicación, compras, vendors, entregas y supervisión para evitar dispersión.",
  },
  {
    title: "Cierre documentado",
    text: "La entrega busca claridad, accountability y un resultado listo para operar, vender, rentar o disfrutar.",
  },
];

const trust = [
  "Equipo bilingüe para clientes en inglés y español",
  "Servicio en Orlando y Central Florida",
  "Consultas y estimados iniciales sin costo",
  "Opciones de pago flexibles, financiamiento y crypto",
];

const payments = ["Credit Cards", "Stripe", "Square", "Zelle", "ACH/Wire", "Financing", "Cash App", "Crypto"];

function scrollToContact() {
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#141512] text-[#f5efe3]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#141512]/78 backdrop-blur-2xl">
        <div className="container flex h-20 items-center justify-between">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="JC Solutions Enterprise LLC home">
            <span className="grid h-11 w-11 place-items-center border border-[#c9ad70]/55 bg-[#201f19] font-serif text-xl tracking-wide text-[#e3c985] transition group-hover:border-[#e3c985]">
              JCS
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-semibold uppercase tracking-[0.34em] text-[#f5efe3]">
                JC Solutions
              </span>
              <span className="block text-[11px] uppercase tracking-[0.28em] text-[#c9ad70]">
                Enterprise LLC
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link text-sm uppercase tracking-[0.22em] text-[#d8d0c2]/78">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="tel:+14075388810" className="inline-flex items-center gap-2 text-sm text-[#d8d0c2] transition hover:text-[#e3c985]">
              <Phone className="h-4 w-4" /> (407) 538-8810
            </a>
            <button onClick={scrollToContact} className="premium-button compact">
              Free Estimate
            </button>
          </div>

          <button
            className="grid h-11 w-11 place-items-center border border-white/15 text-[#f5efe3] lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#141512] px-6 py-6 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-[0.24em] text-[#f5efe3]">
                  {item.label}
                </a>
              ))}
              <a href="tel:+14075388810" className="mt-3 text-[#e3c985]">
                (407) 538-8810
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="inicio">
        <section className="relative min-h-screen overflow-hidden pt-28">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Premium construction project management interior" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,21,18,0.98)_0%,rgba(20,21,18,0.86)_38%,rgba(20,21,18,0.36)_72%,rgba(20,21,18,0.22)_100%)]" />
            <div className="absolute inset-0 blueprint-grid opacity-35" />
          </div>

          <div className="container relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-4xl">
              <div className="mb-7 inline-flex items-center gap-3 border border-[#c9ad70]/35 bg-[#201f19]/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#e3c985] backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> Orlando · Central Florida
              </div>
              <h1 className="font-serif text-6xl font-semibold leading-[0.92] tracking-[-0.055em] text-[#f7f0e3] sm:text-7xl lg:text-8xl">
                Construction managed with quiet confidence.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#ded4c5] sm:text-xl">
                JCSolutions Enterprise LLC helps owners, investors, developers and contractors execute construction, roofing, pool, logistics and project management work with one disciplined team.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button onClick={scrollToContact} className="premium-button">
                  Request a Free Estimate <ArrowUpRight className="h-4 w-4" />
                </button>
                <a href="https://wa.me/14075388810" className="secondary-button" target="_blank" rel="noreferrer">
                  WhatsApp Consultation <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <aside className="relative ml-auto w-full max-w-md border border-white/12 bg-[#1d1d18]/72 p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute -left-8 top-8 hidden h-px w-16 bg-[#c9ad70] lg:block" />
              <p className="text-xs uppercase tracking-[0.28em] text-[#c9ad70]">Execution profile</p>
              <div className="mt-7 grid gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-end justify-between border-b border-white/10 pb-4">
                    <span className="font-serif text-5xl text-[#f5efe3]">{stat.value}</span>
                    <span className="max-w-[10rem] text-right text-sm uppercase tracking-[0.18em] text-[#b9b1a3]">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-[#ded4c5]">
                <ShieldCheck className="h-5 w-5 text-[#c9ad70]" /> Licensed-focused execution, bilingual communication and flexible payment options.
              </div>
            </aside>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#efeadf] text-[#171814]">
          <div className="container grid gap-8 py-10 md:grid-cols-4">
            {trust.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm leading-6 text-[#38372f]">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#6f7c54]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="servicios" className="relative bg-[#171814] py-28">
          <div className="absolute right-0 top-0 h-[34rem] w-[34rem] opacity-25 blur-[1px]">
            <img src={blueprintImage} alt="Abstract architectural blueprint collage" className="h-full w-full object-cover" />
          </div>
          <div className="container relative z-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="eyebrow">What we offer</p>
                <h2 className="section-title text-[#f5efe3]">A stronger image for a stronger operation.</h2>
                <p className="mt-6 text-lg leading-8 text-[#bdb3a5]">
                  La mejora no debe verse solo bonita. Debe explicar en segundos qué hace JCS, por qué confiar, y cómo iniciar una conversación de alto valor.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <article key={service.title} className="service-card group">
                      <div className="mb-7 flex items-center justify-between">
                        <span className="text-sm uppercase tracking-[0.28em] text-[#c9ad70]">{service.number}</span>
                        <Icon className="h-6 w-6 text-[#6f7c54] transition group-hover:text-[#e3c985]" />
                      </div>
                      <h3 className="font-serif text-2xl text-[#f5efe3]">{service.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-[#bdb3a5]">{service.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="metodo" className="bg-[#efeadf] py-28 text-[#171814]">
          <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative">
              <img src={logisticsImage} alt="Project management desk with plans and logistics routes" className="h-full min-h-[32rem] w-full object-cover shadow-2xl" />
              <div className="absolute bottom-6 left-6 right-6 border border-white/40 bg-[#141512]/78 p-6 text-[#f5efe3] backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.26em] text-[#e3c985]">One accountable system</p>
                <p className="mt-3 text-sm leading-6 text-[#ded4c5]">
                  Construction, sourcing, scheduling and client communication should feel coordinated, not improvised.
                </p>
              </div>
            </div>
            <div className="self-center">
              <p className="eyebrow dark-text">Our method</p>
              <h2 className="section-title text-[#171814]">From first call to final delivery, every step needs ownership.</h2>
              <div className="mt-10 grid gap-5">
                {process.map((item, index) => (
                  <div key={item.title} className="process-row">
                    <span className="font-serif text-3xl text-[#9a7b3f]">0{index + 1}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-[#171814]">{item.title}</h3>
                      <p className="mt-2 leading-7 text-[#555044]">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="marcas" className="relative overflow-hidden bg-[#11120f] py-28">
          <div className="container">
            <div className="mb-14 max-w-3xl">
              <p className="eyebrow">Operational brands</p>
              <h2 className="section-title text-[#f5efe3]">A portfolio story, not just a service list.</h2>
              <p className="mt-6 text-lg leading-8 text-[#bdb3a5]">
                IxoraGlass e Ixora Living pueden funcionar como prueba visual de especialización: glass, interiors, remodeling y acabados que elevan la percepción de JCS.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="brand-card">
                <span className="brand-kicker">Custom Glass Solutions</span>
                <h3>IxoraGlass</h3>
                <p>
                  Frameless shower doors, custom glass enclosures, sliding glass doors, glass staircases and architectural glass installations.
                </p>
                <a href="https://ixoraglass.com" target="_blank" rel="noreferrer">
                  Visit ixoraglass.com <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
              <article className="brand-card highlighted">
                <span className="brand-kicker">Luxury Interiors & Remodeling</span>
                <h3>Ixora Living</h3>
                <p>
                  Premium interior design and full-service remodeling for residential and commercial spaces, from concept to completion.
                </p>
                <a href="https://ixora-living.com" target="_blank" rel="noreferrer">
                  Visit ixora-living.com <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#efeadf] py-28 text-[#171814]">
          <div className="container grid gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="eyebrow dark-text">Featured capability</p>
              <h2 className="section-title text-[#171814]">Roofing and pool construction need to feel premium before the client calls.</h2>
              <p className="mt-6 text-lg leading-8 text-[#555044]">
                La nueva imagen usa fotografía de mayor calidad, espacios limpios y una narrativa de control. Esto ayuda a que un cliente de alto presupuesto perciba a JCS como una firma capaz de manejar proyectos con estándares superiores.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Roofing', 'Pools', 'Remodeling', 'Investors', 'Developers'].map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
            <img src={poolRoofingImage} alt="Luxury home with new roof and custom pool" className="h-[34rem] w-full object-cover shadow-2xl" />
          </div>
        </section>

        <section id="pagos" className="bg-[#171814] py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">Flexible payments</p>
              <h2 className="section-title text-[#f5efe3]">Make the next step easier.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {payments.map((payment) => (
                <div key={payment} className="payment-card">
                  <CreditCard className="h-5 w-5 text-[#c9ad70]" />
                  <span>{payment}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="relative bg-[#efeadf] py-28 text-[#171814]">
          <div className="container grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow dark-text">Let's work together</p>
              <h2 className="section-title text-[#171814]">Request a free estimate.</h2>
              <p className="mt-6 text-lg leading-8 text-[#555044]">
                Esta propuesta prioriza llamadas, WhatsApp y un formulario claro para convertir visitantes en conversaciones. Para conectar el formulario real, se puede integrar un backend o servicio externo en una siguiente fase.
              </p>
              <div className="mt-10 grid gap-5">
                <a href="tel:+14075388810" className="contact-line">
                  <Phone className="h-5 w-5" /> (407) 538-8810
                </a>
                <a href="mailto:info@jcsolutionsenterprise.com" className="contact-line">
                  <Mail className="h-5 w-5" /> info@jcsolutionsenterprise.com
                </a>
                <div className="contact-line">
                  <MapPin className="h-5 w-5" /> 2774 E Colonial Dr, Suite C #1092, Orlando FL 32803
                </div>
                <div className="contact-line">
                  <Clock3 className="h-5 w-5" /> Monday – Saturday, 8am – 7pm EST
                </div>
              </div>
            </div>

            <form className="estimate-form" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-5 md:grid-cols-2">
                <label>
                  Your Name
                  <input placeholder="John Smith" />
                </label>
                <label>
                  Email Address
                  <input type="email" placeholder="john@company.com" />
                </label>
                <label>
                  Phone Number
                  <input type="tel" placeholder="(407) 000-0000" />
                </label>
                <label>
                  Zip Code
                  <input placeholder="32803" />
                </label>
                <label>
                  Service
                  <select defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option value="gc">General Contractor</option>
                    <option value="roofing">Roofing</option>
                    <option value="pool">Pool Construction</option>
                    <option value="remodeling">Remodeling</option>
                    <option value="logistics">Logistics & Distribution</option>
                  </select>
                </label>
                <label>
                  Project Budget
                  <select defaultValue="not-sure">
                    <option value="not-sure">Not sure yet</option>
                    <option value="under-10">Under $10,000</option>
                    <option value="10-50">$10,000 – $50,000</option>
                    <option value="50-100">$50,000 – $100,000</option>
                    <option value="100-plus">$100,000+</option>
                  </select>
                </label>
              </div>
              <label className="mt-5 block">
                Tell Us About Your Project
                <textarea placeholder="Describe your needs, timeline, and goals..." rows={5} />
              </label>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <a href="mailto:info@jcsolutionsenterprise.com?subject=Free%20Estimate%20Request%20-%20JC%20Solutions" className="premium-button form-button">
                  Send Estimate Request <Mail className="h-4 w-4" />
                </a>
                <a href="https://wa.me/14075388810" target="_blank" rel="noreferrer" className="secondary-button dark-version">
                  WhatsApp <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#11120f] py-10 text-[#bdb3a5]">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-2xl text-[#f5efe3]">JCSolutions Enterprise LLC</p>
            <p className="mt-2 text-sm">Roofing · Construction · Pools · Logistics · Project Management</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <BadgeCheck className="h-4 w-4 text-[#c9ad70]" /> Serving Central Florida with bilingual support.
          </div>
        </div>
      </footer>
    </div>
  );
}
