import React from 'react';
import { Send, User, Bot } from 'lucide-react';
import { motion } from 'motion/react';

export function InterfaceSlide() {
  const messages = [
    { type: 'user', text: '/addexpense 1500 обед', time: '10:23' },
    { type: 'bot', text: 'Расход успешно добавлен.', time: '10:23' },
    { type: 'user', text: '/addincome 250000 зарплата', time: '10:24' },
    { type: 'bot', text: 'Доход успешно добавлен.', time: '10:24' },
    { type: 'user', text: '/showstats', time: '10:25' },
    { type: 'bot', text: '📊 Финансовая статистика\n\n💰 Доходы:\n• зарплата: 250000.00 ₸\nВсего доходов: 250000.00 ₸\n\n💸 Расходы:\n• обед: 1500.00 ₸\n• продукты: 45000.00 ₸\nВсего расходов: 46500.00 ₸\n\n💼 Баланс: +203500.00 ₸', time: '10:25' },
    { type: 'user', text: '/ask Как сэкономить на еде?', time: '10:27' },
    { type: 'bot', text: '🤖 Ответ от ИИ:\n\nРассмотрите следующие способы экономии на продуктах:\n\n1. Составляйте список покупок заранее\n2. Покупайте сезонные продукты\n3. Готовьте дома вместо ресторанов\n4. Используйте акции и скидки\n5. Покупайте оптом то, что долго хранится', time: '10:27' },
  ];

  return (
    <div className="h-full flex items-center justify-center px-16">
      <div className="w-full max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-[#0088CC]/10 border border-[#0088CC]/30 rounded-full">
            <Send className="w-5 h-5 text-[#0088CC]" />
            <span className="text-[#0088CC]">Telegram Interface</span>
          </div>

          <h2 className="text-white mb-4" style={{ fontSize: '3.5rem', fontWeight: '700' }}>
            Интерфейс Telegram
          </h2>
          <p className="text-white/60" style={{ fontSize: '1.25rem' }}>
            Привычный мессенджер для управления финансами
          </p>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0088CC]/20 to-[#3BAEE6]/20 rounded-[2rem] blur-2xl" />
          
          {/* Phone Frame */}
          <div className="relative bg-[#1A1A1A] border border-white/20 rounded-[2rem] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-[#0D0D0D] to-[#1A1A1A] border-b border-white/10">
              <div className="w-11 h-11 bg-gradient-to-br from-[#0088CC] to-[#3BAEE6] rounded-full flex items-center justify-center shadow-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white" style={{ fontWeight: '600', fontSize: '0.95rem' }}>Finance Advisor Bot</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-green-400 text-xs">онлайн</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="chat-scroll space-y-3 p-5 max-h-[500px] overflow-y-auto bg-[#0D0D0D]">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ x: message.type === 'user' ? 50 : -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.4 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-end gap-2 ${message.type === 'user' ? 'max-w-[75%]' : 'max-w-[85%]'}`}>
                    {message.type === 'bot' && (
                      <div className="w-7 h-7 bg-gradient-to-br from-[#0088CC] to-[#3BAEE6] rounded-full flex items-center justify-center flex-shrink-0 shadow-md mb-1">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <div
                        className={`px-4 py-2.5 ${
                          message.type === 'user'
                            ? 'bg-gradient-to-br from-[#0088CC] to-[#3BAEE6] text-white rounded-2xl rounded-br-md shadow-lg'
                            : 'bg-[#1F1F1F] text-white rounded-2xl rounded-bl-md border border-white/10'
                        }`}
                      >
                        <p className="whitespace-pre-line text-sm leading-relaxed">{message.text}</p>
                      </div>
                      <p className={`text-xs text-white/40 mt-1 px-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                        {message.time}
                      </p>
                    </div>

                    {message.type === 'user' && (
                      <div className="w-7 h-7 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20 mb-1">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="px-5 py-4 bg-gradient-to-r from-[#0D0D0D] to-[#1A1A1A] border-t border-white/10 flex items-center gap-3">
              <div className="flex-1 px-4 py-2.5 bg-[#1F1F1F] border border-white/10 rounded-full text-white/40 text-sm">
                Введите команду...
              </div>
              <button className="w-11 h-11 bg-gradient-to-br from-[#0088CC] to-[#3BAEE6] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
