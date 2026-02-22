import {
  Target,
  Eye,
  Heart,
  TrendingUp,
  Award,
  Lightbulb,
  Users,
  Zap,
} from 'lucide-react';
import Button from '../components/Button';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description:
        'We embrace cutting-edge technologies and creative approaches to stay ahead of industry trends.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description:
        'We maintain the highest standards in every project, delivering nothing but exceptional quality.',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Transparency',
      description:
        'Open communication and honest partnerships built on trust and mutual respect.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Consistency',
      description:
        'Reliable delivery and sustained performance across all touchpoints and campaigns.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Performance',
      description:
        'Data-driven strategies focused on measurable ROI and sustainable business growth.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description:
        'Working together as partners to achieve shared goals and long-term success.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              About Artvilla Studios
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A premium digital agency dedicated to transforming brands through
              strategic creativity, data-driven marketing, and innovative
              AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Artvilla Studios is a 360° branding, marketing, and growth
                  agency that partners with ambitious brands to achieve
                  exceptional results. We combine creative excellence with
                  data-driven strategies and cutting-edge AI technology to
                  deliver measurable impact.
                </p>
                <p>
                  Our team of strategists, designers, marketers, and developers
                  work in harmony to create comprehensive solutions that elevate
                  brands and drive sustainable growth. We believe in the power
                  of creativity backed by analytics, innovation guided by
                  strategy, and execution driven by excellence.
                </p>
                <p>
                  From startups to established enterprises, we serve as a
                  trusted growth partner, helping brands navigate the digital
                  landscape with confidence and precision.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gray-900 text-white p-8 rounded-2xl">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-sm text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    150+
                  </div>
                  <div className="text-sm text-gray-600">Brands Served</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    98%
                  </div>
                  <div className="text-sm text-gray-600">
                    Client Satisfaction
                  </div>
                </div>
                <div className="bg-gray-900 text-white p-8 rounded-2xl">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                To empower brands with innovative digital strategies that
                combine creativity, data analytics, and AI technology. We
                transform business challenges into growth opportunities through
                strategic thinking, exceptional execution, and measurable
                results.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                To become the most trusted premium growth partner for ambitious
                brands worldwide. We envision a future where every brand we
                touch achieves sustainable success through innovation,
                excellence, and strategic collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are
              as an agency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to elevate your brand? Partner with us and experience the
            difference of working with a premium digital agency.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#contact" size="lg">
              Start Your Journey
            </Button>
            <Button href="#services" variant="outline" size="lg">
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
