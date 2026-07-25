'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Target, Lightbulb, Users, CheckCircle2, BookOpen } from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Combining Technical Rigor with <span className="gradient-text">Problem-Solving Precision</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A look into my academic foundation, analytical approach, and core values driving my AI & data projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Personal Overview & Core Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl border border-slate-800 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <Target className="w-6 h-6 text-cyan-400" />
                Background & Aspirations
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {personalInfo.fullBio}
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Analytical Thinking</h4>
                  <p className="text-xs text-slate-400 mt-1">Dissecting complex datasets into clear, actionable business insights.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Rapid Adaptability</h4>
                  <p className="text-xs text-slate-400 mt-1">Quickly mastering new AI frameworks, voice webhooks, and cloud platforms.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
                <Users className="w-5 h-5 text-violet-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Team Collaboration</h4>
                  <p className="text-xs text-slate-400 mt-1">Active volunteer and team contributor across hackathons and workshops.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Quality Execution</h4>
                  <p className="text-xs text-slate-400 mt-1">Writing clean code, structured SQL queries, and robust ML evaluations.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education Spotlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 glass-card p-8 rounded-3xl border border-slate-800 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">Education Spotlight</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Academic Qualifications</h3>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white text-base leading-snug">{educationData.degree}</h4>
                    <p className="text-xs text-cyan-400 font-medium mt-1">{educationData.institution}</p>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    {educationData.period}
                  </span>
                </div>

                <div className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                  {educationData.grade}
                </div>

                <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                  {educationData.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <BookOpen className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-center">
              <span className="text-xs text-slate-300 font-medium">
                Seeking IT & Digital Technologies Internship opportunities starting immediately
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
