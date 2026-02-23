"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/5515936182621";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navbar - Only visible/interactive when menu is closed */}
      <nav className={`navbar glass ${isMenuOpen ? "hide-nav" : ""}`}>
        <div className="container nav-content">
          <Link href="/" className="logo-container">
            <Image
              src="/logo/horizontal-no-tagline-bg-fff-1500x1500 (1).svg"
              alt="Grow Up Logo"
              width={180}
              height={40}
              className="logo-img"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="desktop-links">
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

          {/* Hamburger Icon */}
          <button
            className="mobile-toggle"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Completely on top of everything */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="mobile-nav-root">
            {/* Dark Backdrop */}
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Solid Drawer on Top */}
            <motion.div
              className="mobile-menu-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
            >
              {/* Internal Header for the Drawer */}
              <div className="drawer-header">
                <div className="drawer-logo">
                  <Image
                    src="/logo/horizontal-no-tagline-bg-fff-1500x1500 (1).svg"
                    alt="Grow Up Logo"
                    width={180}
                    height={40}
                    className="logo-img"
                  />
                </div>
                <button
                  className="close-btn"
                  onClick={closeMenu}
                  aria-label="Fechar menu"
                >
                  <X size={32} />
                </button>
              </div>

              <nav className="drawer-navigation">
                <Link href="#sobre" onClick={closeMenu} className="drawer-item">
                  Quem lidera
                </Link>
                <Link
                  href="#servicos"
                  onClick={closeMenu}
                  className="drawer-item"
                >
                  Serviços
                </Link>
                <Link href="#cases" onClick={closeMenu} className="drawer-item">
                  Cases
                </Link>
                <div className="drawer-action">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    onClick={closeMenu}
                  >
                    Falar com Especialista <ArrowUpRight size={20} />
                  </a>
                </div>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(12px);
          transition: opacity 0.3s ease;
        }
        .navbar.hide-nav {
          opacity: 0;
          pointer-events: none;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-img {
          height: 35px;
          width: auto;
        }
        .desktop-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }
        .desktop-links a:not(.btn-primary) {
          font-weight: 500;
          color: #bbb;
          font-size: 0.95rem;
          transition: var(--transition);
        }
        .desktop-links a:hover {
          color: white;
        }
        .btn-primary {
          background: var(--primary);
          color: white !important;
          padding: 0.8rem 1.6rem;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(255, 69, 0, 0.2);
          white-space: nowrap;
        }
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        /* Mobile Menu Root - Absolute Top Layer */
        .mobile-nav-root {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          z-index: 10000; /* Higher than normal Navbar */
          display: flex;
          justify-content: flex-end;
        }

        .mobile-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
        }

        :global(.mobile-menu-drawer) {
          position: relative;
          width: 85% !important;
          max-width: 420px;
          height: 100% !important;
          background: #0a0a0a !important; /* FORCED SOLID BACKGROUND */
          box-shadow: -20px 0 60px rgba(0, 0, 0, 1);
          display: flex;
          flex-direction: column;
          z-index: 10001;
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          height: 80px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .close-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .drawer-navigation {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          padding: 3rem 2rem;
        }

        .drawer-item {
          font-size: 1.8rem;
          font-weight: 800;
          color: white;
          text-decoration: none;
        }

        .drawer-action {
          margin-top: 1.5rem;
        }

        @media (max-width: 768px) {
          .desktop-links {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
