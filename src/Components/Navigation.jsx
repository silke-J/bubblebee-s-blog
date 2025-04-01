import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from "../../public/logo.svg"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/">Forside </NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Galleri </NavLink>
        </li>
        <li>
          <NavLink to="/experience">Oplevelse </NavLink>
        </li>
        <li>
          <NavLink to="/dishes"> Retter </NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog </NavLink>
        </li>
        <li>
          <NavLink to="/about">Om mig </NavLink>
        </li>
        <li>
          <NavLink to="/contact">Kontakt </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;