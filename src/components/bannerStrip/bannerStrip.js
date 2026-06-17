import React from 'react';
import bannerHorizontal from '../../images/banner-horizontal.gif';
import bannerHorizontalSm from '../../images/banner-horizontal-sm.gif';

function BannerStrip() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-content mx-auto px-4 sm:px-6 flex justify-center">
        <div className="w-full max-w-3xl">
          <img
            src={bannerHorizontal}
            alt="Novo Kia Sorento 4x4 - Patrocinador Oficial FIFA World Cup 2026"
            className="hidden sm:block w-full rounded-lg shadow-card"
          />
          <img
            src={bannerHorizontalSm}
            alt="Novo Kia Sorento 4x4 - Patrocinador Oficial FIFA World Cup 2026"
            className="sm:hidden w-full rounded-lg shadow-card"
          />
        </div>
      </div>
    </section>
  );
}

export default BannerStrip;
