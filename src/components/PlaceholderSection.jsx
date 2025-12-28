import React from 'react';
import '../styles/placeholder.css';

const PlaceholderSection = ({ id, title }) => (
  <section id={id} className="placeholder-section">
    <div className="placeholder-section__content">
      <p className="section-kicker">Скоро наполним подробностями</p>
      <h2>{title}</h2>
      <p className="section-subtitle">
        Здесь появится информация о том, как мы работаем, наши процессы и примеры завершенных объектов.
      </p>
    </div>
  </section>
);

export default PlaceholderSection;
