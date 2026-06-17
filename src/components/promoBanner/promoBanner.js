import React from 'react';
import bannerHorizontal from '../../images/banner-horizontal.gif';
import bannerHorizontalSm from '../../images/banner-horizontal-sm.gif';
import sorentoInterior from '../../images/sorento-interior.jpg';
import sorento7lugares from '../../images/sorento-7lugares.jpg';

function PromoBanner() {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-sorento-dark py-14 md:py-20">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        {/* Banner horizontal oficial */}
        <div className="flex justify-center mb-10">
          <img
            src={bannerHorizontal}
            alt="Novo Kia Sorento 4x4 - Patrocinador Oficial FIFA World Cup 2026"
            className="hidden sm:block w-full max-w-3xl rounded-lg"
          />
          <img
            src={bannerHorizontalSm}
            alt="Novo Kia Sorento 4x4 - Patrocinador Oficial FIFA World Cup 2026"
            className="sm:hidden w-full rounded-lg"
          />
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src={sorentoInterior}
              alt="Interior premium do Kia Sorento - painel digital e volante multifuncional"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-lg">Cockpit digital</h3>
                <p className="text-gray-300 text-sm">Painel 100% digital com tela curva de 12,3" e multimídia conectada.</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl">
            <img
              src={sorento7lugares}
              alt="Bancos em couro do Kia Sorento - 7 lugares com conforto real"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-lg">Conforto para 7</h3>
                <p className="text-gray-300 text-sm">Bancos em couro com ventilação, apoio de braço e porta-copos em todas as fileiras.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button
            onClick={scrollToForm}
            className="bg-sorento-gold text-sorento-dark font-bold px-10 py-4 rounded-xl hover:bg-sorento-gold-dark hover:scale-105 transition-all text-lg shadow-lg cursor-pointer"
          >
            Quero minha cotação
          </button>
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;
