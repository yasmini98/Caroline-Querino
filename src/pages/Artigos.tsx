import { useEffect } from "react";
import { useI18n } from "../app/i18n";
import { Link } from "react-router-dom";
import { getOpinions } from "./opinioesData";
import { getArtigoCards } from "./artigosCardsData";
import iconeSite from "../assets/images/iconesite.avif";

function TikTokCreatorEmbed() {
  useEffect(() => {
    const processEmbed = () => {
      (window as any).tiktokEmbedLoad?.();
    };

    const retryProcessEmbed = () => {
      window.setTimeout(processEmbed, 150);
      window.setTimeout(processEmbed, 500);
    };

    const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      script.addEventListener("load", retryProcessEmbed, { once: true });
      document.body.appendChild(script);
    } else {
      if ((window as any).tiktokEmbedLoad) {
        processEmbed();
      } else {
        existingScript.addEventListener("load", retryProcessEmbed, {
          once: true,
        });
        retryProcessEmbed();
      }
    }
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite="https://www.tiktok.com/@carollinequerino"
      data-unique-id="carollinequerino"
      data-embed-type="creator"
      style={{ maxWidth: "780px", minWidth: "288px" }}
    >
      <section>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.tiktok.com/@carollinequerino?refer=creator_embed"
        >
          @carollinequerino
        </a>
      </section>
    </blockquote>
  );
}

function InstagramProfileEmbed() {
  const { t } = useI18n();

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]',
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      (window as any).instgrm?.Embeds?.process?.();
    }
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/carollinequerino?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      data-instgrm-version="14"
      style={{
        background: "#fff",
        border: 0,
        margin: 0,
        maxWidth: "540px",
        width: "100%",
      }}
    >
      <a
        href="https://www.instagram.com/carollinequerino?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noreferrer"
      >
        {t.articles.instagramProfile}
      </a>
    </blockquote>
  );
}

export default function Artigos() {
  const { t, language } = useI18n();
  const opinions = getOpinions(language);
  const articleCards = getArtigoCards(language);
  return (
    <div className="space-y-20 py-20 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Artigos section */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">{t.articles.title}</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {articleCards.map((card) => (
              <article
                key={card.id}
                className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={iconeSite}
                  alt={`${t.articles.articleAltPrefix} ${card.id}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{card.preview}</p>
                  <Link
                    to={`/artigos/materias/${card.id}`}
                    className="text-[#67127c] dark:text-purple-300 hover:underline"
                  >
                    {t.common.readMore}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Opiniões section */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">{t.articles.opinionsTitle}</h2>
          <div className="space-y-8">
            {opinions.map((opinion) => (
              <Link
                key={opinion.id}
                to={`/artigos/opinioes/${opinion.id}`}
                className="block border-l-4 border-[#67127c] dark:border-purple-400 pl-4 hover:bg-gray-50 dark:hover:bg-zinc-900/60 hover:opacity-90 transition-colors"
              >
                <h3 className="text-2xl font-normal mb-1 leading-snug">{opinion.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {`${opinion.body[0].slice(0, 170)}...`}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social previews section */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">{t.articles.latestTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="text-center border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-4">{t.articles.boardTitle}</h3>
              <TikTokCreatorEmbed />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {t.articles.tiktokLabel}
              </p>
            </div>
            <div className="text-center border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 rounded-lg p-4">
              <InstagramProfileEmbed />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {t.articles.instagramLabel}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
