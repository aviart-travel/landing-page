import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Mail, Instagram } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'AVIART', href: '/about' },
  { label: 'Conectividad Aérea', href: '/conectividad-aerea' },
  { label: 'Hotelería & Turismo', href: '/experiencia-hotelera' },
  { label: 'República Dominicana', href: '/descubre-rd' },
  { label: 'Destinos', href: '/destinos' },
  { label: 'Corporativo', href: '/corporativo' },
  { label: 'Contacto', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-8 py-2 bg-aviart-dark/90 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/18493712780"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-white/70 hover:text-aviart-gold transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            +1 (849) 371-2780
          </a>
          <a
            href="mailto:info@aviart.travel"
            className="flex items-center gap-2 text-xs text-white/70 hover:text-aviart-gold transition-colors"
          >
            <Mail size={12} />
            info@aviart.travel
          </a>
        </div>
        <a
          href="https://www.instagram.com/aviart.travel/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-white/70 hover:text-aviart-gold transition-colors"
        >
          <Instagram size={12} />
          @aviart.travel
        </a>
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          'fixed left-0 right-0 z-40 transition-all duration-500',
          'md:top-8',
          'top-0',
          scrolled
            ? 'bg-aviart-dark/95 backdrop-blur-md border-b border-white/5 shadow-2xl'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-screen-xl px-6 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://cdn.prod.website-files.com/64dbb4effe41775e6505e045/64dbc8ddc741ee5ed0e966e3_Asset%202C.svg"
              alt="AVIART"
              className="h-8 md:h-9 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 6).map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    'text-xs font-medium tracking-wider uppercase transition-colors duration-200',
                    location.pathname === link.href
                      ? 'text-aviart-gold'
                      : 'text-white/80 hover:text-aviart-gold'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="btn-gold text-xs py-2 px-5">
              Contacto
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-400 bg-aviart-dark/98 backdrop-blur-xl',
            isOpen ? 'max-h-screen border-t border-white/5' : 'max-h-0'
          )}
        >
          <ul className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    'block text-sm font-medium tracking-wider uppercase py-1 transition-colors',
                    location.pathname === link.href
                      ? 'text-aviart-gold'
                      : 'text-white/80 hover:text-aviart-gold'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-6 flex flex-col gap-3 border-t border-white/10 pt-4">
            <a
              href="https://wa.me/18493712780"
              className="text-xs text-white/60 flex items-center gap-2"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +1 (849) 371-2780
            </a>
            <a href="mailto:info@aviart.travel" className="text-xs text-white/60 flex items-center gap-2">
              <Mail size={12} />
              info@aviart.travel
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
