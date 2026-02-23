"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  RefreshCcw,
  Cloud,
  Cpu,
  Layers,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="service-card glass">
      <div className="icon-wrapper">
        <Icon size={48} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>

      <style jsx>{`
        .service-card {
          padding: 4rem 3rem;
          border-radius: 32px;
          background: rgba(18, 18, 18, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          min-height: 400px;
          justify-content: center;
          box-sizing: border-box;
        }
        .icon-wrapper {
          color: var(--primary);
          margin-bottom: 2.5rem;
          padding: 1.5rem;
          background: rgba(255, 69, 0, 0.05);
          border-radius: 20px;
        }
        h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: white;
          font-weight: 700;
          line-height: 1.2;
        }
        p {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 1.1rem;
        }
        @media (max-width: 768px) {
          .service-card {
            padding: 3rem 1.5rem;
          }
          h3 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
};

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const servicesData = [
    {
      icon: RefreshCcw,
      title: "Modernização de Sistemas Legados",
      description:
        "Migração e atualização de softwares antigos para tecnologias atuais (C#/.NET). Eliminamos travamentos e limitações técnicas, garantindo que o sistema suporte o crescimento da demanda sem perda de performance.",
    },
    {
      icon: Cloud,
      title: "Arquitetura e Estratégia em Nuvem",
      description:
        "Desenho de infraestruturas robustas e seguras. Estruturamos seu ambiente para ser independente de provedor (AWS, Azure ou GCP), garantindo continuidade do negócio e controle rigoroso de custos.",
    },
    {
      icon: Cpu,
      title: "Automação de Processos Operacionais",
      description:
        "Substituição de tarefas manuais por fluxos automáticos programados. Reduzimos o custo operacional e eliminamos o risco de erros humanos em atividades críticas e repetitivas.",
    },
    {
      icon: Layers,
      title: "Engenharia de Sistemas de Alta Complexidade",
      description:
        "Desenvolvimento de motores financeiros e módulos de alta transacionalidade. Entregamos a confiabilidade necessária para operações de grande porte que exigem precisão absoluta e disponibilidade 24/7.",
    },
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % servicesData.length);
  }, [servicesData.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + servicesData.length) % servicesData.length,
    );
  }, [servicesData.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 15000);
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
    <section id="servicos" className="services-section">
      <div className="container overflow-visible">
        <div className="section-header">
          <div className="badge">Nossas Soluções</div>
          <h2>
            Serviços Especializados para{" "}
            <span className="highlight">Crescimento Sustentável</span>
          </h2>
          <p>
            Potencializamos sua operação com engenharia de software de elite.
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
                <ServiceCard {...servicesData[currentIndex]} />
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
              href="https://wa.me/5515936182621"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              Quero potencializar Minhas operações
            </a>
          </div>

          <div className="carousel-dots">
            {servicesData.map((_, index) => (
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
        .services-section {
          padding: 2rem 0;
          background: #0a0a0a;
          overflow: hidden;
        }
        .container {
          position: relative;
          z-index: 1;
        }
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
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
        }
        .highlight {
          color: var(--primary);
        }
        .section-header p {
          color: var(--text-muted);
          font-size: 1.1rem;
        }
        .carousel-wrapper {
          position: relative;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }
        .carousel-content {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 60px;
        }
        :global(.carousel-slide) {
          width: 100% !important;
          max-width: 600px;
          margin: 0 auto;
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
            height: 550px;
          }
          .nav-btn {
            display: none;
          }
          h2 {
            font-size: 2.2rem;
          }

          .badge {
            font-size: 1.8rem;
          }

          .btn-cta {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
