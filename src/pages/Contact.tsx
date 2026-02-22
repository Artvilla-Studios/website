import { useState } from 'react';
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  MessageSquare,
  Send,
} from 'lucide-react';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    'Performance Marketing',
    'SEO Management',
    'Website Development',
    'Branding & Design',
    'Social Media Management',
    'Content Creation',
    'AI Marketing',
    'Other',
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Let's Start Something Great
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your brand? Reach out and let's discuss how we
              can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 text-white rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <a
                    href="mailto:studiosartvilla@gmail.com"
                    className="flex items-start space-x-4 group hover:text-gray-300 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Email</div>
                      <div className="font-medium break-all">
                        studiosartvilla@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+917439756746"
                    className="flex items-start space-x-4 group hover:text-gray-300 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">
                        Phone / WhatsApp
                      </div>
                      <div className="font-medium">+91 74397 56746</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Follow Us
                </h3>

                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center text-white">
                      <Instagram size={20} />
                    </div>
                    <span className="font-medium text-gray-900 group-hover:text-gray-700">
                      Instagram
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                      <Facebook size={20} />
                    </div>
                    <span className="font-medium text-gray-900 group-hover:text-gray-700">
                      Facebook
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white">
                      <Linkedin size={20} />
                    </div>
                    <span className="font-medium text-gray-900 group-hover:text-gray-700">
                      LinkedIn
                    </span>
                  </a>

                  <a
                    href="https://wa.me/917439756746"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
                      <MessageSquare size={20} />
                    </div>
                    <span className="font-medium text-gray-900 group-hover:text-gray-700">
                      WhatsApp
                    </span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Prefer a Quick Call?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a free 30-minute consultation to discuss your project and
            goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="tel:+917439756746" size="lg">
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
            <Button
              href="https://wa.me/917439756746"
              variant="outline"
              size="lg"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
