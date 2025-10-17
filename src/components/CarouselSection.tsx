import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  'https://i.postimg.cc/t4fxcLhG/1.png',
  'https://i.ibb.co/j9h2TN6T/A-primeira-segunda-feira-CAPA-com-selopng.png',
  'https://i.ibb.co/JWHvpxfH/Capa-frontal-10-PODCAST.png',
  'https://i.ibb.co/21zfmCRF/capa-frontal-com-selo.png',
  'https://i.ibb.co/hJcn9dST/Capa-com-selo-Maria-Candida-2.png',
  'https://i.ibb.co/fdJnHgzv/capa-edicao-especial-em-baixa-2.png',
  'https://i.ibb.co/qFFk7WXj/Capa-frontal-Carlos-Eduardo.jpg',
  'https://i.ibb.co/j9F191yC/frontal-5.png',
  'https://i.ibb.co/qFL0X4Cg/Capa-Laura-selo.png',
  'https://i.ibb.co/mrJRBf6q/Capa-2-Overdone-1.png',
  'https://i.ibb.co/mW6GNr8/Capa-com-selo.png',
  'https://i.ibb.co/C5s6Zn8c/Capa-Gilson-1.png',
];

const TweetDemo: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;

    if (!track || !section) return;

    // Calculate total width for seamless looping
    const bookCovers = track.querySelectorAll('.book-cover');
    const coverWidth = bookCovers[0]?.getBoundingClientRect().width || 0;
    const totalWidth = coverWidth * images.length;

    // Infinite carousel animation
    gsap.to(track, {
      x: -totalWidth,
      ease: 'none',
      repeat: -1,
      duration: 20,
      modifiers: {
        x: gsap.utils.unitize((x: number) => x % totalWidth, 'px'),
      },
    });

    // Hover animations for book covers
    bookCovers.forEach((cover) => {
      cover.addEventListener('mouseenter', () => {
        gsap.to(cover, {
          scale: 1.05,
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      cover.addEventListener('mouseleave', () => {
        gsap.to(cover, {
          scale: 1,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });

    // Section animation
    gsap.fromTo(
      section,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      bookCovers.forEach((cover) => {
        cover.removeEventListener('mouseenter', () => {});
        cover.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-6 md:mb-8" style={{ color: '#ff3a60' }}>
        Explore Nossos Títulos
      </h2>
      <div className="absolute top-0 left-0 w-8 md:w-16 h-full z-10 pointer-events-none bg-gradient-to-r from-gray-50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-8 md:w-16 h-full z-10 pointer-events-none bg-gradient-to-l from-gray-50 to-transparent"></div>
      <div
        className="relative flex gap-3 md:gap-4 px-4"
        ref={trackRef}
        style={{ minWidth: `${images.length * 100}%` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="book-cover flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 h-48 sm:h-56 md:h-64 lg:h-80 rounded-lg overflow-hidden relative transition-all duration-300"
            style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <img
              src={src}
              alt={`Capa do livro ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TweetDemo;