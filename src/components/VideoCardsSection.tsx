import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const videoCards = [
  {
    title: "Desafios e Superações",
    description: "Compartilhe momentos difíceis e como você encontrou força e soluções para enfrentar cada desafio da maternidade.",
    imageSrc: "/imgs/amor.png"
  },
  {
    title: "Momentos de Alegria",
    description: "Eternize os momentos mais divertidos, emocionantes e memoráveis ao lado dos seus filhos.",
    imageSrc: "/imgs/cuidado.png"
  },
  {
    title: "Aprendizados de Vida",
    description: "Mostre como a maternidade ensina sobre paciência, amor incondicional, resiliência e crescimento pessoal.",
    imageSrc: "/imgs/dedicação.png"
  },
  {
    title: "Conexões e Laços",
    description: "Conte sobre os vínculos especiais com seus filhos, familiares e comunidade, e como eles transformam sua experiência como mãe.",
    imageSrc: "/imgs/protecao.png"
  }
];

const CombinedSections: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards.length) return;

    // Animação stagger para os cards
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animações individuais de hover
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -6,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <>
      {/* Seção Growing Company - Com adaptação da imagem */}
      <section className="relative pt-8 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Seção da Imagem - Adaptada ao tamanho natural da imagem */}
            <div className="w-full md:w-5/12 mb-6 md:mb-0 px-4">
              <div className="relative w-full rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/imgs/congresso.png"
                  alt="Histórias de pets"
                  loading="lazy"
                  className="w-full h-auto object-contain max-w-full"
                />
              </div>
            </div>

            {/* Seção de Conteúdo */}
            <div className="w-full md:w-7/12 px-4">
              <div className="md:pr-8">
                <div
                  className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-4 shadow-lg rounded-full"
                  style={{ backgroundColor: "#ffc1b5", color: "#fff" }}
                >
                  <i className="fas fa-rocket text-lg"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold" style={{ color: "hsl(349, 55%, 50%)" }}>
                  Histórias que Conectam
                </h3>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-500">
                  Transforme suas experiências como mãe em uma obra literária inspiradora, mostrando sua dedicação, amor e desafios do dia a dia da maternidade.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <span
                        className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full mr-3"
                        style={{ backgroundColor: "#eaf3f4", color: "#87a8b1" }}
                      >
                        <i className="fas fa-fingerprint"></i>
                      </span>
                      <div>
                        <h4 className="text-base font-semibold" style={{ color: "hsl(349, 55%, 50%)" }}>
                          Autoridade e Inspiração
                        </h4>
                        <p className="text-sm md:text-base text-gray-500">
                          Mostre que sua vivência pode inspirar outras mães. Sua história real se torna referência e exemplo de força, resiliência e amor incondicional.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <span
                        className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full mr-3"
                        style={{ backgroundColor: "#eaf3f4", color: "#87a8b1" }}
                      >
                        <i className="fab fa-html5"></i>
                      </span>
                      <div>
                        <h4 className="text-base font-semibold" style={{ color: "hsl(349, 55%, 50%)" }}>
                          Conexão com Outras Mães
                        </h4>
                        <p className="text-sm md:text-base text-gray-500">
                          Compartilhe sua jornada e crie vínculos com mulheres que vivem experiências semelhantes, fortalecendo uma rede de apoio e empatia.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <span
                        className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full mr-3"
                        style={{ backgroundColor: "#eaf3f4", color: "#87a8b1" }}
                      >
                        <i className="far fa-paper-plane"></i>
                      </span>
                      <div>
                        <h4 className="text-base font-semibold" style={{ color: "hsl(349, 55%, 50%)" }}>
                          Legado Pessoal e Familiar
                        </h4>
                        <p className="text-sm md:text-base text-gray-500">
                          Deixe registrada sua trajetória materna em um livro que eterniza suas memórias, aprendizados e amor, criando um legado para suas filhas e futuras gerações.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Cards de Imagem */}
      <section ref={sectionRef} className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-4xl mb-4" style={{ color: "hsl(349, 55%, 50%)" }}>
              Temas para sua História
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore diferentes formas de contar sua experiência única na maternidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {videoCards.map((card, index) => (
              <div
                key={card.title}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border/50"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-heading font-semibold text-lg md:text-xl mb-2" style={{ color: "hsl(349, 100%, 61%)" }}>
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm md:text-base text-gray-500 font-semibold">
              Aproveite,{" "}
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                as vagas são limitadas!
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CombinedSections;