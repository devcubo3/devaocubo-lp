export default function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute -right-20 top-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -left-20 bottom-0 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto glass-card p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/50">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">
            Pronto para destravar os limites do seu negócio?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Não queremos apenas te vender código. Queremos conquistar o direito
            de dar conselhos estratégicos para sua empresa crescer através da
            tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary hover:bg-primary-dark text-white text-base sm:text-lg px-8 sm:px-10 py-4 rounded-xl font-bold shadow-lg shadow-primary/30 transition-transform transform hover:-translate-y-1 cursor-pointer">
              Agendar meu Diagnóstico Gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
