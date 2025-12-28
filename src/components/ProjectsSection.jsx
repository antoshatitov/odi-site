import React, { useState } from 'react';
import { projects } from '../data/projects.js';
import '../styles/projects.css';

const ProjectCard = ({ project }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + project.slides.length) % project.slides.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % project.slides.length);
  };

  return (
    <div className="project-card">
      <div className="project-card__slider">
        {project.slides.map((slide, slideIndex) => (
          <div
            key={`${project.name}-${slide.label}`}
            className={`project-card__slide ${slideIndex === index ? 'is-active' : ''}`}
            style={{ backgroundColor: slide.color }}
          >
            <span className="project-card__slide-label">{slide.label}</span>
          </div>
        ))}
        <div className="project-card__controls">
          <button type="button" onClick={handlePrev} aria-label="Предыдущий слайд">
            ←
          </button>
          <div className="project-card__dots">
            {project.slides.map((_, dotIndex) => (
              <button
                key={`dot-${project.name}-${dotIndex}`}
                type="button"
                className={dotIndex === index ? 'is-active' : ''}
                onClick={() => setIndex(dotIndex)}
                aria-label={`Перейти к слайду ${dotIndex + 1}`}
              />
            ))}
          </div>
          <button type="button" onClick={handleNext} aria-label="Следующий слайд">
            →
          </button>
        </div>
      </div>
      <div className="project-card__info">
        <h3>{project.name}</h3>
        <p>{project.specs}</p>
        <div className="project-card__price">{project.price}</div>
      </div>
    </div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="projects">
    <div className="projects__heading">
      <p className="section-kicker">Наши предложения</p>
      <h2>Проекты домов</h2>
      <p className="section-subtitle">
        Подбираем планировку под ваш образ жизни и участок. Типовые и индивидуальные решения.
      </p>
    </div>
    <div className="projects__grid">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
