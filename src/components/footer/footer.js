import React from 'react';
import logoEditoraGlobo from '../../images/logo-editora-globo.png';
import logoGlab from '../../images/logo-glab.png';
import { ReactComponent as LogoKia } from '../../images/logo-kia.svg';

function Footer() {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoEditoraGlobo} alt="Editora Globo" className="h-5 md:h-6 w-auto" loading="lazy" />
            <div className="w-px h-5 bg-gray-300" aria-hidden="true"></div>
            <img src={logoGlab} alt="G.lab" className="h-5 md:h-6 w-auto" loading="lazy" />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToForm}
              className="text-sm text-sorento-navy font-semibold hover:underline cursor-pointer"
            >
              Solicitar cotação
            </button>
            <div className="w-px h-4 bg-gray-300" aria-hidden="true"></div>
            <LogoKia className="h-4 md:h-5 text-sorento-graphite" aria-label="Kia" />
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-4">
          Conteúdo oferecido por Kia. Produzido pelo G.lab para Editora Globo.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
