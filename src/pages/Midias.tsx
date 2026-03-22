import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../app/i18n";
import eventWd2026Image from "../assets/images/event-wd2026.png";
import eventHostPodcastImage from "../assets/images/event-hostpodcast.png";
import eventInterviewImage from "../assets/images/event-interview.png";
import latestEvent1Image from "../assets/images/latestevent1.jpeg";
import latestEvent2Image from "../assets/images/latestevent2.png";
import latestEvent3Image from "../assets/images/latestevent3.png";
import genderAndSexualityImage from "../assets/images/event-genderandsexuality.png";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../app/components/ui/carousel";
import { listPublicInterviews, listPublicUpcomingEvents } from "../services/cms";
import { CmsInterview, CmsUpcomingEvent } from "../types/cms";

const latestEventPhotos = [
  "https://picsum.photos/seed/evento-1/1200/800",
  "https://picsum.photos/seed/evento-2/1200/800",
  "https://picsum.photos/seed/evento-3/1200/800",
  "https://picsum.photos/seed/evento-4/1200/800",
];

type CarouselSlide = {
  photo: string;
  title?: string;
  date?: string;
  location?: string;
  href?: string;
};

type AgendaEvent = {
  date: string;
  title: string;
  location: string;
  href?: string;
  image?: keyof typeof mediaImages;
  imageUrl?: string;
  sortDate?: string;
};

const mediaImages = {
  eventWd2026: eventWd2026Image,
  genderStudy2026: genderAndSexualityImage,
} as const;

