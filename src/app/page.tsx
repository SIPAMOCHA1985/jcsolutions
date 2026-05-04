"use client";

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

type Lang = "en" | "es" | "pt";

const T = {
  en: {
    nav: ["Services", "Method", "Brands", "Payments", "Contact"],
    heroBadge: "Orlando · Central Florida",
    heroH1: "Construction managed with quiet confidence.",
    heroBody:
      "JC Solutions Enterprise LLC helps owners, investors, developers and contractors execute construction, roofing, pool, logistics and project management work with one disciplined team.",
    heroBtn1: "Request a Free Estimate",
    heroBtn2: "WhatsApp Consultation",
    execProfile: "Execution profile",
    stats: [
      { value: "30+", label: "projects delivered" },
      { value: "5+", label: "service lines" },
      { value: "100%", label: "execution focused" },
    ],
    shieldNote: "Licensed-focused execution, bilingual communication and flexible payment options.",
    trust: [
      "Bilingual team for English and Spanish-speaking clients",
      "Service in Orlando and Central Florida",
      "Free initial consultations and estimates",
      "Flexible payment options, financing, and crypto",
    ],
    servicesEyebrow: "What we offer",
    servicesH2: "Six service lines. One accountable team.",
    servicesBody:
      "From permits to final punch list, we handle roofing, pools, remodeling, logistics, and full project management so you can focus on what matters.",
    services: [
      { number: "01", title: "General Contractor", desc: "Residential and commercial project management from permits, vendor coordination, and field execution through final inspection." },
      { number: "02", title: "Roofing", desc: "Roof installation, repair, and replacement with a focus on compliance, asset protection, and storm damage response." },
      { number: "03", title: "Pool Construction", desc: "Design and construction of custom pools for residential and commercial properties with premium finishes." },
      { number: "04", title: "Remodeling & Interiors", desc: "Kitchen, bathroom, interior, and commercial space transformations with a clear read on budget, style, and timeline." },
      { number: "05", title: "Logistics & Distribution", desc: "Material sourcing, import coordination, warehousing and job-site delivery to reduce operational friction." },
      { number: "06", title: "Project Management", desc: "One control point for timelines, vendors, materials, budget, and bilingual communication throughout your project." },
    ],
    methodEyebrow: "Our method",
    methodH2: "From first call to final delivery, every step needs ownership.",
    methodCard: "One accountable system",
    methodCardBody: "Construction, sourcing, scheduling and client communication should feel coordinated, not improvised.",
    process: [
      { title: "Clear Diagnosis", text: "We listen to scope, budget, timeline and priorities before recommending an execution path." },
      { title: "Executive Plan", text: "We convert the project into phases, owners, critical materials, and concrete next steps." },
      { title: "Site Coordination", text: "JCS centralizes communication, purchasing, vendors, deliveries, and supervision to avoid dispersion." },
      { title: "Documented Delivery", text: "Handoff aims for clarity, accountability, and a result ready to operate, sell, rent, or enjoy." },
    ],
    brandsEyebrow: "Operational brands",
    brandsH2: "A portfolio story, not just a service list.",
    brandsBody: "IxoraGlass and Ixora Living serve as visual proof of specialization — glass, interiors, remodeling, and finishes that elevate the perception of JCS.",
    portfolioEyebrow: "Featured capability",
    portfolioH2: "Roofing and pool construction need to feel premium before the client calls.",
    portfolioBody: "Our image uses high-quality photography, clean spaces, and a narrative of control. This helps high-budget clients perceive JCS as a firm capable of handling projects with superior standards.",
    tags: ["Roofing", "Pools", "Remodeling", "Investors", "Developers"],
    galleryEyebrow: "Our work",
    galleryH2: "Real projects. Real results.",
    galleryBody: "A selection of completed pool and roofing projects across Central Florida.",
    paymentsEyebrow: "Flexible payments",
    paymentsH2: "Make the next step easier.",
    payments: ["Credit Cards", "Stripe", "Square", "Zelle", "ACH / Wire", "Financing", "Cash App", "Crypto"],
    contactEyebrow: "Let's work together",
    contactH2: "Request a free estimate.",
    contactBody: "We prioritize calls, WhatsApp, and a clear form to turn visitors into conversations. Reach out — we respond fast.",
    hours: "Monday – Saturday, 8am – 7pm EST",
    formName: "Your Name", formEmail: "Email Address", formPhone: "Phone Number",
    formZip: "Zip Code", formService: "Service", formBudget: "Project Budget",
    formMessage: "Tell Us About Your Project", formPlaceholder: "Describe your needs, timeline, and goals...",
    formSubmit: "Send Estimate Request", formSending: "Sending…",
    formSuccess: "Request received.", formSuccessBody: "We'll be in touch within 24 hours.",
    formError: "Something went wrong. Please try again or call us directly.",
    selectService: "Select a service",
    serviceOptions: ["General Contractor", "Roofing", "Pool Construction", "Remodeling", "Logistics & Distribution", "Project Management"],
    budgetOptions: ["Not sure yet", "Under $10,000", "$10,000 – $50,000", "$50,000 – $100,000", "$100,000+"],
    budgetValues: ["not-sure", "under-10k", "10k-50k", "50k-100k", "100k+"],
    footerTagline: "Roofing · Construction · Pools · Logistics · Project Management",
    footerBadge: "Serving Central Florida with bilingual support.",
    whatsapp: "WhatsApp",
    freeEstimate: "Free Estimate",
  },
  es: {
    nav: ["Servicios", "Método", "Marcas", "Pagos", "Contacto"],
    heroBadge: "Orlando · Florida Central",
    heroH1: "Construcción gestionada con confianza.",
    heroBody:
      "JC Solutions Enterprise LLC ayuda a propietarios, inversionistas, desarrolladores y contratistas a ejecutar proyectos de construcción, techos, piscinas, logística y gestión de proyectos con un equipo disciplinado.",
    heroBtn1: "Solicitar Estimado Gratis",
    heroBtn2: "Consulta por WhatsApp",
    execProfile: "Perfil de ejecución",
    stats: [
      { value: "30+", label: "proyectos entregados" },
      { value: "5+", label: "líneas de servicio" },
      { value: "100%", label: "enfoque en ejecución" },
    ],
    shieldNote: "Ejecución con licencias, comunicación bilingüe y opciones de pago flexibles.",
    trust: [
      "Equipo bilingüe para clientes en inglés y español",
      "Servicio en Orlando y Florida Central",
      "Consultas y estimados iniciales sin costo",
      "Opciones de pago flexibles, financiamiento y crypto",
    ],
    servicesEyebrow: "Lo que ofrecemos",
    servicesH2: "Seis líneas de servicio. Un equipo responsable.",
    servicesBody:
      "Desde permisos hasta la entrega final, manejamos techos, piscinas, remodelación, logística y gestión de proyectos para que puedas enfocarte en lo que importa.",
    services: [
      { number: "01", title: "Contratista General", desc: "Gestión de proyectos residenciales y comerciales desde permisos, coordinación de vendors y ejecución en campo hasta inspección final." },
      { number: "02", title: "Techos (Roofing)", desc: "Instalación, reparación y reemplazo de techos con enfoque en cumplimiento, protección patrimonial y respuesta ante daños por tormenta." },
      { number: "03", title: "Construcción de Piscinas", desc: "Diseño y construcción de piscinas personalizadas para propiedades residenciales y comerciales con acabados premium." },
      { number: "04", title: "Remodelación e Interiores", desc: "Transformación de cocinas, baños, interiores y espacios comerciales con claridad de presupuesto, estilo y cronograma." },
      { number: "05", title: "Logística y Distribución", desc: "Sourcing de materiales, coordinación de importación, almacenamiento y entrega a obra para reducir fricción operativa." },
      { number: "06", title: "Gestión de Proyectos", desc: "Un punto de control para timelines, vendors, materiales, presupuesto y comunicación bilingüe durante todo el proyecto." },
    ],
    methodEyebrow: "Nuestro método",
    methodH2: "De la primera llamada a la entrega final, cada paso necesita un responsable.",
    methodCard: "Un sistema responsable",
    methodCardBody: "Construcción, materiales, cronograma y comunicación con el cliente deben sentirse coordinados, no improvisados.",
    process: [
      { title: "Diagnóstico Claro", text: "Escuchamos alcance, presupuesto, timeline y prioridades antes de recomendar una ruta de ejecución." },
      { title: "Plan Ejecutivo", text: "Convertimos el proyecto en fases, responsables, materiales críticos y próximos pasos concretos." },
      { title: "Coordinación de Obra", text: "JCS centraliza comunicación, compras, vendors, entregas y supervisión para evitar dispersión." },
      { title: "Entrega Documentada", text: "La entrega busca claridad, accountability y un resultado listo para operar, vender, rentar o disfrutar." },
    ],
    brandsEyebrow: "Marcas operativas",
    brandsH2: "Una historia de portafolio, no solo una lista de servicios.",
    brandsBody: "IxoraGlass e Ixora Living son prueba visual de especialización — vidrio, interiores, remodelación y acabados que elevan la percepción de JCS.",
    portfolioEyebrow: "Capacidad destacada",
    portfolioH2: "Los techos y piscinas deben verse premium antes de que el cliente llame.",
    portfolioBody: "Nuestra imagen usa fotografía de calidad, espacios limpios y una narrativa de control. Esto ayuda a que los clientes de alto presupuesto perciban a JCS como una firma capaz.",
    tags: ["Techos", "Piscinas", "Remodelación", "Inversionistas", "Desarrolladores"],
    galleryEyebrow: "Nuestros proyectos",
    galleryH2: "Proyectos reales. Resultados reales.",
    galleryBody: "Una selección de proyectos de piscinas y techos completados en Florida Central.",
    paymentsEyebrow: "Pagos flexibles",
    paymentsH2: "Haz el siguiente paso más fácil.",
    payments: ["Tarjetas de Crédito", "Stripe", "Square", "Zelle", "ACH / Wire", "Financiamiento", "Cash App", "Crypto"],
    contactEyebrow: "Trabajemos juntos",
    contactH2: "Solicita un estimado gratis.",
    contactBody: "Priorizamos llamadas, WhatsApp y un formulario claro para convertir visitantes en conversaciones. Contáctanos — respondemos rápido.",
    hours: "Lunes – Sábado, 8am – 7pm EST",
    formName: "Tu Nombre", formEmail: "Correo Electrónico", formPhone: "Número de Teléfono",
    formZip: "Código Postal", formService: "Servicio", formBudget: "Presupuesto del Proyecto",
    formMessage: "Cuéntanos sobre tu proyecto", formPlaceholder: "Describe tus necesidades, cronograma y objetivos...",
    formSubmit: "Enviar Solicitud", formSending: "Enviando…",
    formSuccess: "Solicitud recibida.", formSuccessBody: "Nos pondremos en contacto en menos de 24 horas.",
    formError: "Algo salió mal. Intenta de nuevo o llámanos directamente.",
    selectService: "Selecciona un servicio",
    serviceOptions: ["Contratista General", "Techos (Roofing)", "Construcción de Piscinas", "Remodelación", "Logística y Distribución", "Gestión de Proyectos"],
    budgetOptions: ["Aún no sé", "Menos de $10,000", "$10,000 – $50,000", "$50,000 – $100,000", "$100,000+"],
    budgetValues: ["not-sure", "under-10k", "10k-50k", "50k-100k", "100k+"],
    footerTagline: "Techos · Construcción · Piscinas · Logística · Gestión de Proyectos",
    footerBadge: "Sirviendo a Florida Central con soporte bilingüe.",
    whatsapp: "WhatsApp",
    freeEstimate: "Estimado Gratis",
  },
  pt: {
    nav: ["Serviços", "Método", "Marcas", "Pagamentos", "Contato"],
    heroBadge: "Orlando · Florida Central",
    heroH1: "Construção gerenciada com confiança.",
    heroBody:
      "JC Solutions Enterprise LLC ajuda proprietários, investidores, incorporadores e empreiteiros a executar projetos de construção, telhados, piscinas, logística e gestão de projetos com uma equipe disciplinada.",
    heroBtn1: "Solicitar Orçamento Grátis",
    heroBtn2: "Consulta pelo WhatsApp",
    execProfile: "Perfil de execução",
    stats: [
      { value: "30+", label: "projetos entregues" },
      { value: "5+", label: "linhas de serviço" },
      { value: "100%", label: "foco em execução" },
    ],
    shieldNote: "Execução licenciada, comunicação bilíngue e opções de pagamento flexíveis.",
    trust: [
      "Equipe bilíngue para clientes em inglês e espanhol",
      "Serviços em Orlando e Florida Central",
      "Consultas e orçamentos iniciais gratuitos",
      "Opções flexíveis de pagamento, financiamento e crypto",
    ],
    servicesEyebrow: "O que oferecemos",
    servicesH2: "Seis linhas de serviço. Uma equipe responsável.",
    servicesBody:
      "Do alvará à entrega final, gerenciamos telhados, piscinas, reformas, logística e gestão de projetos para que você foque no que importa.",
    services: [
      { number: "01", title: "Empreiteiro Geral", desc: "Gestão de projetos residenciais e comerciais desde alvarás, coordenação de fornecedores e execução em campo até inspeção final." },
      { number: "02", title: "Telhados (Roofing)", desc: "Instalação, reparo e substituição de telhados com foco em conformidade, proteção patrimonial e resposta a danos por tempestade." },
      { number: "03", title: "Construção de Piscinas", desc: "Projeto e construção de piscinas personalizadas para propriedades residenciais e comerciais com acabamentos premium." },
      { number: "04", title: "Reformas e Interiores", desc: "Transformação de cozinhas, banheiros, interiores e espaços comerciais com clareza de orçamento, estilo e cronograma." },
      { number: "05", title: "Logística e Distribuição", desc: "Sourcing de materiais, coordenação de importação, armazenamento e entrega na obra para reduzir fricção operacional." },
      { number: "06", title: "Gestão de Projetos", desc: "Um ponto de controle para prazos, fornecedores, materiais, orçamento e comunicação bilíngue durante todo o projeto." },
    ],
    methodEyebrow: "Nosso método",
    methodH2: "Da primeira ligação à entrega final, cada etapa precisa de um responsável.",
    methodCard: "Um sistema responsável",
    methodCardBody: "Construção, suprimentos, cronograma e comunicação com o cliente devem parecer coordenados, não improvisados.",
    process: [
      { title: "Diagnóstico Claro", text: "Ouvimos escopo, orçamento, prazo e prioridades antes de recomendar um caminho de execução." },
      { title: "Plano Executivo", text: "Convertemos o projeto em fases, responsáveis, materiais críticos e próximos passos concretos." },
      { title: "Coordenação de Obra", text: "JCS centraliza comunicação, compras, fornecedores, entregas e supervisão para evitar dispersão." },
      { title: "Entrega Documentada", text: "A entrega busca clareza, accountability e um resultado pronto para operar, vender, alugar ou aproveitar." },
    ],
    brandsEyebrow: "Marcas operacionais",
    brandsH2: "Uma história de portfólio, não apenas uma lista de serviços.",
    brandsBody: "IxoraGlass e Ixora Living servem como prova visual de especialização — vidro, interiores, reformas e acabamentos que elevam a percepção da JCS.",
    portfolioEyebrow: "Capacidade em destaque",
    portfolioH2: "Telhados e piscinas precisam parecer premium antes do cliente ligar.",
    portfolioBody: "Nossa imagem usa fotografia de alta qualidade, espaços limpos e uma narrativa de controle. Isso ajuda clientes de alto orçamento a perceber a JCS como uma firma capaz.",
    tags: ["Telhados", "Piscinas", "Reformas", "Investidores", "Incorporadores"],
    galleryEyebrow: "Nossos projetos",
    galleryH2: "Projetos reais. Resultados reais.",
    galleryBody: "Uma seleção de projetos de piscinas e telhados concluídos na Florida Central.",
    paymentsEyebrow: "Pagamentos flexíveis",
    paymentsH2: "Facilite o próximo passo.",
    payments: ["Cartões de Crédito", "Stripe", "Square", "Zelle", "ACH / Wire", "Financiamento", "Cash App", "Crypto"],
    contactEyebrow: "Vamos trabalhar juntos",
    contactH2: "Solicite um orçamento grátis.",
    contactBody: "Priorizamos ligações, WhatsApp e um formulário claro para transformar visitantes em conversas. Entre em contato — respondemos rápido.",
    hours: "Segunda – Sábado, 8h – 19h EST",
    formName: "Seu Nome", formEmail: "E-mail", formPhone: "Telefone",
    formZip: "CEP / Zip Code", formService: "Serviço", formBudget: "Orçamento do Projeto",
    formMessage: "Fale sobre seu projeto", formPlaceholder: "Descreva suas necessidades, prazo e objetivos...",
    formSubmit: "Enviar Solicitação", formSending: "Enviando…",
    formSuccess: "Solicitação recebida.", formSuccessBody: "Entraremos em contato em até 24 horas.",
    formError: "Algo deu errado. Tente novamente ou ligue diretamente.",
    selectService: "Selecione um serviço",
    serviceOptions: ["Empreiteiro Geral", "Telhados (Roofing)", "Construção de Piscinas", "Reformas", "Logística e Distribuição", "Gestão de Projetos"],
    budgetOptions: ["Ainda não sei", "Menos de $10.000", "$10.000 – $50.000", "$50.000 – $100.000", "$100.000+"],
    budgetValues: ["not-sure", "under-10k", "10k-50k", "50k-100k", "100k+"],
    footerTagline: "Telhados · Construção · Piscinas · Logística · Gestão de Projetos",
    footerBadge: "Servindo à Florida Central com suporte bilíngue.",
    whatsapp: "WhatsApp",
    freeEstimate: "Orçamento Grátis",
  },
} as const;

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663441756816/8cZmsdASAYmcvVDaLZTPYh/jcs-hero-architectural-luxury-cCg6nCsqv3RcrER2r9MfXo.webp";
const blueprintImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663441756816/8cZmsdASAYmcvVDaLZTPYh/jcs-services-blueprint-eqyETfSgzQwNRmfFZy69xt.webp";
const poolRoofingImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663441756816/8cZmsdASAYmcvVDaLZTPYh/jcs-pool-roofing-luxury-7XUpfziCfU6cK3d7nT26NA.webp";
const logisticsImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663441756816/8cZmsdASAYmcvVDaLZTPYh/jcs-logistics-project-management-3KBzFPcvvkDp8QcPqcozQa.webp";

