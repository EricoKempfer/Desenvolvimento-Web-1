"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getUser } from "@/lib/storage";

export default function PerfilPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  if (!user) {
    return (
      <section className="card shadow-sm border-0">
        <div className="card-body">Carregando perfil...</div>
      </section>
    );
  }

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body p-4">
        <h1 className="h3 mb-3">Perfil do Usuario</h1>
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body d-flex flex-column align-items-center justify-content-center gap-2">
                <Image
                  src={user.photo}
                  alt="Foto do usuario"
                  className="avatar border"
                  width={110}
                  height={110}
                />
                <p className="text-body-secondary mb-0">Foto de perfil</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-8">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h5">{user.username}</h3>
                <p className="mb-2">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="mb-2">
                  <strong>Bio:</strong> {user.bio}
                </p>
                <p className="mb-2">
                  <strong>Interesses:</strong> {user.interests || "Nao informado"}
                </p>
                <p className="mb-0">
                  <strong>Cor favorita do perfil:</strong> {user.color || "azul"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
