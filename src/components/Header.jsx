export default function Header() {
  return (
    <header>
      <a className="skip" href="#top">Saltar al contenido</a>

      <div className="container">
        <div className="nav">
          <a className="brand" href="#top">
            <img src="/orio.png" alt="Orion Industries" className="logo" />
          </a>

          <nav className="nav-links">
            <a href="#problema">Problema</a>
            <a href="#soluciones">Beneficios</a>
            <a href="#como">Metodología</a>
            <a href="#producto">Producto</a>
          </nav>

          <div className="nav-actions">
            <a className="btn" href="#como">Ver metodología</a>
            <a className="btn primary" href="#contacto">Solicitar diagnóstico</a>
          </div>
        </div>
      </div>
    </header>
  );
}