const serviceIcons = [Building2, HomeIcon, Waves, Hammer, Truck, Layers3];

const galleryImages = [
  { src: "/images/pools/pool-01.jpg", alt: "Custom pool with cushioned seating" },
  { src: "/images/pools/pool-02.jpg", alt: "Aerial view of rectangular luxury pool" },
  { src: "/images/pools/pool-03.jpg", alt: "Night pool with LED lighting and lounge chairs" },
  { src: "/images/pools/pool-04.jpg", alt: "Modern outdoor kitchen with pool and fire pit" },
  { src: "/images/pools/pool-05.jpg", alt: "Pool with palm trees and fire features" },
  { src: "/images/pools/pool-06.jpg", alt: "Pool with outdoor living area and TV" },
  { src: "/images/pools/pool-07.jpg", alt: "Large luxury pool at night with putting green" },
  { src: "/images/pools/pool-08.jpg", alt: "Aerial pool with entertainment area" },
  { src: "/images/pools/pool-09.jpg", alt: "Premium pool with spa and sunken area" },
  { src: "/images/roofing/roof-crew.jpg", alt: "Roofing crew installing new shingles" },
  { src: "/images/roofing/roof-project-01.jpg", alt: "Completed premium roof on luxury home" },
  { src: "/images/roofing/roof-project-02.jpg", alt: "Commercial roofing project completed" },
];

