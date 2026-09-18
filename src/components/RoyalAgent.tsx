import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { agentKnowledge, agentFallback, agentGreeting } from '../data/agentKnowledge';

interface Message {
  id: string;
  type: 'user' | 'agent';
  text: string;
  link?: string;
  linkText?: string;
}

export const RoyalAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: Date.now().toString(),
          type: 'agent',
          text: agentGreeting
        }
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const newUserMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: userText
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');

    // Process answer
    setTimeout(() => {
      const lowerInput = userText.toLowerCase();
      let foundAnswer = null;

      for (const item of agentKnowledge) {
        if (item.keywords.some(kw => lowerInput.includes(kw))) {
          foundAnswer = item;
          break;
        }
      }

      const agentMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'agent',
        text: foundAnswer ? foundAnswer.answer : agentFallback,
        link: foundAnswer?.link,
        linkText: foundAnswer?.linkText
      };

      setMessages(prev => [...prev, agentMsg]);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-[320px] h-[480px] bg-white rounded-2xl shadow-2xl border border-ink-100/10 flex flex-col overflow-hidden sm:w-[350px]"
          >
            {/* Header */}
            <div className="gradient-ink text-white p-4 flex items-center justify-between border-b border-champagne-400/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-champagne-400 rounded-full flex items-center justify-center shadow-sm">
                  <Bot className="w-5 h-5 text-ink-950" />
                </div>
                <span className="font-heading font-semibold text-sm">Royal Advisor</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors focus:outline-none"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-ivory-50 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                      msg.type === 'user'
                        ? 'bg-champagne-500 text-white rounded-br-sm shadow-sm'
                        : 'bg-white text-ink-950 shadow-sm border border-ink-100/10 rounded-bl-sm'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    {msg.link && msg.linkText && (
                      <div className="mt-2 pt-2 border-t border-ink-100/10">
                        <Link
                          to={msg.link}
                          onClick={() => setIsOpen(false)}
                          className="text-champagne-600 font-semibold hover:text-champagne-700 underline text-sm"
                        >
                          {msg.linkText}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-ink-100/10 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question about RES..."
                className="flex-1 px-4 py-2 rounded-full border border-ink-100/20 focus:outline-none focus:border-champagne-400 text-sm text-ink-950 placeholder:text-ink-300"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="w-10 h-10 bg-champagne-400 text-ink-950 rounded-full flex items-center justify-center hover:bg-champagne-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0 font-bold"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 gradient-ink text-champagne-300 hover:text-white rounded-full shadow-xl border border-champagne-400/30 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 focus:outline-none"
        aria-label="Open chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default RoyalAgent;
