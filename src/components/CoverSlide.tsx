import React from 'react';
import { Send, Sparkles, User, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export function CoverSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center relative">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0088CC]/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#3BAEE6]/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0088CC]/5 rounded-full blur-[200px]" />

      {/* Main Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ y: -20, opacity: 0, rotate: -10 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
          className="mb-10 inline-flex items-center justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-gradient-to-br from-[#0088CC] to-[#3BAEE6] rounded-3xl blur-2xl"
            />
            <div className="relative bg-gradient-to-br from-[#0088CC] to-[#3BAEE6] p-8 rounded-3xl shadow-2xl">
              <Send className="w-20 h-20 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6 bg-gradient-to-r from-white via-[#3BAEE6] to-[#0088CC] bg-clip-text text-transparent"
          style={{ fontSize: '5.5rem', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.02em' }}
        >
          Finance Advisor
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white/70 max-w-2xl mx-auto mb-10"
          style={{ fontSize: '1.5rem', lineHeight: '1.4' }}
        >
          Телеграм-бот для управления личными финансами
        </motion.p>

        {/* Badges Row */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-[#0088CC]/30 rounded-full">
            <Sparkles className="w-5 h-5 text-[#0088CC]" />
            <span className="text-white/80">Powered by Gemini AI</span>
          </div>
          
          <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-[#3BAEE6]/30 rounded-full">
            <span className="text-white/80">PostgreSQL</span>
          </div>
        </motion.div>

        {/* Author Info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8"
        >
          <div className="inline-block p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0088CC] to-[#3BAEE6] rounded-full blur-md opacity-50" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#0088CC] to-[#3BAEE6] rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white" style={{ fontSize: '1.4rem', fontWeight: '600' }}>
                    Сулейменов Амирлан
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <GraduationCap className="w-4 h-4" />
                  <span style={{ fontSize: '1rem' }}>Группа ПО2410</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0088CC] to-transparent opacity-50"
      />

      {/* Decorative Elements */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-20 w-2 h-2 bg-[#0088CC] rounded-full"
      />
      <motion.div
        animate={{
          y: [10, -10, 10],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-32 left-32 w-3 h-3 bg-[#3BAEE6] rounded-full"
      />
    </div>
  );
}
