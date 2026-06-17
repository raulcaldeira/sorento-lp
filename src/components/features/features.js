import React from 'react';

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '7 lugares de verdade',
    description: 'Espaço interno generoso para até 7 passageiros com conforto real em todas as fileiras.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Motor Turbo Diesel',
    description: 'Motor 2.2 turbodiesel com 202 cv de potência e torque impressionante para qualquer terreno.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Segurança avançada',
    description: 'Câmera 360°, ponto cego, assistente de faixa e piloto automático adaptativo de série.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Condições exclusivas',
    description: 'Condições exclusivas Gandini com as melhores taxas de financiamento do mercado.',
  },
];

function Features() {
  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-sorento-graphite mb-2">
          Por que escolher o Kia Sorento?
        </h2>
        <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto">
          O SUV premium de 7 lugares que redefine o que é dirigir com sofisticação.
        </p>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 py-6 border-y border-gray-200">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold text-sorento-navy">202</p>
            <p className="text-sm text-gray-500 mt-1">cavalos de<br />potência</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold text-sorento-navy">7</p>
            <p className="text-sm text-gray-500 mt-1">lugares com<br />conforto real</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold text-sorento-navy">2025</p>
            <p className="text-sm text-gray-500 mt-1">modelo<br />mais recente</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-7 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-sorento-navy/10 text-sorento-navy rounded-lg flex items-center justify-center mb-4 group-hover:bg-sorento-navy group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-sorento-graphite mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
