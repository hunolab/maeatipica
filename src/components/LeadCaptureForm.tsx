import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeadCaptureForm = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animação GSAP
    gsap.fromTo(
      section.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // === RD Station Form Script ===
    const script = document.createElement("script");
    script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore (ignora TypeScript reclamar do objeto global)
      if (window.RDStationForms) {
        // substitua 'null' pela sua public token, se tiver
        // eslint-disable-next-line no-new
        new window.RDStationForms("de-mae-para-mae-7ec291f2b740047fc00e", null).createForm();
      }
    };
    document.body.appendChild(script);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="lead-capture" ref={sectionRef} className="section-spacing bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6" style={{ color: '#ff3a60' }}>
              Faça Parte do Projeto
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Preencha o formulário abaixo e faça parte desta jornada literária única.
              Em breve entraremos em contato para conhecer sua história.
            </p>
          </div>

          {/* Contêiner do formulário RD Station */}
          <div role="main" id="de-mae-para-mae-7ec291f2b740047fc00e" className="mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
