import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Sectors: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-reusa-green/20 rounded-tl-3xl z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-reusa-blue/20 rounded-br-3xl z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
              alt="Engenheiro ambiental em campo" 
              className="rounded-xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
            />
            
            {/* Overlay Box */}
            <div className="absolute bottom-10 left-10 z-20 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
              <p className="font-bold text-reusa-blue text-lg mb-1">Compromisso</p>
              <p className="text-gray-600 text-sm">
                Atuamos com ética e transparência para garantir o futuro sustentável do seu negócio.
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-reusa-green font-bold tracking-wider text-sm uppercase">Segurança e Certificações</span>
            <h2 className="text-3xl md:text-4xl font-bold text-reusa-graphite mt-2 mb-6">
              Excelência no atendimento a diversos setores
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              A Reúsa possui expertise para atender indústrias de pequeno, médio e grande porte, adaptando nossas soluções à realidade de cada operação.
            </p>

            <ul className="space-y-4">
              {[
                "Indústrias Metalúrgicas",
                "Indústrias Químicas",
                "Setor Automotivo",
                "Agroindústria",
                "Hospitais e Laboratórios",
                "Comércio e Varejo"
              ].map((sector, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-reusa-green shrink-0" size={24} />
                  <span className="font-medium text-gray-700 text-lg">{sector}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 bg-gray-50 border-l-4 border-reusa-blue rounded-r-lg">
              <p className="text-gray-700 italic">
                "Nosso foco é mitigar riscos ambientais e gerar valor compartilhado para nossos clientes e a sociedade."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;