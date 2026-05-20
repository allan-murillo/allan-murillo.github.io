import { useState } from "react";
import { Menu, MoonStar, SunMedium, X } from "lucide-react";
import { navItems } from "../data/siteData";

type HeaderProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Allan Murillo home">
        <span className="brand-mark__dot" />
        Allan Murillo
      </a>

      <div className="header-controls">
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={onToggleTheme}
        >
          {theme === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />}
          <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>

        <nav className={`site-nav ${isOpen ? "site-nav--open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
