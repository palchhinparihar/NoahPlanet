import {
  FaStore,
  FaHandshake,
  FaSeedling,
  FaArrowTrendUp,
} from "react-icons/fa6";

const data = [
  {
    icon: <FaStore />,
    title: "Empowering Local Sellers",
    description:
      "Providing Indian businesses with a platform to reach customers across the country.",
  },
  {
    icon: <FaHandshake />,
    title: "Supporting Entrepreneurs",
    description:
      "Helping startups and MSMEs grow through digital commerce.",
  },
  {
    icon: <FaSeedling />,
    title: "Vocal for Local",
    description:
      "Encouraging consumers to choose products made by Indian businesses.",
  },
  {
    icon: <FaArrowTrendUp />,
    title: "Sustainable Growth",
    description:
      "Building long-term opportunities for brands to expand globally.",
  },
];

const VocalForLocal = () => {
  return (
    <section id="vocal" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-green-700 font-semibold">
            Vocal For Local
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Supporting India's Local Businesses
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Noah Planet believes every successful global brand begins locally.
            Our platform is designed to help Indian entrepreneurs showcase
            their products, reach new customers and contribute to the nation's
            growing digital economy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {data.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition"
            >
              <div className="text-4xl text-green-700">{item.icon}</div>

              <h3 className="mt-6 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VocalForLocal;