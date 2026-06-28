import { Link } from "react-scroll";
import HeaderLogo from "../../assets/logo.png";

const Navbar = ({ title }) => {
  const path = [
    { href: "home", label: "Home", offset: -60 },
    { href: "about", label: "About", offset: -60 },
    { href: "opportunity", label: "Opportunity", offset: -60 },
    { href: "vision", label: "Vision", offset: -60 },
    { href: "contact", label: "Contact", offset: -60 },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#020c23]/60 text-white z-50 backdrop-blur-xl px-3 xl:px-6">
      <div className="w-full lg:w-[80%] mx-auto py-3 md:py-1 md:px-5 flex items-center justify-evenly gap-3">
        {/* Brand */}
        <a href="/" className="w-full font-bold">
          <img src={HeaderLogo} alt={title} className="w-12 md:w-25" />
        </a>

        {/* Navigation Links */}
        <ul className="text-sm md:text-base flex gap-2 md:gap-3 lg:gap-5">
          {path.map(({ href, label, offset }) => (
            <li key={href}>
              <Link
                to={href}
                spy={true}
                smooth={true}
                duration={500}
                offset={offset}
                activeClass="active-link"
                className="cursor-pointer text-white text-sm lg:text-lg hover:text-[#bfb0ef] transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;