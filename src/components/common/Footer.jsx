const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <h3 className="text-xl font-semibold text-white">
          Noah Planet
        </h3>

        <p className="mt-4 md:mt-0">
          © {new Date().getFullYear()} Noah Planet. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;