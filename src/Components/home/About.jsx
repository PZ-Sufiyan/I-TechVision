import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/Components/ui/card';
import { Award, Users, Target, Zap } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver world-class engineering solutions with meticulous attention to detail"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Your success is our success. We work as an extension of your team"
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge technology and creative solutions"
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "Rapid delivery without compromising on quality or reliability"
  }
];

export default function About() {
  return (
    <section className="py-32 bg-white">
      <div className="w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm font-medium mb-6">
              About Us
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Engineering the
              <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Future of Technology
              </span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                For over 15 years, we've been at the forefront of embedded systems and IoT innovation, 
                partnering with industry leaders to bring groundbreaking products to market.
              </p>
              <p>
                Our multidisciplinary team of engineers, designers, and innovators combines deep 
                technical expertise with a passion for solving complex challenges. From startups 
                to Fortune 500 companies, we've delivered solutions that drive real business impact.
              </p>
              <p>
                We don't just build technology – we architect intelligent systems that transform 
                industries, enhance operations, and create lasting value for our clients.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl">
                <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -left-8 right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">ISO 9001 Certified</div>
                  <div className="text-gray-600">Quality Management Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-32"
        >
          <h3 className="text-4xl font-bold text-center text-slate-900 mb-16">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}