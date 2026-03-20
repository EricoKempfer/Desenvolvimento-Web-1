"use client";

import { useState } from "react";
import { getUser, setAuth } from "@/lib/storage";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const user = getUser();

    if (email === user.email && password === user.password) {
      setAuth({ logged: true, username: user.username });
      alert("Login realizado com sucesso (simulado).");
      return;
    }

    alert("Email ou senha invalidos.");
  }

  return (
    <section className="card shadow-sm border-0 form-wrap mx-auto">
      <div className="card-body p-4">
        <h1 className="h3 mb-3">Login</h1>
        <form className="d-grid gap-3" onSubmit={handleSubmit}>
          <div>
            <label className="form-label">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
          </div>

          <div>
            <label className="form-label">Senha</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
          </div>

          <button type="submit" className="btn btn-primary">
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
}
