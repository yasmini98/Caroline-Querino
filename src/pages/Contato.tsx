import { Mail, Linkedin } from 'lucide-react';
import React, { useState, useRef } from 'react';

export default function Contato() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const emailBtnRef = useRef<HTMLAnchorElement | null>(null);
  const linkedinBtnRef = useRef<HTMLAnchorElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [emailHover, setEmailHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [titleHover, setTitleHover] = useState(false);

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
      transition: 'background 0.1s ease-out',
      color: 'white',
    };
  };

  // Cor que segue o mouse para o título (white -> green -> white)
  const getTitleColorStyle = () => {
    // Posição do mouse de 0-100%, mapeamos para: 0% = white, 50% = green, 100% = white
    let lightness = 50; // começa no meio (50-50 entre white e green)
    if (mousePosition.x < 50) {
      // 0-50%: white (90%) -> green (40%)
      lightness = 90 - (50 - mousePosition.x) * 0.8; // 90 -> 50
    } else {
      // 50-100%: green (40%) -> white (90%)
      lightness = 50 + (mousePosition.x - 50) * 0.8; // 50 -> 90
    }
    return {
      color: `hsl(140, 100%, ${lightness}%)`,
      transition: 'color 0.1s ease-out',
    };
  };

  return (
    <>
      <section id="contato" className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 
                ref={titleRef}
                onMouseMove={(e) => { setTitleHover(true); handleMouseMove(e, titleRef); }}
                onMouseLeave={() => { setTitleHover(false); handleMouseLeave(); }}
                className="text-3xl md:text-4xl font-bold mb-6 cursor-pointer transition-colors"
                style={titleHover ? getTitleColorStyle() : { color: 'white' }}
              >
                Vamos Trabalhar Juntos?
              </h2>
              <p className="text-xl text-purple-100 mb-12">
                Entre em contato para discutir como posso contribuir com seus projetos 
                de diversidade, tecnologia e sustentabilidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  ref={emailBtnRef}
                  href="mailto:carollinecquerino@gmail.com"
                  onMouseMove={(e) => { setEmailHover(true); handleMouseMove(e, emailBtnRef); }}
                  onMouseLeave={() => { setEmailHover(false); handleMouseLeave(); }}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-75"
                  style={emailHover ? getButtonGradientStyle() : { background: 'white', color: '#581c87' }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
                <a 
                  ref={linkedinBtnRef}
                  href="https://www.linkedin.com/in/carolline-querino" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseMove={(e) => { setLinkedinHover(true); handleMouseMove(e, linkedinBtnRef); }}
                  onMouseLeave={() => { setLinkedinHover(false); handleMouseLeave(); }}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-75"
                  style={linkedinHover ? getButtonGradientStyle() : { background: 'white', color: '#581c87' }}
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}