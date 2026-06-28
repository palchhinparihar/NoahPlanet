import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-green-700 text-white">

      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold">
          Get In Touch
        </h2>

        <p className="mt-5 text-green-100">
          We'd love to discuss how Noah Planet can contribute to the future of
          Indian commerce.
        </p>

        <div className="mt-12 space-y-5">

          <div className="flex justify-center gap-3">
            <FaEnvelope />
            info@noahplanet.com
          </div>

          <div className="flex justify-center gap-3">
            <FaPhone />
            +91 XXXXX XXXXX
          </div>

          <div className="flex justify-center gap-3">
            <FaLocationDot />
            India
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;