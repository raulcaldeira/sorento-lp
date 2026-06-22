import React from 'react';

function UrgencyBanner() {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-sorento-navy to-sorento-dark rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sorento-gold/10 rounded-full -translate-y-1/2 translate-x-1/3" aria-hidden="true"></div>
          <div className="text-center md:text-left relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Não perca tempo!
            </h2>
            <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
              Condições especiais por tempo limitado. Solicite sua cotação agora e garanta o melhor preço do Kia Sorento.
            </p>
          </div>
          <button
            onClick={scrollToForm}
            className="relative z-10 bg-sorento-gold text-sorento-dark font-bold px-10 py-4 rounded-xl hover:bg-sorento-gold-dark hover:scale-105 transition-all text-lg shadow-lg whitespace-nowrap cursor-pointer"
          >
            Quero minha cotação
          </button>
        </div>
      </div>
    </section>
  );
}

export default UrgencyBanner;
