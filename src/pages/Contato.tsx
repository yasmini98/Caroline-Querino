import { Mail, Linkedin } from "lucide-react";
import React, { useState, useRef } from "react";
import { useI18n } from "../app/i18n";

export default function Contato() {
  const { t } = useI18n();
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const emailBtnRef = useRef<HTMLAnchorElement | null>(null);
  const linkedinBtnRef = useRef<HTMLAnchorElement | null>(null);
  const [emailHover, setEmailHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);

  const handleMouseMove = (e: React.MouseEvent, buttonRef: React.RefObject<HTMLElement | null>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.nativeEvent as MouseEvent).clientX - rect.left;
    const y = (e.nativeEvent as MouseEvent).clientY - rect.top;
    const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const yPercent = Math.max(0, Math.min(100, (y / rect.height) * 100));

    setMousePosition({ x: xPercent, y: yPercent });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 50, y: 50 });
  };

  // Gradiente fluido que segue o mouse para botões
  const getButtonGradientStyle = () => {
    return {
      background: `linear-gradient(
        ${45 + (mousePosition.x - 50) * 0.2}deg,
        hsl(${270 - mousePosition.x * 0.5 + mousePosition.y * 0.3}, 70%, 35%),
        hsl(${210 - mousePosition.x * 0.3 + mousePosition.y * 0.2}, 80%, 30%),
        hsl(${140 + mousePosition.x * 0.2 - mousePosition.y * 0.3}, 75%, 40%)
      )`,
      transition: "background 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
    };
  };

  return (
    <>
      <section
        id="contato"
        className="flex-1 h-full min-h-full bg-gradient-to-br from-purple-900 to-blue-900 text-white flex items-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact.title}</h2>
            <p className="text-xl text-purple-100 mb-12">{t.contact.description}</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                ref={emailBtnRef}
                href="mailto:carollinecquerino@gmail.com"
                onMouseMove={(e) => {
                  setEmailHover(true);
                  handleMouseMove(e, emailBtnRef);
                }}
                onMouseLeave={() => {
                  setEmailHover(false);
                  handleMouseLeave();
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-out"
                style={
                  emailHover ? getButtonGradientStyle() : { background: "white", color: "#581c87" }
                }
              >
                <Mail className="w-5 h-5" />
                <span>{t.contact.email}</span>
              </a>
              <a
                ref={linkedinBtnRef}
                href="https://www.linkedin.com/in/carolline-querino"
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={(e) => {
                  setLinkedinHover(true);
                  handleMouseMove(e, linkedinBtnRef);
                }}
                onMouseLeave={() => {
                  setLinkedinHover(false);
                  handleMouseLeave();
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-out"
                style={
                  linkedinHover
                    ? getButtonGradientStyle()
                    : { background: "white", color: "#581c87" }
                }
              >
                <Linkedin className="w-5 h-5" />
                <span>{t.contact.linkedin}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
