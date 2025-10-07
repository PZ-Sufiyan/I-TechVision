import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Button } from '@/Components/ui/button';
import { Label } from '@/Components/ui/label';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { SendEmail } from '@/integrations/Core';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!formData.name || !formData.email || !formData.company || !formData.phone || !formData.message) {
        setError('All fields are required.');
        return;
    }
    if (formData.message.length < 50) {
        setError('Project details must be at least 50 characters.');
        return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      await SendEmail({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send message. Please try again later.');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm font-medium mb-6">
            Get In Touch
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Let's Build Something
            <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Reach out to discuss your project
          </p>
        </motion.div>

        {/* ✅ Form */}
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Card className="max-w-5xl m-auto p-8 md:p-12 border-0 shadow-2xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                <p className="text-xl text-gray-600 mb-8">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={50}
                    placeholder="Tell us about your project (at least 50 characters)..."
                    className="min-h-[160px]"
                  />
                </div>

                {error && <p className="text-red-600">{error}</p>}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-lg"
                >
                  {isSubmitting ? 'Processing...' : 'Send Message'}
                </Button>
              </form>
            )}
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mt-12 max-w-7xl m-auto">
          {/* ✅ Updated Email */}
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Our team responds within 24 hours</p>
            <a href="mailto:info@itech-vision.com" className="text-teal-600 font-medium hover:text-teal-700">
              info@itech-vision.com
            </a>
          </Card>

          {/* ✅ Updated Phone */}
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Mon-Fri from 8am to 6pm</p>
            <a href="tel:0518899949" className="text-teal-600 font-medium hover:text-teal-700">
              (051)-8899949
            </a>
          </Card>

          {/* ✅ Updated Address */}
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">Come say hello at our office</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Office+%23+109,+1st+Floor,+Cubator+1ne,+Near+Park+Road,+Islamabad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 not-italic hover:text-teal-600"
            >
              Office # 109, 1st Floor,<br />
              Cubator 1ne, Near Park Road,<br />
              Islamabad
            </a>
          </Card>
        </div>

      </div>
    </section>
  );
}
