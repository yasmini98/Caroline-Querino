import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../app/i18n";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../app/components/ui/carousel";

const latestEventPhotos = [
  "https://picsum.photos/seed/evento-1/1200/800",
  "https://picsum.photos/seed/evento-2/1200/800",
  "https://picsum.photos/seed/evento-3/1200/800",
  "https://picsum.photos/seed/evento-4/1200/800",
];

const interviewPhotos = [
  "https://picsum.photos/seed/entrevista-1/1200/800",
  "https://picsum.photos/seed/entrevista-2/1200/800",
  "https://picsum.photos/seed/entrevista-3/1200/800",
  "https://picsum.photos/seed/entrevista-4/1200/800",
];

function LoopingCarousel({ photos, altPrefix }: { photos: string[]; altPrefix: string }) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const intervalId = window.setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [api]);

  return (
    <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent>
        {photos.map((photo, index) => (
          <CarouselItem key={`${photo}-${index}`} className="basis-full md:basis-1/2">
            <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900">
              <img
                src={photo}
                alt={`${altPrefix} ${index + 1}`}
                className="h-64 w-full object-cover"
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 bg-white/80 hover:bg-white dark:bg-zinc-900/80 dark:hover:bg-zinc-900" />
      <CarouselNext className="right-2 bg-white/80 hover:bg-white dark:bg-zinc-900/80 dark:hover:bg-zinc-900" />
    </Carousel>
  );
}

export default function Midias() {
  const { t } = useI18n();

  return (
    <div className="space-y-14 py-20 text-gray-900 dark:text-gray-100 transition-colors">
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">{t.midias.latestEventsTitle}</h2>
          <LoopingCarousel
            photos={latestEventPhotos}
            altPrefix={t.midias.latestEventsPhotoAltPrefix}
          />
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">{t.midias.interviewsTitle}</h2>
          <LoopingCarousel photos={interviewPhotos} altPrefix={t.midias.interviewsPhotoAltPrefix} />
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">{t.midias.agendaTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {t.midias.upcomingEvents.map((event) => (
              <article
                key={`${event.date}-${event.title}`}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 p-5"
              >
                <p className="text-sm font-semibold text-[#67127c] dark:text-purple-300 mb-2">
                  {event.date}
                </p>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{event.location}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-dashed border-[#67127c]/40 dark:border-purple-400/40 p-6 text-center bg-[#67127c]/5 dark:bg-purple-900/20">
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-100 mb-4">
              {t.midias.scheduleLead}
            </p>
            <Link
              to="/contato"
              className="inline-block mt-2 mb-10 bg-[#67127c] dark:bg-purple-600 text-white px-10 py-4 text-lg font-semibold rounded-lg hover:bg-[#67127c]/90 dark:hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {t.midias.scheduleButton}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
