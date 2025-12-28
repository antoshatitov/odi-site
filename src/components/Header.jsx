import React from 'react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import '../styles/header.css';

const navItems = [
  { label: 'Главная', target: 'hero' },
  { label: 'Проекты', target: 'projects' },
  { label: 'Услуги', target: 'services' },
  { label: 'Фотогалерея', target: 'gallery' },
  { label: 'О компании', target: 'about' },
  { label: 'Контакты', target: 'contacts' },
];

const Header = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img
          src="/prime-invest-logo.png"
          alt="Прайм Инвест"
          className="header__logo-image"
        />
      </div>
      <nav className="header__nav">
        {navItems.map((item) => (
          <button
            key={item.target}
            type="button"
            className="header__link"
            onClick={() => handleScroll(item.target)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="header__contacts">
        <a className="header__phone" href="tel:+79999999999">
          +7 999 999-99-99
        </a>
        <div className="header__icons">
          <a className="icon-btn" href="#" aria-label="Telegram">
            <FaTelegramPlane />
          </a>
          <a className="icon-btn" href="#" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
