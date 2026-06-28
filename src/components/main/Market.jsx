import {
  FaGlobe,
  FaUsers,
  FaShoppingCart,
  FaChartLine,
} from "react-icons/fa";
import IndiaMap from "../../assets/india.png";

const marketStats = [
  {
    icon: <FaGlobe className="text-3xl text-green-700" />,
    title: "Growing Internet Access",
    description:
      "Affordable internet and smartphones have made online shopping accessible across India.",
  },
  {
    icon: <FaShoppingCart className="text-3xl text-green-700" />,
    title: "Millions Shop Online",
    description:
      "India's e-commerce market continues to grow as consumers increasingly prefer digital shopping.",
  },
  {
    icon: <FaUsers className="text-3xl text-green-700" />,
    title: "Young Digital Population",
    description:
      "One of the world's youngest and most digitally active populations drives rapid online adoption.",
  },
  {
    icon: <FaChartLine className="text-3xl text-green-700" />,
    title: "Expanding Market",
    description:
      "The continued growth of digital commerce creates opportunities for Indian businesses and entrepreneurs.",
  },
];

const Market = () => {
  return (
    <section id="market" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-green-700 font-semibold uppercase tracking-widest">
              Market Opportunity
            </p>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              India: A Growing Digital Marketplace
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              India has emerged as one of the world's fastest-growing digital
              economies. With increasing internet penetration, a young
              population, and rapid adoption of e-commerce, the country offers
              immense opportunities for businesses to scale and reach millions
              of customers.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {marketStats.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition"
                >
                  {item.icon}

                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={IndiaMap}
              alt="India Digital Market"
              className="w-full max-w-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;