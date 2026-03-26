import { Link } from 'react-router-dom'
import { Instagram, Mail } from 'lucide-react'

const footerLinks1 = [
  { label: 'Home', href: '/' },
  { label: 'AVIART', href: '/about' },
  { label: 'Conectividad Aérea', href: '/conectividad-aerea' },
  { label: 'Hotelería & Turismo', href: '/experiencia-hotelera' },
  { label: 'Rentals', href: '/corporativo' },
]

const footerLinks2 = [
  { label: 'Contacto', href: '/contact' },
  { label: 'República Dominicana', href: '/descubre-rd' },
  { label: 'Viajes a la Medida', href: '/viajes-a-la-medida' },
  { label: 'Destinos', href: '/destinos' },
  { label: 'Corporativo', href: '/corporativo' },
]

const partners = [
  { src: 'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/65ce411b96872e94ec482428_GrupoAtomLogo.jpg', alt: 'Grupo Atom' },
  { src: 'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/65ce40d7059b732c3d3b9d22_amadeus.jpg', alt: 'Amadeus' },
  { src: 'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/65ce43abcae4e7ccba4832ef_mapfre.png', alt: 'Mapfre' },
  { src: 'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/65ce434a56080f32565b475e_opera-hotel-300.jpg', alt: 'Opera Hotel' },
  { src: 'https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/66941286366340996c9b34eb_EASA_Logo-gray.jpg', alt: 'EASA' },
]

export default function Footer() {
  return (
    <footer className="bg-aviart-dark text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 py-16">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col gap-5">
            <Link to="/">
              <img
                src="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/64dbd8d07eda85d52725b847_Asset%203C.svg"
                alt="AVIART"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-xs text-white/50 leading-relaxed">
              Online Travel Agency (OTA) especializada en viajes corporativos y vacacionales.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://www.instagram.com/aviart.travel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-aviart-gold hover:text-aviart-gold transition-colors"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://wa.me/18493712780"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-green-400 hover:text-green-400 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="mailto:info@aviart.travel"
                className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-aviart-gold hover:text-aviart-gold transition-colors"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Links col 1 */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-aviart-gold mb-5">Navegación</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks1.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links col 2 */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-aviart-gold mb-5">Servicios</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks2.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment methods */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-aviart-gold mb-5">Métodos de Pago</h4>
            <div className="flex flex-col gap-3">
              <div className="bg-white rounded px-3 py-2 flex items-center justify-center w-28">
                <img
                  src="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/669828d455c7cdaba6396026_popular.svg"
                  alt="Banco Popular"
                  className="h-5 w-auto object-contain"
                />
              </div>
              <div className="bg-white rounded px-3 py-2 flex items-center justify-center w-28">
                <img
                  src="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/6698298e27291d32c3687a6e_banreservas.png"
                  alt="Banreservas"
                  className="h-5 w-auto object-contain"
                />
              </div>
              <div className="bg-white rounded px-3 py-2 flex items-center justify-center w-28">
                <img
                  src="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/669829bcc29c9590f05c61b8_Cardnet-Web.png"
                  alt="Cardnet"
                  className="h-5 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            AVIART BUSINESS TRAVEL © {new Date().getFullYear()} | Online Travel Agency (OTA)
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Políticas de Privacidad
            </Link>
            <Link to="/terms-conditions" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
