import { useEffect, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { projectFilters, projects } from '../../data';
import type { Project } from '../../types';
import { Chips } from '../Cards/Cards';
import s from './Projects.module.css';

function Links({ p }: { p: Project }) {
  return (
    <div className={s.links}>
      {p.github ? <a href={p.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a> : <span>GitHub soon</span>}
      {p.liveDemo ? <a href={p.liveDemo} target="_blank" rel="noreferrer"><ExternalLink size={15} /> Live Demo</a> : <span>Demo soon</span>}
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const shown = filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div className={s.filters} role="group" aria-label="Project filters">
        {projectFilters.map((f) => (
          <button key={f} aria-pressed={filter === f} className={filter === f ? s.on : ''} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <div className={s.grid}>
        {shown.map((p) => (
          <article key={p.id} className={s.card}>
            <div className={s.thumb}>
              {p.image ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" /> : <span>{p.title.slice(0, 2)}</span>}
            </div>
            <h3>{p.title}</h3>
            <p className={s.desc}>{p.description}</p>
            <Chips items={p.technologies} />
            <Links p={p} />
            <button className={s.details} onClick={() => setSelected(p)}>View Details</button>
          </article>
        ))}
      </div>
      {selected && (
        <div className={s.overlay} onClick={() => setSelected(null)}>
          <div className={s.modal} role="dialog" aria-modal="true" aria-label={selected.title} onClick={(e) => e.stopPropagation()}>
            <button className={s.close} onClick={() => setSelected(null)} aria-label="Close"><X size={20} /></button>
            <h3>{selected.title}</h3>
            <p className={s.desc}>{selected.description}</p>
            <h4>Features</h4>
            <ul>{selected.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <h4>Technologies</h4>
            <Chips items={selected.technologies} />
            <Links p={selected} />
          </div>
        </div>
      )}
    </>
  );
}
