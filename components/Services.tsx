import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="solucoes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-reusa-blue mb-4">Soluções Ambientais</h2>
            <div className="w-24 h-1 bg-reusa-green"></div>
          </div>
          <p className="text-gray-600 max-w-md text-right md:text-left">
            Da coleta à destinação final, oferecemos um ciclo completo para sua indústria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group flex flex-col items-start"
            >
              <div className="bg-blue-50 p-3 rounded-lg text-reusa-blue mb-4 group-hover:bg-reusa-green group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="font-bold text-lg text-gray-800 group-hover:text-reusa-green transition-colors">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-reusa-blue rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-reusa-green rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-green-400 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Não encontrou o que procura?</h3>
              <p className="text-blue-100">Desenvolvemos projetos personalizados para a necessidade da sua empresa.</p>
            </div>
            <a 
              href="#contato" 
              className="bg-white text-reusa-blue px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Fale com um especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;