
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OpportunityCard from './components/OpportunityCard';
import { 
  BookHeart, Landmark, Palmtree, GraduationCap,
  FileSearch, Mic, AudioWaveform, Camera, Map, 
  Users, Link as LinkIcon, Gamepad, FlaskConical, SignalLow,
  UserCheck, Repeat, Eye, Scale, Mail, Phone, Globe, Linkedin, User
} from 'lucide-react';

const App: React.FC = () => {

  const opportunities = [
    {
      id: "linguistica",
      icon: <BookHeart size={48} className="text-amber-600" />,
      title: "Revitalización Lingüística",
      description: "La IA puede ser un aliado crucial para documentar, enseñar y revitalizar la lengua Kunza, conectando a las nuevas generaciones con sus raíces lingüísticas.",
      subPoints: [
        { icon: <FileSearch size={24} className="text-stone-500" />, title: "Análisis de Corpus Históricos", description: "Utilizar IA para analizar glosarios coloniales y documentos antiguos, reconstruyendo la gramática y el vocabulario." },
        { icon: <Mic size={24} className="text-stone-500" />, title: "Herramientas de Aprendizaje", description: "Desarrollar aplicaciones móviles, chatbots conversacionales y sistemas de reconocimiento de voz para la práctica y evaluación de la pronunciación." },
        { icon: <AudioWaveform size={24} className="text-stone-500" />, title: "Generación de Contenido", description: "Crear voces sintéticas, contenido educativo y cuentos interactivos en Kunza para fomentar su uso en la vida diaria." }
      ]
    },
    {
      id: "cultural",
      icon: <Landmark size={48} className="text-amber-600" />,
      title: "Documentación Cultural",
      description: "Proteger el patrimonio tangible e intangible mediante tecnologías que permiten catalogar, restaurar y visualizar la riqueza cultural Lickan Antay.",
      subPoints: [
        { icon: <Camera size={24} className="text-stone-500" />, title: "Archivo Multimedia Inteligente", description: "Catalogación y transcripción automática de fotos, videos y audios, facilitando el acceso y análisis del material." },
        { icon: <Map size={24} className="text-stone-500" />, title: "Mapeo Cultural Avanzado", description: "Crear mapas interactivos (GIS), reconstrucciones 3D de sitios arqueológicos y experiencias de realidad aumentada." }
      ]
    },
    {
      id: "turismo",
      icon: <Palmtree size={48} className="text-amber-600" />,
      title: "Turismo Inteligente y Sostenible",
      description: "Mejorar la experiencia del visitante y asegurar la sostenibilidad del turismo, generando ingresos para las comunidades mientras se protege el patrimonio.",
      subPoints: [
        { icon: <Users size={24} className="text-stone-500" />, title: "Experiencias Turísticas Mejoradas", description: "Asistentes virtuales multilingües (incluyendo Kunza), personalización de rutas y gamificación cultural." },
        { icon: <LinkIcon size={24} className="text-stone-500" />, title: "Gestión Sostenible", description: "Monitoreo de la capacidad de carga de sitios sensibles y predicción del impacto turístico para una mejor planificación." }
      ]
    },
    {
      id: "educacion",
      icon: <GraduationCap size={48} className="text-amber-600" />,
      title: "Educación y Transmisión Cultural",
      description: "Diseñar plataformas educativas innovadoras que integren la cosmovisión andina y faciliten la transmisión de conocimiento intergeneracional.",
      subPoints: [
        { icon: <Gamepad size={24} className="text-stone-500" />, title: "Plataformas de Aprendizaje Adaptativo", description: "Crear currículos personalizados y evaluaciones inteligentes que se adapten al ritmo de cada estudiante." },
        { icon: <FlaskConical size={24} className="text-stone-500" />, title: "Realidad Virtual y Aumentada", description: "Simular ceremonias, visitar aldeas ancestrales virtualmente y practicar artesanías en laboratorios digitales." }
      ]
    }
  ];

  const challenges = [
    {
      icon: <SignalLow size={32} className="text-red-600" />,
      title: "Desafíos Técnicos",
      points: [
        "Escasez de datos digitales en Kunza para entrenar modelos.",
        "Complejidad de la reconstrucción lingüística desde fragmentos.",
        "Conectividad a internet limitada en comunidades rurales."
      ]
    },
    {
      icon: <Users size={32} className="text-red-600" />,
      title: "Desafíos Socioculturales",
      points: [
        "Resistencia a digitalizar conocimiento sagrado.",
        "Brecha generacional en la adopción tecnológica.",
        "Riesgo de apropiación y distorsión cultural."
      ]
    }
  ];

  const ethicalPrinciples = [
    {
      icon: <UserCheck size={32} className="text-amber-600" />,
      title: "Liderazgo Indígena",
      description: "Las comunidades deben liderar y tener control total sobre los proyectos tecnológicos y sus datos."
    },
    {
      icon: <Repeat size={32} className="text-amber-600" />,
      title: "Reciprocidad",
      description: "Los beneficios generados deben retornar directamente a las comunidades, fortaleciendo su bienestar."
    },
    {
      icon: <Eye size={32} className="text-amber-600" />,
      title: "Transparencia",
      description: "Los procesos deben ser abiertos y comprensibles, asegurando un consentimiento libre, previo e informado."
    },
    {
      icon: <Scale size={32} className="text-amber-600" />,
      title: "Respeto Cultural",
      description: "La tecnología debe reconocer y adaptarse a los protocolos y la cosmovisión indígena."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      <Header />
      <main>
        <Hero />
        
        <section id="oportunidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-base font-semibold text-amber-600 tracking-wide uppercase">Áreas de Aplicación</h2>
              <p className="mt-2 text-3xl font-extrabold text-stone-900 tracking-tight sm:text-4xl">
                IA al Servicio de la Cultura Ancestral
              </p>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-stone-500">
                La inteligencia artificial ofrece herramientas sin precedentes para proteger, revitalizar y compartir la riqueza cultural del pueblo Lickan Antay de forma clara y estructurada.
              </p>
            </div>
            
            <div className="mt-20 space-y-20">
              {opportunities.map((opp) => (
                <div key={opp.id} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1 p-6 bg-stone-100 rounded-lg">
                    <div className="flex items-center gap-4">
                       {opp.icon}
                       <h3 className="text-2xl font-bold text-stone-800">{opp.title}</h3>
                    </div>
                    <p className="mt-4 text-stone-600">{opp.description}</p>
                  </div>
                  <div className="lg:col-span-2 space-y-6">
                    {opp.subPoints.map((sub, index) => (
                       <div key={index} className="flex items-start gap-4 p-4 rounded-md hover:bg-stone-50 transition-colors">
                         <div className="flex-shrink-0 mt-1">{sub.icon}</div>
                         <div>
                           <h4 className="font-semibold text-stone-800">{sub.title}</h4>
                           <p className="text-stone-600">{sub.description}</p>
                         </div>
                       </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="desafios" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-base font-semibold text-amber-600 tracking-wide uppercase">Una Visión Equilibrada</h2>
              <p className="mt-2 text-3xl font-extrabold text-stone-900 tracking-tight sm:text-4xl">
                Desafíos y Principios Éticos
              </p>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-stone-500">
                Para que la IA sea una herramienta de empoderamiento, es crucial abordar sus desafíos y guiarse por principios éticos sólidos centrados en la comunidad.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Challenges Column */}
              <div className="space-y-10">
                {challenges.map((challenge, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-3">
                      {challenge.icon}
                      <h3 className="text-xl font-bold text-stone-800">{challenge.title}</h3>
                    </div>
                    <ul className="mt-4 ml-2 space-y-2 list-disc list-inside text-stone-600">
                      {challenge.points.map((point, pIndex) => (
                        <li key={pIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Ethical Principles Column */}
              <div>
                 <h3 className="text-xl font-bold text-stone-800 mb-6 text-center md:text-left">Principios Fundamentales</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {ethicalPrinciples.map((principle, index) => (
                     <OpportunityCard 
                       key={index} 
                       icon={principle.icon} 
                       title={principle.title} 
                       description={principle.description} 
                     />
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-base font-semibold text-amber-600 tracking-wide uppercase">NetxTrust</h2>
                    <p className="mt-2 text-3xl font-extrabold text-stone-900 tracking-tight sm:text-4xl">
                        Domina la Inteligencia Artificial sin ser Experto en Tecnología
                    </p>
                </div>

                <div className="bg-stone-100 rounded-lg shadow-xl overflow-hidden">
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-stone-800 text-center">Sobre NetxTrust</h3>
                    </div>
                    <div className="bg-stone-50 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-1 flex justify-center">
                            <div className="w-40 h-40 rounded-full bg-stone-300 flex items-center justify-center ring-4 ring-amber-500">
                                 <User size={80} className="text-stone-500"/>
                            </div>
                        </div>
                        <div className="md:col-span-2 text-center md:text-left">
                            <h4 className="text-2xl font-bold text-stone-900">Pedro L.A. Hidalgo Rodriguez</h4>
                            <p className="text-lg text-amber-600 font-semibold mt-1">Ingeniero Informático especializado en Transformación Digital</p>
                            <p className="mt-2 text-stone-600">Con amplia experiencia en el sector tecnológico, enfocado en innovación digital y la aplicación de inteligencia artificial.</p>
                        </div>
                    </div>
                     <div className="bg-stone-100 p-8 border-t border-stone-200">
                         <h4 className="text-xl font-bold text-stone-800 text-center mb-6">Información de Contacto</h4>
                         <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                             <a href="mailto:netxtrust@gmail.com" className="flex items-center gap-3 text-stone-700 hover:text-amber-600 transition-colors group">
                                 <div className="bg-white p-2 rounded-full shadow-md group-hover:bg-amber-100"><Mail size={20} /></div>
                                 <span>netxtrust@gmail.com</span>
                             </a>
                             <a href="https://wa.me/56994294397" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-700 hover:text-amber-600 transition-colors group">
                                 <div className="bg-white p-2 rounded-full shadow-md group-hover:bg-amber-100"><Phone size={20} /></div>
                                 <span>+56 9 9429 4397</span>
                             </a>
                             <a href="http://www.pyaservicios.cl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-700 hover:text-amber-600 transition-colors group">
                                 <div className="bg-white p-2 rounded-full shadow-md group-hover:bg-amber-100"><Globe size={20} /></div>
                                 <span>www.pyaservicios.cl</span>
                             </a>
                             <a href="https://www.linkedin.com/in/pedro-hidalgo-b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-700 hover:text-amber-600 transition-colors group">
                                 <div className="bg-white p-2 rounded-full shadow-md group-hover:bg-amber-100"><Linkedin size={20} /></div>
                                 <span>Perfil de LinkedIn</span>
                             </a>
                         </div>
                     </div>
                </div>
            </div>
        </section>
      </main>
      <footer className="bg-stone-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-stone-400">
          <p>&copy; {new Date().getFullYear()} Sabiduría Ancestral, Futuro Digital. Un proyecto conceptual.</p>
           <p className="text-sm mt-2">Información basada en el informe "Pueblos Originarios de la Segunda Región de Chile: Lenguas Ancestrales, Patrimonio Cultural y Oportunidades de la Inteligencia Artificial".</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
