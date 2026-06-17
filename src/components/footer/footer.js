import React from 'react';
import logoEditoraGlobo from '../../images/logo-editora-globo.png';
import logoGlab from '../../images/logo-glab.png';

function Footer() {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoEditoraGlobo} alt="Editora Globo" className="h-5 md:h-6" />
            <div className="w-px h-5 bg-gray-300"></div>
            <img src={logoGlab} alt="G.lab" className="h-5 md:h-6" />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToForm}
              className="text-sm text-sorento-navy font-semibold hover:underline cursor-pointer"
            >
              Solicitar cotação
            </button>
            <div className="w-px h-4 bg-gray-300"></div>
            <span className="font-semibold text-sorento-graphite text-sm">KIA</span>
            <div className="w-px h-4 bg-gray-300"></div>
            <span className="font-semibold text-sorento-navy text-sm">GANDINI</span>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">
          Conteúdo oferecido por Kia / Gandini. Produzido pelo G.lab para Editora Globo.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
