import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award } from 'lucide-react';

const portfolioItems = [
  {
    title: "Smart Factory Management System",
    category: "IoT & Automation",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
    description: "Comprehensive IoT platform managing 500+ sensors across multiple production lines with real-time analytics and predictive maintenance.",
    results: ["40% reduction in downtime", "25% increase in efficiency", "$2M annual savings"],
    tags: ["IoT", "Cloud", "Analytics"]
  },
  {
    title: "Medical Device Controller",
    category: "Embedded Systems",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800",
    description: "FDA-compliant embedded controller for life-critical medical equipment with redundant safety systems and real-time monitoring.",
    results: ["FDA 510(k) cleared", "99.999% uptime", "Zero safety incidents"],
    tags: ["Medical", "Safety-Critical", "ARM"]
  },
  {
    title: "Autonomous Warehouse Robot",
    category: "Product Development",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
    description: "Developed autonomous mobile robot with SLAM navigation for warehouse logistics, from concept to production in 18 months.",
    results: ["150 units deployed", "3x faster order fulfillment", "Patent pending"],
    tags: ["Robotics", "AI", "Navigation"]
  },
  {
    title: "Energy Management Platform",
    category: "Smart Manufacturing",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
    description: "AI-powered energy optimization system for industrial facilities with predictive load management and cost reduction.",
    results: ["30% energy savings", "ROI in 14 months", "Carbon footprint reduced"],
    tags: ["AI", "Energy", "Sustainability"]
  },
  {
    title: "High-Speed Data Acquisition Board",
    category: "Circuit Design",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    description: "12-layer PCB design for high-speed data acquisition with 16-bit resolution at 1MSPS, EMI compliant design.",
    results: ["1MHz sampling rate", "±0.1% accuracy", "CE certified"],
    tags: ["PCB", "High-Speed", "Analog"]
  },
  {
    title: "Smart Home Security System",
    category: "Firmware & IoT",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800",
    description: "End-to-end security system with computer vision, cloud connectivity, and mobile app control with end-to-end encryption.",
    results: ["50K+ installations", "4.8★ app rating", "AES-256 encryption"],
    tags: ["Security", "Computer Vision", "Mobile"]
  }
];

const categories = ["All", "IoT & Automation", "Embedded Systems", "Product Development", "Smart Manufacturing", "Circuit Design", "Firmware & IoT"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-32 bg-slate-900">
      <div className="w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-400 text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Case Studies
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Portfolio of
            <span className="block bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world projects that showcase our technical expertise and commitment to excellence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white"
                  : "border-gray-700 text-gray-300 hover:border-teal-500 hover:text-teal-400 bg-transparent"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group bg-slate-800 border-slate-700 overflow-hidden hover:border-teal-500/50 transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-teal-500 text-white border-0">
                      {item.category}
                    </Badge>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {item.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5"></span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-slate-700 text-gray-300 border-0">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      variant="ghost" 
                      className="w-full text-teal-400 hover:text-teal-300 hover:bg-teal-500/10"
                    >
                      View Case Study
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}