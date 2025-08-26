
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this context, we will throw an error if the key is not found.
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const CULTURAL_CONTEXT = `
Pueblos Originarios de la Segunda Región de Chile: Lenguas Ancestrales, Patrimonio Cultural y Oportunidades de la Inteligencia Artificial.
Resumen Ejecutivo: Este informe analiza la situación de los pueblos originarios de la Segunda Región de Chile, con énfasis en el pueblo Lickan Antay (atacameño). Se examina el estado de su lengua ancestral kunza/ckunsa, sus tradiciones, el potencial turístico y las oportunidades de la inteligencia artificial (IA) para la preservación, revitalización y desarrollo cultural.
Hallazgos principales: El pueblo Lickan Antay cuenta con 30.369 personas (censo 2017). La lengua kunza está en proceso de revitalización. La IA presenta oportunidades para la documentación, preservación y transmisión cultural. El turismo cultural es un potencial económico importante.

Contexto: El territorio ancestral del pueblo Lickan Antay se encuentra en las provincias de El Loa y Alto El Loa, en una geografía desértica y altiplánica. La región ha sido habitada por más de siete mil años.

Lengua Kunza/Ckunsa: Fue la lengua principal, pero su uso decayó por la hispanización desde el siglo XVI. Hoy es una "lengua dormida" según la UNESCO. Hay esfuerzos de revitalización actuales, incluyendo reconstrucción científica, transmisión social y recuperación artística. En 2019 se lanzó una aplicación móvil del diccionario Ckunsa.

Cultura y Tradiciones: Subsisten prácticas religiosas y ceremoniales prehispánicas integradas con elementos cristianos. Ceremonias importantes incluyen El Convido (ofrenda a la Patahoiri - madre tierra), Carnaval atacameño, Limpia de canales y Floramiento del ganado. La geografía sagrada incluye el Volcán Licancabur y cerros tutelares. La economía tradicional se basa en agricultura en terrazas, ganadería de auquénidos, artesanía y minería ancestral.

Oportunidades de la IA:
1.  Preservación y Revitalización de Lenguas:
    -   Análisis de corpus históricos: IA para analizar glosarios y documentos antiguos.
    -   Herramientas de aprendizaje: Aplicaciones móviles inteligentes, chatbots para práctica conversacional, reconocimiento de voz para evaluar pronunciación y traducción automática.
    -   Generación de contenido: Síntesis de voz, producción de contenido educativo y cuentos interactivos en kunza.
2.  Documentación Cultural:
    -   Archivo multimedia inteligente: Catalogación y transcripción automáticas, análisis de contenido y restauración digital de archivos.
    -   Mapeo cultural: GIS inteligente, realidad aumentada para superponer información histórica, modelado 3D de sitios arqueológicos.
3.  Desarrollo de Turismo Inteligente:
    -   Experiencias mejoradas: Asistentes IA multilingües, personalización de rutas, interpretación en tiempo real y gamificación cultural.
    -   Gestión sostenible: Monitoreo de capacidad en sitios sensibles, predicción de impactos y optimización de flujos de visitantes.
4.  Educación y Transmisión Cultural:
    -   Plataformas innovadoras: Aprendizaje adaptativo con currículum personalizado, evaluación inteligente, realidad virtual para inmersión cultural y laboratorios virtuales de artesanías.

Desafíos y Consideraciones Éticas:
-   Técnicos: Escasez de datos digitales en kunza, complejidad de la reconstrucción lingüística, conectividad limitada.
-   Socioculturales: Resistencia a la digitalización de conocimiento sagrado, brecha generacional, riesgo de apropiación cultural.
-   Principios Éticos: Autodeterminación (las comunidades deben controlar sus datos), reciprocidad (los beneficios deben retornar a las comunidades), respeto y transparencia. El liderazgo indígena es clave para el éxito.
`;

export const getChatResponse = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `
Eres un asistente experto, respetuoso y conocedor de la cultura del pueblo Lickan Antay (atacameño) de la Segunda Región de Chile y las aplicaciones de la inteligencia artificial para su preservación.
Tu conocimiento se basa EXCLUSIVAMENTE en el siguiente contexto: ${CULTURAL_CONTEXT}.
NO debes usar información externa. Si la pregunta del usuario no puede ser respondida con el contexto proporcionado, debes indicar de forma amable que no tienes información sobre ese tema específico y que solo puedes responder preguntas relacionadas con el informe sobre los pueblos originarios y la IA.
Responde siempre en español. Sé claro, conciso y mantén un tono de profundo respeto por la cultura indígena.
No inventes información. Si no sabes la respuesta, dilo.
`,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Lo siento, tuve un problema al conectarme con el servicio de IA. Por favor, intenta de nuevo más tarde.";
  }
};
