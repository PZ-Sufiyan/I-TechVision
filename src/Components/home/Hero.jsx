import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ onContactClick }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-teal-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2
          }} />

        )}
      </div>

      <div className="relative z-10 w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-400 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Innovation Meets Excellence
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">

          Transforming Ideas Into
          <span className="block bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Intelligent Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">

          We engineer cutting-edge IoT systems, embedded solutions, and digital innovations that drive your business forward
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">

          <Button
            onClick={onContactClick}
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl shadow-teal-500/25 transition-all duration-300 hover:scale-105">

            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline" className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl shadow-teal-500/25 transition-all duration-300 hover:scale-105"

            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>

            Explore Services
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">

          {[
          { number: '500+', label: 'Projects Delivered' },
          { number: '200+', label: 'Happy Clients' },
          { number: '15+', label: 'Years Experience' },
          { number: '50+', label: 'Team Members' }].
          map((stat, index) =>
          <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          )}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2">

        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full" />

        </div>
      </motion.div>
    </section>);

}