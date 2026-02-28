import { useEffect } from 'react';

function TikTokCreatorEmbed() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      (window as any).tiktokEmbedLoad?.();
    }
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite="https://www.tiktok.com/@carollinequerino"
      data-unique-id="carollinequerino"
      data-embed-type="creator"
      style={{ maxWidth: '780px', minWidth: '288px' }}
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
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
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
      style={{ background: '#fff', border: 0, margin: 0, maxWidth: '540px', width: '100%' }}
    >
      <a
        href="https://www.instagram.com/carollinequerino?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noreferrer"
      >
        Ver perfil no Instagram
      </a>
    </blockquote>
  );
}

export default function Artigos() {
  return (
    <div className="space-y-20 py-20">
      {/* Artigos section */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Artigos e Publicações</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {[1,2,3,4].map((i) => (
              <article key={i} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={`https://via.placeholder.com/600x300?text=Artigo+${i}`}
                  alt={`Artigo ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">Título do Artigo {i}</h2>
                  <p className="text-gray-700 mb-4">
                    Breve descrição do artigo numero {i}. Lorem ipsum dolor sit amet.
                  </p>
                  <a href="#" className="text-purple-600 hover:underline">
                    Ler mais →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Opiniões section */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Opiniões</h2>
          <div className="space-y-8">
            {[1,2,3].map((i) => (
              <div key={i} className="border-l-4 border-purple-600 pl-4">
                <h3 className="text-2xl font-semibold mb-1">Opinião {i}</h3>
                <p className="text-gray-700">
                  Texto de opinião {i} sobre um tema relevante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social previews section */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Últimas publicações</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="text-center border rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-4">Quadro "Café com a internacionalista"</h3>
              <TikTokCreatorEmbed />
              <p className="mt-2 text-sm text-gray-600">TikTok</p>
            </div>
            <div className="text-center border rounded-lg p-4">
              <InstagramProfileEmbed />
              <p className="mt-2 text-sm text-gray-600">Instagram</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}