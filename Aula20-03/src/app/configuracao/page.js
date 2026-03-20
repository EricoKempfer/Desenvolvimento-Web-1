"use client";

import { useEffect, useState } from "react";
import { getUser, saveUser } from "@/lib/storage";

export default function ConfiguracaoPage() {
  const [form, setForm] = useState({
    username: "",
    photo: "",
    bio: "",
    interests: "",
    color: "azul",
  });

  useEffect(() => {
    const user = getUser();
    setForm({
      username: user.username || "",
      photo: user.photo || "https://placehold.co/120x120",
      bio: user.bio || "",
      interests: user.interests || "",
      color: user.color || "azul",
    });
  }, []);

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = getUser();
    saveUser({ ...user, ...form });
    alert("Configuracoes salvas com sucesso.");
  }

  return (
    <section className="card shadow-sm border-0 form-wrap mx-auto">
      <div className="card-body p-4">
        <h1 className="h3 mb-3">Configuracao do Perfil</h1>
        <form className="d-grid gap-3" onSubmit={handleSubmit}>
          <div>
            <label className="form-label">Nome</label>
          <input
            value={form.username}
            onChange={(e) => handleChange("username", e.target.value)}
            className="form-control"
          />
          </div>

          <div>
            <label className="form-label">URL da foto</label>
          <input
            value={form.photo}
            onChange={(e) => handleChange("photo", e.target.value)}
            className="form-control"
          />
          </div>

          <div>
            <label className="form-label">Bio</label>
          <textarea
            rows={4}
            value={form.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
            className="form-control"
          />
          </div>

          <div>
            <label className="form-label">Interesses</label>
          <input
            value={form.interests}
            onChange={(e) => handleChange("interests", e.target.value)}
            className="form-control"
          />
          </div>

          <div>
            <label className="form-label">Preferencia visual</label>
          <select
            value={form.color}
            onChange={(e) => handleChange("color", e.target.value)}
            className="form-select"
          >
            <option value="azul">Azul</option>
            <option value="verde">Verde</option>
            <option value="vermelho">Vermelho</option>
          </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Salvar alteracoes
          </button>
        </form>
      </div>
    </section>
  );
}
