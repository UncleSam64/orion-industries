import AIPreview from "./AIPreview";

export default function Hero() {
  return (
    <section className="hero section-screen section-center">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="kicker">
              <span className="dot" />
              Diagnóstico legal + IA supervisada
            </div>

            <h1>Diagnóstico legal inteligente para flujos operativos complejos</h1>

            <p className="lead">
              Analizamos y ordenamos tus procesos legales. Solo cuando el flujo lo permite,
              integramos <b>JurisprudentIA</b> para acelerar redacción, revisión y seguimiento.
            </p>

            <div className="hero-points">
              <div className="point"><span className="badge">Menos riesgo</span>Control y trazabilidad</div>
              <div className="point"><span className="badge">Más velocidad</span>Menos retrabajo</div>
              <div className="point"><span className="badge">Supervisión</span>IA con criterio humano</div>
            </div>

            <div className="cta-row">
              <a className="btn" href="#como">Ver cómo funciona</a>
              <a className="btn primary" href="#contacto">Solicitar diagnóstico</a>
            </div>
          </div>

          <AIPreview />
        </div>
      </div>
    </section>
  );
}
