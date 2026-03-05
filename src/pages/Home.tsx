import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../app/i18n";

export default function Home() {
  const { t } = useI18n();
  const [mousePosition, setMousePosition] = useState({ x: 0 });
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!titleRef.current) return;

    const rect = titleRef.current.getBoundingClientRect();
    const x = (e.nativeEvent as MouseEvent).clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

    setMousePosition({ x: percentage });
  };

  const getColorFromPosition = (percentage: number) => {
    // Sequence: violeta -> azul -> verde -> azul -> violeta
    // Split 0-100 into 5 equal segments (20 each).
    const p = percentage;

    const interp = (start: [number, number, number], end: [number, number, number], t: number) => {
      const r = Math.round(start[0] + (end[0] - start[0]) * t);
      const g = Math.round(start[1] + (end[1] - start[1]) * t);
      const b = Math.round(start[2] + (end[2] - start[2]) * t);
      return `rgb(${r}, ${g}, ${b})`;
    };

    const violet: [number, number, number] = [103, 18, 124];
    const blue: [number, number, number] = [18, 39, 124];
    const green: [number, number, number] = [18, 124, 39];

    if (p < 20) {
      return interp(violet, blue, p / 20);
    }
    if (p < 40) {
      return interp(blue, green, (p - 20) / 20);
    }
    if (p < 60) {
      return interp(green, blue, (p - 40) / 20);
    }
    if (p < 80) {
      return interp(blue, violet, (p - 60) / 20);
    }

    return `rgb(${violet[0]}, ${violet[1]}, ${violet[2]})`;
  };

  return (
    <section
      id="home"
      className="flex-1 h-full min-h-full bg-gradient-to-br from-[#67127c]/5 to-blue-50 dark:from-zinc-950 dark:to-slate-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16">
        <div className="text-center">
          <h2
            ref={titleRef}
            onMouseMove={handleMouseMove}
            className="text-4xl md:text-5xl font-bold mb-6 transition-colors duration-75"
            style={{ color: getColorFromPosition(mousePosition.x) }}
          >
            {t.home.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {t.home.description}
          </p>
          <Link
            to="/areas"
            className="inline-block mt-2 mb-10 bg-[#67127c] dark:bg-purple-600 text-white px-10 py-4 text-lg font-semibold rounded-lg hover:bg-[#67127c]/90 dark:hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
          >
            {t.home.cta}
          </Link>
          <div className="mt-12 bg-white/60 dark:bg-white/5 border border-transparent dark:border-gray-700 rounded-2xl p-6 md:p-8 text-left">
            <div>
              <div className="inline-block px-4 py-2 bg-[#67127c]/10 text-[#67127c] dark:bg-purple-900/40 dark:text-purple-200 rounded-full mb-6">
                {t.about.badge}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                {t.about.title}
              </h3>

              <div className="relative w-52 sm:w-60 md:w-72 mx-auto md:float-right md:ml-8 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#67127c]/60 dark:from-purple-400 to-[#12277C]/60 dark:to-blue-400 rounded-lg transform rotate-3"></div>
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQH3jMPS3KHIzA/profile-displayphoto-crop_800_800/B4DZyWB7x8IUAI-/0/1772043619280?e=1773878400&v=beta&t=NkT2qFNV_CL8fx1DnBbOAc9bGfnWuK6w16KiShngDlk"
                  alt={t.about.imageAlt}
                  className="relative rounded-lg shadow-xl"
                />
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{t.about.p1}</p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{t.about.p2}</p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{t.about.p3}</p>
              <p className="text-lg text-gray-700 dark:text-gray-300">{t.about.p4}</p>

              <div className="clear-both grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-[#67127c] dark:text-purple-600 mb-2">
                    10+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{t.about.stats.years}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-[#12277C] dark:text-blue-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{t.about.stats.projects}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-[#127C27] dark:text-green-600 mb-2">
                    30+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {t.about.stats.publications}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-12 flex justify-center">
            <a href="#areas" className="text-gray-400 hover:text-[#67127c] dark:hover:text-purple-600 transition-colors">
              <ChevronDown className="w-8 h-8 animate-bounce" />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
