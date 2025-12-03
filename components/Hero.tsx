import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative w-full h-[600px] flex items-center bg-gray-900">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop" 
          alt="Indústria sustentável" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-reusa-blue/90 to-reusa-green/70"></div>

      <div className="container mx-auto px-4 relative z-20 text-white">
        <div className="max-w-3xl">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-white/30">
            Gestão Ambiental Inteligente
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transformamos resíduos em valor: <span className="text-green-400">segurança, compliance e sustentabilidade</span> para sua empresa.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
            Soluções completas e certificadas para o tratamento, destinação e valorização de resíduos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contato" 
              className="bg-reusa-green hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2"
            >
              Solicite seu orçamento agora
              <ArrowRight size={20} />
            </a>
            <a 
              href="#solucoes" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/50 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
            >
              Conheça nossas soluções
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;