import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const button = buttonRef.current;

    if (!hero || !button) return;

    // Animação inicial do botão
    gsap.fromTo(
      button,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      }
    );

    // Scroll effect otimizado
    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;

        gsap.to(button, {
          opacity: 1 - progress * 1.2,
          y: -progress * 80,
          duration: 0,
          ease: "none",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById("lead-capture");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[60vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/imgs/banner.png"
          alt="Imagem de fundo"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-orange-500/10 via-orange-400/5 to-transparent z-10"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce hidden sm:block z-30">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Botão na parte inferior */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 pb-4 sm:pb-6">
        <Button
          ref={buttonRef}
          onClick={scrollToForm}
          variant="hero"
          size="lg"
          className="w-[90vw] sm:w-auto px-6 py-3 text-sm sm:text-base md:text-lg"
          style={{ backgroundColor: '#ff3a60' }}
        >
          Quero ser Coautora
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;