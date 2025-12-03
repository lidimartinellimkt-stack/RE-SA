import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-reusa-graphite text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-white mb-4">
                <div className="bg-white text-reusa-graphite p-1 rounded-sm">R</div>
                <span>REÚSA</span>
              </div>
            <p className="text-sm leading-relaxed">
              Gestão ambiental inteligente, segura e sustentável para o seu negócio desde 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-reusa-green transition-colors">Início</a></li>
              <li><a href="#diferenciais" className="hover:text-reusa-green transition-colors">Por que a Reúsa?</a></li>
              <li><a href="#solucoes" className="hover:text-reusa-green transition-colors">Soluções</a></li>
              <li><a href="#contato" className="hover:text-reusa-green transition-colors">Solicitar Orçamento</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.whatsapp}</li>
              <li>{CONTACT_INFO.email}</li>
            </ul>
          </div>

          {/* Address */}
          <div>
             <h4 className="text-white font-bold mb-4">Localização</h4>
             <p className="text-sm leading-relaxed">
               {CONTACT_INFO.address}
             </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {currentYear} REÚSA Gestão Ambiental. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Política de Privacidade</span>
            <span className="hover:text-white cursor-pointer">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;