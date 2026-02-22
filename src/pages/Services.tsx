import {
  TrendingUp,
  Search,
  Globe,
  Palette,
  Radio,
  MessageSquare,
  Users,
  FileText,
  Camera,
  Video,
  BookOpen,
  Calendar,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import Button from '../components/Button';
import { Service } from '../types';

const Services = () => {
  const services: (Service & { icon: JSX.Element })[] = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Performance Marketing',
      description:
        'Strategic, data-driven campaigns across multiple channels designed to maximize ROI. We optimize every touchpoint to ensure your marketing budget delivers exceptional returns and sustainable business growth.',
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO Service Management',
      description:
        'Comprehensive search engine optimization to dominate organic rankings. Our holistic approach combines technical SEO, content strategy, and link building to drive qualified traffic and establish long-term digital authority.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Website Development',
      description:
        'Premium, conversion-optimized websites built with cutting-edge technology. We create fast, responsive, and user-centric digital experiences that captivate visitors and turn them into loyal customers.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Branding & Designing',
      description:
        'Creating distinctive brand identities that resonate deeply with your target audience. From logo design to complete brand systems, we craft visual stories that differentiate and elevate your market presence.',
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: 'Paid Search & OTT Advertising',
      description:
        'Targeted advertising campaigns across Google, social platforms, and OTT channels. We leverage advanced audience targeting and creative excellence to deliver high-impact ads that drive measurable conversions.',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Social Media Management',
      description:
        'Strategic social presence that builds engaged communities around your brand. From content planning to community engagement, we transform social channels into powerful business growth engines.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Influencer Marketing',
      description:
        'Authentic partnerships with influencers who amplify your brand message. We identify, negotiate, and manage influencer collaborations that drive authentic engagement and expand your market reach.',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Content Creation',
      description:
        'Compelling content that tells your brand story and drives action. Our creative team produces high-quality written, visual, and video content that resonates with audiences and supports your marketing objectives.',
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Brand Shoot',
      description:
        'Professional brand photography that captures your essence and values. We create stunning visual assets that communicate your brand identity and elevate all your marketing materials.',
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Photography & Videography',
      description:
        'Cinematic photo and video production that brings your brand to life. From product photography to corporate videos, we deliver premium visual content that engages and converts.',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Content Marketing',
      description:
        'Strategic content programs that attract, engage, and convert your ideal customers. We develop comprehensive content strategies that establish thought leadership and drive organic growth.',
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Media Planning',
      description:
        'Strategic media planning and buying across traditional and digital channels. We optimize media mix, negotiate premium placements, and ensure maximum impact for every rupee spent.',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI Marketing',
      description:
        'Cutting-edge AI-powered marketing solutions for intelligent automation and optimization. We leverage machine learning, predictive analytics, and AI tools to maximize efficiency and deliver superior results.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive solutions designed to scale your brand through
              strategic creativity, performance marketing, and innovation.
              Everything you need to dominate your market.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <div className="w-16 h-16 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Our Services Stand Out
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    ROI-Focused Approach
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Every service is designed with measurable returns in mind.
                    We track, analyze, and optimize to ensure your investment
                    delivers exceptional results.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Scalable Solutions
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Our strategies grow with your business. Whether you're a
                    startup or an enterprise, we build sustainable frameworks
                    that scale effectively.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Long-Term Partnership
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    We don't just deliver projects; we build lasting
                    relationships. Your success is our success, and we're
                    committed to your growth journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-12 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">
                Ready to Scale Your Brand?
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Let's discuss how our services can transform your business.
                Book a free consultation to explore tailored solutions for your
                unique challenges.
              </p>
              <Button href="#contact" variant="secondary" size="lg">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Custom Solutions for Unique Challenges
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Don't see exactly what you need? We create bespoke strategies
            tailored to your specific business goals and market dynamics.
          </p>
          <Button href="#contact" size="lg">
            Discuss Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
