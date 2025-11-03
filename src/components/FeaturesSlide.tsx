import React from 'react';
import { DollarSign, TrendingDown, Lightbulb, BarChart3, MessageCircleQuestion, StickyNote, History, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';

export function FeaturesSlide() {
  const features = [
    {
      icon: TrendingDown,
      command: '/addexpense',
      title: 'Добавить расход',
      description: 'Быстрая регистрация трат',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: DollarSign,
      command: '/addincome',
      title: 'Добавить доход',
      description: 'Учёт источников дохода',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: BarChart3,
      command: '/showstats',
      title: 'Показать статистику',
      description: 'Анализ доходов и расходов',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Lightbulb,
      command: '/advise',
      title: 'Получить совет',
      description: 'ИИ-рекомендации по финансам',
      color: 'from-[#0088CC] to-[#3BAEE6]',
    },
    {
      icon: MessageCircleQuestion,
      command: '/ask',
      title: 'Задать вопрос',
      description: 'ИИ-консультант по финансам',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: StickyNote,
      command: '/add',
      title: 'Добавить заметку',
      description: 'Сохранение важных напоминаний',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      icon: History,
      command: '/history',
      title: 'История запросов',
      description: 'Просмотр последних действий',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Trash2,
      command: '/clear',
      title: 'Очистить данные',
      description: 'Удаление всей истории',
      color: 'from-gray-500 to-slate-500',
    },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-16">
      {/* Title */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-white mb-4" style={{ fontSize: '3.5rem', fontWeight: '700' }}>
          Основные функции
        </h2>
        <p className="text-white/60" style={{ fontSize: '1.25rem' }}>
          Простые команды для полного контроля над финансами
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-4 gap-5 max-w-7xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
            className="group relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
            
            <div className="relative p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#0088CC]/50 transition-all duration-300 h-full">
              <div className={`w-11 h-11 mb-3 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              
              <div className="mb-3 px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg inline-block">
                <code className="text-[#0088CC] text-xs">{feature.command}</code>
              </div>
              
              <h3 className="text-white mb-1.5" style={{ fontSize: '1rem', fontWeight: '600' }}>
                {feature.title}
              </h3>
              
              <p className="text-white/50" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
