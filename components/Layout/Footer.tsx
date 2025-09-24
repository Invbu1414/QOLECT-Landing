export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    empresa: [
      { label: 'Sobre Nosotros', href: '#' },
      { label: 'Nuestro Equipo', href: '#' },
      { label: 'Trabaja con Nosotros', href: '#' },
      { label: 'Prensa', href: '#' }
    ],
    experiencias: [
      { label: 'Aventuras Extremas', href: '#' },
      { label: 'Inmersión Cultural', href: '#' },
      { label: 'Bienestar & Relax', href: '#' },
      { label: 'Destinos Premium', href: '#' }
    ],
    soporte: [
      { label: 'Centro de Ayuda', href: '#' },
      { label: 'Política de Cancelación', href: '#' },
      { label: 'Seguros de Viaje', href: '#' },
      { label: 'Contacto', href: '#contacto' }
    ]
  }

  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: '📷'
    },
    {
      name: 'Facebook',
      href: '#',
      icon: '📘'
    },
    {
      name: 'Twitter',
      href: '#',
      icon: '🐦'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="relative w-full h-full overflow-hidden">
          {[
            { left: 8, top: 15, delay: 0.5 },
            { left: 92, top: 85, delay: 3.2 },
            { left: 35, top: 25, delay: 1.8 },
            { left: 68, top: 75, delay: 4.7 },
            { left: 15, top: 60, delay: 2.3 },
            { left: 85, top: 40, delay: 6.1 },
            { left: 45, top: 90, delay: 1.4 },
            { left: 75, top: 20, delay: 5.8 },
            { left: 25, top: 80, delay: 0.9 },
            { left: 95, top: 30, delay: 7.2 },
            { left: 5, top: 45, delay: 3.6 },
            { left: 55, top: 10, delay: 2.1 },
            { left: 40, top: 95, delay: 8.4 },
            { left: 80, top: 55, delay: 1.7 },
            { left: 20, top: 35, delay: 4.9 },
            { left: 60, top: 70, delay: 6.5 },
            { left: 10, top: 85, delay: 0.3 },
            { left: 90, top: 15, delay: 5.1 },
            { left: 50, top: 50, delay: 2.8 },
            { left: 30, top: 5, delay: 7.9 }
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Q</span>
              </div>
              <span className="text-2xl font-bold">Qolect</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creando experiencias auténticas de viaje que conectan personas 
              con culturas, aventuras y momentos inolvidables.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label={`Seguir en ${social.name}`}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Experiencias</h4>
            <ul className="space-y-3">
              {footerLinks.experiencias.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="glass border-t border-gray-700 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Mantente informado</h3>
            <p className="text-gray-300 mb-6">
              Recibe las mejores ofertas y destinos exclusivos directamente en tu email.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} Qolect Travel. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Términos de Servicio
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}