'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Phone, MapPin, Download, Sparkles, Brain, Cpu, Database } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-violet-600/20 to-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-violet-600/15 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium backdrop-blur-md shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span>Available for IT & AI/ML Internships</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold font-heading tracking-tight leading-tight text-slate-900 dark:text-white">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              <br />
              <span className="text-3xl sm:text-5xl text-slate-700 dark:text-slate-300 font-bold block mt-2">
                AI/ML Engineer & Data Analyst
              </span>
            </h1>

            {/* Bio summary */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Computer Science (AIML) graduate candidate specializing in <strong className="text-cyan-400">Machine Learning pipelines</strong>, <strong className="text-violet-400">Speech AI Webhooks</strong>, and <strong className="text-cyan-400">Data Analytics</strong>. Experienced with Python, Azure ML, SQL, and Power BI.
            </p>

            {/* Quick Location & Contact Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5 bg-slate-800/40 px-3 py-1.5 rounded-lg border border-slate-700/50">
                <MapPin className="w-4 h-4 text-cyan-400" />
                Hyderabad, India
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/40 px-3 py-1.5 rounded-lg border border-slate-700/50">
                <Mail className="w-4 h-4 text-violet-400" />
                hthanmai@gmail.com
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/40 px-3 py-1.5 rounded-lg border border-slate-700/50">
                <Phone className="w-4 h-4 text-emerald-400" />
                +91 9347765443
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 shadow-md"
              >
                <span>Contact Me</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}?subject=Interview%20Opportunity%20-%20Badri%20Saithanmai`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-medium text-slate-300 hover:text-cyan-400 bg-transparent border border-slate-800 hover:border-slate-700 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Get CV</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-800/60">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-700/50 hover:scale-110 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-700/50 hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-700/50 hover:scale-110 transition-all duration-200"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Interactive Feature Graphic / Stats Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Glass Card Container */}
              <div className="glass-card p-8 rounded-3xl border border-slate-800/80 shadow-2xl space-y-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Brain className="w-32 h-32 text-cyan-400" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">B.Tech AIML</h3>
                      <p className="text-xs text-slate-400">Class of 2026 • 7.91 CGPA</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Active Intern
                  </span>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {personalInfo.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="text-2xl font-extrabold text-white gradient-text font-heading">
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-300 mt-0.5">
                        {stat.label}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Highlights Bar */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Database className="w-3.5 h-3.5 text-violet-400" /> SQL & Azure ML
                  </span>
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Gemini & Twilio
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
