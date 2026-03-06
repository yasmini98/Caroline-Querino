import { Link, useParams } from "react-router-dom";
import { useI18n } from "../app/i18n";
import { getArtigoCards } from "./artigosCardsData";

export default function ArtigoCardDetail() {
  const { id } = useParams();
  const { language } = useI18n();
  const parsedId = Number(id);
  const cards = getArtigoCards(language);
  const card = cards.find((item) => item.id === parsedId);

  const labels = {
    "pt-BR": {
      notFound: "Artigo não encontrado",
      back: "Voltar para conteúdos",
      full: "Site do artigo completo:",
    },
    en: {
      notFound: "Article not found",
      back: "Back to contents",
      full: "Website for the full article:",
    },
    es: {
      notFound: "Artículo no encontrado",
      back: "Volver a contenidos",
      full: "Sitio del artículo completo:",
    },
  }[language];

  if (!card) {
    return (
      <section className="py-20 text-gray-900 dark:text-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">{labels.notFound}</h1>
          <Link to="/artigos" className="text-[#67127c] dark:text-purple-300 hover:underline">
            {labels.back}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">{card.title}</h1>

        <article className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-10 text-justify">
          {card.body.map((paragraph, index) => (
            <p key={`${card.id}-${index}`}>{paragraph}</p>
          ))}
        </article>

        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 p-6 mb-8">
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">{labels.full}</p>
          <a
            href={card.sourceSiteUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#67127c] dark:text-purple-300 hover:underline break-all"
          >
            {card.sourceSiteLabel}
          </a>
        </div>

        <Link to="/artigos" className="text-[#67127c] dark:text-purple-300 hover:underline">
          {labels.back}
        </Link>
      </div>
    </section>
  );
}
