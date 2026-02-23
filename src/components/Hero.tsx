export default function Hero() {
  return (
    <section className="relative pt-24 min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 cube-shape w-64 h-64 blur-3xl opacity-20 floating" />
      <div
        className="absolute bottom-40 right-20 cube-shape w-96 h-96 blur-3xl opacity-10 floating-delayed"
        style={{ background: "#4B5563" }}
      />
      <div className="absolute inset-0 bg-cube-pattern opacity-30 pointer-events-none" />

      {/* Left side - Text */}
      <div className="lg:w-1/2 relative z-10 flex flex-col justify-center px-6 lg:pl-16 lg:pr-8 py-12 lg:py-0 bg-gradient-to-br from-white/50 to-transparent backdrop-blur-sm lg:border-r border-gray-200">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest w-max mb-6">
          Consultoria em Desenvolvimento
        </span>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
          Seu aplicativo projetado, codado e{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
            gerando resultados
          </span>{" "}
          em até 45 dias.
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
          Esqueça os atrasos intermináveis. Focamos no efeito tangível do
          software no seu negócio, eliminando burocracias desnecessárias e
          entregando valor real desde a primeira sprint.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a
            href="#cta"
            className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 w-full sm:w-auto text-sm sm:text-base"
          >
            <span>Quero diagnosticar meu projeto agora</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="glass-card p-4 rounded-xl border-l-4 border-primary shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex-1">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">security</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase">
                  Garantia
                </p>
                <h3 className="text-lg font-display font-bold text-gray-900 leading-none mt-1">
                  Segurança Total
                </h3>
              </div>
            </div>
          </div>
          <div className="glass-card p-4 rounded-xl border-l-4 border-gray-800 shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex-1">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-white shrink-0">
                <span className="font-display font-bold text-xs">45d</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase">
                  Prazo de MVP
                </p>
                <h3 className="text-lg font-display font-bold text-gray-900 leading-none mt-1">
                  Entrega Rápida
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="lg:w-1/2 relative flex items-center justify-center bg-gray-100/50 p-6 sm:p-10 lg:p-0 overflow-hidden min-h-[500px] lg:min-h-0">
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
          {/* Main floating card */}
          <div className="absolute w-full z-20 floating">
            <div className="glass-card p-6 sm:p-8 rounded-[2rem] shadow-2xl border-t border-white/40 relative overflow-hidden group mx-auto max-w-md">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl transform translate-x-10 -translate-y-10 group-hover:bg-primary/30 transition-all duration-700" />

              <div className="flex justify-between items-start mb-6 sm:mb-8">
                <div className="bg-gray-100 p-3 sm:p-4 rounded-2xl">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary">
                    code
                  </span>
                </div>
                <span className="px-3 sm:px-4 py-1.5 bg-green-100 text-green-600 text-xs font-bold rounded-full tracking-wide">
                  EM PRODUÇÃO
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display mb-3 text-gray-900">
                MVP em 45 Dias
              </h3>
              <p className="text-gray-500 text-sm mb-6 sm:mb-8 leading-relaxed">
                Validação rápida de hipóteses com usuários reais. Focamos no que
                importa para o seu negócio crescer.
              </p>

              <div className="space-y-4">
                <div className="flex justify-between text-xs font-bold text-gray-700 uppercase tracking-wider">
                  <span>Progresso</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-orange-400 h-full w-full rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)] animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Terminal card */}
          <div className="absolute top-10 -right-4 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-tr from-gray-800 to-gray-600 rounded-3xl transform rotate-12 z-10 shadow-2xl opacity-60 floating-delayed">
            <div className="absolute bottom-6 left-6 right-6">
              <div className="space-y-2 font-mono text-xs text-green-400 opacity-80">
                <p>&gt; Diagnóstico concluído</p>
                <p>&gt; Otimizando recursos...</p>
                <p className="text-white">&gt; ROI Maximizado.</p>
              </div>
            </div>
          </div>

          {/* Growth badge */}
          <div
            className="absolute -bottom-6 left-0 lg:left-10 z-30 floating-delayed"
            style={{ animationDelay: "1s" }}
          >
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">+240%</div>
                <div className="text-xs text-gray-500 font-medium">
                  Crescimento Médio
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
