import { useState } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 py-6 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Movimiento Ideal Nacionalista (MIN)</h1>
          <p className="text-sm md:text-base italic hidden md:block">"Menos política, más solución"</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6">
            Una propuesta política posideológica, tecnocrática y transformadora orientada a refundar Venezuela sobre bases de orden, prosperidad y justicia.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 transition duration-300 px-6 py-3 rounded-full text-lg font-semibold shadow-md">
            Conoce Nuestro Plan
          </button>
        </div>
      </section>

      {/* Ideological Foundations */}
      <section id="foundations" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">⚖️ Fundamentos Ideológicos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Posideológico: Fuera de las viejas divisiones izquierda-derecha.",
              "Tecnocrático: Gobernar con datos, no con ideología.",
              "Meritocrático: El mérito, no la militancia, define el acceso al poder.",
              "Nacional-cívico: Una identidad basada en el compromiso con el país.",
              "Modernizador: Visión digital, ambiental y global."
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <p className="text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section id="pillars" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">🏛️ Pilares Fundamentales del Proyecto Nacional</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "1. Refundación y Reordenamiento Nacional",
                content: [
                  "Gobierno técnico interino por 5 años encabezado por expertos.",
                  "Reforma electoral integral con votación electrónica segura.",
                  "Descentralización administrativa con autonomía regional.",
                  "Reforma constitucional modernizada inspirada en la de 1961."
                ]
              },
              {
                title: "2. Prosperidad Económica Sustentable",
                content: [
                  "Agenda económica liberal con desregulación gradual.",
                  "Zonas económicas estratégicas en principales ciudades.",
                  "Modernización de monopolios estatales como Pdvsa.",
                  "Fondo Nacional de Innovación de $500 millones anuales."
                ]
              },
              {
                title: "3. Justicia Severa y Transparencia Judicial",
                content: [
                  "Sistema judicial transparente con blockchain y acceso público.",
                  "Tribunal especializado en crímenes graves con evaluación internacional.",
                  "Contraloría automatizada con monitoreo en tiempo real.",
                  "Pena de muerte regulada para casos extremos con garantías internacionales."
                ]
              },
              {
                title: "4. Sociedad Ideal y Disciplinada",
                content: [
                  "Educación obligatoria hasta los 18 años con enfoque tecnológico.",
                  "Servicio comunitario remunerado para jóvenes entre 18 y 25 años.",
                  "Promoción de valores cívicos y campaña nacional “Venezuela Trabaja”.",
                  "Programas de reintegración social para civiles chavistas sin antecedentes."
                ]
              },
              {
                title: "5. Identidad Nacional y Liderazgo Visionario",
                content: [
                  "Pasaporte de contribución para extranjeros destacados.",
                  "Día Nacional del Compromiso Social cada primer domingo de noviembre.",
                  "Proyectos simbólicos de infraestructura estratégica nacional.",
                  "Capacitación continua de funcionarios públicos mediante academia certificada."
                ]
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full text-left px-6 py-4 bg-gray-800 flex justify-between items-center focus:outline-none"
                >
                  <span className="text-lg font-semibold">{pillar.title}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${activeSection === idx ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {activeSection === idx && (
                  <div className="px-6 pb-4 bg-gray-900">
                    <ul className="space-y-2 list-disc pl-5 text-gray-300">
                      {pillar.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Movimiento Ideal Nacionalista (MIN) – Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Transformando Venezuela desde la meritocracia, tecnología y orden.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;