import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Areas from "../pages/Areas";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Artigos from "../pages/Artigos";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Language, useI18n } from "./i18n";



function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex-1 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useI18n();
  const isContatoPage = location.pathname === '/contato';

  const languageOptions: Array<{ code: Language; flag: string; label: string }> = [
    { code: 'en', flag: '🇬🇧', label: t.common.languages.en },
    { code: 'pt-BR', flag: '🇧🇷', label: t.common.languages['pt-BR'] },
    { code: 'es', flag: '🇪🇸', label: t.common.languages.es },
  ];

  const renderLanguageFlags = () => (
    <div className="flex items-center gap-1" aria-label="Language selector">
      {languageOptions.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLanguage(option.code)}
          title={option.label}
          aria-label={option.label}
          className={`text-lg leading-none rounded px-1.5 py-1 border transition-colors ${
            language === option.code
              ? 'border-purple-500 bg-purple-50'
              : 'border-transparent hover:border-gray-300'
          }`}
        >
          {option.flag}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/40 backdrop-blur-xs shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <style>{`
            .nav-link { transition: color .15s; }
            .nav-link:hover { color: var(--color-blue-600, #2563eb) !important; }
            .nav-contato { transition: color .15s; }
            .nav-contato:hover { color: var(--color-green-600, #16a34a) !important; }
          `}</style>
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                to="/"
                className="inline-block hover:text-purple-700 transition-colors cursor-pointer leading-none"
              >
                <span className="block text-xl font-bold text-purple-600 whitespace-nowrap">{t.app.brandLine1}</span>
                <span className="block text-base font-medium text-gray-600 whitespace-nowrap">{t.app.brandLine2}</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 nav-link font-semibold transition-colors transform hover:scale-105">{t.app.nav.home}</Link>
              <Link to="/areas" className="text-gray-700 nav-link font-semibold transition-colors transform hover:scale-105">{t.app.nav.areas}</Link>
              <Link to="/sobre" className="text-gray-700 nav-link font-semibold transition-colors transform hover:scale-105">{t.app.nav.about}</Link>
              <Link to="/artigos" className="text-gray-700 nav-link font-semibold transition-colors transform hover:scale-105">{t.app.nav.articles}</Link>
              <Link to="/contato" className="text-gray-700 nav-contato font-semibold transition-colors transform hover:scale-105">{t.app.nav.contact}</Link>
              {renderLanguageFlags()}
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 nav-link font-semibold transition-colors transform hover:scale-105">{t.app.nav.home}</Link>
                <Link to="/areas" className="text-gray-700 nav-link font-semibold transition-colors transform hover:scale-105">{t.app.nav.areas}</Link>
                <Link to="/sobre" className="text-gray-700 nav-link font-semibold transition-colors transform hover:scale-105">{t.app.nav.about}</Link>
                <Link to="/artigos" className="text-gray-700 nav-link font-semibold transition-colors transform hover:scale-105">{t.app.nav.articles}</Link>
                <Link to="/contato" className="text-gray-700 nav-contato font-semibold transition-colors transform hover:scale-105">{t.app.nav.contact}</Link>
                {renderLanguageFlags()}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Conteúdo das rotas */}
      <main className={`${isContatoPage ? 'pt-16' : 'pt-20'} flex-1 flex flex-col`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/areas" element={<PageWrapper><Areas /></PageWrapper>} />
            <Route path="/sobre" element={<PageWrapper><Sobre /></PageWrapper>} />
            <Route path="/contato" element={<PageWrapper><Contato /></PageWrapper>} />
            <Route path="/artigos" element={<PageWrapper><Artigos /></PageWrapper>} />
            {/* qualquer rota desconhecida também vai pra home */}
            <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>




      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            <p>{t.app.footer.rights}</p>
            <p>
              {t.app.footer.developedBy}{" "}
              <a
                href="https://www.linkedin.com/in/yasminioliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-600 transition-colors"
              >
                Yasmini Oliveira
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}