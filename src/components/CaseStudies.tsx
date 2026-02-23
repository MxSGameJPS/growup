"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Target,
  Lightbulb,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CaseProps {
  title: string;
  company: string;
  challenge: string;
  solution: string;
  impact: string;
}

const CaseCard = ({
  title,
  company,
  challenge,
  solution,
  impact,
}: CaseProps) => {
  return (
    <div className="case-card glass hover-glow">
      <div className="case-header">
        <span className="company">{company}</span>
        <h3>{title}</h3>
      </div>

      <div className="case-body">
        <div className="case-segment">
          <div className="segment-title">
            <Target size={18} className="icon-orange" />
            <h4>O Desafio</h4>
          </div>
          <p>{challenge}</p>
        </div>

        <div className="case-segment">
          <div className="segment-title">
            <Lightbulb size={18} className="icon-orange" />
            <h4>A Solução</h4>
          </div>
          <p>{solution}</p>
        </div>

        <div className="case-segment impact-box">
          <div className="segment-title">
            <Zap size={18} className="icon-orange" />
            <h4>O Impacto</h4>
          </div>
          <p className="impact-text">{impact}</p>
        </div>
      </div>

      <style jsx>{`
        .case-card {
          padding: 3rem;
          border-radius: 32px;
          background: rgba(18, 18, 18, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          width: 100%;
          box-sizing: border-box;
        }
        .company {
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.85rem;
          display: block;
          margin-bottom: 0.75rem;
        }
        h3 {
          font-size: 2.2rem;
          font-weight: 700;
          line-height: 1.2;
          color: white;
        }
        .case-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .case-segment:last-child {
          grid-column: span 2;
        }
        .segment-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }
        h4 {
          font-size: 1rem;
          color: white;
          font-weight: 600;
        }
        p {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 1rem;
        }
        .icon-orange {
          color: var(--primary);
        }
        .impact-box {
          background: rgba(255, 69, 0, 0.05);
          padding: 2rem;
          border-radius: 20px;
          border-left: 4px solid var(--primary);
          margin-top: 1rem;
        }
        .impact-text {
          color: white;
          font-weight: 500;
          font-size: 1.1rem;
        }
        @media (max-width: 768px) {
          .case-body {
            grid-template-columns: 1fr;
          }
          .case-segment:last-child {
            grid-column: span 1;
          }
          h3 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const cases = [
    {
      company: "Braspress",
      title: "Modernização de Core Business",
      challenge:
        "Sistema legado em Delphi que limitava a agilidade operacional e a escalabilidade.",
      solution:
        "Migração completa da arquitetura para ASP.NET (C#), modernizando a pilha tecnológica e permitindo integração nativa com serviços de nuvem.",
      impact:
        "Maior performance, redução de débito técnico e uma plataforma pronta para o crescimento acelerado da operação logística.",
    },
    {
      company: "Bradesco",
      title: "Eficiência Operacional em Larga Escala",
      challenge:
        "Processos manuais onerosos e propensos a falhas em um ambiente bancário crítico.",
      solution:
        "Implementação de um ecossistema com mais de 30 automações de processos utilizando lógica de programação avançada e orquestração de dados.",
      impact:
        "Economia direta de R$ 250.000,00 por mês e eliminação de gargalos operacionais críticos.",
    },
    {
      company: "Fintech",
      title: "Arquitetura Financeira de Alta Disponibilidade",
      challenge:
        "Necessidade de um sistema resiliente para balanceamento de fluxos bancários de entrada e saída.",
      solution:
        "Desenvolvimento de um motor de balanceamento de saldos bancários, garantindo a distribuição inteligente de liquidez e estabilidade nas transações.",
      impact:
        "Seguridade transacional e controle total sobre o fluxo de caixa em tempo real em um ambiente de alta complexidade financeira.",
    },
    {
      company: "Ambev Tech",
      title: "Otimização de Custos e Performance",
      challenge:
        "Gargalos em fluxos operacionais que geravam desperdício de tempo e recursos.",
      solution:
        "Desenvolvimento de automações personalizadas focadas na agilidade de processos internos.",
      impact:
        "Redução de custos estimada em R$ 20.000,00 por mês, validando a eficiência da automação mesmo em escalas menores.",
    },
    {
      company: "BTG Pactual",
      title: "Sustentação de Sistemas Críticos",
      challenge:
        "Garantir a continuidade e a estabilidade de softwares em um dos ambientes financeiros mais exigentes do país.",
      solution:
        "Atuação direta na sustentação e evolução de software, focando em alta disponibilidade e tolerância a falhas.",
      impact:
        "Manutenção da integridade operacional em sistemas de missão crítica, garantindo a confiança dos stakeholders e usuários finais.",
    },
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  }, [cases.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  }, [cases.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="cases" className="cases-section">
      <div className="container overflow-visible">
        <div className="section-header">
          <h2>
            Cases de Sucesso:{" "}
            <span className="highlight">Resultados que Escalam</span>
          </h2>
          <p>
            Experiência prática entregando valor real para grandes players do
            mercado.
          </p>
        </div>

        <div className="carousel-wrapper">
          <button
            className="nav-btn prev"
            onClick={prevSlide}
            aria-label="Anterior"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="carousel-content">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="carousel-slide"
              >
                <CaseCard {...cases[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="nav-btn next"
            onClick={nextSlide}
            aria-label="Próximo"
          >
            <ChevronRight size={32} />
          </button>

          <div className="cta-container">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              Quero Melhorar meus resultados
            </a>
          </div>

          <div className="carousel-dots">
            {cases.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .cases-section {
          padding: 1rem 0;
          background: #0a0a0a;
          overflow: hidden;
        }
        .container {
          position: relative;
          z-index: 1;
        }
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .badge {
          background: rgba(255, 69, 0, 0.1);
          color: var(--primary);
          padding: 0.5rem 1.2rem;
          border-radius: 100px;
          font-size: 2.9rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 69, 0, 0.2);
        }
        h2 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 1.5rem;
          font-weight: 700;
          letter-spacing: -1px;
        }
        .highlight {
          color: var(--primary);
        }
        .section-header p {
          color: var(--text-muted);
          font-size: 1.2rem;
        }
        .carousel-wrapper {
          position: relative;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .carousel-content {
          position: relative;
          height: 600px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          margin: 0 60px;
          overflow: visible;
        }
        /* Crucial fix for framer-motion popLayout */
        :global(.carousel-slide) {
          width: 100% !important;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          color: rgba(255, 255, 255, 0.2);
          border: none;
          padding: 1rem;
          z-index: 20;
          transition: var(--transition);
        }
        .nav-btn:hover {
          color: var(--primary);
          transform: translateY(-50%) scale(1.1);
        }
        .prev {
          left: 0;
        }
        .next {
          right: 0;
        }
        .cta-container {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
        }
        .btn-cta {
          background: var(--primary);
          color: white;
          padding: 1.25rem 2.5rem;
          border-radius: 14px;
          font-weight: 700;
          font-size: 1.1rem;
          transition: var(--transition);
          box-shadow: 0 10px 30px var(--primary-glow);
        }
        .btn-cta:hover {
          transform: translateY(-5px);
          background: var(--accent);
          box-shadow: 0 15px 40px var(--primary-glow);
        }
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 3rem;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          padding: 0;
          transition: var(--transition);
        }
        .dot.active {
          background: var(--primary);
          width: 24px;
          border-radius: 4px;
        }
        @media (max-width: 768px) {
          .carousel-content {
            margin: 0;
            height: 750px;
          }
          .nav-btn {
            display: none;
          }
          h2 {
            font-size: 2rem;
          }
          .btn-cta {
            font-size: 1rem;
            margin-top: 5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;