function parseIsoDate(date?: string) {
  if (!date) return null;
  const parsed = new Date(`${date}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function LoopingCarousel({ photos, altPrefix }: { photos: string[]; altPrefix: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api || isHovered) return;

    const intervalId = window.setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [api, isHovered]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: true }}
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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

function RichLoopingCarousel({
  slides,
  altPrefix,
  ctaLabel,
}: {
  slides: CarouselSlide[];
  altPrefix: string;
  ctaLabel: string;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api || isHovered) return;

    const intervalId = window.setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [api, isHovered]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: true }}
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={`${slide.photo}-${index}`} className="basis-full md:basis-1/2">
            <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900">
              {slide.href ? (
                <a href={slide.href} target="_blank" rel="noreferrer" className="block">
                  <img
                    src={slide.photo}
                    alt={slide.title ?? `${altPrefix} ${index + 1}`}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                  />
                </a>
              ) : (
                <img
                  src={slide.photo}
                  alt={slide.title ?? `${altPrefix} ${index + 1}`}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
              )}
              {slide.title || slide.date || slide.location || slide.href ? (
                <div className="p-4">
                  {slide.title ? (
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {slide.title}
                    </h3>
                  ) : null}
                  {slide.date ? (
                    <p className="mt-2 text-sm font-medium text-[#67127c] dark:text-purple-300">
                      {slide.date}
                    </p>
                  ) : null}
                  {slide.location ? (
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                      {slide.location}
                    </p>
                  ) : null}
                  {slide.href ? (
                    <a
                      href={slide.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center rounded-lg bg-[#67127c] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#67127c]/90 dark:bg-purple-600 dark:hover:bg-purple-700"
                    >
                      {ctaLabel}
                    </a>
                  ) : null}
                </div>
              ) : null}
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
  const { t, language } = useI18n();
  const [cmsInterviews, setCmsInterviews] = useState<CmsInterview[]>([]);
  const [cmsUpcomingEvents, setCmsUpcomingEvents] = useState<CmsUpcomingEvent[]>([]);

  useEffect(() => {
    let isMounted = true;

    async function loadCmsMedia() {
      try {
        const [interviews, events] = await Promise.all([
          listPublicInterviews(language),
          listPublicUpcomingEvents(language),
        ]);

        if (!isMounted) return;
        setCmsInterviews(interviews);
        setCmsUpcomingEvents(events);
      } catch (error) {
        console.warn("CMS indisponivel para midias:", error);
        if (!isMounted) return;
        setCmsInterviews([]);
        setCmsUpcomingEvents([]);
      }
    }

    loadCmsMedia();

    return () => {
      isMounted = false;
    };
  }, [language]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const staticAgendaEvents = t.midias.upcomingEvents as AgendaEvent[];
  const allAgendaEvents = [
    ...cmsUpcomingEvents.map((event) => ({
      date: event.date_label,
      title: event.title,
      location: event.location,
      href: event.href ?? undefined,
      imageUrl: event.image_url ?? undefined,
      sortDate: event.sort_date ?? undefined,
    })),
    ...staticAgendaEvents,
  ];
  const upcomingEvents = allAgendaEvents.filter((event) => {
    const eventDate = parseIsoDate(event.sortDate);
    return !eventDate || eventDate >= today;
  });

  const migratedToLatestSlides = allAgendaEvents
    .filter((event) => {
      const eventDate = parseIsoDate(event.sortDate);
      return Boolean(eventDate && eventDate < today);
    })
    .sort((a, b) => {
      const aTime = parseIsoDate(a.sortDate)?.getTime() ?? 0;
      const bTime = parseIsoDate(b.sortDate)?.getTime() ?? 0;
      return bTime - aTime;
    })
    .map((event, index) => ({
      photo:
        event.image && mediaImages[event.image]
          ? mediaImages[event.image]
          : event.imageUrl
            ? event.imageUrl
            : `https://picsum.photos/seed/upcoming-archive-${index + 1}/1200/800`,
      title: event.title,
      date: event.date,
      location: event.location,
      href: event.href,
    }));

  const curatedLatestSlides: CarouselSlide[] = [
    {
      photo: latestEvent1Image,
      title: t.midias.latestEventFeaturedTitle,
      date: t.midias.latestEventFeaturedDate,
      location: t.midias.latestEventFeaturedLocation,
      href: "https://leobezerra.github.io/seminars/#autumn2025",
    },
    {
      photo: latestEvent2Image,
      title: t.midias.latestEventSecondTitle,
      date: t.midias.latestEventSecondDate,
      href: "https://www.youtube.com/watch?v=oCixfT9bTRA&t=20s",
    },
    {
      photo: latestEvent3Image,
      title: t.midias.latestEventThirdTitle,
      date: t.midias.latestEventThirdDate,
      location: t.midias.latestEventThirdLocation,
      href: "https://www.instagram.com/reels/DSDDdwAEU8B/",
    },
  ];

  const latestEventSlides: CarouselSlide[] = [...migratedToLatestSlides, ...curatedLatestSlides];

  const interviewSlides: CarouselSlide[] = [
    ...cmsInterviews.map((item) => ({
      photo: item.image_url,
      title: item.title,
      href: item.href ?? undefined,
    })),
    {
      photo: eventHostPodcastImage,
      title: t.midias.interviewFeaturedTitle,
      href: "https://www.patreon.com/posts/guest-5-leonardo-149912074",
    },
    {
      photo: eventInterviewImage,
      title: t.midias.interviewSecondTitle,
      href: "https://globoplay.globo.com/v/12065891/",
    },
  ];

  return (
    <div className="space-y-14 py-20 text-gray-900 dark:text-gray-100 transition-colors">
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">{t.midias.latestEventsTitle}</h2>
          <RichLoopingCarousel
            slides={latestEventSlides}
            altPrefix={t.midias.latestEventsPhotoAltPrefix}
            ctaLabel={t.common.seeMore}
          />
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">{t.midias.interviewsTitle}</h2>
          <RichLoopingCarousel
            slides={interviewSlides}
            altPrefix={t.midias.interviewsPhotoAltPrefix}
            ctaLabel={t.common.seeMore}
          />
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">{t.midias.agendaTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <article
                key={`${event.date}-${event.title}`}
                className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900"
              >
                {"image" in event ? (
                  <a href={event.href} target="_blank" rel="noreferrer" className="block">
                    <img
                      src={mediaImages[event.image]}
                      alt={event.title}
                      className="h-56 w-full object-cover"
                      loading="lazy"
                    />
                  </a>
                ) : null}

                <div className="p-5">
                  <p className="text-sm font-semibold text-[#67127c] dark:text-purple-300 mb-2">
                    {event.date}
                  </p>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{event.location}</p>

                  {"href" in event ? (
                    <a
                      href={event.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center rounded-lg bg-[#67127c] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#67127c]/90 dark:bg-purple-600 dark:hover:bg-purple-700"
                    >
                      {t.common.seeMore}
                    </a>
                  ) : null}
                </div>
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
