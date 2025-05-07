import "./App.css";
import { useState } from "react";
import logo from "./assets/logo.png";
import pl from "./assets/pl.png";
import en from "./assets/en.png";
import de from "./assets/de.png";
import linkedin from "./assets/linkedin.png";
import phone from "./assets/phone.png";
import mail from "./assets/mail.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/10 z-50">
      {/* Mobile header */}
      <div className="flex items-center justify-between px-4 py-3 lg:hidden">
        <button
          className="text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <a href="/">
          <img src={logo} alt="Logo" className="h-5 w-auto cursor-pointer" />
        </a>
        <div className="w-6" />
      </div>
      {/* Desktop menu */}
      <div className="flex justify-center">
        <div className="hidden lg:flex items-center justify-between w-400 px-8 py-4">
          {/* Desktop menu left side */}
          <div className="flex items-center gap-4">
            <img src={pl} alt="PL" className="h-5 w-auto cursor-pointer" />
            <img src={en} alt="EN" className="h-5 w-auto cursor-pointer" />
            <img src={de} alt="DE" className="h-5 w-auto cursor-pointer" />
          </div>
          {/* Desktop menu center */}
          <div className="flex items-center gap-12">
            <button className="px-4 py-2 text-white hover:text-red-500 transition-colors duration-300">
              ZESPÓŁ
            </button>
            <button className="px-4 py-2 text-white hover:text-red-500 transition-colors duration-300">
              REALIZACJA
            </button>
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="h-5 w-auto cursor-pointer"
              />
            </a>
            <button className="px-4 py-2 text-white hover:text-red-500 transition-colors duration-300">
              OSIĄGNIĘCIA
            </button>
            <button className="px-4 py-2 text-white hover:text-red-500 transition-colors duration-300">
              KONTAKT
            </button>
          </div>
          {/* Desktop menu right side */}
          <div className="flex items-center gap-4 w-30">
            <img
              src={linkedin}
              alt="LinkedIn"
              className="h-7 w-auto cursor-pointer"
            />
            <img
              src={phone}
              alt="Phone"
              className="h-7 w-auto cursor-pointer"
            />
            <img src={mail} alt="Mail" className="h-7 w-auto cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Mobile dropdown menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-black/90 flex flex-col items-center py-4 gap-4 transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <div className="flex items-center gap-4">
          <img src={pl} alt="PL" className="h-5 w-auto cursor-pointer" />
          <img src={en} alt="EN" className="h-5 w-auto cursor-pointer" />
          <img src={de} alt="DE" className="h-5 w-auto cursor-pointer" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <button className="text-white py-2">ZESPÓŁ</button>
          <button className="text-white py-2">REALIZACJA</button>
          <button className="text-white py-2">OSIĄGNIĘCIA</button>
          <button className="text-white py-2">KONTAKT</button>
        </div>
        <div className="flex items-center gap-4">
          <img
            src={linkedin}
            alt="LinkedIn"
            className="h-7 w-auto cursor-pointer"
          />
          <img src={phone} alt="Phone" className="h-7 w-auto cursor-pointer" />
          <img src={mail} alt="Mail" className="h-7 w-auto cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
