export default function HomePage() {
  return (
    <section className="card shadow-sm border-0">
      <div className="card-body p-4">
        <h1 className="h3 mb-2">Mini Rede Social</h1>
        <p className="text-body-secondary mb-4">
          Projeto frontend feito em Next.js para aula, com login/cadastro simulados,
          perfil, configuracoes e feed de comentarios.
        </p>

        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h5">Funcionalidades</h3>
                <ul className="mb-0">
                  <li>Cadastro e login simulados</li>
                  <li>Perfil com foto, bio e interesses</li>
                  <li>Configuracao de tema e dados</li>
                  <li>Feed de comentarios com autor</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h5">Objetivo</h3>
                <p className="mb-0">
                  Todas as paginas foram preparadas para futura integracao com backend.
                  Hoje os dados ficam no navegador para facilitar a demonstracao.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
