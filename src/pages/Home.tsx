import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { useI18n } from '../app/i18n';



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

    const violet: [number, number, number] = [147, 51, 234];
    const blue: [number, number, number] = [37, 99, 235];
    const green: [number, number, number] = [22, 163, 74];

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
    <main className="pt-0">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6 animate-fade-in">
              {t.home.badge}
            </div>
            <h2 
              ref={titleRef}
              onMouseMove={handleMouseMove}
              className="text-4xl md:text-5xl font-bold mb-6 transition-colors duration-75"
              style={{ color: getColorFromPosition(mousePosition.x) }}
            >
              {t.home.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t.home.description}
            </p>
            <Link 
              to="/contato" 
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {t.home.cta}
            </Link>
            {/* <div className="mt-12 flex justify-center">
              <a href="#areas" className="text-gray-400 hover:text-purple-600 transition-colors">
                <ChevronDown className="w-8 h-8 animate-bounce" />
              </a>
            </div> */}
          </div>
        </div>
      </section>

    </main>
  );
}