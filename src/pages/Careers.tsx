import { Briefcase, MapPin, Clock, ArrowRight, Mail } from 'lucide-react';
import Button from '../components/Button';
import { Job } from '../types';

const Careers = () => {
  const openings: Job[] = [];

  const benefits = [
    {
      title: 'Growth Opportunities',
      description: 'Continuous learning and career advancement paths.',
    },
    {
      title: 'Creative Freedom',
      description: 'Express your ideas and contribute to innovation.',
    },
    {
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive environment.',
    },
    {
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries and benefits packages.',
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options.',
    },
    {
      title: 'Exciting Projects',
      description: 'Work on premium brands and challenging campaigns.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Careers at Artvilla Studios
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join a team of passionate creatives, strategists, and innovators
              who are shaping the future of digital marketing and branding.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in nurturing talent, fostering creativity, and building
              careers that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to grow your career with us.
            </p>
          </div>

          {openings.length > 0 ? (
            <div className="space-y-6">
              {openings.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <Briefcase size={16} />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>Mumbai / Remote</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} />
                          <span>Full-time</span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                    <div className="lg:ml-8">
                      <Button href="mailto:studiosartvilla@gmail.com" size="md">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-200">
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No Current Openings
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  We don't have any open positions at the moment, but we're
                  always looking for talented individuals to join our team.
                </p>
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Share Your Portfolio
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Interested in working with us? Send us your portfolio and
                    we'll reach out when we have opportunities that match your
                    skills.
                  </p>
                  <a
                    href="mailto:studiosartvilla@gmail.com?subject=Portfolio Submission"
                    className="inline-flex items-center space-x-2 text-gray-900 font-medium hover:text-gray-700 transition-colors"
                  >
                    <Mail size={20} />
                    <span>studiosartvilla@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join a team that values innovation, creativity, and excellence. Your
            career growth starts here.
          </p>
          <Button
            href="mailto:studiosartvilla@gmail.com"
            variant="secondary"
            size="lg"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
