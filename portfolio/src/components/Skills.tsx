'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, BarChart3, Database, Wrench, Users, CheckCircle } from 'lucide-react';
import { skillCategoriesData } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-cyan-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-violet-400" />,
  Database: <Database className="w-6 h-6 text-emerald-400" />,
  Wrench: <Wrench className="w-6 h-6 text-amber-400" />,
  Users: <Users className="w-6 h-6 text-blue-400" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Technical Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Skills, Tools & <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Comprehensive breakdown of my technical stack across machine learning, visualization, databases, and analytical tools.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategoriesData.map((catGroup, idx) => (
            <motion.div
              key={catGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-3xl border border-slate-800 p-6 space-y-6 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900/80 border border-slate-700/80 flex items-center justify-center">
                    {iconMap[catGroup.iconName] || <BrainCircuit className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                      {catGroup.category}
                    </h3>
                    <p className="text-xs text-slate-400">{catGroup.skills.length} core competencies</p>
                  </div>
                </div>

                {/* Badges List */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {catGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3.5 py-2 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 text-slate-200 text-xs font-semibold flex items-center gap-2 group transition-all"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] text-slate-400 font-normal px-1.5 py-0.5 rounded bg-slate-800">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Verified Proficiency</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
