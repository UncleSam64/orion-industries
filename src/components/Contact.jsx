 export default function Contact() {
  return (
    <section id="contacto" className="section-final">
      <div className="container">
        <div className="panel">
          <h2>Solicita tu diagnóstico</h2>
          <p className="sub">
            Analizamos tu contexto legal y te proponemos un plan claro y accionable.
          </p>

          <p style={{ marginTop: 16, fontWeight: 700 }}>
            📞 +52 614 665 8199
          </p>

          <div className="cta-row">
            <a className="btn primary" href="tel:+52614XXXXXXXX">
              Llamar
            </a>
            <a
              className="btn"
              href="mailto:contacto@tudominio.com"
            >
              Enviar correo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
