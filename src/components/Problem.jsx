export default function Problem() {
  return (
  <section id="problema" className="section-panel problem-split">
  <div className="problem-split-grid">

    {/* LADO VISUAL */}
    <div className="problem-split-visual">

      <h2>El problema</h2>
    </div>

    {/* LADO CONTENIDO */}
    <div className="problem-split-content">

      <p className="problem-lead">
        Cuando los flujos legales crecen sin estructura,
        el riesgo se vuelve invisible hasta que es demasiado tarde.
      </p>

      <p className="problem-body">
        En organizaciones con múltiples proyectos, áreas o proveedores,
        los procesos legales suelen evolucionar de forma reactiva.
        Contratos distintos, criterios ambiguos y revisiones repetidas
        generan fricción operativa y aumentan la exposición legal.
      </p>

      <div className="problem-impact-list">
        <div>
          <strong>Inconsistencia</strong>
          <span>Documentos sin estándar ni criterios comunes entre equipos.</span>
        </div>
        <div>
          <strong>Retrabajo</strong>
          <span>Revisiones repetidas que consumen tiempo y recursos legales.</span>
        </div>
        <div>
          <strong>Riesgo oculto</strong>
          <span>Falta de trazabilidad en decisiones críticas.</span>
        </div>
      </div>

      <p className="problem-warning">
        Automatizar procesos legales sin un diagnóstico previo no reduce el riesgo: lo escala.
      </p>

    </div>
  </div>
</section>
  )
}
