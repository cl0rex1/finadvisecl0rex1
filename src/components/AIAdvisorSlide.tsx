import React from 'react';
import { Brain, Sparkles, TrendingUp, MessageSquare, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function AIAdvisorSlide() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Персональные советы',
      description: 'ИИ анализирует ваши данные и даёт индивидуальные рекомендации',
    },
    {
      icon: TrendingUp,
      title: 'Прогнозирование',
      description: 'Предсказание финансовых трендов на основе истории',
    },
    {
      icon: Zap,
      title: 'Мгновенные ответы',
      description: 'Получайте финансовые консультации в режиме реального времени',
    },
  ];

  return (
    <div className="h-full flex items-center justify-center px-16">
      <div className="grid grid-cols-2 gap-12 items-center w-full max-w-7xl">
        {/* Left Side - AI Icon */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0088CC]/30 to-[#3BAEE6]/30 rounded-full blur-[100px]" />
          
          {/* Main Icon Container */}
          <div className="relative">
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-br from-[#0088CC] to-[#3BAEE6] rounded-full opacity-20"
              style={{ padding: '2rem' }}
            />
            
            <div className="relative bg-gradient-to-br from-[#0088CC] to-[#3BAEE6] p-20 rounded-full">
              <Brain className="w-48 h-48 text-white" />
              
              {/* Floating Sparkles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className="absolute"
                  style={{
                    top: `${20 + i * 30}%`,
                    right: `${10 + i * 20}%`,
                  }}
                >
                  <Sparkles className="w-6 h-6 text-[#3BAEE6]" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-[#0088CC]/20 to-[#3BAEE6]/20 border border-[#0088CC]/30 rounded-full">
            <Sparkles className="w-5 h-5 text-[#0088CC]" />
            <span className="text-[#0088CC]">Искусственный интеллект</span>
          </div>

          <h2 className="text-white mb-6" style={{ fontSize: '3.5rem', fontWeight: '700' }}>
            ИИ-советник
          </h2>

          <p className="text-white/60 mb-10" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Finance Advisor использует <span className="text-[#0088CC]">Gemini AI</span> от Google 
            для предоставления умных финансовых рекомендаций, анализа расходов и помощи 
            в принятии финансовых решений.
          </p>

          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#0088CC]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-[#0088CC] to-[#3BAEE6] rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <div>
                  <h3 className="text-white mb-1" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
