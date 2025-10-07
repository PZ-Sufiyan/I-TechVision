import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/Components/ui/card';
import { GraduationCap, Briefcase, Globe2, Cpu } from 'lucide-react';
import training from '../../assets/training.jpg';


const highlights = [
  {
    icon: Cpu,
    title: "Hands-on Learning",
    description: "Gain experience in IoT, Industrial Automation, and Embedded Systems with real-world projects."
  },
  {
    icon: Briefcase,
    title: "Career-Focused",
    description: "Bridge the gap between academia and industry with skill-building and practical exposure."
  },
  {
    icon: GraduationCap,
    title: "Eligibility",
    description: "Open for 7th/8th semester students or BS graduates in Engineering, IT, Business, or Social Sciences."
  },
  {
    icon: Globe2,
    title: "Global Skills",
    description: "Develop competencies that prepare you for local and international career opportunities."
  }
];

export default function Training() {
  return (
    <section className="py-32 bg-white">
      <div className="w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm font-medium mb-6">
              Training & Internship
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Launch Your Career with
              <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                ITech Vision
              </span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                    ITech Vision offers <strong>3-month, HEC-aligned internships</strong> for undergraduates and fresh graduates. 
                    Gain hands-on experience in high-demand fields like <b>IoT, Industrial Automation, and Embedded Systems</b>, 
                    or contribute to impactful <b>Business Development and Digital Marketing</b> projects.
                </p>
                <p>
                    Our program combines technical skill-building with <b>industry academic interdependence</b>, 
                    preparing you for a successful global career. Apply now and transform your potential into professional excellence.
                </p>
                <p className="text-teal-600 font-semibold">
                    Fees: Rs 15,000 / Month
                </p>

                {/* ✅ WhatsApp Contact Button */}
                <div className="pt-4">
                    <a
                    href="https://wa.me/923445494949"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                    Contact on WhatsApp
                    </a>
                </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl">
                <div className="text-2xl font-bold text-teal-600 mb-2">Deadline</div>
                <div className="text-gray-600 font-medium">Oct 20, 2025</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">Session Start</div>
                <div className="text-gray-600 font-medium">Nov 3, 2025</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={training}
                alt="Training Program"
                className="w-full h-full object-cover"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-32"
        >
          <h3 className="text-4xl font-bold text-center text-slate-900 mb-16">Program Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
