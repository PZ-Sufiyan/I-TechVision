import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Cog, 
  Lightbulb, 
  Factory, 
  Workflow,
  Code,
  Box,
  FileText,
  Share2
} from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "IoT & Industrial Automation",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    description: "Transform your industrial operations with smart IoT solutions that connect, monitor, and optimize your entire ecosystem in real-time.",
    features: [
      "Real-time monitoring and analytics dashboards",
      "Predictive maintenance systems",
      "Sensor integration and data acquisition",
      "Cloud-based IoT platforms",
      "Industrial protocol implementation (Modbus, OPC-UA)"
    ],
    projects: [
      { name: "Smart Factory Dashboard", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400" },
      { name: "Energy Monitoring System", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400" }
    ]
  },
  {
    title: "Embedded Systems Engineering",
    icon: Cog,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
    description: "Design and develop robust embedded systems with cutting-edge microcontroller solutions tailored to your specific application needs.",
    features: [
      "ARM Cortex-M/A processor programming",
      "Real-time operating systems (FreeRTOS, Zephyr)",
      "Low-power design optimization",
      "Hardware abstraction layers",
      "Bootloader and firmware update mechanisms"
    ],
    projects: [
      { name: "Medical Device Controller", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400" },
      { name: "Automotive ECU System", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400" }
    ]
  },
  {
    title: "Innovation & Product Development",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    description: "From concept to market-ready products, we guide your innovation journey with strategic planning and rapid prototyping.",
    features: [
      "Idea validation and market research",
      "Proof-of-concept development",
      "Rapid prototyping and iteration",
      "Product design and engineering",
      "Go-to-market strategy"
    ],
    projects: [
      { name: "Smart Home Hub", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400" },
      { name: "Wearable Health Monitor", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400" }
    ]
  },
  {
    title: "Digital Transformation & Smart Manufacturing",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800",
    description: "Revolutionize your manufacturing processes with Industry 4.0 technologies and intelligent automation systems.",
    features: [
      "MES (Manufacturing Execution Systems)",
      "Digital twin implementation",
      "AI-powered quality control",
      "Supply chain optimization",
      "Process automation and robotics integration"
    ],
    projects: [
      { name: "Production Line Digitization", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400" },
      { name: "Quality Inspection AI", image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=400" }
    ]
  },
  {
    title: "Circuit Design & Fabrication",
    icon: Workflow,
    image: "https://images.unsplash.com/photo-1530819568329-97653eafbbfa?w=800",
    description: "Expert PCB design and fabrication services from schematic capture to production-ready boards with optimal performance.",
    features: [
      "Multi-layer PCB design (up to 16 layers)",
      "High-speed digital and RF circuit design",
      "Signal integrity and EMC analysis",
      "Component selection and BOM optimization",
      "Prototype to production transition"
    ],
    projects: [
      { name: "IoT Sensor Board", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400" },
      { name: "Power Management PCB", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400" }
    ]
  },
  {
    title: "Firmware Development",
    icon: Code,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    description: "Professional firmware development services with a focus on reliability, efficiency, and maintainability.",
    features: [
      "Bare-metal and RTOS-based firmware",
      "Driver development for peripherals",
      "Communication protocol implementation",
      "Over-the-air (OTA) update systems",
      "Security and encryption integration"
    ],
    projects: [
      { name: "BLE Smart Lock", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400" },
      { name: "Industrial Gateway", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400" }
    ]
  },
  {
    title: "3D Design & Printing",
    icon: Box,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
    description: "Bring your ideas to life with professional 3D CAD design and advanced additive manufacturing solutions.",
    features: [
      "CAD modeling (SolidWorks, Fusion 360)",
      "Functional prototype printing",
      "Material selection consultation",
      "Design for manufacturability (DFM)",
      "Post-processing and finishing"
    ],
    projects: [
      { name: "Custom Enclosure", image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400" },
      { name: "Mechanical Assembly", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400" }
    ]
  },
  {
    title: "Proposal Writing",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
    description: "Compelling technical and business proposals that win projects and secure funding for your innovations.",
    features: [
      "Technical documentation",
      "Grant proposal writing",
      "RFP response development",
      "Business case development",
      "Executive summary creation"
    ],
    projects: [
      { name: "R&D Grant Proposal", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400" },
      { name: "Partnership Deck", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400" }
    ]
  },
  {
    title: "Social Media Content Creation",
    icon: Share2,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
    description: "Engaging technical content that showcases your innovations and builds your brand presence across digital platforms.",
    features: [
      "Technical content strategy",
      "Product showcase videos",
      "Infographic design",
      "LinkedIn thought leadership",
      "Social media calendar management"
    ],
    projects: [
      { name: "Product Launch Campaign", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400" },
      { name: "Tech Tutorial Series", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400" }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm font-medium mb-6">
            Our Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Comprehensive Technology
            <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Solutions & Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we deliver end-to-end engineering solutions that drive innovation and growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}