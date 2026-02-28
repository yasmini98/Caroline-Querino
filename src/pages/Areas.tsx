import { useState } from 'react';
import { Users, Cpu, Leaf, BookOpen, ChevronDown } from 'lucide-react';
import { useI18n } from '../app/i18n';

export default function Areas() {
  const { t } = useI18n();
  const [openTopic, setOpenTopic] = useState<'genero' | 'tecnologia' | 'ambiental' | null>(null);

  const casesByTopic = {
    genero: {
      label: t.areas.topics.genero.label,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      badgeClass: 'bg-purple-100 text-purple-700',
      hoverHeader: 'hover:bg-purple-50',
      cases: t.areas.topics.genero.cases,
    },
    tecnologia: {
      label: t.areas.topics.tecnologia.label,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      badgeClass: 'bg-blue-100 text-blue-700',
      hoverHeader: 'hover:bg-blue-50',
      cases: t.areas.topics.tecnologia.cases,
    },
    ambiental: {
      label: t.areas.topics.ambiental.label,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      badgeClass: 'bg-green-100 text-green-700',
      hoverHeader: 'hover:bg-green-50',
      cases: t.areas.topics.ambiental.cases,
    },
  } as const;

  return (
    <div className="py-20 bg-white space-y-20">
      <section id="areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t.areas.title}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-purple-900 mb-4">{t.areas.cards.gender.title}</h3>
              <p className="text-gray-700 mb-4">{t.areas.cards.gender.description}</p>
              <ul className="space-y-2 text-gray-600">
                {t.areas.cards.gender.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">{t.areas.cards.technology.title}</h3>
              <p className="text-gray-700 mb-4">{t.areas.cards.technology.description}</p>
              <ul className="space-y-2 text-gray-600">
                {t.areas.cards.technology.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">{t.areas.cards.environmental.title}</h3>
              <p className="text-gray-700 mb-4">{t.areas.cards.environmental.description}</p>
              <ul className="space-y-2 text-gray-600">
                {t.areas.cards.environmental.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t.areas.casesTitle}</h2>

          <div className="space-y-6">
            {(Object.keys(casesByTopic) as Array<'genero' | 'tecnologia' | 'ambiental'>).map((topicKey) => {
              const topic = casesByTopic[topicKey];
              const isOpen = openTopic === topicKey;
              const standardCase = topic.cases[0];
              const remainingCases = topic.cases.slice(1);

              return (
                <div key={topicKey} className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenTopic(isOpen ? null : topicKey)}
                    className={`w-full p-6 text-left transition-colors ${topic.hoverHeader}`}
                  >
                    <div className="w-full bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className={`w-12 h-12 ${topic.iconBg} rounded-lg flex items-center justify-center`}>
                          <BookOpen className={`w-6 h-6 ${topic.iconColor}`} />
                        </div>
                        <div className="flex items-center gap-2">
                          {!isOpen && <span className={`text-xs font-medium ${topic.iconColor}`}>{t.common.seeMore}</span>}
                          <ChevronDown className={`w-5 h-5 ${topic.iconColor} transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </div>

                      <p className="text-sm font-medium text-gray-500 mb-2">{standardCase.subtitle}</p>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{standardCase.title}</h3>
                      <p className="text-gray-600 mb-4">{standardCase.description}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${topic.badgeClass}`}>{topic.label}</span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 border-t border-gray-100 space-y-4">
                      {remainingCases.map((caseItem) => (
                        <div key={caseItem.title} className="w-full bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                          <div className={`w-12 h-12 ${topic.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                            <BookOpen className={`w-6 h-6 ${topic.iconColor}`} />
                          </div>
                          <p className="text-sm font-medium text-gray-500 mb-2">{caseItem.subtitle}</p>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{caseItem.title}</h3>
                          <p className="text-gray-600 mb-4">{caseItem.description}</p>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm ${topic.badgeClass}`}>{topic.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
