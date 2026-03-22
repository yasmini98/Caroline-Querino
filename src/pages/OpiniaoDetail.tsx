import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useI18n } from "../app/i18n";
import { getOpinions } from "./opinioesData";
import { getPublicOpinionById } from "../services/cms";
import { CmsOpinion } from "../types/cms";

const richTokenRegex = /(https?:\/\/[^\s]+|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;

function renderRichText(text: string) {
  return text.split(richTokenRegex).map((part, index) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={`${part}-${index}`}
          href={part}
          target="_blank"
          rel="noreferrer"
          className="underline break-all"
        >
          {part}
        </a>
      );
    }

    if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(part)) {
      return (
        <a key={`${part}-${index}`} href={`mailto:${part}`} className="underline break-all">
          {part}
        </a>
      );
    }

    return <span key={`${index}-${part.slice(0, 10)}`}>{part}</span>;
  });
}

export default function OpiniaoDetalhe() {
  const { id } = useParams();
  const { language } = useI18n();
  const parsedId = Number(id);
  const hasNumericId = Number.isFinite(parsedId) && !Number.isNaN(parsedId);
  const opinions = getOpinions(language);
  const opinion = hasNumericId ? opinions.find((op) => op.id === parsedId) : undefined;
  const [cmsOpinion, setCmsOpinion] = useState<CmsOpinion | null>(null);
  const [cmsReady, setCmsReady] = useState(hasNumericId);

  useEffect(() => {
    if (!id || hasNumericId) return;

    let isMounted = true;
    setCmsReady(false);

    getPublicOpinionById(id)
      .then((data) => {
        if (!isMounted) return;
        setCmsOpinion(data);
      })
      .catch(() => {
        if (!isMounted) return;
        setCmsOpinion(null);
      })
      .finally(() => {
        if (!isMounted) return;
        setCmsReady(true);
      });

    return () => {
      isMounted = false;
    };
  }, [hasNumericId, id]);

  const currentOpinion = useMemo(() => {
    if (opinion) return opinion;
    if (!cmsOpinion) return null;

    return {
      id: cmsOpinion.id,
      title: cmsOpinion.title,
      body: cmsOpinion.body,
      image: cmsOpinion.image_url ?? "",
    };
  }, [cmsOpinion, opinion]);

  const opinionIds = opinions.map((op) => op.id);
  const currentIndex = opinionIds.indexOf(parsedId);
  const previousId = currentIndex > 0 ? opinionIds[currentIndex - 1] : undefined;
  const nextId =
    currentIndex >= 0 && currentIndex < opinionIds.length - 1
      ? opinionIds[currentIndex + 1]
      : undefined;

  if (!cmsReady) {
    return (
      <section className="py-20 text-gray-900 dark:text-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>Carregando opiniao...</p>
        </div>
      </section>
    );
  }

  if (!currentOpinion) {
    return (
      <section className="py-20 text-gray-900 dark:text-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Opinião não encontrada</h1>
          <Link to="/artigos" className="text-[#67127c] dark:text-purple-300 hover:underline">
            Voltar para conteúdos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
          {currentOpinion.title}
        </h1>

        <article className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-10 text-justify">
          {currentOpinion.body.map((paragraph) => (
            <p key={paragraph} className="whitespace-pre-line">
              {renderRichText(paragraph)}
            </p>
          ))}
        </article>

        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <img
            src={currentOpinion.image}
            alt={`Imagem da opiniao ${String(currentOpinion.id)}`}
            className="max-w-full h-auto block mx-auto"
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-between items-center">
          {previousId ? (
            <Link
              to={`/artigos/opinioes/${previousId}`}
              className="text-[#67127c] dark:text-purple-300 hover:underline"
            >
              ← Opinião anterior
            </Link>
          ) : (
            <span />
          )}

          <Link to="/artigos" className="text-[#67127c] dark:text-purple-300 hover:underline">
            Voltar para conteúdos
          </Link>

          {nextId ? (
            <Link
              to={`/artigos/opinioes/${nextId}`}
              className="text-[#67127c] dark:text-purple-300 hover:underline"
            >
              Próxima opinião →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </section>
  );
}
