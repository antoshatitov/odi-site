import React, { useEffect, useMemo, useState } from 'react';
import { heroSlides } from '../data/heroSlides.js';
import '../styles/hero.css';

const SLIDE_INTERVAL = 4500;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = useMemo(() => heroSlides, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="hero" className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">Создаем уютные дома под ключ</h1>
        <p className="hero__subtitle">
          Вы утверждаете проект и заезжаете в готовое жилье. С фиксированной ценой и гарантией
        </p>
        <button className="hero__cta" type="button">Расчет стоимости строительства</button>
      </div>
      <div className="hero__slider">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`hero__slide ${index === activeIndex ? 'is-active' : ''}`}
            style={{ backgroundColor: slide.color }}
          >
            <div className="hero__slide-label">
              <span>{slide.title}</span>
              <small>{slide.description}</small>
            </div>
          </div>
        ))}
        <div className="hero__dots">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              className={`hero__dot ${index === activeIndex ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Показать слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
