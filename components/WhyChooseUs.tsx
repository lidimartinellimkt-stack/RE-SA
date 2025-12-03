import React from 'react';
import { ShieldCheck, Award, TrendingUp, Users } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Compliance Total",
      description: "Garantimos segurança jurídica com documentação completa e rastreabilidade dos resíduos."
    },
    {
      icon: Award,
      title: "Certificações",
      description: "Operador homologado com todas as licenças ambientais exigidas pelos órgãos reguladores."
    },
    {
      icon: TrendingUp,
      title: "Valorização de Resíduos",
      description: "Transformamos passivos ambientais em ativos energéticos ou matéria-prima."
    },
    {
      icon: Users,
      title: "Atendimento Técnico",
      description: "Equipe especializada pronta para diagnosticar e resolver demandas complexas."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-reusa-blue mb-4">Por que escolher a Reúsa?</h2>
          <div className="w-24 h-1 bg-reusa-green mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Combinamos experiência técnica com responsabilidade ambiental para oferecer o melhor serviço de gestão de resíduos do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-reusa-lightGraphite p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border-b-4 border-reusa-green shadow-sm">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 text-reusa-green shadow-sm mx-auto md:mx-0">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-reusa-graphite mb-3 text-center md:text-left">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center md:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;