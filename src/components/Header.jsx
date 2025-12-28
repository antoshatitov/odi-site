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
          src="/odi-logo.png"
          alt="ODI"
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
        <a className="header__phone" href="tel:+79244422800">
          +7 924 442-28-00
        </a>
        <div className="header__icons">
          <a
            className="icon-btn"
            href="https://t.me/o781781"
            aria-label="Telegram"
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegramPlane />
          </a>
          <a
            className="icon-btn"
            href="https://wa.me/79244422800"
            aria-label="WhatsApp"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
