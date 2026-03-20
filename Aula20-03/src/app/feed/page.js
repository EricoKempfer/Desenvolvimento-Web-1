"use client";

import { useEffect, useState } from "react";
import { addComment, getComments } from "@/lib/storage";

export default function FeedPage() {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  function refreshComments() {
    setComments(getComments());
  }

  useEffect(() => {
    refreshComments();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;

    addComment(text.trim());
    setText("");
    refreshComments();
  }

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body p-4">
        <h1 className="h3 mb-3">Comentarios / Feed</h1>

        <form className="d-grid gap-3" onSubmit={handleSubmit}>
          <div>
            <label className="form-label">Escreva um comentario</label>
          <textarea
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite aqui..."
            className="form-control"
          />
          </div>

          <button type="submit" className="btn btn-primary">
            Publicar
          </button>
        </form>

        <div className="card mt-4">
          <div className="card-body">
            <h3 className="h5">Lista de comentarios</h3>
            {comments.length === 0 ? (
              <p className="text-body-secondary mb-0">Nenhum comentario ainda.</p>
            ) : (
              <div className="list-group list-group-flush">
                {comments.map((comment) => (
                  <article key={comment.id} className="list-group-item px-0">
                    <p className="mb-1">
                      <strong>{comment.author}</strong>
                    </p>
                    <p className="mb-1">{comment.text}</p>
                    <p className="text-body-secondary mb-0 small">{comment.createdAt}</p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
