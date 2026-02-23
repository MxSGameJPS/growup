"use client";

import React from "react";
import { Rocket, Shield, Activity } from "lucide-react";

const Hero = () => {
  const whatsappUrl = "https://wa.me/5511999999999";

  return (
    <section className="hero">
      <div className="container hero-content animate-fade-in">
        <h1>
          Resultados que <span className="text-gradient">Escalam</span> sua
          Operação.
        </h1>
        <p>
          Transformamos desafios complexos em sistemas eficientes. De
          modernização de legado à automação em larga escala, entregamos
          tecnologia que impulsiona o crescimento real.
        </p>

        <div className="hero-btns">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-main"
          >
            Falar com especialista
          </a>
          <a href="#cases" className="btn-secondary">
            Conhecer Cases
          </a>
        </div>

        <div className="stats-row">
          <div className="stat-item">
            <Rocket className="icon" />
            <span>Modernização</span>
          </div>
          <div className="stat-item">
            <Shield className="icon" />
            <span>Escalabilidade</span>
          </div>
          <div className="stat-item">
            <Activity className="icon" />
            <span>Performance</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding: 12rem 0 2rem;
          position: relative;
          background: radial-gradient(
            circle at 50% 30%,
            rgba(255, 69, 0, 0.1) 0%,
            transparent 50%
          );
        }
        .hero-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }
        .badge {
          background: rgba(255, 107, 0, 0.1);
          color: var(--primary);
          padding: 0.5rem 1.2rem;
          border-radius: 100px;
          font-size: 0.9rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 2rem;
          border: 1px solid rgba(255, 107, 0, 0.2);
        }
        h1 {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -2px;
        }
        .text-gradient {
          background: linear-gradient(90deg, #ff4500, #ff7f50);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          font-size: 1.25rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto 3rem;
        }
        .hero-btns {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-bottom: 5rem;
        }
        .btn-main {
          background: var(--primary);
          color: white;
          padding: 1.2rem 2.5rem;
          border-radius: 12px;
          font-weight: 600;
          transition: var(--transition);
        }
        .btn-main:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px var(--primary-glow);
        }
        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          padding: 1.2rem 2.5rem;
          border-radius: 12px;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: var(--transition);
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        .stats-row {
          display: flex;
          justify-content: center;
          gap: 4rem;
          padding: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .icon {
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .hero-btns {
            flex-direction: column;
          }
          .stats-row {
            flex-wrap: wrap;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
