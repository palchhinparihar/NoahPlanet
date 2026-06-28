import {
  FaEarthAsia,
  FaShop,
  FaChartLine,
  FaFlag,
} from "react-icons/fa6";
import HeaderLogo from "../../assets/logo.png";

const features = [
  {
    icon: <FaFlag className="text-2xl text-green-700" />,
    title: "Indian Brand",
    description:
      "Built with a vision to empower Indian businesses and strengthen local entrepreneurship.",
  },
  {
    icon: <FaEarthAsia className="text-2xl text-green-700" />,
    title: "Global Vision",
    description:
      "Helping local products reach national and international markets through digital commerce.",
  },
  {
    icon: <FaShop className="text-2xl text-green-700" />,
    title: "Local Sellers",
    description:
      "Creating opportunities for small businesses, manufacturers, and entrepreneurs across India.",
  },
  {
    icon: <FaChartLine className="text-2xl text-green-700" />,
    title: "Digital Commerce",
    description:
      "Leveraging technology to simplify buying, selling, and business growth in the digital era.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center text-center">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-green-700 font-semibold uppercase tracking-widest">
              About Us
            </p>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              About Noah Planet
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Noah Planet is an Indian e-commerce ecosystem dedicated to promoting
              local businesses, empowering entrepreneurs, and creating a platform
              where Indian products can grow beyond geographical boundaries. We
              believe that every global brand begins as a local one, and our
              mission is to help Indian brands achieve that journey.
            </p>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={HeaderLogo} alt="Noah Planet Logo" className="h-24 md:h-32 lg:h-auto w-auto" />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Vision
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              To build a trusted Indian commerce ecosystem that supports local
              innovation, promotes indigenous brands, and connects them with
              customers across the world.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Mission
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Empowering businesses through technology, encouraging Vocal for
              Local initiatives, and creating sustainable opportunities for
              Indian entrepreneurs in the digital marketplace.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 p-6 hover:border-green-600 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;