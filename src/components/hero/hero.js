import React, { useState, useEffect, useRef } from 'react';
import sorentoHero from '../../images/sorento-hero.jpg';

function Hero() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formHeight, setFormHeight] = useState(() => window.innerWidth < 640 ? 750 : 680);
  const formRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setFormHeight(window.innerWidth < 640 ? 750 : 680);
    };
    const handleMessage = (event) => {
      if (event.data === 'form-submitted') {
        setFormSubmitted(true);
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'Lead');
        }
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
      if (event.data?.type === 'sfmc-form-height' && event.data?.height) {
        setFormHeight(event.data.height);
      }
    };
    window.addEventListener('message', handleMessage);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero" className="bg-gradient-to-br from-sorento-dark via-sorento-navy to-sorento-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sorento-gold rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 py-10 md:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left - Content */}
          <div className="flex-1 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Imponência que{' '}
              <span className="text-sorento-gold">move você.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-lg mx-auto">
              Solicite agora uma cotação exclusiva do Kia Sorento com condições especiais da Gandini.
            </p>

            {/* Hero Image */}
            <div className="flex justify-center mb-6 lg:mb-0">
              <img
                src={sorentoHero}
                alt="Kia Sorento - Imponência que move você"
                className="w-72 md:w-80 lg:w-96 rounded-xl shadow-2xl ring-1 ring-white/10 object-cover"
              />
            </div>
          </div>

          {/* Right - Form */}
          <div
            ref={formRef}
            id="formulario"
            className="w-full max-w-md lg:max-w-lg flex-shrink-0 scroll-mt-6"
          >
            <div className="bg-white rounded-2xl shadow-2xl">
              <div className="bg-sorento-navy px-6 py-4">
                <h2 className="text-white text-xl font-bold text-center">
                  {formSubmitted ? 'Obrigado!' : 'Solicite sua cotação'}
                </h2>
                {!formSubmitted && (
                  <p className="text-blue-200 text-sm text-center mt-1">
                    Preencha os dados abaixo e entraremos em contato
                  </p>
                )}
              </div>

              <div className="p-1">
                {!formSubmitted ? (
                  <iframe
                    src="https://mchyb-7yzb-g12z8ttz9nhyzyck1.pub.sfmc-content.com/43on0kmy30o"
                    title="Formulário de cotação Kia Sorento"
                    width="100%"
                    height={formHeight}
                    style={{ border: 'none', display: 'block' }}
                    allow="clipboard-write"
                  />
                ) : (
                  <div className="p-8 text-center animate-fade-in-up">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Inscrição realizada!</h3>
                    <p className="text-gray-600">
                      Em breve um consultor Gandini entrará em contato com sua cotação exclusiva do Kia Sorento.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
