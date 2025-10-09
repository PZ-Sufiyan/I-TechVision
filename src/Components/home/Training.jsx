import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/Components/ui/card';
import { GraduationCap, Briefcase, Globe2, Cpu, Printer, Cpu as Embedded, CircuitBoard, Wifi, ChevronLeft, ChevronRight } from 'lucide-react';
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

const trainingModules = [
  {
    icon: Printer,
    title: "3D Printing and 3D Design",
    description: "Equip students with the skills to design and prototype 3D models and convert them into 3D printed objects, using industry-standard software and tools, while integrating AI techniques for optimization and automation.",
    features: [
      "Industry-standard software (Blender, SolidWorks)",
      "AI-powered design optimization",
      "FDM, SLA 3D printing techniques",
      "Post-processing and finishing"
    ],
    outcome: "Proficient in creating 3D models and producing functional prototypes with AI integration for manufacturing and healthcare applications."
  },
  {
    icon: Embedded,
    title: "Embedded Systems",
    description: "Introduce students to embedded system design, programming, and deployment, providing hands-on experience with microcontrollers, sensors, and AI-powered devices.",
    features: [
      "Arduino & STM32 platforms",
      "C/C++ embedded programming",
      "Sensor integration with AI",
      "Real-time operating systems"
    ],
    outcome: "Design, program, and deploy smart embedded systems for robotics, automotive, and healthcare industries."
  },
  {
    icon: CircuitBoard,
    title: "PCB Designing",
    description: "Enable students to design and fabricate printed circuit boards (PCBs), from basic circuit schematics to fully assembled PCBs, using AI tools for layout optimization and design verification.",
    features: [
      "KiCad & Altium Designer",
      "Multi-layer PCB design",
      "AI-powered optimization",
      "Industry standards & quality control"
    ],
    outcome: "Design and manufacture reliable PCBs for embedded systems and IoT devices with AI-enhanced quality control."
  },
  {
    icon: Wifi,
    title: "IoT Design and Implementation",
    description: "Provide students with the knowledge and skills to design and implement IoT solutions, integrating hardware, software, connectivity, and AI-based data processing.",
    features: [
      "IoT architecture & protocols",
      "Wireless communication (Wi-Fi, Bluetooth, LoRa)",
      "AI-powered security & analytics",
      "Cloud computing & data management"
    ],
    outcome: "Deploy intelligent IoT systems for smart homes, industries, and healthcare with real-time decision making."
  }
];

export default function Training() {
  const [currentModule, setCurrentModule] = useState(0);

  const nextModule = () => {
    setCurrentModule((prev) => (prev + 1) % trainingModules.length);
  };

  const prevModule = () => {
    setCurrentModule((prev) => (prev - 1 + trainingModules.length) % trainingModules.length);
  };

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
                    ITech Vision offers <strong>3-month, HEC-aligned Trainings</strong> for undergraduates and fresh graduates. 
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

        {/* Training Modules Section - Carousel Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm font-medium mb-4">
              Comprehensive Curriculum
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">
              Industry-Ready Training Modules
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just learn theory - master the skills that companies are hiring for today
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevModule}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextModule}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Carousel Content */}
            <div className="relative h-[600px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentModule}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Card className="p-12 border-0 shadow-2xl h-full bg-gradient-to-br from-white to-gray-50/50">
                    <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
                      {/* Left Side - Icon and Basic Info */}
                      <div className="text-center lg:text-left">
                        <div className="w-24 h-24 mx-auto lg:mx-0 mb-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                          {React.createElement(trainingModules[currentModule].icon, { className: "w-12 h-12 text-white" })}
                        </div>
                        <h4 className="text-4xl font-bold text-slate-900 mb-6">
                          {trainingModules[currentModule].title}
                        </h4>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                          {trainingModules[currentModule].description}
                        </p>
                        
                        {/* Module Indicator */}
                        <div className="flex justify-center lg:justify-start space-x-2">
                          {trainingModules.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentModule(index)}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentModule
                                  ? 'bg-teal-500 scale-125'
                                  : 'bg-gray-300 hover:bg-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Right Side - Detailed Content */}
                      <div className="space-y-8">
                        {/* Key Features */}
                        <div>
                          <h5 className="text-2xl font-bold text-slate-900 mb-4">Key Features</h5>
                          <div className="grid gap-3">
                            {trainingModules[currentModule].features.map((feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                                className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-gray-200/50"
                              >
                                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                </div>
                                <span className="text-gray-700 font-medium">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Career Outcome */}
                        <div className="p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl border border-teal-200/50">
                          <h5 className="text-xl font-bold text-teal-700 mb-3">Career Outcome</h5>
                          <p className="text-gray-700 leading-relaxed">
                            {trainingModules[currentModule].outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Module Titles Navigation */}
            <div className="flex justify-center mt-8 space-x-4">
              {trainingModules.map((module, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentModule(index)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    index === currentModule
                      ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {module.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}