import React from 'react';
import { User, Send, Code, Database, Brain, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function ArchitectureSlide() {
  const components = [
    { icon: User, label: 'Пользователь', color: 'from-blue-500 to-cyan-500' },
    { icon: Send, label: 'Telegram API', color: 'from-[#0088CC] to-[#3BAEE6]' },
    { icon: Code, label: 'Python Telebot', color: 'from-yellow-500 to-orange-500' },
    { icon: Database, label: 'PostgreSQL', color: 'from-indigo-500 to-purple-500' },
    { icon: Brain, label: 'Gemini AI', color: 'from-pink-500 to-rose-500' },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-16">
      {/* Title */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-white mb-4" style={{ fontSize: '3.5rem', fontWeight: '700' }}>
          Архитектура проекта
        </h2>
        <p className="text-white/60" style={{ fontSize: '1.25rem' }}>
          Современный стек технологий для надёжной работы
        </p>
      </motion.div>

      {/* Architecture Flow */}
      <div className="flex items-center justify-center gap-4">
        {components.map((component, index) => (
          <React.Fragment key={index}>
            {/* Component Block */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 + index * 0.15, duration: 0.5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${component.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
              
              <div className="relative w-48 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#0088CC]/50 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${component.color} rounded-xl flex items-center justify-center`}>
                  <component.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-white text-center" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                  {component.label}
                </h3>
              </div>
            </motion.div>

            {/* Arrow */}
            {index < components.length - 1 && (
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.25 + index * 0.15, duration: 0.4 }}
              >
                <ArrowRight className="w-8 h-8 text-[#0088CC]" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Details */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="mt-16 grid grid-cols-3 gap-6"
      >
        <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
          <h4 className="text-[#0088CC] mb-2" style={{ fontSize: '1rem', fontWeight: '600' }}>
            Frontend
          </h4>
          <p className="text-white/60 text-sm">
            Telegram Bot API обеспечивает удобный пользовательский интерфейс
          </p>
        </div>

        <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
          <h4 className="text-[#0088CC] mb-2" style={{ fontSize: '1rem', fontWeight: '600' }}>
            Backend
          </h4>
          <p className="text-white/60 text-sm">
            Python Telebot обрабатывает команды и бизнес-логику
          </p>
        </div>

        <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
          <h4 className="text-[#0088CC] mb-2" style={{ fontSize: '1rem', fontWeight: '600' }}>
            AI & Storage
          </h4>
          <p className="text-white/60 text-sm">
            PostgreSQL хранит данные, Gemini AI даёт рекомендации
          </p>
        </div>
      </motion.div>
    </div>
  );
}
