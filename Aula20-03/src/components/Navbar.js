"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { logout } from "@/lib/storage";

const links = [
  { href: "/", label: "Home" },
  { href: "/login", label: "Login" },
  { href: "/cadastro", label: "Cadastro" },
  { href: "/perfil", label: "Perfil" },
  { href: "/configuracao", label: "Configuracao" },
  { href: "/feed", label: "Feed" },
];

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-bs-theme", saved);
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-bs-theme", next);
  }

  function handleLogout() {
    logout();
    alert("Logout realizado (simulado).");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body border-bottom sticky-top">
      <div className="container d-flex flex-wrap gap-2 align-items-center justify-content-between">
        <Link href="/" className="navbar-brand fw-semibold">
          MiniRede
        </Link>

        <div className="d-flex flex-wrap gap-2 align-items-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="btn btn-outline-primary btn-sm">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="d-flex gap-2">
          <button onClick={toggleTheme} className="btn btn-outline-secondary btn-sm" type="button">
            {theme === "light" ? "Modo Noturno" : "Modo Claro"}
          </button>
          <button onClick={handleLogout} className="btn btn-outline-danger btn-sm" type="button">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
