import React from 'react';

const regions = [
  {
    name: 'Sudeste',
    cities: ['São Paulo (todo o estado)', 'Rio de Janeiro, RJ', 'Nova Iguaçu, RJ', 'Belo Horizonte, MG', 'Vitória, ES'],
  },
  {
    name: 'Sul',
    cities: ['Santa Catarina (todo o estado)', 'Curitiba, PR', 'Londrina, PR', 'Cascavel, PR', 'Foz do Iguaçu, PR', 'Porto Alegre, RS', 'Novo Hamburgo, RS', 'Lajeado, RS', 'Passo Fundo, RS'],
  },
  {
    name: 'Nordeste',
    cities: ['Salvador, BA', 'Recife, PE', 'Fortaleza, CE', 'Natal, RN', 'Aracaju, SE', 'São Luís, MA', 'Teresina, PI', 'Maceió, AL'],
  },
  {
    name: 'Centro-Oeste e Norte',
    cities: ['Brasília, DF', 'Goiânia, GO', 'Cuiabá, MT', 'Palmas, TO', 'Manaus, AM', 'Belém, PA', 'Porto Velho, RO'],
  },
];

function Coverage() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-sorento-graphite mb-2">
          Cobertura nacional
        </h2>
        <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
          Presente em mais de 50 cidades. Encontre a concessionária mais perto de você.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region) => (
            <div key={region.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-sorento-navy font-bold text-lg mb-3">{region.name}</h3>
              <ul className="space-y-1.5">
                {region.cities.map((city) => (
                  <li key={city} className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-sorento-gold rounded-full flex-shrink-0"></span>
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Coverage;
