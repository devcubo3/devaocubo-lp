export default function Diagnostico() {
  return (
    <section
      id="diagnostico"
      className="py-16 sm:py-24 relative z-20 bg-white border-y border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              <span className="material-symbols-outlined text-6xl sm:text-8xl text-primary mb-6 opacity-80 block">
                medical_services
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-6 text-gray-900">
                Desenvolver o sistema inteiro sem focar no problema principal é
                desperdício de dinheiro.
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Assim como um médico não prescreve uma cirurgia antes de um exame
                detalhado, nós não escrevemos uma linha de código sem entender a
                dor real do seu negócio.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Muitas empresas falham ao construir &quot;features&quot; em vez
                de soluções. Nosso diagnóstico identifica a causa raiz, evitando
                que você invista tempo e recursos em funcionalidades que não
                trazem retorno.
              </p>
              <a
                href="#cta"
                className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Entenda como funciona nosso diagnóstico
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Right - Comparison */}
          <div className="lg:w-1/2 relative w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl transform rotate-3" />
            <div className="relative glass-card p-6 sm:p-8 rounded-3xl border border-gray-200">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-500">
                    <span className="material-symbols-outlined">close</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      A abordagem comum
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Orçamentos inflados, escopo aberto e foco apenas na
                      entrega técnica, ignorando o resultado de negócio.
                    </p>
                  </div>
                </li>
                <li className="flex items-center justify-center">
                  <span className="material-symbols-outlined text-gray-400">
                    arrow_downward
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-500">
                    <span className="material-symbols-outlined">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      A abordagem Dev ao Cubo
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Diagnóstico preciso, escopo focado no MVP (Mínimo Produto
                      Viável) e compromisso com o ROI.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
