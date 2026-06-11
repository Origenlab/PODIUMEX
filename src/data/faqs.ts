// ─────────────────────────────────────────────────────────────
// FAQ destacadas — fuente única reutilizada en todo el sitio
// (módulo HelpSection, contacto, etc.). El set completo vive en
// src/pages/preguntas-frecuentes.astro.
// ─────────────────────────────────────────────────────────────
export interface QA {
  q: string;
  a: string;
}

export const homeFaqs: QA[] = [
  { q: '¿Cuál es el tiempo de entrega?', a: 'Entrega express en 24 horas en CDMX, Monterrey y Guadalajara, y de 48 a 72 horas al resto de la república. Para pedidos con grabado personalizado el tiempo puede variar según la complejidad.' },
  { q: '¿Puedo personalizar el podium con mi logo?', a: 'Sí. Grabamos tu logo, escudo institucional o gubernamental con láser de alta precisión sobre acrílico o madera. Enviamos una prueba digital antes de grabar para tu aprobación.' },
  { q: '¿Cuál es la diferencia entre venta y renta?', a: 'La venta te da la propiedad permanente, ideal si haces eventos frecuentes. La renta es el uso por evento, perfecta para eventos únicos. Ambas incluyen nuestros estándares de calidad y soporte.' },
  { q: '¿Qué incluye el servicio de renta?', a: 'Entrega en tu sede, instalación y nivelación profesional, soporte técnico durante el evento y recolección al finalizar. También asesoría para el posicionamiento óptimo en el escenario.' },
  { q: '¿Hacen envíos a todo México?', a: 'Sí, cobertura nacional completa. Contamos con una red logística confiable que entrega tu podium en óptimas condiciones a cualquier ciudad del país.' },
  { q: '¿Los podiums tienen garantía?', a: 'Todos nuestros podiums incluyen garantía escrita de 2 a 3 años que cubre defectos de fabricación y acabados. Además ofrecemos mantenimiento preventivo y correctivo.' },
];
