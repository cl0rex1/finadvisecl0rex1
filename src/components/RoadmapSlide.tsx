import React from 'react';
import { Rocket, BarChart3, Tags, Coins, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function RoadmapSlide() {
  const features = [
    {
      icon: BarChart3,
      title: 'Графики и визуализация',
      description: 'Интерактивные графики доходов, расходов и трендов',
      status: 'planned',
    },
    {
      icon: Tags,
      title: 'Категории расходов',
      description: 'Автоматическое распределение по категориям с помощью ИИ',
      status: 'planned',
    },
    {
      icon: Coins,
      title: 'Поддержка валют',
      description: 'Мультивалютный учёт с автоматической конвертацией',
      status: 'planned',
    },
    {
      icon: TrendingUp,
      title: 'Продвинутая аналитика',
      description: 'Прогнозы, бюджетирование и планирование целей',
      status: 'planned',
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
        <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full">
          <Rocket className="w-5 h-5 text-purple-400" />
          <span className="text-purple-400">Roadmap</span>
        </div>

        <h2 className="text-white mb-4" style={{ fontSize: '3.5rem', fontWeight: '700' }}>
          Планы развития
        </h2>
        <p className="text-white/60" style={{ fontSize: '1.25rem' }}>
          Новые функции для улучшения вашего опыта
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0088CC]/20 to-[#3BAEE6]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#0088CC]/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#0088CC] to-[#3BAEE6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white" style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                      {feature.title}
                    </h3>
                    <span className="px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-xs">
                      В планах
                    </span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative"
      >
        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0088CC]/10 via-[#3BAEE6]/20 to-[#0088CC]/10 rounded-3xl blur-2xl" />
        
        <div className="relative p-8 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl">
          <div className="flex items-center justify-between">
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0088CC] to-[#3BAEE6] rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-white mb-1" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                  Будущее Finance Advisor
                </h3>
                <p className="text-white/60">
                  Мы постоянно работаем над улучшением функционала
                </p>
              </div>
            </div>

            {/* Right Side - Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-[#0088CC] mb-1" style={{ fontSize: '2rem', fontWeight: '700' }}>
                  4+
                </div>
                <div className="text-white/40 text-sm">Новых функций</div>
              </div>
              <div className="text-center">
                <div className="text-[#3BAEE6] mb-1" style={{ fontSize: '2rem', fontWeight: '700' }}>
                  2026
                </div>
                <div className="text-white/40 text-sm">Планируется</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 relative h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '35%' }}
              transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0088CC] to-[#3BAEE6] rounded-full"
            />
          </div>
          <div className="mt-2 flex justify-between text-xs text-white/40">
            <span>Разработка началась</span>
            <span>35% готово</span>
          </div>
        </div>
      </motion.div>

      {/* Final Message */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-8 text-center"
      >
        <p className="text-white/60 mb-2" style={{ fontSize: '1.1rem' }}>
          Спасибо за внимание! 🚀
        </p>
        <p className="text-white/40 text-sm">
          Finance Advisor — ваш умный помощник в мире финансов
        </p>
        <p className="text-white/30 text-xs mt-2">
          @finadviceclorexbot
        </p>
      </motion.div>
    </div>
  );
}
