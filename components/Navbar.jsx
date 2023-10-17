import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleNavLinkClick(link) {
    setActiveLink(link);
  }

  const navLinkStyles = `
    text-aquamarine-blue 
    text-center 
    py-6 
    md:px-6 
    md:pb-2
    hover:underline
    hover:decoration-4
    hover:underline-offset-[10px]
  `;

  const activeNavLinkStyles = `
  ${navLinkStyles}
  underline
  decoration-4
  underline-offset-[10px]
`;

  return (
    <nav className="w-full sticky top-0 left-0 right-0 z-10">
      <div className="px-4 mx-auto lg:max-w-7xl md:flex md:items-center md:justify-between md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          {/* Logo goes here */}
          <div className="mx-auto sm:justify-center">
            <Link href="/">
              <Image
                src="/assets/logo-magicwand.png"
                alt="Logo"
                width={150}
                height={100}
              />
            </Link>
          </div>
          {/* Hamburger button goes here */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md bg-transparent hover:bg-transparent"
              onClick={handleMenuClick}
            >
              {" "}
              {isMenuOpen ? (
                <Image
                  src="/close.svg"
                  alt="Logo"
                  width={20}
                  height={20}
                  className=""
                />
              ) : (
                <Image
                  src="/hamburger-menu.svg"
                  alt="Logo"
                  width={25}
                  height={25}
                  className=""
                />
              )}
            </button>
          </div>
        </div>
        {/* Navlinks */}
        <div
          className={`flex-1 justify-self-end pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isMenuOpen ? "p-12 md:p-0 block" : "hidden"
            }`}
        >
          <ul className="h-screen md:h-auto items-center justify-center md:flex">
            <li
              className={`${activeLink === "home" ? activeNavLinkStyles : navLinkStyles
                }`}
              onClick={() => handleNavLinkClick("home")}
            >
              <Link href="/#home" onClick={handleMenuClick}>
                Home
              </Link>
            </li>
            <li
              className={`${activeLink === "about" ? activeNavLinkStyles : navLinkStyles
                }`}
              onClick={() => handleNavLinkClick("about")}
            >
              <Link href="/about" onClick={handleMenuClick}>
                About
              </Link>
            </li>
            <li
              className={`${activeLink === "services" ? activeNavLinkStyles : navLinkStyles
                }`}
              onClick={() => handleNavLinkClick("services")}
            >
              <Link href="/#services" onClick={handleMenuClick}>
                Services
              </Link>
            </li>
            <li
              className={`${activeLink === "testimonials"
                ? activeNavLinkStyles
                : navLinkStyles
                }`}
              onClick={() => handleNavLinkClick("testimonials")}
            >
              <Link href="/#testimonials" onClick={handleMenuClick}>
                Testimonials
              </Link>
            </li>
            <li
              className={`${activeLink === "faq" ? activeNavLinkStyles : navLinkStyles
                }`}
              onClick={() => handleNavLinkClick("faq")}
            >
              <Link href="/#faq" onClick={handleMenuClick}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
