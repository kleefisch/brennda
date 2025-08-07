"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import WhatsAppLogo from "@/components/icons/whatsapp-logo";

const WHATSAPP_NUMBER = "5562982677272"; // Número real da Brennda
const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5562982677272&text=Ol%C3%A1%2C+Dra.+Brennda%21%0A%0APreciso+de+suporte+jur%C3%ADdico.+Voc%C3%AA+poderia+me+auxiliar%3F&type=phone_number&app_absent=0";

export const WhatsappPopup = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [hasSeenMessage, setHasSeenMessage] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Mensagem aparece após 10 segundos
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 10000);

    // Atualizar hora
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 60000);

    return () => {
      clearTimeout(timer);
      clearInterval(timeInterval);
    };
  }, []);

  const closeBubble = () => {
    setShowBubble(false);
    setHasSeenMessage(true);
  };

  const toggleBubble = () => {
    if (!showBubble) {
      setHasSeenMessage(true);
    }
    setShowBubble(!showBubble);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Bolha de conversa */}
      {showBubble && (
        <div className="mb-3 animate-bubble-appear">
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-[280px] transform origin-bottom-right">
            {/* Cabeçalho da conversa */}
            <div className="flex items-center mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src="/images/brennda.jpg" 
                    alt="Dra. Brennda Silva" 
                    className="w-full h-full object-cover scale-[2.5] object-[center_-125%]"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Dra. Brennda Silva</div>
                  <div className="text-xs text-green-600">Online</div>
                </div>
              </div>
              <button
                onClick={closeBubble}
                className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 hover:bg-gray-600 rounded-full flex items-center justify-center text-white shadow-lg transition-colors z-10"
                aria-label="Fechar"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mensagem */}
            <div className="bg-[#E7F3E7] rounded-2xl rounded-bl-sm p-3 mb-3 animate-message-appear">
              <p className="text-sm text-gray-800 leading-relaxed">
                Olá! Aqui é a <strong>Dra. Brennda Silva</strong>. Se precisar de apoio jurídico, estou disponível para ajudar você agora.
              </p>
              <div className="flex items-center justify-end mt-2 gap-1">
                <span className="text-xs text-gray-500">{currentTime}</span>
                {/* Ícones de check duplo do WhatsApp */}
                <div className="flex items-center -space-x-0.5">
                  <svg className="w-3 h-3 text-[#53bdeb]" viewBox="0 0 16 15" fill="currentColor">
                    <path d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"/>
                  </svg>
                  <svg className="w-3 h-3 text-[#53bdeb]" viewBox="0 0 16 15" fill="currentColor">
                    <path d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Botão de resposta */}
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              className="flex items-center justify-center gap-2 bg-[#1da851] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#16a045] transition-colors w-full"
            >
              <WhatsAppLogo className="w-4 h-4" />
              Conversar
            </Link>

            {/* Triângulo da bolha */}
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Botão flutuante */}
      <button
        onClick={toggleBubble}
        className="w-12 h-12 bg-[#1da851] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 border-2 border-white"
        aria-label="Abrir WhatsApp"
      >
        <WhatsAppLogo className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};
