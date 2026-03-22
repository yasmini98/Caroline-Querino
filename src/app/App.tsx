import { Menu, Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Areas from "../pages/Areas";
import Contato from "../pages/Contato";
import Artigos from "../pages/Artigos";
import Midias from "../pages/Midias";
import ArtigoCardDetail from "../pages/ArtigoCardDetail";
import OpiniaoDetalhe from "../pages/OpiniaoDetail";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminPortal from "../pages/admin/AdminPortal";
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

function setMetaTag(attribute: "name" | "property", key: string, value: string) {
  let tag = document.head.querySelector(`meta[${attribute}='${key}']`) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", value);
}

function setCanonicalTag(url: string) {
  let tag = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", url);
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

  const scrollToPageTop = (behavior: ScrollBehavior = "smooth") => {
    window.scrollTo({ top: 0, left: 0, behavior });
  };

  const handleHeaderNavigation = (path: string) => {
    if (location.pathname === path) {
      scrollToPageTop();
    }
  };

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
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    scrollToPageTop("auto");
  }, [location.pathname]);

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark", resolvedTheme === "dark");
  }, [resolvedTheme]);

  useEffect(() => {
    const path = location.pathname;

    const isArticleDetail = path.startsWith("/artigos/materias/");
    const isOpinionDetail = path.startsWith("/artigos/opinioes/");

    const pageTitle =
      path === "/"
        ? t.home.title
        : path === "/areas"
          ? t.app.nav.areas
          : path === "/midias"
            ? t.app.nav.media
            : path === "/contato"
              ? t.app.nav.contact
              : path === "/artigos"
                ? t.app.nav.articles
                : isArticleDetail || isOpinionDetail
                  ? `${t.app.nav.articles} - ${t.common.readMore.replace(" ->", "")}`
                  : t.home.title;

    const pageDescription =
      path === "/"
        ? t.home.description
        : path === "/areas"
          ? t.areas.servicesTitle
          : path === "/midias"
            ? t.midias.latestEventsTitle
            : path === "/contato"
              ? t.contact.description
              : path === "/artigos" || isArticleDetail || isOpinionDetail
                ? t.articles.title
                : t.home.description;

    const localeByLanguage: Record<Language, string> = {
      "pt-BR": "pt_BR",
      en: "en_US",
      es: "es_ES",
    };

    const fullTitle = `${pageTitle} | Caroline Querino`;
    const canonicalUrl = `${window.location.origin}${path}`;

    document.documentElement.lang = language;
    document.title = fullTitle;

    setMetaTag("name", "description", pageDescription);
    setMetaTag("name", "robots", "index, follow");
    setMetaTag("name", "twitter:card", "summary");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", pageDescription);

    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", pageDescription);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:locale", localeByLanguage[language]);

    setCanonicalTag(canonicalUrl);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Caroline Querino Consultoria ESG & Tech",
      url: window.location.origin,
      description: t.home.description,
      inLanguage: ["pt-BR", "en", "es"],
      knowsAbout: ["Genero", "Tecnologia", "ESG", "Diversidade", "Inclusao"],
    };

    let jsonLdScript = document.getElementById("seo-json-ld");
    if (!jsonLdScript) {
      jsonLdScript = document.createElement("script");
      jsonLdScript.id = "seo-json-ld";
      jsonLdScript.setAttribute("type", "application/ld+json");
      document.head.appendChild(jsonLdScript);
    }

    jsonLdScript.textContent = JSON.stringify(jsonLd);
  }, [language, location.pathname, t]);

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
                onClick={() => handleHeaderNavigation("/")}
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
                onClick={() => handleHeaderNavigation("/")}
                className={`${isActive("/") ? "text-[#67127c] dark:text-purple-600" : "text-gray-700 dark:text-gray-200 nav-link"} font-semibold transition-colors transform hover:scale-105`}
              >
                {t.app.nav.home}
              </Link>
              <Link
                to="/areas"
                onClick={() => handleHeaderNavigation("/areas")}
                className={`${isActive("/areas") ? "text-[#67127c] dark:text-purple-600" : "text-gray-700 dark:text-gray-200 nav-link"} font-semibold transition-colors transform hover:scale-105`}
              >
                {t.app.nav.areas}
              </Link>
              <Link
                to="/midias"
                onClick={() => handleHeaderNavigation("/midias")}
                className={`${isActive("/midias") ? "text-[#67127c] dark:text-purple-600" : "text-gray-700 dark:text-gray-200 nav-link"} font-semibold transition-colors transform hover:scale-105`}
              >
                {t.app.nav.media}
              </Link>
              <Link
                to="/artigos"
                onClick={() => handleHeaderNavigation("/artigos")}
                className={`${isActive("/artigos") ? "text-[#67127c] dark:text-purple-600" : "text-gray-700 dark:text-gray-200 nav-link"} font-semibold transition-colors transform hover:scale-105`}
              >
                {t.app.nav.articles}
              </Link>
              <Link
                to="/contato"
                onClick={() => handleHeaderNavigation("/contato")}
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
              title="Abrir menu"
              aria-label="Abrir menu"
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
                  onClick={() => handleHeaderNavigation("/")}
                  className={`${isActive("/") ? "text-[#67127c] dark:text-purple-600" : "text-gray-700 dark:text-gray-200 nav-link"} font-semibold transition-colors transform hover:scale-105`}
                >
                  {t.app.nav.home}
                </Link>
                <Link
                  to="/areas"
                  onClick={() => handleHeaderNavigation("/areas")}
                  className={`${isActive("/areas") ? "text-[#67127c] dark:text-purple-600" : "text-gray-700 dark:text-gray-200 nav-link"} font-semibold transition-colors transform hover:scale-105`}
                >
                  {t.app.nav.areas}
                </Link>
                <Link
                  to="/midias"
                  onClick={() => handleHeaderNavigation("/midias")}
                  className={`${isActive("/midias") ? "text-[#67127c] dark:text-purple-600" : "text-gray-700 dark:text-gray-200 nav-link"} font-semibold transition-colors transform hover:scale-105`}
                >
                  {t.app.nav.media}
                </Link>
                <Link
                  to="/artigos"
                  onClick={() => handleHeaderNavigation("/artigos")}
                  className={`${isActive("/artigos") ? "text-[#67127c] dark:text-purple-600" : "text-gray-700 dark:text-gray-200 nav-link"} font-semibold transition-colors transform hover:scale-105`}
                >
                  {t.app.nav.articles}
                </Link>
                <Link
                  to="/contato"
                  onClick={() => handleHeaderNavigation("/contato")}
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
              path="/artigos/materias/:id"
              element={
                <PageWrapper>
                  <ArtigoCardDetail />
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
            <Route
              path="/portal-cliente/login"
              element={
                <PageWrapper>
                  <AdminLogin />
                </PageWrapper>
              }
            />
            <Route
              path="/portal-cliente"
              element={
                <PageWrapper>
                  <AdminPortal />
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
            <p className="text-xs opacity-70">
              <Link to="/portal-cliente/login" className="hover:underline">
                Area da cliente
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
