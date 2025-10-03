import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ServiceCard({ service, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border-0">
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <service.icon className="w-8 h-8 text-white" />
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            {service.description}
          </p>

          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-gray-200 space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {service.projects.length > 0 && (
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Recent Projects:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {service.projects.map((project, i) => (
                      <div key={i} className="relative group/project">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg flex items-end p-3 opacity-0 group-hover/project:opacity-100 transition-opacity">
                          <p className="text-white text-sm font-medium">{project.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-4 text-teal-600 hover:text-teal-700 hover:bg-teal-50"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-2 w-4 h-4" />
              </>
            ) : (
              <>
                Learn More <ChevronDown className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}