import React from 'react';
import { Terminal, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function CommandsSlide() {
  const examples = [
    {
      command: '/addexpense 1500 обед',
      response: 'Расход успешно добавлен.',
      delay: 0.1,
    },
    {
      command: '/addincome 250000 зарплата',
      response: 'Доход успешно добавлен.',
      delay: 0.2,
    },
    {
      command: '/add Купить продукты в субботу',
      response: 'Заметка сохранена.',
      delay: 0.3,
    },
    {
      command: '/advise',
      response: '💼 Общий доход: 250000.00 ₸\n💸 Общие расходы: 46500.00 ₸\n📊 Баланс: +203500.00 ₸\n\nСовет от ИИ:\nВаш финансовый баланс выглядит здоровым. Рекомендую направить 20-30% свободных средств на создание финансовой подушки безопасности и инвестиции.',
      delay: 0.4,
    },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-16 py-12">
      {/* Title */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
          <Terminal className="w-5 h-5 text-green-400" />
          <span className="text-green-400">Примеры использования</span>
        </div>

        <h2 className="text-white mb-4" style={{ fontSize: '3.5rem', fontWeight: '700' }}>
          Примеры команд
        </h2>
        <p className="text-white/60" style={{ fontSize: '1.25rem' }}>
          Посмотрите, как бот отвечает на запросы
        </p>
      </motion.div>

      {/* Examples Grid */}
      <div className="grid grid-cols-2 gap-6 overflow-y-auto max-h-[600px] pr-2">
        {examples.map((example, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: example.delay, duration: 0.5 }}
            className="group"
          >
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#0088CC]/50 transition-all duration-300">
              {/* Command Input */}
              <div className="mb-4">
                <div className="text-white/40 text-sm mb-2">Запрос:</div>
                <div className="px-4 py-3 bg-gradient-to-br from-[#0088CC] to-[#3BAEE6] rounded-xl rounded-br-sm">
                  <code className="text-white text-sm">{example.command}</code>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-3">
                <ArrowRight className="w-5 h-5 text-[#0088CC]" />
              </div>

              {/* Bot Response */}
              <div>
                <div className="text-white/40 text-sm mb-2">Ответ бота:</div>
                <div className="px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl rounded-bl-sm">
                  <p className="text-white text-sm whitespace-pre-line leading-relaxed">
                    {example.response}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Info Box */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8 p-4 bg-gradient-to-r from-[#0088CC]/10 to-[#3BAEE6]/10 border border-[#0088CC]/30 rounded-xl"
      >
        <p className="text-white/60 text-sm text-center">
          💬 Все команды работают в естественном языке и обрабатываются мгновенно
        </p>
      </motion.div>
    </div>
  );
}
