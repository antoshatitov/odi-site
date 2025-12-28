import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import PlaceholderSection from './components/PlaceholderSection.jsx';
import './styles/app.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <PlaceholderSection id="services" title="Услуги" />
        <PlaceholderSection id="gallery" title="Фотогалерея" />
        <PlaceholderSection id="about" title="О компании" />
        <PlaceholderSection id="contacts" title="Контакты" />
      </main>
    </div>
  );
}

export default App;
