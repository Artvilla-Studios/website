import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const Clients = () => {
  const clientSlots = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Trusted by Ambitious Brands
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're proud to partner with forward-thinking brands that value
              excellence, innovation, and measurable results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientSlots.map((slot) => (
              <div
                key={slot}
                className="group aspect-video bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center p-8"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-300 group-hover:text-gray-400 transition-colors">
                    LOGO
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    Client {slot}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm italic">
              Client logos will be uploaded and displayed here in monochrome
              style
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-4">150+</div>
              <div className="text-xl text-gray-400">Brands Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4">500+</div>
              <div className="text-xl text-gray-400">Projects Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4">98%</div>
              <div className="text-xl text-gray-400">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-200">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
                  "Working with Artvilla Studios transformed our digital
                  presence. Their strategic approach and creative excellence
                  delivered results beyond our expectations."
                </p>
                <div className="text-sm font-semibold text-gray-900">
                  Happy Client
                </div>
                <div className="text-sm text-gray-500">Growing Brand</div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
                  "The team's dedication to our success and their innovative
                  solutions made them true partners in our growth journey.
                  Highly recommended!"
                </p>
                <div className="text-sm font-semibold text-gray-900">
                  Satisfied Partner
                </div>
                <div className="text-sm text-gray-500">Established Business</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Join Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to become our next success story? Let's create something
            extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#contact" size="lg">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="#gallery" variant="outline" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