function scrollToContact() {
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", zip: "",
    service: "", budget: "not-sure", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const t = T[lang];
  const navHrefs = ["#servicios", "#metodo", "#marcas", "#pagos", "#contacto"];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#141512] text-[#f5efe3]">

      {/* ── HEADER ──────────────────────────────────────── */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#141512]/80 backdrop-blur-2xl">
        <div className="container flex h-20 items-center justify-between">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="JC Solutions Enterprise LLC">
            <span className="grid h-11 w-11 place-items-center border border-[#c9ad70]/55 bg-[#201f19] font-serif text-xl tracking-wide text-[#e3c985] transition group-hover:border-[#e3c985]">
              JCS
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-semibold uppercase tracking-[0.34em] text-[#f5efe3]">JC Solutions</span>
              <span className="block text-[11px] uppercase tracking-[0.28em] text-[#c9ad70]">Enterprise LLC</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {t.nav.map((label, i) => (
              <a key={navHrefs[i]} href={navHrefs[i]} className="nav-link text-sm uppercase tracking-[0.22em] text-[#d8d0c2]/78">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {/* Language toggle */}
            <div className="flex items-center gap-1 border border-white/15 px-2 py-1">
              {(["en", "es", "pt"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-xs font-bold uppercase tracking-wider px-1.5 py-0.5 transition ${
                    lang === l ? "text-[#e3c985]" : "text-[#d8d0c2]/50 hover:text-[#d8d0c2]"
                  }`}
                >
                  {l === "en" ? "🇺🇸" : l === "es" ? "🇪🇸" : "🇧🇷"}
                </button>
              ))}
            </div>
            <a href="tel:+14075388810" className="inline-flex items-center gap-2 text-sm text-[#d8d0c2] transition hover:text-[#e3c985]">
              <Phone className="h-4 w-4" /> (407) 538-8810
            </a>
            <button onClick={scrollToContact} className="premium-button compact">{t.freeEstimate}</button>
          </div>

          <button
            className="grid h-11 w-11 place-items-center border border-white/15 text-[#f5efe3] lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#141512] px-6 py-6 lg:hidden">
            <div className="flex gap-3 mb-4">
              {(["en", "es", "pt"] as Lang[]).map((l) => (
                <button key={l} onClick={() => setLang(l)}
                  className={`text-lg ${lang === l ? "opacity-100" : "opacity-40"}`}>
                  {l === "en" ? "🇺🇸" : l === "es" ? "🇪🇸" : "🇧🇷"}
                </button>
              ))}
            </div>
            <nav className="flex flex-col gap-4">
              {t.nav.map((label, i) => (
                <a key={navHrefs[i]} href={navHrefs[i]} onClick={() => setMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.24em] text-[#f5efe3]">{label}</a>
              ))}
              <a href="tel:+14075388810" className="mt-3 text-[#e3c985]">(407) 538-8810</a>
            </nav>
          </div>
        )}
      </header>

      <main id="inicio">

        {/* ── HERO ─────────────────────────────────────── */}
        <section className="relative min-h-screen overflow-hidden pt-28">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Premium construction project management" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,21,18,0.98)_0%,rgba(20,21,18,0.86)_38%,rgba(20,21,18,0.36)_72%,rgba(20,21,18,0.22)_100%)]" />
            <div className="absolute inset-0 blueprint-grid opacity-35" />
          </div>

          <div className="container relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-4xl">
              <div className="mb-7 inline-flex items-center gap-3 border border-[#c9ad70]/35 bg-[#201f19]/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#e3c985] backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> {t.heroBadge}
              </div>
              <h1 className="font-serif text-6xl font-semibold leading-[0.92] tracking-[-0.055em] text-[#f7f0e3] sm:text-7xl lg:text-8xl">
                {t.heroH1}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#ded4c5] sm:text-xl">{t.heroBody}</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button onClick={scrollToContact} className="premium-button">
                  {t.heroBtn1} <ArrowUpRight className="h-4 w-4" />
                </button>
                <a href="https://wa.me/14075388810" className="secondary-button" target="_blank" rel="noreferrer">
                  {t.heroBtn2} <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <aside className="relative ml-auto w-full max-w-md border border-white/12 bg-[#1d1d18]/72 p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute -left-8 top-8 hidden h-px w-16 bg-[#c9ad70] lg:block" />
              <p className="text-xs uppercase tracking-[0.28em] text-[#c9ad70]">{t.execProfile}</p>
              <div className="mt-7 grid gap-4">
                {t.stats.map((stat) => (
                  <div key={stat.label} className="flex items-end justify-between border-b border-white/10 pb-4">
                    <span className="font-serif text-5xl text-[#f5efe3]">{stat.value}</span>
                    <span className="max-w-[10rem] text-right text-sm uppercase tracking-[0.18em] text-[#b9b1a3]">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-[#ded4c5]">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#c9ad70]" /> {t.shieldNote}
              </div>
            </aside>
          </div>
        </section>

        {/* ── TRUST BAR ────────────────────────────────── */}
        <section className="border-y border-white/10 bg-[#efeadf] text-[#171814]">
          <div className="container grid gap-8 py-10 md:grid-cols-4">
            {t.trust.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm leading-6 text-[#38372f]">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#6f7c54]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────── */}
        <section id="servicios" className="relative bg-[#171814] py-28">
          <div className="absolute right-0 top-0 h-[34rem] w-[34rem] opacity-25 blur-[1px]">
            <img src={blueprintImage} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="container relative z-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="eyebrow">{t.servicesEyebrow}</p>
                <h2 className="section-title text-[#f5efe3]">{t.servicesH2}</h2>
                <p className="mt-6 text-lg leading-8 text-[#bdb3a5]">{t.servicesBody}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {t.services.map((service, i) => {
                  const Icon = serviceIcons[i];
                  return (
                    <article key={service.title} className="service-card group">
                      <div className="mb-7 flex items-center justify-between">
                        <span className="text-sm uppercase tracking-[0.28em] text-[#c9ad70]">{service.number}</span>
                        <Icon className="h-6 w-6 text-[#6f7c54] transition group-hover:text-[#e3c985]" />
                      </div>
                      <h3 className="font-serif text-2xl text-[#f5efe3]">{service.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-[#bdb3a5]">{service.desc}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── METHOD ───────────────────────────────────── */}
        <section id="metodo" className="bg-[#efeadf] py-28 text-[#171814]">
          <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative">
              <img src={logisticsImage} alt="Project management coordination" className="h-full min-h-[32rem] w-full object-cover shadow-2xl" />
              <div className="absolute bottom-6 left-6 right-6 border border-white/40 bg-[#141512]/78 p-6 text-[#f5efe3] backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.26em] text-[#e3c985]">{t.methodCard}</p>
                <p className="mt-3 text-sm leading-6 text-[#ded4c5]">{t.methodCardBody}</p>
              </div>
            </div>
            <div className="self-center">
              <p className="eyebrow dark-text">{t.methodEyebrow}</p>
              <h2 className="section-title text-[#171814]">{t.methodH2}</h2>
              <div className="mt-10 grid gap-5">
                {t.process.map((item, index) => (
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

        {/* ── BRANDS ───────────────────────────────────── */}
        <section id="marcas" className="relative overflow-hidden bg-[#11120f] py-28">
          <div className="container">
            <div className="mb-14 max-w-3xl">
              <p className="eyebrow">{t.brandsEyebrow}</p>
              <h2 className="section-title text-[#f5efe3]">{t.brandsH2}</h2>
              <p className="mt-6 text-lg leading-8 text-[#bdb3a5]">{t.brandsBody}</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="brand-card">
                <span className="brand-kicker">Custom Glass Solutions</span>
                <h3>IxoraGlass</h3>
                <p>Frameless shower doors, custom glass enclosures, sliding glass doors, glass staircases and architectural glass installations.</p>
                <a href="https://ixoraglass.com" target="_blank" rel="noreferrer">
                  Visit ixoraglass.com <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
              <article className="brand-card highlighted">
                <span className="brand-kicker">Luxury Interiors & Remodeling</span>
                <h3>Ixora Living</h3>
                <p>Premium interior design and full-service remodeling for residential and commercial spaces, from concept to completion.</p>
                <a href="https://ixora-living.com" target="_blank" rel="noreferrer">
                  Visit ixora-living.com <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* ── ROOFING + POOLS HIGHLIGHT ─────────────────── */}
        <section className="bg-[#efeadf] py-28 text-[#171814]">
          <div className="container grid gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="eyebrow dark-text">{t.portfolioEyebrow}</p>
              <h2 className="section-title text-[#171814]">{t.portfolioH2}</h2>
              <p className="mt-6 text-lg leading-8 text-[#555044]">{t.portfolioBody}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {t.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
            <img src={poolRoofingImage} alt="Luxury home with new roof and custom pool" className="h-[34rem] w-full object-cover shadow-2xl" />
          </div>
        </section>

        {/* ── GALLERY — REAL PROJECTS ───────────────────── */}
        <section className="bg-[#171814] py-28">
          <div className="container">
            <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="eyebrow">{t.galleryEyebrow}</p>
                <h2 className="section-title text-[#f5efe3]">{t.galleryH2}</h2>
              </div>
              <p className="text-[#bdb3a5] max-w-xs text-sm leading-6">{t.galleryBody}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#c9ad70]/20">
              {galleryImages.map((img) => (
                <div key={img.src} className="overflow-hidden aspect-square bg-[#171814] group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PAYMENTS ─────────────────────────────────── */}
        <section id="pagos" className="bg-[#11120f] py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">{t.paymentsEyebrow}</p>
              <h2 className="section-title text-[#f5efe3]">{t.paymentsH2}</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.payments.map((payment) => (
                <div key={payment} className="payment-card">
                  <CreditCard className="h-5 w-5 shrink-0 text-[#c9ad70]" />
                  <span>{payment}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────── */}
        <section id="contacto" className="relative bg-[#efeadf] py-28 text-[#171814]">
          <div className="container grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow dark-text">{t.contactEyebrow}</p>
              <h2 className="section-title text-[#171814]">{t.contactH2}</h2>
              <p className="mt-6 text-lg leading-8 text-[#555044]">{t.contactBody}</p>
              <div className="mt-10 grid gap-5">
                <a href="tel:+14075388810" className="contact-line"><Phone className="h-5 w-5" /> (407) 538-8810</a>
                <a href="mailto:info@jcsolutionsenterprise.com" className="contact-line"><Mail className="h-5 w-5" /> info@jcsolutionsenterprise.com</a>
                <div className="contact-line"><MapPin className="h-5 w-5" /> 2774 E Colonial Dr, Suite C #1092, Orlando FL 32803</div>
                <div className="contact-line"><Clock3 className="h-5 w-5" /> {t.hours}</div>
              </div>
            </div>

            {status === "sent" ? (
              <div className="estimate-form flex flex-col items-center justify-center gap-4 text-center">
                <BadgeCheck className="h-12 w-12 text-[#6f7c54]" />
                <p className="font-serif text-3xl text-[#171814]">{t.formSuccess}</p>
                <p className="text-[#555044]">{t.formSuccessBody}</p>
              </div>
            ) : (
              <form className="estimate-form" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <label>{t.formName}<input name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required /></label>
                  <label>{t.formEmail}<input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required /></label>
                  <label>{t.formPhone}<input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(407) 000-0000" /></label>
                  <label>{t.formZip}<input name="zip" value={form.zip} onChange={handleChange} placeholder="32803" /></label>
                  <label>
                    {t.formService}
                    <select name="service" value={form.service} onChange={handleChange}>
                      <option value="" disabled>{t.selectService}</option>
                      {t.serviceOptions.map((opt, i) => (
                        <option key={i} value={T.en.serviceOptions[i]}>{opt}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    {t.formBudget}
                    <select name="budget" value={form.budget} onChange={handleChange}>
                      {t.budgetOptions.map((opt, i) => (
                        <option key={i} value={t.budgetValues[i]}>{opt}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="mt-5 block">
                  {t.formMessage}
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder={t.formPlaceholder} rows={5} />
                </label>
                {status === "error" && <p className="mt-3 text-sm text-red-600">{t.formError}</p>}
                <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                  <button type="submit" className="premium-button" disabled={status === "sending"}>
                    {status === "sending" ? t.formSending : t.formSubmit} <Mail className="h-4 w-4" />
                  </button>
                  <a href="https://wa.me/14075388810" target="_blank" rel="noreferrer" className="secondary-button dark-version">
                    {t.whatsapp} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="border-t border-white/10 bg-[#11120f] py-10 text-[#bdb3a5]">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-2xl text-[#f5efe3]">JC Solutions Enterprise LLC</p>
            <p className="mt-2 text-sm">{t.footerTagline}</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <BadgeCheck className="h-4 w-4 text-[#c9ad70]" /> {t.footerBadge}
          </div>
        </div>
      </footer>
    </div>
  );
}
