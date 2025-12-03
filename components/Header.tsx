import React, { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full relative z-50">
      {/* Top Bar - Contact Info */}
      <div className="bg-reusa-blue text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-gray-200 transition-colors">
              <Phone size={14} /> {CONTACT_INFO.phone}
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-gray-200 transition-colors">
              <Mail size={14} /> {CONTACT_INFO.email}
            </a>
          </div>
          <div className="text-gray-300 text-xs">
            Atendimento: {CONTACT_INFO.hours}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md sticky top-0">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo Placeholder - Replaced Text with styled text since image isn't directly importable via URL in this env without external hosting */}
          <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-reusa-green">
            <div className="bg-reusa-green text-white p-1 rounded-sm">R</div>
            <span className="text-reusa-green">REÚSA</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 font-medium text-reusa-graphite">
            <a href="#inicio" className="hover:text-reusa-green transition-colors">Início</a>
            <a href="#diferenciais" className="hover:text-reusa-green transition-colors">Por que a Reúsa?</a>
            <a href="#solucoes" className="hover:text-reusa-green transition-colors">Soluções</a>
            <a href="#contato" className="hover:text-reusa-green transition-colors">Contato</a>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <a 
              href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} 
              target="_blank" 
              rel="noreferrer"
              className="bg-reusa-green text-white px-5 py-2 rounded-full hover:bg-green-700 transition-colors font-semibold text-sm"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-reusa-graphite">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <nav className="flex flex-col p-4 gap-4 text-center font-medium text-reusa-graphite">
              <a href="#inicio" onClick={toggleMenu} className="hover:text-reusa-green py-2">Início</a>
              <a href="#diferenciais" onClick={toggleMenu} className="hover:text-reusa-green py-2">Por que a Reúsa?</a>
              <a href="#solucoes" onClick={toggleMenu} className="hover:text-reusa-green py-2">Soluções</a>
              <a href="#contato" onClick={toggleMenu} className="hover:text-reusa-green py-2">Contato</a>
              <a 
                href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                className="bg-reusa-green text-white px-5 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold"
              >
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;