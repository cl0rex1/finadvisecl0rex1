import React from 'react';
import { Database, Users, TrendingDown, TrendingUp, FileText, History } from 'lucide-react';
import { motion } from 'motion/react';

export function DatabaseSlide() {
  const tables = [
    {
      name: 'users',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      fields: ['id', 'username', 'first_name', 'last_activity'],
    },
    {
      name: 'expenses',
      icon: TrendingDown,
      color: 'from-red-500 to-orange-500',
      fields: ['id', 'user_id', 'amount', 'category', 'date'],
    },
    {
      name: 'incomes',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      fields: ['id', 'user_id', 'amount', 'source', 'date'],
    },
    {
      name: 'notes',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      fields: ['id', 'user_id', 'text', 'date'],
    },
    {
      name: 'requests',
      icon: History,
      color: 'from-indigo-500 to-violet-500',
      fields: ['id', 'user_id', 'question', 'answer', 'timestamp'],
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
        <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full">
          <Database className="w-5 h-5 text-indigo-400" />
          <span className="text-indigo-400">PostgreSQL Database</span>
        </div>

        <h2 className="text-white mb-4" style={{ fontSize: '3.5rem', fontWeight: '700' }}>
          Работа с базой данных
        </h2>
        <p className="text-white/60" style={{ fontSize: '1.25rem' }}>
          Структурированное хранение всех финансовых данных
        </p>
      </motion.div>

      {/* Tables Grid */}
      <div className="grid grid-cols-3 gap-5 mb-6">
        {tables.slice(0, 3).map((table, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
            className="group relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${table.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
            
            <div className="relative p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#0088CC]/50 transition-all duration-300">
              {/* Table Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                <div className={`w-10 h-10 bg-gradient-to-br ${table.color} rounded-xl flex items-center justify-center`}>
                  <table.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                    {table.name}
                  </h3>
                  <p className="text-white/40 text-xs">Таблица БД</p>
                </div>
              </div>

              {/* Fields */}
              <div className="space-y-1.5">
                {table.fields.map((field, fieldIndex) => (
                  <motion.div
                    key={fieldIndex}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 + fieldIndex * 0.05, duration: 0.3 }}
                    className="flex items-center gap-2 px-2.5 py-1.5 bg-white/5 rounded-lg"
                  >
                    <div className="w-1.5 h-1.5 bg-[#0088CC] rounded-full" />
                    <code className="text-white/70 text-xs">{field}</code>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-5">
        {tables.slice(3).map((table, index) => (
          <motion.div
            key={index + 3}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            className="group relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${table.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
            
            <div className="relative p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#0088CC]/50 transition-all duration-300">
              {/* Table Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                <div className={`w-10 h-10 bg-gradient-to-br ${table.color} rounded-xl flex items-center justify-center`}>
                  <table.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                    {table.name}
                  </h3>
                  <p className="text-white/40 text-xs">Таблица БД</p>
                </div>
              </div>

              {/* Fields */}
              <div className="space-y-1.5">
                {table.fields.map((field, fieldIndex) => (
                  <motion.div
                    key={fieldIndex}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 + fieldIndex * 0.05, duration: 0.3 }}
                    className="flex items-center gap-2 px-2.5 py-1.5 bg-white/5 rounded-lg"
                  >
                    <div className="w-1.5 h-1.5 bg-[#0088CC] rounded-full" />
                    <code className="text-white/70 text-xs">{field}</code>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Database Info */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-6 p-6 bg-gradient-to-r from-[#0088CC]/10 to-[#3BAEE6]/10 border border-[#0088CC]/30 rounded-2xl"
      >
        <div className="flex items-start gap-4">
          <Database className="w-6 h-6 text-[#0088CC] flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h4 className="text-white mb-2" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
              Реляционная структура данных
            </h4>
            <p className="text-white/60 text-sm leading-relaxed">
              PostgreSQL обеспечивает надёжное хранение и быструю обработку финансовых транзакций в казахстанских тенге (₸). 
              Все данные связаны через user_id, что позволяет эффективно получать полную информацию о финансах пользователя. 
              Таблица requests хранит историю всех взаимодействий с ботом для анализа.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
