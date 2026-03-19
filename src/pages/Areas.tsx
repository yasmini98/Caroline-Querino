import { useEffect, useRef, useState } from "react";
import { Users, Cpu, Leaf, BookOpen, ChevronDown } from "lucide-react";
import { useI18n } from "../app/i18n";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const itaipuParquetecLogo = "/src/assets/images/itaipu-parquetec.png";
const oxfamLogo = "/src/assets/images/oxfam-logo.png";

export default function Areas() {
  const { t } = useI18n();
  type TopicKey = "genero" | "tecnologia" | "ambiental";
  const topicTransitionDuration = 0.22;
  const [openTopic, setOpenTopic] = useState<TopicKey | null>(null);
  const [servicesTitleMousePosition, setServicesTitleMousePosition] = useState({ x: 50 });
  const servicesTitleRef = useRef<HTMLHeadingElement | null>(null);
  const topicRefs = useRef<Record<TopicKey, HTMLDivElement | null>>({
    genero: null,
    tecnologia: null,
    ambiental: null,
  });
  const scrollCompensationFrameRef = useRef<number | null>(null);
  const scrollIntoViewTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (scrollCompensationFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollCompensationFrameRef.current);
      }

      if (scrollIntoViewTimeoutRef.current !== null) {
        window.clearTimeout(scrollIntoViewTimeoutRef.current);
      }
    };
  }, []);

  const handleServicesTitleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!servicesTitleRef.current) return;

    const rect = servicesTitleRef.current.getBoundingClientRect();
    const x = (e.nativeEvent as MouseEvent).clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

    setServicesTitleMousePosition({ x: percentage });
  };

  const getColorFromPosition = (percentage: number) => {
    const p = percentage;

    const ease = (t: number) => t * t * (3 - 2 * t);

    const interp = (start: [number, number, number], end: [number, number, number], t: number) => {
      const easedT = ease(t);
      const r = Math.round(start[0] + (end[0] - start[0]) * easedT);
      const g = Math.round(start[1] + (end[1] - start[1]) * easedT);
      const b = Math.round(start[2] + (end[2] - start[2]) * easedT);
      return `rgb(${r}, ${g}, ${b})`;
    };

    const isDarkTheme =
      typeof document !== "undefined" && document.documentElement.classList.contains("dark");

    const violet: [number, number, number] = isDarkTheme ? [147, 51, 234] : [103, 18, 124];
    const blue: [number, number, number] = isDarkTheme ? [37, 99, 235] : [18, 39, 124];
    const green: [number, number, number] = isDarkTheme ? [22, 163, 74] : [18, 124, 39];

    if (p < 20) {
      return interp(green, blue, p / 20);
    }
    if (p < 40) {
      return interp(blue, violet, (p - 20) / 20);
    }
    if (p < 60) {
      return `rgb(${violet[0]}, ${violet[1]}, ${violet[2]})`;
    }
    if (p < 80) {
      return interp(violet, blue, (p - 60) / 20);
    }

    return interp(blue, green, (p - 80) / 20);
  };

  const scrollTopicIntoView = (topicKey: TopicKey) => {
    if (scrollIntoViewTimeoutRef.current !== null) {
      window.clearTimeout(scrollIntoViewTimeoutRef.current);
    }

    scrollIntoViewTimeoutRef.current = window.setTimeout(() => {
      topicRefs.current[topicKey]?.scrollIntoView({ behavior: "smooth", block: "start" });
      scrollIntoViewTimeoutRef.current = null;
    }, 80);
  };

  const keepTopicPositionStable = (topicKey: TopicKey) => {
    const target = topicRefs.current[topicKey];

    if (!target) {
      return;
    }

    const initialTop = target.getBoundingClientRect().top;
    const startTime = window.performance.now();
    const duration = 260;

    if (scrollCompensationFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollCompensationFrameRef.current);
    }

    const compensateScroll = (currentTime: number) => {
      const currentTarget = topicRefs.current[topicKey];

      if (!currentTarget) {
        scrollCompensationFrameRef.current = null;
        return;
      }

      const currentTop = currentTarget.getBoundingClientRect().top;
      const offset = currentTop - initialTop;

      if (offset !== 0) {
        window.scrollBy({ top: offset });
      }

      if (currentTime - startTime < duration) {
        scrollCompensationFrameRef.current = window.requestAnimationFrame(compensateScroll);
        return;
      }

      scrollCompensationFrameRef.current = null;
    };

    scrollCompensationFrameRef.current = window.requestAnimationFrame(compensateScroll);
  };

  const openTopicPanel = (topicKey: TopicKey, options?: { scrollIntoView?: boolean }) => {
    if (openTopic !== null && openTopic !== topicKey) {
      keepTopicPositionStable(topicKey);
    }

    setOpenTopic(topicKey);

    if (options?.scrollIntoView) {
      scrollTopicIntoView(topicKey);
    }
  };

  const handleAreaCardClick = (topicKey: TopicKey) => {
    openTopicPanel(topicKey, { scrollIntoView: true });
  };

  const handleTopicToggle = (topicKey: TopicKey) => {
    const isOpen = openTopic === topicKey;

    if (isOpen) {
      setOpenTopic(null);
      return;
    }

    openTopicPanel(topicKey);
  };

  const casesByTopic = {
    genero: {
      label: t.areas.topics.genero.label,
      iconColor: "text-[#67127c] dark:text-purple-600",
      iconBg: "bg-[#67127c]/10 dark:bg-purple-900/40",
      badgeClass: "bg-[#67127c]/10 text-[#67127c] dark:bg-purple-900/40 dark:text-purple-200",
      hoverHeader: "hover:bg-[#67127c]/5 dark:hover:bg-purple-950/40",
      cases: t.areas.topics.genero.cases,
    },
    tecnologia: {
      label: t.areas.topics.tecnologia.label,
      iconColor: "text-[#12277C] dark:text-blue-600",
      iconBg: "bg-[#12277C]/10 dark:bg-blue-900/40",
      badgeClass: "bg-[#12277C]/10 text-[#12277C] dark:bg-blue-900/40 dark:text-blue-200",
      hoverHeader: "hover:bg-[#12277C]/5 dark:hover:bg-blue-950/40",
      cases: t.areas.topics.tecnologia.cases,
    },
    ambiental: {
      label: t.areas.topics.ambiental.label,
      iconColor: "text-[#127C27] dark:text-green-600",
      iconBg: "bg-[#127C27]/10 dark:bg-green-900/40",
      badgeClass: "bg-[#127C27]/10 text-[#127C27] dark:bg-green-900/40 dark:text-green-200",
      hoverHeader: "hover:bg-[#127C27]/5 dark:hover:bg-green-950/40",
      cases: t.areas.topics.ambiental.cases,
    },
  } as const;

  return (
    <div className="py-20 bg-white dark:bg-zinc-950 text-gray-900 dark:text-gray-100 space-y-20 transition-colors">
      <section id="servicos-oferecidos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            ref={servicesTitleRef}
            onMouseMove={handleServicesTitleMouseMove}
            onMouseLeave={() => setServicesTitleMousePosition({ x: 50 })}
            className="text-3xl md:text-4xl font-bold text-center mb-8 transition-colors duration-300 ease-out"
            style={{ color: getColorFromPosition(servicesTitleMousePosition.x) }}
          >
            {t.areas.servicesTitle}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.areas.servicesExamples.map((service) => (
              <div
                key={service}
                className="group rounded-2xl border border-[#67127c]/15 dark:border-purple-800/60 bg-gradient-to-br from-white to-[#67127c]/[0.04] dark:from-zinc-900 dark:to-purple-950/30 px-5 py-4 text-gray-700 dark:text-gray-200 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#67127c] dark:bg-purple-400 transition-transform duration-300 group-hover:scale-125" />
                  <span className="text-base font-medium leading-relaxed">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            {t.areas.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <button
              type="button"
              onClick={() => handleAreaCardClick("genero")}
              className="bg-[#67127c]/5 dark:bg-purple-950/40 border-2 border-[#67127c]/20 dark:border-purple-800 rounded-lg p-8 hover:shadow-lg transition-shadow text-left cursor-pointer"
            >
              <div className="w-16 h-16 bg-[#67127c] dark:bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#67127c] dark:text-purple-200 mb-4">
                {t.areas.cards.gender.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {t.areas.cards.gender.description}
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {t.areas.cards.gender.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </button>

            <button
              type="button"
              onClick={() => handleAreaCardClick("tecnologia")}
              className="bg-[#12277C]/5 dark:bg-blue-950/40 border-2 border-[#12277C]/20 dark:border-blue-800 rounded-lg p-8 hover:shadow-lg transition-shadow text-left cursor-pointer"
            >
              <div className="w-16 h-16 bg-[#12277C] dark:bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#12277C] dark:text-blue-200 mb-4">
                {t.areas.cards.technology.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {t.areas.cards.technology.description}
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {t.areas.cards.technology.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </button>

            <button
              type="button"
              onClick={() => handleAreaCardClick("ambiental")}
              className="bg-[#127C27]/5 dark:bg-green-950/40 border-2 border-[#127C27]/20 dark:border-green-800 rounded-lg p-8 hover:shadow-lg transition-shadow text-left cursor-pointer"
            >
              <div className="w-16 h-16 bg-[#127C27] dark:bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#127C27] dark:text-green-200 mb-4">
                {t.areas.cards.environmental.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {t.areas.cards.environmental.description}
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {t.areas.cards.environmental.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </button>
          </div>
        </div>
      </section>

      <section id="projetos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            {t.areas.casesTitle}
          </h2>

          <div className="space-y-6">
            {(Object.keys(casesByTopic) as Array<TopicKey>).map((topicKey) => {
              const topic = casesByTopic[topicKey];
              const isOpen = openTopic === topicKey;
              const standardCase = topic.cases[0];
              const remainingCases = topic.cases.slice(1);

              return (
                <div
                  id={`case-${topicKey}`}
                  key={topicKey}
                  ref={(element) => {
                    topicRefs.current[topicKey] = element;
                  }}
                  className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => handleTopicToggle(topicKey)}
                    className={`w-full p-6 text-left transition-colors cursor-pointer ${topic.hoverHeader}`}
                  >
                    <div className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div
                          className={`w-12 h-12 ${topic.iconBg} rounded-lg flex items-center justify-center`}
                        >
                          <BookOpen className={`w-6 h-6 ${topic.iconColor}`} />
                        </div>
                        <div className="flex items-center gap-2">
                          {!isOpen && (
                            <span className={`text-xs font-medium ${topic.iconColor}`}>
                              {t.common.seeMore}
                            </span>
                          )}
                          <ChevronDown
                            className={`w-5 h-5 ${topic.iconColor} transition-transform ${isOpen ? "rotate-180" : ""}`}
                          />
                        </div>
                      </div>

                      {standardCase.subtitle && (
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                          {standardCase.subtitle}
                        </p>
                      )}
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        {standardCase.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 whitespace-pre-line text-justify">
                        {standardCase.description}
                      </p>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm ${topic.badgeClass}`}
                      >
                        {topic.label}
                      </span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: topicTransitionDuration, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 border-t border-gray-100 dark:border-gray-700 space-y-4">
                          {remainingCases.map((caseItem) => (
                            <div
                              key={caseItem.title}
                              className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
                            >
                              <div
                                className={`w-12 h-12 ${topic.iconBg} rounded-lg flex items-center justify-center mb-4`}
                              >
                                <BookOpen className={`w-6 h-6 ${topic.iconColor}`} />
                              </div>
                              <div className="flex items-start justify-between gap-3 mb-3">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                  {caseItem.title}
                                </h3>
                                {caseItem.subtitle && (
                                  <span className="text-xs font-medium text-gray-400 dark:text-gray-500 whitespace-nowrap">
                                    {caseItem.subtitle}
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-600 dark:text-gray-300 mb-4 whitespace-pre-line text-justify">
                                {caseItem.description}
                              </p>
                              <span
                                className={`inline-block px-3 py-1 rounded-full text-sm ${topic.badgeClass}`}
                              >
                                {topic.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pesquisas-desenvolvimento">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            {t.areas.researchTitle}
          </h2>
          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
              {t.areas.researchIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.areas.researchItems.map((item) => (
              <div
                key={item.title}
                className="w-full bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gray-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.subtitle}</p>
                )}
                <p className="text-gray-600 dark:text-gray-300 text-justify">{item.description}</p>
                {item.partnerText && (
                  <p className="text-gray-700 dark:text-gray-300 mt-4 mb-3">{item.partnerText}</p>
                )}
                {(item.showLogoPlaceholder || item.logo) && (
                  <div className="w-full h-24 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-zinc-800 p-2 flex items-center justify-center">
                    {item.logo === "oxfam" ? (
                      <img
                        src={oxfamLogo}
                        alt="Logo Oxfam"
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : item.logo === "itaipu" ? (
                      <img
                        src={itaipuParquetecLogo}
                        alt="Logo Itaipu Parquetec"
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <span className="text-sm text-gray-500 dark:text-gray-300">Logo</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{t.areas.contactLead}</p>
            <Link
              to="/contato"
              className="inline-block bg-[#67127c] dark:bg-purple-600 text-white px-10 py-4 text-lg font-semibold rounded-lg hover:bg-[#67127c]/90 dark:hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {t.areas.contactCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
