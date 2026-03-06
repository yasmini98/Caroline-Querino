import { Menu, Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Areas from "../pages/Areas";
import Contato from "../pages/Contato";
import Artigos from "../pages/Artigos";
import Midias from "../pages/Midias";
import OpiniaoDetalhe from "../pages/OpiniaoDetail";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Language, useI18n } from "./i18n";

type ThemeMode = "system" | "light" | "dark";

const THEME_STORAGE_KEY = "caroline-querino-theme";

function getInitialThemeMode(): ThemeMode {
  if (typeof window === "undefined") {
    return "system";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark" || storedTheme === "system") {
    return storedTheme;
  }

  return "system";
}

function getSystemPrefersDark(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

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
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => getInitialThemeMode());
  const [systemPrefersDark, setSystemPrefersDark] = useState(() => getSystemPrefersDark());
  const location = useLocation();
  const { language, setLanguage, t } = useI18n();
  const isContatoPage = location.pathname === "/contato";
  const isActive = (path: string) => location.pathname === path;
  const resolvedTheme = themeMode === "system" ? (systemPrefersDark ? "dark" : "light") : themeMode;

  const languageOptions: Array<{
    code: Language;
    flag: string;
    label: string;
  }> = [
    { code: "en", flag: "🇬🇧", label: t.common.languages.en },
    { code: "pt-BR", flag: "🇧🇷", label: t.common.languages["pt-BR"] },
    { code: "es", flag: "🇪🇸", label: t.common.languages.es },
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
              ? "border-[#67127c]/50 bg-[#67127c]/5 dark:border-purple-500 dark:bg-purple-900/30"
              : "border-transparent hover:border-gray-300 dark:hover:border-gray-600"
          }`}
        >
          {option.flag}
        </button>
      ))}
    </div>
  );

  const renderThemeControl = () => (
    <div className="flex items-center gap-1" aria-label="Theme selector">
      <button
        type="button"
        onClick={() => setThemeMode("system")}
        title="Sistema"
        aria-label="Sistema"
        className={`rounded p-1.5 border transition-colors ${
          themeMode === "system"
            ? "border-[#67127c]/50 bg-[#67127c]/5 text-[#67127c] dark:border-purple-500 dark:bg-purple-900/30 dark:text-purple-200"
            : "border-transparent text-gray-700 dark:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600"
        }`}
      >
        <Monitor className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setThemeMode("light")}
        title="Claro"
        aria-label="Claro"
        className={`rounded p-1.5 border transition-colors ${
          themeMode === "light"
            ? "border-[#67127c]/50 bg-[#67127c]/5 text-[#67127c] dark:border-purple-500 dark:bg-purple-900/30 dark:text-purple-200"
            : "border-transparent text-gray-700 dark:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600"
        }`}
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setThemeMode("dark")}
        title="Escuro"
        aria-label="Escuro"
        className={`rounded p-1.5 border transition-colors ${
          themeMode === "dark"
            ? "border-[#67127c]/50 bg-[#67127c]/5 text-[#67127c] dark:border-purple-500 dark:bg-purple-900/30 dark:text-purple-200"
            : "border-transparent text-gray-700 dark:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600"
        }`}
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setSystemPrefersDark(event.matches);
    };

    setSystemPrefersDark(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode);
  }, [themeMode]);

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark", resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/40 dark:bg-zinc-900/70 backdrop-blur-xs shadow-sm z-50 transition-colors">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <style>{`
            .nav-link { transition: color .15s; }
            .nav-link:hover { color: #12277C; }
            .dark .nav-link:hover { color: var(--color-blue-600, #2563eb); }
            @keyframes header-contato-rainbow-move {
              0% { background-position: 0% 50%; }
              100% { background-position: 200% 50%; }
            }
            .nav-contato {
              transition: color .2s ease, background-color .2s ease;
              border-radius: 9999px;
              padding: .32rem .95rem;
            }
            .nav-contato:hover {
              color: #ffffff;
              text-shadow: 0 1px 2px rgba(0,0,0,.65);
              background-color: rgba(0, 0, 0, 0.2);
              background-image: repeating-linear-gradient(
                90deg,
                rgba(139, 92, 246, 0.32) 0%,
                rgba(59, 130, 246, 0.30) 14%,
                rgba(16, 185, 129, 0.29) 30%,
                rgba(132, 204, 22, 0.29) 44%,
                rgba(250, 204, 21, 0.30) 58%,
                rgba(249, 115, 22, 0.31) 72%,
                rgba(239, 68, 68, 0.32) 86%,
                rgba(139, 92, 246, 0.32) 100%,
                rgba(59, 130, 246, 0.30) 114%
              );
              background-size: 200% 100%;
              animation: header-contato-rainbow-move 2.2s linear infinite;
            }
          `}</style>
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                to="/"
                className="inline-block hover:text-[#67127c] dark:hover:text-purple-700 transition-colors cursor-pointer leading-none"
              >
                <span className="block text-xl font-bold text-[#67127c] dark:text-purple-600 whitespace-nowrap">
                  {t.app.brandLine1}
                </span>
                <span className="block text-sm font-normal text-gray-400 whitespace-nowrap">
                  {t.app.brandLine2}
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className={`${isActive("/") ? "text-[#67127c] dark:text-purple-600" : "text-gray-700 dark:text-gray-200 nav-link"} font-semibold transition-colors transform hover:scale-105`}
              >
                {t.app.nav.home}
              </Link>
              <Link
                to="/areas"
                className={`${isActive("/areas") ? "text-[#67127c] dark:text-purple-600" : "text-gray-700 dark:text-gray-200 nav-link"} font-semibold transition-colors transform hover:scale-105`}
              >
                {t.app.nav.areas}
              </Link>
              <Link
                to="/midias"
                className={`${isActive("/midias") ? "text-[#67127c] dark:text-purple-600" : "text-gray-700 dark:text-gray-200 nav-link"} font-semibold transition-colors transform hover:scale-105`}
              >
                {t.app.nav.media}
              </Link>
              <Link
                to="/artigos"
                className={`${isActive("/artigos") ? "text-[#67127c] dark:text-purple-600" : "text-gray-700 dark:text-gray-200 nav-link"} font-semibold transition-colors transform hover:scale-105`}
              >
                {t.app.nav.articles}
              </Link>
              <Link
                to="/contato"
                className={`${isActive("/contato") ? "text-[#127C27] dark:text-green-600" : "text-gray-700 dark:text-gray-200"} nav-contato font-semibold transition-colors transform hover:scale-105`}
              >
                {t.app.nav.contact}
              </Link>
              {renderLanguageFlags()}
              {renderThemeControl()}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-800 dark:text-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className={`${isActive("/") ? "text-[#67127c] dark:text-purple-600" : "text-gray-700 dark:text-gray-200 nav-link"} font-semibold transition-colors transform hover:scale-105`}
                >
                  {t.app.nav.home}
                </Link>
                <Link
                  to="/areas"
                  className={`${isActive("/areas") ? "text-[#67127c] dark:text-purple-600" : "text-gray-700 dark:text-gray-200 nav-link"} font-semibold transition-colors transform hover:scale-105`}
                >
                  {t.app.nav.areas}
                </Link>
                <Link
                  to="/midias"
                  className={`${isActive("/midias") ? "text-[#67127c] dark:text-purple-600" : "text-gray-700 dark:text-gray-200 nav-link"} font-semibold transition-colors transform hover:scale-105`}
                >
                  {t.app.nav.media}
                </Link>
                <Link
                  to="/artigos"
                  className={`${isActive("/artigos") ? "text-[#67127c] dark:text-purple-600" : "text-gray-700 dark:text-gray-200 nav-link"} font-semibold transition-colors transform hover:scale-105`}
                >
                  {t.app.nav.articles}
                </Link>
                <Link
                  to="/contato"
                  className={`${isActive("/contato") ? "text-[#127C27] dark:text-green-600" : "text-gray-700 dark:text-gray-200"} nav-contato font-semibold transition-colors transform hover:scale-105`}
                >
                  {t.app.nav.contact}
                </Link>
                {renderLanguageFlags()}
                {renderThemeControl()}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Conteúdo das rotas */}
      <main className={`${isContatoPage ? "pt-16" : "pt-20"} flex-1 flex flex-col`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/areas"
              element={
                <PageWrapper>
                  <Areas />
                </PageWrapper>
              }
            />
            <Route
              path="/midias"
              element={
                <PageWrapper>
                  <Midias />
                </PageWrapper>
              }
            />
            <Route
              path="/contato"
              element={
                <PageWrapper>
                  <Contato />
                </PageWrapper>
              }
            />
            <Route
              path="/artigos"
              element={
                <PageWrapper>
                  <Artigos />
                </PageWrapper>
              }
            />
            <Route
              path="/artigos/opinioes/:id"
              element={
                <PageWrapper>
                  <OpiniaoDetalhe />
                </PageWrapper>
              }
            />
            {/* qualquer rota desconhecida também vai pra home */}
            <Route
              path="*"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
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
