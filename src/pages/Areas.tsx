import { useState } from 'react';
import { Users, Cpu, Leaf, BookOpen, ChevronDown } from 'lucide-react';

export default function Areas() {
  const [openTopic, setOpenTopic] = useState<'genero' | 'tecnologia' | 'ambiental' | null>(null);

  const casesByTopic = {
    genero: {
      label: 'Gênero',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      badgeClass: 'bg-purple-100 text-purple-700',
      hoverHeader: 'hover:bg-purple-50',
      cases: [
        {
          subtitle: 'Versão standard',
          title: 'Pesquisa em Equidade de Gênero',
          description: 'Estudo sobre representatividade feminina em cargos de liderança no setor tecnológico.',
        },
        {
          subtitle: 'Case 2',
          title: 'Programa de Liderança Feminina',
          description: 'Desenvolvimento de trilhas de capacitação e mentoria para ampliação da liderança de mulheres.',
        },
        {
          subtitle: 'Case 3',
          title: 'Diagnóstico de Inclusão Organizacional',
          description: 'Mapeamento de indicadores de diversidade e proposta de plano de ação para inclusão.',
        },
      ],
    },
    tecnologia: {
      label: 'Tecnologia',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      badgeClass: 'bg-blue-100 text-blue-700',
      hoverHeader: 'hover:bg-blue-50',
      cases: [
        {
          subtitle: 'Versão standard',
          title: 'IA e Viés Algorítmico',
          description: 'Consultoria sobre ética em inteligência artificial e impactos sociais de algoritmos.',
        },
        {
          subtitle: 'Case 2',
          title: 'Inclusão Digital Estratégica',
          description: 'Estruturação de iniciativas de acesso, formação e permanência em ambientes digitais.',
        },
        {
          subtitle: 'Case 3',
          title: 'Governança de Dados Responsável',
          description: 'Implantação de práticas de governança para uso ético e transparente de dados.',
        },
      ],
    },
    ambiental: {
      label: 'Ambiental',
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      badgeClass: 'bg-green-100 text-green-700',
      hoverHeader: 'hover:bg-green-50',
      cases: [
        {
          subtitle: 'Versão standard',
          title: 'Estratégias ESG Integradas',
          description: 'Implementação de políticas ESG com perspectiva de gênero e justiça climática.',
        },
        {
          subtitle: 'Case 2',
          title: 'Plano de Sustentabilidade Corporativa',
          description: 'Definição de metas ambientais e indicadores de acompanhamento para longo prazo.',
        },
        {
          subtitle: 'Case 3',
          title: 'Projeto de Justiça Climática',
          description: 'Iniciativas para mitigação de impactos climáticos em comunidades mais vulneráveis.',
        },
      ],
    },
  };

  return (
    <div className="py-20 bg-white space-y-20">
      <section id="areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Áreas de Atuação
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-purple-900 mb-4">Gênero</h3>
              <p className="text-gray-700 mb-4">
                Consultoria especializada em equidade de gênero, diversidade e inclusão nas organizações.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Diagnóstico de equidade de gênero</li>
                <li>• Políticas de diversidade e inclusão</li>
                <li>• Programas de liderança feminina</li>
                <li>• Pesquisa em gênero e trabalho</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Tecnologia</h3>
              <p className="text-gray-700 mb-4">
                Pesquisa e consultoria na intersecção entre tecnologia, sociedade e inclusão digital.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Diversidade em tecnologia</li>
                <li>• Inclusão digital e acessibilidade</li>
                <li>• Ética em IA e algoritmos</li>
                <li>• Mulheres em STEM</li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Ambiental & ESG</h3>
              <p className="text-gray-700 mb-4">
                Estratégias de sustentabilidade ambiental e implementação de práticas ESG.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Diagnóstico ESG</li>
                <li>• Estratégias de sustentabilidade</li>
                <li>• Relatórios e compliance</li>
                <li>• Justiça climática e gênero</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Cases e Projetos
          </h2>

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
                          {!isOpen && <span className={`text-xs font-medium ${topic.iconColor}`}>Ver mais</span>}
                          <ChevronDown className={`w-5 h-5 ${topic.iconColor} transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </div>

                      <p className="text-sm font-medium text-gray-500 mb-2">{standardCase.subtitle}</p>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{standardCase.title}</h3>
                      <p className="text-gray-600 mb-4">{standardCase.description}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${topic.badgeClass}`}>
                        {topic.label}
                      </span>
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
                          <span className={`inline-block px-3 py-1 rounded-full text-sm ${topic.badgeClass}`}>
                            {topic.label}
                          </span>
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