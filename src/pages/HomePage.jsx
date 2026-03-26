import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRevealAll } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import { Instagram } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    id: "business",
    title: "Business Travel",
    desc: "Añade valor y conecta con tus socios, clientes y empleados en un viaje único.",
    href: "/corporativo",
  },
  {
    id: "medida",
    title: "Viajes a la medida",
    desc: "Ponemos el mundo a tu alcance y te acompañamos a diseñar una propuesta de viaje inolvidable.",
    href: "/viajes-a-la-medida",
  },
  {
    id: "grupos",
    title: "Grupos",
    desc: "Podrás contar con asesoramiento experto para elegir tu próximo destino.",
    href: "/destinos",
  },
];

const featureCards = [
  {
    title: "Un paraíso por descubrir",
    image:
      "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/654d5664d7d533c8ffc9937c_Playa-La-Cana-Beach-Lot-Land-for-Sale-Dominican-Republic-Samana-2.jpg",
    href: "/descubre-rd",
    alt: "Playa el Vale desde las alturas",
  },
  {
    title: "Viajes a la medida",
    image:
      "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/654c1db37f96496ffc9a6071_9b408dd1e3591d20c53f8d79c13c33ed.jpg",
    href: "/viajes-a-la-medida",
    alt: "Pareja viendo los globos desde una azotea en Capadoccia",
  },
  {
    title: "Conectividad aérea",
    image:
      "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/654c2ccf1934aae07066a79b_conectividad.jpg",
    href: "/conectividad-aerea",
    alt: "Pareja parada de espalda esperando en un aeropuerto",
  },
];

const corporateImages = [
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502dfca4f9237d6440659dd_Business-travellers.jpeg",
    alt: "Ejecutivos caminando con equipaje",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502e032b48b71d2caf9b453_transport.webp",
    alt: "Equipo ejecutivo en un transporte empresarial",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502dfdebadc0aee3c4ed8d1_Connect-easily-with-your-clients-through-world-conference.jpeg",
    alt: "Conferencia mundial de negocios",
  },
];

const customImages = [
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6687f54da3c0a6dbbea9039d_capadoccia.jpg",
    alt: "Globos en Capadoccia al atardecer",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502e2a18b8577c3500d96df_3c222669_z.webp",
    alt: "Hermosa habitación de hotel",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6500ac83870531f080676b13_omar-prestwich-FCM4k7LcggU-unsplash.jpg",
    alt: "Cabina de avión con luces azules",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502e22b8bbacfdb500fa2ee_%5BBURCU-ZAFER%5D-1529-1.jpg",
    alt: "Personas saltando de un velero",
  },
];

const destinationImages = [
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502e388b3091e5b5e5b8643_gloria-villa-GjYw5xyMI3w-unsplash.jpg",
    alt: "Museo Louvre y su reflejo en el agua",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/66999103e3e52eb792e364e3_grupos2.jpg",
    alt: "Grupo de personas corriendo en camellos",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502e3bd84f2696131143687_harry-gillen-vMLfRVkWItI-unsplash.jpg",
    alt: "Vista de Central Park desde el lago",
  },
];

const drSlides = [
  {
    image:
      "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/654bf1d0b1c0737903315add_El_valle.jpg",
    title: "República Dominicana lo tiene todo",
    desc: "Gracias a su ubicación caribeña, República Dominicana es un destino soleado durante todo el año. Te diriges al corazón del caribe, te esperamos con una sonrisa.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/669991d2e3e52eb792e3ecc9_valle_nuevo2.jpg",
    title: "Valle Nuevo, Constanza",
    desc: "Conocido por ofrecer excepcionales oportunidades para la observación de aves y senderismo de montaña, Valle Nuevo es una de las joyas de la corona de Constanza. Este paisaje frío y montañoso, remoto y exuberante no se puede ver en ningún otro lugar del país.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/669993f99e22429d02e21548_1Ciudad-Colonial-de-Santo-Domingo.jpg",
    title: "Zona Colonial, Santo Domingo",
    desc: "El barrio más histórico de Santo Domingo es también el más romántico, animado y cultural. Antiguamente era el hogar de los colonos españoles, que construyeron la ciudad amurallada como modelo para el resto de las Américas.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/66ab0a3368b2806696d17a41_bahia-de-las-aguilas-pedernales_793f5316-903e-f723-01ddf544d587e064a.jpg",
    title: "Bahía de las Águilas",
    desc: "Con sus aguas cristalinas de color turquesa y sin edificaciones, esta playa de ocho kilómetros de color blanco diamante es reconocida como la más hermosa de República Dominicana.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/66ab0ab4bb9dcff73783faff_Dunas_bani2.jpg",
    title: "Dunas de Baní",
    desc: "Las dunas de Baní se localizan en la península de Las Calderas. El campo de dunas se extiende por toda la península en una línea recta de 15 km en sentido este-oeste.",
  },
];

