import React from 'react';

const ProcessoEditorial: React.FC = () => {
  const steps = [
    {
      title: "Acesso à Área do Escritor",
      description: "Plataforma exclusiva para aprender a escrever um livro.",
    },
    {
      title: "Revisão e Publicação",
      description: "Revisão, diagramação, impressão e registros inclusos.",
    },
    {
      title: "Publicação Física e E-book",
      description: "Seu livro em formato físico e digital.",
    },
    {
      title: "Divulgação",
      description: "Promoção da sua obra em diversos canais.",
    },
    {
      title: "Distribuição",
      description: "Nacional (livrarias, Amazon) e internacional (e-book).",
    },
    {
      title: "Exemplares",
      description: "50 exemplares físicos + 50% de desconto em futuras compras.",
    },
    {
      title: "Programa de Afiliados",
      description: "Link personalizado com 30% de comissão sobre vendas.",
    },
    {
      title: "Certificado e Evento",
      description: "Certificado de coautoria e noite de autógrafos oficial.",
    },
  ];

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 bg-white">
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-white p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-[#ba455c]/30"
            >
              <div className="flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold text-[#ff3a60] mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-sm md:text-base text-[#ba455c] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessoEditorial;
