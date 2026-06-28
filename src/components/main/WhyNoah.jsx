import { FaCircleCheck } from "react-icons/fa6";

const reasons = [
  "Made for Indian businesses",
  "Supports local entrepreneurs",
  "Digital-first commerce platform",
  "Focus on quality and trust",
  "Scalable business ecosystem",
  "Global growth vision",
];

const WhyNoah = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">
          <p className="uppercase tracking-[4px] text-green-700 font-semibold">
            Why Noah Planet
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Why Businesses Choose Noah Planet
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border p-6"
            >
              <FaCircleCheck className="text-green-700 text-2xl" />

              <p className="text-lg">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNoah;