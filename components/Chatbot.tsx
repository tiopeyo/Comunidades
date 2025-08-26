
import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { getChatResponse } from '../services/geminiService';
import { Send, Bot, User, Loader } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getChatResponse(input);
      const botMessage: ChatMessage = { role: 'model', content: response };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching chat response:', error);
      const errorMessage: ChatMessage = {
        role: 'model',
        content: 'Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-stone-200" style={{ height: '70vh', display: 'flex', flexDirection: 'column' }}>
      <div className="flex-grow p-6 overflow-y-auto bg-stone-50 space-y-4">
        {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center text-stone-500">
                <Bot size={48} className="mb-4"/>
                <p className="text-lg">El asistente está listo.</p>
                <p>Pregunta sobre la cultura Lickan Antay y la IA.</p>
                 <p className="text-sm mt-4 p-2 bg-amber-100 text-amber-800 rounded-md">Ej: "¿Cómo puede la IA ayudar a preservar el idioma Kunza?"</p>
            </div>
        )}
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
            {msg.role === 'model' && (
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-600 flex items-center justify-center text-white">
                <Bot size={24} />
              </div>
            )}
            <div className={`max-w-md p-3 rounded-lg ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-stone-200 text-stone-800'}`}>
              <p className="whitespace-pre-wrap">{msg.content}</p>
            </div>
             {msg.role === 'user' && (
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <User size={24} />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-600 flex items-center justify-center text-white">
              <Bot size={24} />
            </div>
            <div className="max-w-md p-3 rounded-lg bg-stone-200 text-stone-800 flex items-center">
              <Loader className="animate-spin h-5 w-5 mr-2" />
              <span>Pensando...</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t border-stone-200 bg-white flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta aquí..."
          className="flex-grow w-full px-4 py-2 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-amber-600 text-white p-3 rounded-full hover:bg-amber-700 disabled:bg-stone-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors"
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
