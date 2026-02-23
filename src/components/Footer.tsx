"use client";

import React from "react";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer" id="contato">
      <div className="container footer-content">
        <div className="footer-brand">
          <Image
            src="/logo/horizontal-no-tagline-bg-fff-1500x1500 (1).svg"
            alt="Grow Up Tech Logo"
            width={180}
            height={40}
            className="footer-logo"
            priority
          />
          <p>
            Sua parceira estratégica em infraestrutura, automação e
            desenvolvimento de alto nível.
          </p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Páginas</h4>
            <a href="#">Home</a>
            <a href="#cases">Cases</a>
            <a href="#servicos">Serviços</a>
          </div>
          <div className="link-group">
            <h4>Contato</h4>
            <p>david@growupsolutions.com.br</p>
            <a
              href="https://wa.me/5515936182621"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container copyright">
        <p>
          &copy; {new Date().getFullYear()} Grow Up Tech. Todos os direitos
          reservados.
        </p>
      </div>

      <style jsx>{`
        .footer {
          background: var(--secondary);
          padding: 6rem 0 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        .footer-brand .footer-logo {
          height: 35px;
          width: auto;
          margin-bottom: 1.5rem;
          display: block;
        }
        .footer-brand p {
          color: var(--text-muted);
          max-width: 400px;
          line-height: 1.6;
        }
        .footer-links {
          display: flex;
          gap: 4rem;
        }
        .link-group h4 {
          color: white;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        .link-group a,
        .link-group p {
          display: block;
          color: var(--text-muted);
          margin-bottom: 1rem;
          transition: var(--transition);
        }
        .link-group a:hover {
          color: var(--primary);
        }
        .copyright {
          padding-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
          .footer-links {
            flex-direction: column;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
