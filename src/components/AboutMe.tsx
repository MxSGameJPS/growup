"use client";

import React from "react";
import { CheckCircle, Award, TrendingUp, Cloud } from "lucide-react";

const AboutMe = () => {
  const highlights = [
    {
      icon: <Award className="icon-orange" />,
      text: "Eficiência Bancária: 30+ automações no Bradesco, economia de R$ 250 mil/mês.",
    },
    {
      icon: <TrendingUp className="icon-orange" />,
      text: "Modernização: Transição de sistemas core Delphi para .NET na Braspress.",
    },
    {
      icon: <CheckCircle className="icon-orange" />,
      text: "Precisão: Motores de balanceamento para Fintechs e automações Ambev Tech.",
    },
    {
      icon: <Cloud className="icon-orange" />,
      text: "Cloud: Arquiteturas agnósticas (AWS, Azure e GCP) focadas no cliente.",
    },
  ];

  return (
    <section id="sobre" className="about-section">
      <div className="container about-grid">
        <div className="about-content">
          <div className="badge">Quem lidera a Grow Up</div>
          <h2>
            Engenharia com propósito.{" "}
            <span className="highlight">Experiência em escala.</span>
          </h2>

          <div className="about-text">
            <p>
              Por trás da <strong>Grow Up</strong> está{" "}
              <strong>David Rodrigues</strong>, Arquiteto de Software com mais
              de uma década de atuação em ambientes de alta criticidade e
              complexidade técnica.
            </p>
            <p>
              Minha trajetória foi forjada nos bastidores de gigantes do
              mercado, onde a falha não é uma opção. De migrações estruturais de
              sistemas legados na Braspress à arquitetura de sustentação no BTG
              Pactual, minha missão sempre foi a mesma: transformar tecnologia
              em eficiência financeira e operacional.
            </p>
          </div>

          <div className="quote-box">
            <p>
              &quot;Não entrego apenas código. Entrego soluções que sustentam o
              crescimento e eliminam desperdícios.&quot;
            </p>
          </div>

          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-item">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <p className="final-vision">
            Acredito na arquitetura limpa, na transparência radical e no uso da
            tecnologia como alavanca de lucro. Na Grow Up, cada projeto é
            tratado com a precisão de um arquiteto e a visão de um parceiro de
            negócios.
          </p>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 1rem 0;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }
        .about-section::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 40%;
          height: 100%;
          background: radial-gradient(
            circle at 100% 50%,
            rgba(255, 69, 0, 0.05) 0%,
            transparent 70%
          );
          pointer-events: none;
        }
        .about-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .badge {
          background: rgba(255, 69, 0, 0.1);
          color: var(--primary);
          padding: 0.5rem 1.2rem;
          border-radius: 100px;
          font-size: 2.9rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 2rem;
          border: 1px solid rgba(255, 69, 0, 0.2);
          text-align: center;
          width: 100%;
        }
        h2 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1.1;
          margin-bottom: 2.5rem;
          font-weight: 700;
          letter-spacing: -1px;
        }
        .highlight {
          color: var(--primary);
        }
        .about-text p {
          font-size: 1.15rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        .about-text strong {
          color: white;
        }
        .quote-box {
          border-left: 4px solid var(--primary);
          padding: 1.5rem 2rem;
          background: rgba(255, 69, 0, 0.05);
          margin: 3rem 0;
          border-radius: 0 16px 16px 0;
        }
        .quote-box p {
          font-size: 1.4rem;
          font-style: italic;
          color: white;
          font-weight: 500;
          line-height: 1.4;
        }
        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        .highlight-item {
          display: flex;
          gap: 1.2rem;
          align-items: flex-start;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: var(--transition);
        }
        .highlight-item:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 69, 0, 0.3);
          transform: translateY(-5px);
        }
        .icon-orange {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 3px;
        }
        .highlight-item span {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .final-vision {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.7;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 3rem;
        }
        @media (max-width: 768px) {
          .highlights-grid {
            grid-template-columns: 1fr;
          }
          h2 {
            font-size: 2.2rem;
          }

          .badge {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
