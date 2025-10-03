import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Michael Chen",
    role: "CTO, TechManufacturing Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    company: "TechManufacturing Inc.",
    text: "Their IoT implementation transformed our factory floor. Real-time monitoring and predictive maintenance reduced our downtime by 40%. The team's technical expertise and professional approach made the entire process seamless.",
    rating: 5,
    project: "Smart Factory Implementation"
  },
  {
    name: "Sarah Martinez",
    role: "VP of Engineering, MedTech Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    company: "MedTech Solutions",
    text: "Exceptional embedded systems work. They delivered a safety-critical medical device controller that exceeded FDA requirements. Their attention to detail and commitment to quality is unmatched in the industry.",
    rating: 5,
    project: "Medical Device Controller"
  },
  {
    name: "David Okonkwo",
    role: "Founder & CEO, InnovateLabs",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    company: "InnovateLabs",
    text: "From concept to market in record time. They helped us develop our flagship IoT product, handling everything from circuit design to firmware. Our product is now successfully deployed in over 50 countries.",
    rating: 5,
    project: "Smart Home Hub Development"
  },
  {
    name: "Emily Thompson",
    role: "Director of Operations, AutomationCorp",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    company: "AutomationCorp",
    text: "The digital transformation project revolutionized our manufacturing process. Their expertise in Industry 4.0 technologies and ability to integrate with legacy systems was impressive. ROI achieved in just 12 months.",
    rating: 5,
    project: "Digital Manufacturing Transformation"
  },
  {
    name: "James Wilson",
    role: "Head of R&D, RoboTech Industries",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    company: "RoboTech Industries",
    text: "Outstanding PCB design and fabrication services. They optimized our high-speed data acquisition board, solving complex EMI issues. The board now performs beyond specifications and passed all certifications first time.",
    rating: 5,
    project: "High-Speed PCB Design"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm font-medium mb-6">
            Client Success
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Trusted by Industry
            <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the companies we've helped transform
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white border-0 shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                  <div className="md:col-span-2 flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-teal-100">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-teal-600 font-medium mb-2">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">
                      {testimonials[currentIndex].company}
                    </p>
                    <div className="flex gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-3 flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                        {testimonials[currentIndex].project}
                      </span>
                    </div>
                    <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                      "{testimonials[currentIndex].text}"
                    </blockquote>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prev}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-2 border-teal-200 hover:bg-teal-50 hover:border-teal-400"
            >
              <ChevronLeft className="w-5 h-5 text-teal-600" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-2 bg-teal-600"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={next}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-2 border-teal-200 hover:bg-teal-50 hover:border-teal-400"
            >
              <ChevronRight className="w-5 h-5 text-teal-600" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}