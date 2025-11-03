import React from 'react';
import { Target, TrendingUp, Wallet, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function GoalSlide() {
  const goals = [
    {
      icon: Wallet,
      title: 'Автоматизация учёта',
      description: 'Отслеживание доходов и расходов в одном месте',
    },
    {
      icon: TrendingUp,
      title: 'Финансовая аналитика',
      description: 'Анализ ваших финансовых привычек и трендов',
    },
    {
      icon: CheckCircle2,
      title: 'Умные рекомендации',
      description: 'ИИ-советы для оптимизации бюджета',
    },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-16">
      {/* Title Section */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-[#0088CC]/10 border border-[#0088CC]/30 rounded-full">
          <Target className="w-5 h-5 text-[#0088CC]" />
          <span className="text-[#0088CC]">Цель проекта</span>
        </div>
        
        <h2 className="text-white mb-6" style={{ fontSize: '3.5rem', fontWeight: '700' }}>
          Зачем создан бот?
        </h2>
        
        <p className="text-white/60 max-w-3xl" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
          Finance Advisor помогает пользователям контролировать личные финансы в казахстанских тенге через удобный интерфейс Telegram, 
          автоматизируя процесс учёта доходов и расходов с поддержкой искусственного интеллекта Gemini AI.
        </p>
      </motion.div>

      {/* Goals Grid */}
      <div className="grid grid-cols-3 gap-6">
        {goals.map((goal, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0088CC]/20 to-[#3BAEE6]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#0088CC]/50 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-gradient-to-br from-[#0088CC] to-[#3BAEE6] rounded-xl flex items-center justify-center">
                <goal.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-white mb-3" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                {goal.title}
              </h3>
              
              <p className="text-white/50" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                {goal.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
