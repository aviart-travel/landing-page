import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useRevealAll } from '@/hooks/useReveal'

// ─── Page Hero ───────────────────────────────────────────────────────────────

function PageHero({ title, subtitle, image, label }) {
  return (
    <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-8 pb-14 w-full">
        {label && (
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-aviart-gold mb-3">{label}</p>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-light text-white leading-tight">{title}</h1>
        {subtitle && (
          <p className="text-base text-white/70 mt-3 max-w-xl">{subtitle}</p>
        )}
      </div>
    </section>
  )
}

// ─── About Page ──────────────────────────────────────────────────────────────

export function AboutPage() {
  useRevealAll()
  return (
    <div>
      <PageHero
        label="Quiénes Somos"
        title="AVIART"
        subtitle="Online Travel Agency (OTA) especializada en soluciones de viaje."
        image="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502dfca4f9237d6440659dd_Business-travellers.jpeg"
      />
      <section className="py-20 max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-aviart-gold mb-4">Nuestra Misión</p>
            <h2 className="font-display text-4xl font-light mb-6 leading-tight">
              Transformamos cada viaje en una experiencia única e inolvidable.
            </h2>
            <p className="text-sm text-aviart-dark/60 leading-relaxed mb-4">
              AVIART es una agencia de viajes especializada en ofrecer soluciones completas tanto para viajeros corporativos como para quienes buscan experiencias personalizadas de alto nivel.
            </p>
            <p className="text-sm text-aviart-dark/60 leading-relaxed mb-8">
              Con años de experiencia en el sector turístico, nuestro equipo de expertos trabaja incansablemente para garantizar que cada detalle de tu viaje sea perfecto, desde la planificación hasta el regreso a casa.
            </p>
            <Link to="/contact" className="btn-gold">
              Contáctanos <ArrowRight size={13} />
            </Link>
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            <div className="bg-aviart-cream p-8 flex flex-col">
              <span className="font-display text-5xl text-aviart-gold font-light mb-2">10+</span>
              <span className="text-sm text-aviart-dark/60">Años de experiencia</span>
            </div>
            <div className="bg-aviart-dark p-8 flex flex-col">
              <span className="font-display text-5xl text-aviart-gold font-light mb-2">500+</span>
              <span className="text-sm text-white/60">Clientes satisfechos</span>
            </div>
            <div className="bg-aviart-dark p-8 flex flex-col">
              <span className="font-display text-5xl text-aviart-gold font-light mb-2">50+</span>
              <span className="text-sm text-white/60">Destinos disponibles</span>
            </div>
            <div className="bg-aviart-cream p-8 flex flex-col">
              <span className="font-display text-5xl text-aviart-gold font-light mb-2">24/7</span>
              <span className="text-sm text-aviart-dark/60">Soporte disponible</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Contact Page ─────────────────────────────────────────────────────────────

export function ContactPage() {
  useRevealAll()
  return (
    <div>
      <PageHero
        label="Estamos aquí para ayudarte"
        title="Contacto"
        subtitle="Cuéntanos sobre tu próximo viaje y te diseñamos la mejor propuesta."
        image="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502e2a18b8577c3500d96df_3c222669_z.webp"
      />
      <section className="py-20 max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="reveal">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-aviart-gold mb-4">Hablemos</p>
            <h2 className="font-display text-4xl font-light mb-6">Planifica tu viaje con nosotros</h2>
            <p className="text-sm text-aviart-dark/60 leading-relaxed mb-8">
              Nuestro equipo de especialistas está listo para crear la experiencia de viaje perfecta para ti o tu empresa.
            </p>
            <div className="flex flex-col gap-5">
              <a href="mailto:info@aviart.travel" className="flex items-start gap-4 group">
                <div className="w-10 h-10 border border-aviart-dark/20 flex items-center justify-center flex-shrink-0 group-hover:border-aviart-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-aviart-dark/40 mb-1 tracking-wide uppercase">Email</p>
                  <p className="text-sm text-aviart-dark group-hover:text-aviart-gold transition-colors">info@aviart.travel</p>
                </div>
              </a>
              <a href="https://wa.me/18493712780" className="flex items-start gap-4 group">
                <div className="w-10 h-10 border border-aviart-dark/20 flex items-center justify-center flex-shrink-0 group-hover:border-aviart-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-aviart-dark">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-aviart-dark/40 mb-1 tracking-wide uppercase">WhatsApp</p>
                  <p className="text-sm text-aviart-dark group-hover:text-aviart-gold transition-colors">+1 (849) 371-2780</p>
                </div>
              </a>
            </div>
          </div>
          <div className="reveal">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium tracking-wider uppercase text-aviart-dark/50 block mb-2">Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full border border-aviart-dark/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-aviart-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium tracking-wider uppercase text-aviart-dark/50 block mb-2">Apellido</label>
                  <input
                    type="text"
                    placeholder="Tu apellido"
                    className="w-full border border-aviart-dark/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-aviart-gold transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium tracking-wider uppercase text-aviart-dark/50 block mb-2">Email</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full border border-aviart-dark/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-aviart-gold transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-medium tracking-wider uppercase text-aviart-dark/50 block mb-2">Tipo de viaje</label>
                <select className="w-full border border-aviart-dark/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-aviart-gold transition-colors text-aviart-dark/70">
                  <option value="">Selecciona una opción</option>
                  <option value="corporate">Viaje corporativo</option>
                  <option value="custom">Viaje a la medida</option>
                  <option value="group">Viaje en grupo</option>
                  <option value="dr">República Dominicana</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium tracking-wider uppercase text-aviart-dark/50 block mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos sobre tu viaje ideal..."
                  className="w-full border border-aviart-dark/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-aviart-gold transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-gold-filled w-full justify-center">
                Enviar Mensaje <ArrowRight size={13} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Destinations Page ────────────────────────────────────────────────────────

const destinations = [
  { name: 'París, Francia', image: 'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502e388b3091e5b5e5b8643_gloria-villa-GjYw5xyMI3w-unsplash.jpg', tag: 'Europa' },
  { name: 'Nueva York, EE.UU.', image: 'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502e3bd84f2696131143687_harry-gillen-vMLfRVkWItI-unsplash.jpg', tag: 'América' },
  { name: 'Safari, África', image: 'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/66999103e3e52eb792e364e3_grupos2.jpg', tag: 'África' },
  { name: 'Capadoccia, Turquía', image: 'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6687f54da3c0a6dbbea9039d_capadoccia.jpg', tag: 'Asia' },
  { name: 'Bahía de las Águilas', image: 'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/66ab0a3368b2806696d17a41_bahia-de-las-aguilas-pedernales_793f5316-903e-f723-01ddf544d587e064a.jpg', tag: 'Caribe' },
  { name: 'Valle Nuevo, RD', image: 'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/669991d2e3e52eb792e3ecc9_valle_nuevo2.jpg', tag: 'Caribe' },
]

export function DestinationsPage() {
  useRevealAll()
  return (
    <div>
      <PageHero
        label="Explora"
        title="Destinos"
        subtitle="El mundo entero al alcance de tu mano."
        image="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502e388b3091e5b5e5b8643_gloria-villa-GjYw5xyMI3w-unsplash.jpg"
      />
      <section className="py-20 max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((dest, i) => (
            <Link
              key={i}
              to="/contact"
              className="reveal group img-zoom relative aspect-[4/3] overflow-hidden card-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-medium tracking-widest uppercase bg-aviart-gold/90 text-aviart-dark px-3 py-1">
                  {dest.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl text-white font-medium">{dest.name}</h3>
                <span className="text-xs text-aviart-gold flex items-center gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Cotizar viaje <ArrowRight size={11} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

// ─── Dominican Republic Page ──────────────────────────────────────────────────

export function RepublicaDominicanaDPage() {
  useRevealAll()
  const places = [
    {
      title: 'Valle Nuevo, Constanza',
      image: 'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/669991d2e3e52eb792e3ecc9_valle_nuevo2.jpg',
      desc: 'Conocido por ofrecer excepcionales oportunidades para la observación de aves y senderismo de montaña. Este paisaje frío y montañoso, remoto y exuberante no se puede ver en ningún otro lugar del país.',
    },
    {
      title: 'Zona Colonial, Santo Domingo',
      image: 'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/669993f99e22429d02e21548_1Ciudad-Colonial-de-Santo-Domingo.jpg',
      desc: 'El barrio más histórico de Santo Domingo. Hogar de la primera catedral de América, la primera calle pavimentada, el primer monasterio, y la primera universidad.',
    },
    {
      title: 'Bahía de las Águilas',
      image: 'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/66ab0a3368b2806696d17a41_bahia-de-las-aguilas-pedernales_793f5316-903e-f723-01ddf544d587e064a.jpg',
      desc: 'Con sus aguas cristalinas de color turquesa, esta playa de ocho kilómetros de color blanco diamante es reconocida como la más hermosa de República Dominicana.',
    },
    {
      title: 'Dunas de Baní',
      image: 'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/66ab0ab4bb9dcff73783faff_Dunas_bani2.jpg',
      desc: 'Las dunas de Baní se localizan en la península de Las Calderas. El campo de dunas se extiende en una línea recta de 15 km con la mayor de estas dunas midiendo 35 metros.',
    },
  ]

  return (
    <div>
      <PageHero
        label="Caribe"
        title="República Dominicana lo tiene todo"
        subtitle="Te diriges al corazón del Caribe, te esperamos con una sonrisa."
        image="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/654bf1d0b1c0737903315add_El_valle.jpg"
      />
      <section className="py-20 max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="flex flex-col gap-20">
          {places.map((place, i) => (
            <div
              key={i}
              className={`reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <div className="img-zoom aspect-[16/10] overflow-hidden">
                <img src={place.image} alt={place.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <div className="w-8 h-px bg-aviart-gold mb-5" />
                <h2 className="font-display text-3xl md:text-4xl font-light mb-5 leading-tight">{place.title}</h2>
                <p className="text-sm text-aviart-dark/60 leading-relaxed mb-6">{place.desc}</p>
                <Link to="/contact" className="btn-gold">
                  Planificar visita <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// ─── Corporate Page ───────────────────────────────────────────────────────────

export function CorporatePage() {
  useRevealAll()
  return (
    <div>
      <PageHero
        label="Empresas"
        title="Viajes Corporativos"
        subtitle="Soluciones eficientes y seguras para la gestión de viajes de empresa."
        image="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502dfca4f9237d6440659dd_Business-travellers.jpeg"
      />
      <section className="py-20 max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="reveal">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-aviart-gold mb-4">Business Travel</p>
            <h2 className="font-display text-4xl font-light mb-6 leading-tight">
              Sin perder el trato humano, te brindamos una solución eficiente y segura.
            </h2>
            <p className="text-sm text-aviart-dark/60 leading-relaxed mb-4">
              Gestionamos todos los aspectos de los viajes corporativos de tu empresa: vuelos, hoteles, traslados y seguros de viaje, todo coordinado por nuestro equipo de expertos.
            </p>
            <p className="text-sm text-aviart-dark/60 leading-relaxed mb-8">
              Con nuestra plataforma digital y atención personalizada, tus empleados viajarán cómodos y seguros, mientras tú controlas el presupuesto y las políticas de viaje.
            </p>
            <Link to="/contact" className="btn-gold">Solicitar propuesta <ArrowRight size={13} /></Link>
          </div>
          <div className="reveal grid grid-cols-2 gap-3">
            {[
              'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502dfca4f9237d6440659dd_Business-travellers.jpeg',
              'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502e032b48b71d2caf9b453_transport.webp',
              'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502dfdebadc0aee3c4ed8d1_Connect-easily-with-your-clients-through-world-conference.jpeg',
              'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6500ac83870531f080676b13_omar-prestwich-FCM4k7LcggU-unsplash.jpg',
            ].map((src, i) => (
              <div key={i} className="img-zoom aspect-square overflow-hidden">
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '✈', title: 'Gestión de vuelos', desc: 'Reserva y gestión de vuelos nacionales e internacionales con las mejores tarifas corporativas.' },
            { icon: '🏨', title: 'Hoteles & Alojamiento', desc: 'Acuerdos especiales con cadenas hoteleras premium para garantizar comodidad y valor.' },
            { icon: '🚗', title: 'Traslados & Movilidad', desc: 'Servicios de traslado aeropuerto-hotel, vehículos de lujo y transporte ejecutivo.' },
          ].map((feat, i) => (
            <div key={i} className="reveal p-8 border border-aviart-dark/10 bg-white" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="text-3xl mb-4 block">{feat.icon}</span>
              <h3 className="font-display text-xl font-medium mb-3">{feat.title}</h3>
              <p className="text-sm text-aviart-dark/60 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// ─── Custom Travel Page ────────────────────────────────────────────────────────

export function CustomTravelPage() {
  useRevealAll()
  return (
    <div>
      <PageHero
        label="Tu viaje, tu manera"
        title="Viajes a la Medida"
        subtitle="Itinerarios personalizados diseñados exclusivamente para ti."
        image="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6687f54da3c0a6dbbea9039d_capadoccia.jpg"
      />
      <section className="py-20 max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="reveal">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-aviart-gold mb-4">Personalización total</p>
            <h2 className="font-display text-4xl font-light mb-6 leading-tight">
              Expertos en crear itinerarios que se adaptan a tus requerimientos y presupuesto.
            </h2>
            <p className="text-sm text-aviart-dark/60 leading-relaxed mb-4">
              Proponemos soluciones a medida para la gestión de viajes y eventos MICE a cualquier lugar del mundo. Cada viaje es único y diseñado exclusivamente para nuestros clientes.
            </p>
            <Link to="/contact" className="btn-gold">Crea tu viaje <ArrowRight size={13} /></Link>
          </div>
          <div className="reveal grid grid-cols-2 gap-3">
            {[
              'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6687f54da3c0a6dbbea9039d_capadoccia.jpg',
              'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502e2a18b8577c3500d96df_3c222669_z.webp',
              'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6500ac83870531f080676b13_omar-prestwich-FCM4k7LcggU-unsplash.jpg',
              'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502e22b8bbacfdb500fa2ee_%5BBURCU-ZAFER%5D-1529-1.jpg',
            ].map((src, i) => (
              <div key={i} className="img-zoom aspect-square overflow-hidden">
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Air Connectivity Page ────────────────────────────────────────────────────

export function AirConnectivityPage() {
  useRevealAll()
  return (
    <div>
      <PageHero
        label="Vuelos"
        title="Conectividad Aérea"
        subtitle="Conexiones aéreas a los mejores destinos del mundo."
        image="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6500ac83870531f080676b13_omar-prestwich-FCM4k7LcggU-unsplash.jpg"
      />
      <section className="py-20 max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-aviart-gold mb-4">Vuelos</p>
            <h2 className="font-display text-4xl font-light mb-6 leading-tight">
              Acceso a las mejores rutas aéreas del mundo.
            </h2>
            <p className="text-sm text-aviart-dark/60 leading-relaxed mb-4">
              Como agencia autorizada con acceso a los sistemas GDS más avanzados, ofrecemos las mejores tarifas en vuelos nacionales e internacionales para todos nuestros clientes.
            </p>
            <p className="text-sm text-aviart-dark/60 leading-relaxed mb-8">
              Ya sea en clase económica, business o primera clase, nuestros especialistas encontrarán la mejor opción para tu viaje.
            </p>
            <Link to="/contact" className="btn-gold">Cotizar vuelo <ArrowRight size={13} /></Link>
          </div>
          <div className="reveal">
            <img
              src="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/654c2ccf1934aae07066a79b_conectividad.jpg"
              alt="Conectividad aérea"
              className="w-full aspect-[16/10] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Hotel Page ───────────────────────────────────────────────────────────────

export function HotelPage() {
  useRevealAll()
  return (
    <div>
      <PageHero
        label="Alojamiento"
        title="Hotelería & Turismo"
        subtitle="Los mejores hoteles del mundo, seleccionados para ti."
        image="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502e2a18b8577c3500d96df_3c222669_z.webp"
      />
      <section className="py-20 max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-aviart-gold mb-4">Hotelería</p>
            <h2 className="font-display text-4xl font-light mb-6 leading-tight">
              Alojamiento de lujo para cada tipo de viajero.
            </h2>
            <p className="text-sm text-aviart-dark/60 leading-relaxed mb-4">
              Trabajamos con los mejores hoteles y resorts del mundo para ofrecerte tarifas exclusivas y beneficios adicionales que no encontrarás en ningún otro lugar.
            </p>
            <Link to="/contact" className="btn-gold">Ver opciones <ArrowRight size={13} /></Link>
          </div>
          <div className="reveal">
            <img
              src="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6502e2a18b8577c3500d96df_3c222669_z.webp"
              alt="Hotel"
              className="w-full aspect-[16/10] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Simple pages ─────────────────────────────────────────────────────────────

export function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-6">
      <h1 className="font-display text-5xl font-light mb-8">Políticas de Privacidad</h1>
      <div className="prose prose-sm text-aviart-dark/70 leading-relaxed space-y-4">
        <p>En AVIART BUSINESS TRAVEL respetamos tu privacidad y nos comprometemos a proteger tus datos personales.</p>
        <h2 className="font-display text-2xl font-light text-aviart-dark mt-8">Datos que recopilamos</h2>
        <p>Recopilamos información necesaria para procesar tus reservas y mejorar nuestros servicios, incluyendo nombre, correo electrónico y preferencias de viaje.</p>
        <h2 className="font-display text-2xl font-light text-aviart-dark mt-8">Uso de la información</h2>
        <p>Utilizamos tu información exclusivamente para gestionar tus viajes, enviarte actualizaciones relevantes y mejorar tu experiencia con nosotros.</p>
        <h2 className="font-display text-2xl font-light text-aviart-dark mt-8">Contacto</h2>
        <p>Para cualquier consulta sobre privacidad, contáctanos en info@aviart.travel</p>
      </div>
    </div>
  )
}

export function TermsPage() {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-6">
      <h1 className="font-display text-5xl font-light mb-8">Términos y Condiciones</h1>
      <div className="prose prose-sm text-aviart-dark/70 leading-relaxed space-y-4">
        <p>Al utilizar los servicios de AVIART BUSINESS TRAVEL, aceptas los siguientes términos y condiciones.</p>
        <h2 className="font-display text-2xl font-light text-aviart-dark mt-8">Reservas</h2>
        <p>Las reservas están sujetas a disponibilidad y confirmación. Los precios pueden variar según temporada y disponibilidad.</p>
        <h2 className="font-display text-2xl font-light text-aviart-dark mt-8">Cancelaciones</h2>
        <p>Las políticas de cancelación varían según el tipo de servicio. Consulta con nuestro equipo para más detalles.</p>
        <h2 className="font-display text-2xl font-light text-aviart-dark mt-8">Responsabilidad</h2>
        <p>AVIART actúa como intermediario entre los viajeros y los proveedores de servicios turísticos.</p>
      </div>
    </div>
  )
}