const testimonials = [
  {
    quote:
      "AVIART ha logrado crear propuestas personalizadas para nuestro equipo de trabajo, logrando la excelencia en el servicio y un trato al momento, con soluciones magníficas y rápidas.",
    name: "Rafael García",
    company: "Hospicare Consulting",
    stamp:
      "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6532ebcddda9675e5562469b_stamp01C.jpg",
  },
  {
    quote:
      "AVIART transformó nuestra experiencia de viaje corporativo. Su atención al detalle y servicio personalizado superaron nuestras expectativas y son ahora una extensión de nuestro equipo.",
    name: "Taina Rivas",
    company: "Strategium Consulting Group",
    stamp:
      "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6532ec148a1658f9e091e791_stamp02C.jpg",
  },
];

const partners = [
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/66941286366340996c9b34eb_EASA_Logo-gray.jpg",
    alt: "EASA",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/65ce434a56080f32565b475e_opera-hotel-300.jpg",
    alt: "Opera Hotel",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/65ce43abcae4e7ccba4832ef_mapfre.png",
    alt: "Mapfre",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/65ce411b96872e94ec482428_GrupoAtomLogo.jpg",
    alt: "Grupo Atom",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/65ce40d7059b732c3d3b9d22_amadeus.jpg",
    alt: "Amadeus",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/66941a6a8347115bccbdf80c_gvdt.jpg",
    alt: "GVDT",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/66941b2862ec235640f9b574_suplitur.jpg",
    alt: "Suplitur",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/66941be9d284a8bb49f2582e_Viajes_agt.jpg",
    alt: "Viajes AGT",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/669425424176e1d7f24591a7_travelnet.jpeg",
    alt: "Travelnet",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/66998db9646bb6b569339932_42_assistcard_tip_clpng_begDw6u52R.png",
    alt: "AssistCard",
  },
];

