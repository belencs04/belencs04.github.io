// rag-config.js
// Configuración del asistente RAG de Belén Cereijo Silva.
//
// 1. MODO PÚBLICO (Cloudflare Worker):
//    Cualquier visitante en la web (GitHub Pages o local) puede chatear
//    con el asistente de forma 100% segura sin necesidad de claves.

window.RAG_CONFIG = {
  workerUrl: "https://belen-rag.bcereijosilva.workers.dev",
  key: ""
};
