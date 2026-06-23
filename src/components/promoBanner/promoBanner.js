import React from 'react';
import bannerTall from '../../images/banner-sorento-9x16.jpg';

function PromoBanner() {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-sorento-dark py-14 md:py-20">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        {/* Content + Banner tall */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Banner tall */}
          <div className="flex-shrink-0">
            <img
              src={bannerTall}
              alt="Novo Kia Sorento 4x4 - De R$ 399.990 por R$ 359.990"
              className="rounded-xl shadow-2xl max-w-[250px] mx-auto"
            />
          </div>

          {/* Destaques */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center md:text-left">
              Equipado para qualquer aventura
            </h2>

            <div className="space-y-5 text-left">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sorento-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-sorento-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className='flex flex-col items-start'>
                  <h3 className="text-white font-semibold">Tração 4x4 inteligente</h3>
                  <p className="text-gray-400 text-sm">Sistema AWD que distribui torque automaticamente entre os eixos para máxima aderência.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sorento-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-sorento-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Câmbio automático de dupla embreagem de 8 marchas</h3>
                  <p className="text-gray-400 text-sm">Transmissão suave e eficiente com 7 modos de condução.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sorento-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-sorento-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Motor 2.2 turbodiesel com 194 cv</h3>
                  <p className="text-gray-400 text-sm">Potência e torque impressionante para qualquer terreno com eficiência diesel.</p>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
            <button
              onClick={scrollToForm}
              className="mt-8 bg-sorento-gold text-sorento-dark font-bold px-10 py-4 rounded-xl hover:bg-sorento-gold-dark hover:scale-105 transition-all text-lg shadow-lg cursor-pointer"
            >
              Quero minha cotação
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;
