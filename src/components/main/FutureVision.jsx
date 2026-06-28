import {
  FaLeaf,
  FaBottleWater,
  FaGlobe,
  FaSpa,
} from "react-icons/fa6";

const cards = [
  {
    icon: <FaLeaf />,
    title: "Natural Products",
    text: "Promoting eco-friendly and naturally sourced products.",
  },
  {
    icon: <FaBottleWater />,
    title: "Herbal Cosmetics",
    text: "Developing herbal and wellness-based cosmetic solutions.",
  },
  {
    icon: <FaSpa />,
    title: "Ayurveda",
    text: "Bringing India's rich Ayurvedic heritage to modern consumers.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Expansion",
    text: "Taking Indian brands beyond borders through digital commerce.",
  },
];

const FutureVision = () => {
  return (
    <section id="future" className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="uppercase tracking-[4px] text-green-700 font-semibold">
            Future Vision
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Building Tomorrow's Indian Brands
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            Noah Planet aims to expand into herbal products, natural cosmetics,
            and wellness solutions while promoting Indian innovation worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="text-4xl text-green-700">{card.icon}</div>

              <h3 className="mt-6 text-xl font-semibold">
                {card.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureVision;