import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/saved", label: "Saved" },
  { to: "/digest", label: "Digest" },
  { to: "/settings", label: "Settings" },
  { to: "/proof", label: "Proof" },
];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="navigation__brand">
        <NavLink to="/" className="navigation__brand-link" onClick={closeMobileMenu}>
          Job Notification App
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <ul className="navigation__links">
        {navLinks.map((link) => (
          <li key={link.to} className="navigation__item">
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "navigation__link navigation__link--active"
                  : "navigation__link"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        className="navigation__hamburger"
        onClick={toggleMobileMenu}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileMenuOpen}
      >
        <span
          className={`navigation__hamburger-line ${
            mobileMenuOpen ? "navigation__hamburger-line--open" : ""
          }`}
        />
        <span
          className={`navigation__hamburger-line ${
            mobileMenuOpen ? "navigation__hamburger-line--open" : ""
          }`}
        />
        <span
          className={`navigation__hamburger-line ${
            mobileMenuOpen ? "navigation__hamburger-line--open" : ""
          }`}
        />
      </button>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="navigation__mobile-menu">
          <ul className="navigation__mobile-links">
            {navLinks.map((link) => (
              <li key={link.to} className="navigation__mobile-item">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "navigation__mobile-link navigation__mobile-link--active"
                      : "navigation__mobile-link"
                  }
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
