"use client";

import { useState } from "react";
import { saveUser } from "@/lib/storage";

export default function CadastroPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    saveUser({
      ...form,
      photo: "https://placehold.co/120x120",
      bio: "Bio ainda nao preenchida.",
      interests: "",
      color: "azul",
    });

    alert("Cadastro salvo no navegador (simulado).");
    setForm({ username: "", email: "", password: "" });
  }

  return (
    <section className="card shadow-sm border-0 form-wrap mx-auto">
      <div className="card-body p-4">
        <h1 className="h3 mb-3">Cadastro</h1>
        <form className="d-grid gap-3" onSubmit={handleSubmit}>
          <div>
            <label className="form-label">Nome de usuario</label>
          <input
            required
            value={form.username}
            onChange={(e) => handleChange("username", e.target.value)}
            className="form-control"
          />
          </div>

          <div>
            <label className="form-label">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="form-control"
          />
          </div>

          <div>
            <label className="form-label">Senha</label>
          <input
            type="password"
            required
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
            className="form-control"
          />
          </div>

          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
}
