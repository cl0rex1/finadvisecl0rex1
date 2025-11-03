import React from 'react';
import { Zap, Smile, DollarSign, Brain, Check } from 'lucide-react';
import { motion } from 'motion/react';

export function BenefitsSlide() {
  const benefits = [
    {
      icon: Zap,
      title: 'Быстрый',
      description: 'Мгновенная обработка команд и получение данных',
      color: 'from-yellow-500 to-orange-500',
      features: ['Без задержек', 'Реалтайм синхронизация', 'Быстрый доступ к данным'],
    },
    {
      icon: Smile,
      title: 'Понятный',
      description: 'Интуитивный интерфейс в привычном мессенджере',
      color: 'from-green-500 to-emerald-500',
      features: ['Простые команды', 'Понятные ответы', 'Без обучения'],
    },
    {
      icon: DollarSign,
      title: 'Бесплатный',
      description: 'Полный функционал доступен всем пользователям',
      color: 'from-blue-500 to-cyan-500',
      features: ['Без подписок', 'Без скрытых платежей', 'Открытый доступ'],
    },
    {
      icon: Brain,
      title: 'Умный',
      description: 'ИИ-советник для оптимизации финансов',
      color: 'from-purple-500 to-pink-500',
      features: ['Gemini AI', 'Персональные советы', 'Аналитика трендов'],
    },
  ];

  return (
    <div className="h-full flex flex-col justify-center px-16">
      {/* Title */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-white mb-4" style={{ fontSize: '3.5rem', fontWeight: '700' }}>
          Преимущества
        </h2>
        <p className="text-white/60" style={{ fontSize: '1.25rem' }}>
          Почему стоит использовать Finance Advisor
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
            className="group relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
            
            <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-[#0088CC]/50 transition-all duration-300">
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-white mb-1" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 pl-1">
                {benefit.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 + featureIndex * 0.05, duration: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-5 h-5 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0088CC] to-[#3BAEE6] rounded-2xl shadow-lg">
          <span className="text-white" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
            Всё необходимое для контроля финансов в одном боте
          </span>
          <span className="text-white/90" style={{ fontSize: '1.2rem' }}>₸</span>
        </div>
      </motion.div>
    </div>
  );
}
