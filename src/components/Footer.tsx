export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 sm:pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded transform rotate-12" />
              <span className="font-display font-bold text-xl text-gray-900">
                Dev ao Cubo
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Software House focada em resultados reais. Transformamos
              complexidade em crescimento.
            </p>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Manifesto PCO
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Cubos */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Cubos</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Web & Mobile
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cloud & Backend
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Product Design
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">email</span>
                contato@devaocubo.com
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">place</span>
                São Paulo, Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>&copy; 2025 Dev ao Cubo. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
