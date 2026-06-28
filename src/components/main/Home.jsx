import { FaArrowRight, FaDownload } from "react-icons/fa6";
import Logo from "../../assets/logo.png";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-green-50 via-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Building the
              <span className="block text-green-700">
                Future of Indian Commerce
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-6 text-xl md:text-3xl animate-pulse font-medium text-orange-600 font-caveat">
              Your Country. Your Products. Your Brand.
            </p>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
              Noah Planet is an Indian e-commerce ecosystem dedicated to
              empowering local businesses, promoting indigenous brands, and
              creating opportunities for entrepreneurs to grow in the digital
              economy while taking Indian products to the global market.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 text-white font-medium hover:bg-green-800 transition"
              >
                Learn More
                <FaArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg rounded-3xl bg-white shadow-xl border border-gray-100 p-8">
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-green-50 p-5 text-center">
                  <h3 className="text-3xl font-bold text-green-700">100%</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Made for India
                  </p>
                </div>

                <div className="rounded-xl bg-orange-50 p-5 text-center">
                  <h3 className="text-3xl font-bold text-orange-600">Local</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Brands First
                  </p>
                </div>

                <div className="rounded-xl bg-blue-50 p-5 text-center">
                  <h3 className="text-3xl font-bold text-blue-600">Digital</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Commerce Platform
                  </p>
                </div>

                <div className="rounded-xl bg-purple-50 p-5 text-center">
                  <h3 className="text-3xl font-bold text-purple-600">Global</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Future Vision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;