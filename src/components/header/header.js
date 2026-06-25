import React from 'react';
import logoEditoraGlobo from '../../images/logo-editora-globo.png';
import logoValor from '../../images/logo-valor.svg';
import { ReactComponent as LogoKia } from '../../images/logo-kia.svg';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav aria-label="Navegação principal" className="max-w-content mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <img src={logoEditoraGlobo} alt="Editora Globo" className="h-7 md:h-9 w-auto" />
          <div className="w-px h-6 bg-gray-300" aria-hidden="true"></div>
          <img src={logoValor} alt="Valor Econômico" className="h-7 md:h-9 w-auto" />
        </div>
        <LogoKia className="h-6 md:h-8 text-sorento-graphite" aria-label="Kia" />
      </nav>
    </header>
  );
}

export default Header;