const instagramPosts = [
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6532de5bd770e5fe265c1876_alex-azabache-hY3KGFVG-i0-unsplash.jpg",
    alt: "Casas en las montañas de Samaná",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6532de8f69a03a24824a8abe_antonella-vilardo-i0H1Iifojw4-unsplash.jpg",
    alt: "Escalera en museo de RD",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6532de70f9f3fa37be59d78b_victor-rosario-UmjRGYEMjZw-unsplash.jpg",
    alt: "Vista aérea de persona haciendo parapente",
  },
  {
    src: "https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6532dea0a8ac2519c5bbc88a_victor-rosario-W6tx1iJliQU-unsplash.jpg",
    alt: "Paisaje dominicano",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ImageGrid({ images, cols = 3 }) {
  return (
    <div
      className={cn(
        "grid gap-2",
        cols === 3 ? "grid-cols-3" : "grid-cols-2 md:grid-cols-4",
      )}
    >
      {images.map((img, i) => (
        <div key={i} className="img-zoom aspect-[4/3] overflow-hidden">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-medium tracking-[0.2em] uppercase text-aviart-gold mb-3">
      {children}
    </p>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function HomePage() {
  useRevealAll();

  const [drSlide, setDrSlide] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const videoRef = useRef(null);

  const prevDr = () =>
    setDrSlide((s) => (s === 0 ? drSlides.length - 1 : s - 1));
  const nextDr = () =>
    setDrSlide((s) => (s === drSlides.length - 1 ? 0 : s + 1));

  // Auto-advance DR slides
  useEffect(() => {
    const interval = setInterval(nextDr, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/64dbb4effe41775e6505e12e_Homepage-slider-1.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6532c53b461503d727a05d7f_30871627-5482-4521-945d-3b1ca5563372-transcode.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay absolute inset-0" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="animate-fade-up text-xs font-medium tracking-[0.25em] uppercase text-aviart-gold mb-6">
            Online Travel Agency
          </p>
          <h1 className="animate-fade-up animate-delay-200 font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] mb-8">
            Descubre una Nueva
            <br />
            <em className="italic">Forma de Ver el Mundo</em>
          </h1>
          <div className="animate-fade-up animate-delay-400">
            <Link to="/destinos" className="btn-white">
              Explorar Destinos
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animate-delay-600">
          <div className="w-px h-12 bg-gradient-to-b from-white/0 to-white/50" />
        </div>
      </section>

      {/* ── Tagline ──────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-aviart-dark">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <p className="reveal font-display text-2xl md:text-3xl lg:text-4xl font-light italic text-white/90 text-center leading-relaxed max-w-3xl mx-auto">
            "Podrás gestionar el día a día de tus viajes corporativos de una
            forma eficiente y segura."
          </p>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-aviart-warm">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="reveal mb-14">
            <SectionLabel>Experiencias</SectionLabel>
            <p className="text-aviart-dark/60 font-display text-xl">
              El viajar siempre está contigo, aún después de volver a casa.
            </p>
          </div>

          {/* Nav tabs */}
          <div className="flex flex-wrap gap-1 mb-12 border-b border-aviart-dark/10">
            {[
              "República Dominicana",
              "Viajes Corporativos",
              "Viajes a la Medida",
              "Destinos",
            ].map((tab, i) => (
              <button
                key={tab}
                className={cn(
                  "px-5 py-3 text-xs font-medium tracking-wider uppercase transition-colors border-b-2 -mb-px",
                  i === 0
                    ? "border-aviart-gold text-aviart-dark"
                    : "border-transparent text-aviart-dark/50 hover:text-aviart-dark",
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={s.id}
                className={cn(
                  "reveal card-hover p-8 border border-aviart-dark/10 bg-white",
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-8 h-px bg-aviart-gold mb-6" />
                <h3 className="font-display text-2xl font-medium mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-aviart-dark/60 leading-relaxed mb-6">
                  {s.desc}
                </p>
                <Link
                  to={s.href}
                  className="text-xs font-medium tracking-wider uppercase text-aviart-gold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Ver más <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {featureCards.map((card, i) => (
              <Link
                key={i}
                to={card.href}
                className="reveal img-zoom group relative aspect-[4/3] overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl text-white font-medium">
                    {card.title}
                  </h3>
                  <span className="text-xs font-medium tracking-wider uppercase text-aviart-gold flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver más <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Corporate ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal">
              <img
                src="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/64dbc8ddc741ee5ed0e966e3_Asset%202C.svg"
                alt="AVIART"
                className="h-8 w-auto mb-6 opacity-80"
              />
              <SectionLabel>Viajes Corporativos</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-6 leading-tight">
                Sin perder el trato humano, te brindamos una solución eficiente
                y segura.
              </h2>
              <Link to="/corporativo" className="btn-gold">
                Conoce más
              </Link>
            </div>
            <div className="reveal grid grid-cols-2 gap-3">
              {corporateImages.map((img, i) => (
                <div
                  key={i}
                  className={cn(
                    "img-zoom overflow-hidden",
                    i === 0 ? "col-span-2 aspect-[16/7]" : "aspect-[4/3]",
                  )}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Custom Travel ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-aviart-cream">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal order-2 lg:order-1 grid grid-cols-2 gap-3">
              {customImages.map((img, i) => (
                <div key={i} className="img-zoom overflow-hidden aspect-square">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="reveal order-1 lg:order-2">
              <SectionLabel>Viajes a la medida</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-6 leading-tight">
                Expertos en crear itinerarios personalizados.
              </h2>
              <p className="text-sm text-aviart-dark/60 leading-relaxed mb-8">
                Proponemos soluciones a medida para la gestión de viajes/eventos
                MICE a cualquier lugar del mundo. Nos adaptamos a tus
                requerimientos y presupuesto.
              </p>
              <Link to="/contact" className="btn-gold">
                Crea tu viaje
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Destinations ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal">
              <SectionLabel>Destinos</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-6 leading-tight">
                Que tu destino de viaje nunca sea un lugar, sino una nueva forma
                de ver las cosas.
              </h2>
              <Link to="/destinos" className="btn-gold">
                Explora el mundo
              </Link>
            </div>
            <div className="reveal grid grid-cols-3 gap-3">
              {destinationImages.map((img, i) => (
                <div key={i} className="img-zoom overflow-hidden aspect-[3/4]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DR Slider ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-aviart-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Image */}
          <div className="relative h-72 lg:h-auto overflow-hidden">
            {drSlides.map((slide, i) => (
              <img
                key={i}
                src={slide.image}
                alt={slide.title}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
                  i === drSlide ? "opacity-100" : "opacity-0",
                )}
                loading="lazy"
              />
            ))}
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 lg:py-20">
            <SectionLabel>República Dominicana</SectionLabel>
            <div className="relative min-h-[200px]">
              {drSlides.map((slide, i) => (
                <div
                  key={i}
                  className={cn(
                    "absolute inset-0 transition-all duration-500",
                    i === drSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none",
                  )}
                >
                  <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-5 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prevDr}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:border-aviart-gold hover:text-aviart-gold transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex gap-2">
                {drSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setDrSlide(i)}
                    className={cn(
                      "h-px transition-all duration-300",
                      i === drSlide ? "w-8 bg-aviart-gold" : "w-4 bg-white/30",
                    )}
                  />
                ))}
              </div>
              <button
                onClick={nextDr}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:border-aviart-gold hover:text-aviart-gold transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners Marquee ──────────────────────────────────────────────── */}
      <section className="py-16 bg-aviart-warm border-y border-aviart-dark/8">
        <div className="mb-8 text-center">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-aviart-dark/40">
            Socios Comerciales
          </p>
        </div>
        <div className="marquee-container">
          <div className="animate-marquee inline-flex gap-16 items-center">
            {[...partners, ...partners].map((p, i) => (
              <div key={i} className="flex-shrink-0 h-10 flex items-center">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="h-8 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="reveal text-center mb-14">
            <SectionLabel>Nuestras Historias</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-light">
              ¡Vive tu experiencia de viaje con nosotros!
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative min-h-[260px]">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={cn(
                    "absolute inset-0 flex flex-col items-center text-center transition-all duration-500",
                    i === testimonialIdx
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none",
                  )}
                >
                  <img
                    src={t.stamp}
                    alt="stamp"
                    className="w-16 h-16 object-contain mb-6 opacity-80"
                  />
                  <div className="flex gap-1 mb-5">
                    {Array(5)
                      .fill(0)
                      .map((_, j) => (
                        <Star
                          key={j}
                          size={14}
                          className="fill-aviart-gold text-aviart-gold"
                        />
                      ))}
                  </div>
                  <p className="font-display text-xl italic text-aviart-dark/80 leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                  <p className="text-sm font-medium text-aviart-dark">
                    {t.name}
                  </p>
                  <p className="text-xs text-aviart-dark/50 tracking-wider">
                    {t.company}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() =>
                  setTestimonialIdx((i) =>
                    i === 0 ? testimonials.length - 1 : i - 1,
                  )
                }
                className="w-9 h-9 border border-aviart-dark/20 flex items-center justify-center hover:border-aviart-gold hover:text-aviart-gold transition-colors"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() =>
                  setTestimonialIdx((i) =>
                    i === testimonials.length - 1 ? 0 : i + 1,
                  )
                }
                className="w-9 h-9 border border-aviart-dark/20 flex items-center justify-center hover:border-aviart-gold hover:text-aviart-gold transition-colors"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/654bf1d0b1c0737903315add_El_valle.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/65ce9855a6cdea0111c74a2d_PLAYA FRONTON(6)-transcode.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-6">
          <h2 className="reveal font-display text-4xl md:text-6xl font-light text-white leading-tight mb-8">
            El mundo como lo imaginas,
            <br />
            <em className="italic">al alcance de tu mano.</em>
          </h2>
          <Link to="/contact" className="btn-white">
            Viaja con nosotros
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Instagram ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-aviart-warm">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="reveal text-center mb-12">
            <SectionLabel>Instagram</SectionLabel>
            <h2 className="font-display text-4xl font-light">
              Conecta con Nuestra Comunidad
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {instagramPosts.map((post, i) => (
              <a
                key={i}
                href="https://www.instagram.com/aviart.travel/"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal img-zoom aspect-square overflow-hidden group relative"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={post.src}
                  alt={post.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <Instagram
                    size={24}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/aviart.travel/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <Instagram size={13} />
              @aviart.travel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
