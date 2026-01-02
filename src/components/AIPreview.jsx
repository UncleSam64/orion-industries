export default function AIPreview() {
  return (
    <aside className="card hero-card ai-preview" aria-label="Vista previa del producto JurisprudentIA">
      <div className="ai-head">
        <div>
          <h3>JurisprudentIA · Vista previa</h3>
          <p className="mini">
            Asistente legal con supervisión humana. Redacción, revisión y seguimiento dentro de un flujo definido.
          </p>
        </div>

        <div className="ai-status" aria-label="Estado del sistema">
          <span className="status-dot" aria-hidden="true" />
          <span>Listo</span>
        </div>
      </div>

      <div className="mock" role="list" aria-label="Módulos">
        <div className="row" role="listitem">
          <span className="row-title">Redacción asistida</span>
          <span className="pill">Sugerencia</span>
        </div>

        <div className="row" role="listitem">
          <span className="row-title">Revisión de formato</span>
          <span className="pill sage">Validación</span>
        </div>

        <div className="row" role="listitem">
          <span className="row-title">Seguimiento de obligaciones</span>
          <span className="pill">Monitoreo</span>
        </div>

        <div className="row" role="listitem">
          <span className="row-title">Alertas para supervisión</span>
          <span className="pill sage">Control</span>
        </div>
      </div>

      <div className="ai-foot">
        <span className="tag">
          <b aria-hidden="true" /> IA con control humano
        </span>
        <span className="tag">
          <b aria-hidden="true" /> Auditoría y trazabilidad
        </span>
      </div>
    </aside>
  );
}
