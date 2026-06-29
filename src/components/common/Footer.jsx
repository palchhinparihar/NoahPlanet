import HeaderLogo from "../../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div className="flex justify-center">
          <img src={HeaderLogo} alt="Noah Planet Logo" className="h-16 w-auto" />
        </div>

        <p className="mt-4 md:mt-0">
          © {new Date().getFullYear()} Noah Planet. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;