"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const whatsappUrl = "https://wa.me/5511999999999";

  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <Link href="/" className="logo-container">
          <Image
            src="/logo/horizontal-no-tagline-bg-fff-1500x1500 (1).svg"
            alt="Grow Up Tech Logo"
            width={180}
            height={40}
            className="logo-img"
            priority
          />
        </Link>

        <div className="nav-links">
          <Link href="#sobre">Quem lidera</Link>
          <Link href="#servicos">Serviços</Link>
          <Link href="#cases">Cases</Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Falar com Especialista <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-container {
          display: flex;
          align-items: center;
        }
        .logo-img {
          height: 35px;
          width: auto;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-links a {
          font-weight: 500;
          color: #ccc;
          transition: var(--transition);
        }
        .nav-links a:hover {
          color: white;
        }
        .btn-primary {
          background: var(--primary);
          color: white !important;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
        }
        .btn-primary:hover {
          background: var(--accent);
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .nav-links a:not(.btn-primary) {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
