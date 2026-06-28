const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <h2 className="text-3xl font-bold">Our Vision</h2>

            <p className="mt-6 text-gray-600 leading-8">
              To become India's trusted commerce ecosystem by connecting local
              businesses with customers worldwide while promoting innovation,
              sustainability and economic growth.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <h2 className="text-3xl font-bold">Our Mission</h2>

            <p className="mt-6 text-gray-600 leading-8">
              To empower entrepreneurs through technology, encourage indigenous
              brands, and build a platform that creates opportunities for every
              Indian business.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Vision;