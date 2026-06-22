import React from 'react';
import videoSorento from '../../images/sorento-video-1x1.mp4';
import bannerCard from '../../images/banner-sorento-1x1.jpg';

function BannerStrip() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-content mx-auto px-4 sm:px-6 flex justify-center">
        <div className="w-full max-w-2xl">
          <video
            src={videoSorento}
            poster={bannerCard}
            autoPlay
            muted
            loop
            playsInline
            aria-label="Vídeo do Novo Kia Sorento 4x4"
            className="w-full rounded-lg shadow-card"
          />
        </div>
      </div>
    </section>
  );
}

export default BannerStrip;
