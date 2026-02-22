import {
  Sparkles,
  Target,
  Zap,
  TrendingUp,
  Palette,
  Globe,
  MessageSquare,
  Award,
  ArrowRight,
} from 'lucide-react';
import Button from '../components/Button';

const Home = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Performance Marketing',
      description:
        'Data-driven campaigns that deliver measurable ROI and sustainable growth.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Website Development',
      description:
        'Premium websites built for conversion, speed, and exceptional user experience.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Branding & Design',
      description:
        'Creating distinctive brand identities that resonate and stand out in the market.',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Social Media Management',
      description:
        'Strategic social presence that builds community and drives engagement.',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Content Creation',
      description:
        'Compelling content that tells your story and connects with your audience.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI Marketing',
      description:
        'Cutting-edge AI solutions for intelligent automation and optimization.',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Strategy',
      description:
        'Deep analysis of your market, audience, and goals to craft a winning roadmap.',
    },
    {
      number: '02',
      title: 'Create',
      description:
        'Designing exceptional brand experiences that captivate and convert.',
    },
    {
      number: '03',
      title: 'Execute',
      description:
        'Flawless implementation across all channels with precision and excellence.',
    },
    {
      number: '04',
      title: 'Scale',
      description:
        'Continuous optimization and growth strategies that compound your success.',
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Premium Quality',
      description: 'Excellence in every detail, every time.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Results-Driven',
      description: 'Your ROI is our primary focus.',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Creative Innovation',
      description: 'Fresh ideas that set you apart.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Rapid Execution',
      description: 'Speed without compromising quality.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,0,0,0.03),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>360° Branding & Growth Agency</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#ec592b] mb-6 leading-tight tracking-tight">
              Where Brands
              <br />
              <span className="bg-gradient-to-r from-[#002320] via-[#207e87] to-[#002320] bg-clip-text text-transparent">
                Come Alive
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              We transform ambitious brands through strategic creativity,
              performance marketing, and AI-powered solutions that drive
              measurable growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="#contact" size="lg">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="#services" variant="outline" size="lg">
                Start Your Growth Journey
              </Button>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-center" hidden={true}>
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-gray-300 hidden sm:block"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-gray-300 hidden sm:block"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to elevate your brand and drive
              sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <div className="w-16 h-16 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="#services" variant="outline">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#002320', color: '#5dffcf' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#5dffcf' }}>
              Why Choose Artvilla Studios
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgb(24 97 107)' }}>
              We combine creativity, data, and technology to deliver exceptional
              results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:opacity-95 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#5dffcf', color: '#002320' }}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#5dffcf' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'rgb(24 97 107)' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that transforms vision into measurable
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-200 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Let's create something extraordinary together. Book your free
            consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#contact" size="lg">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="#clients" variant="secondary" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
