import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { navLinks, profile } from '../../data';
import s from './Footer.module.css';

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div>
          <strong>{profile.name}</strong>
          <p>Building modern web apps and exploring AI.</p>
        </div>
        <nav className={s.nav} aria-label="Footer navigation">
          {navLinks.map((l) => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}
        </nav>
        <div className={s.social}>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
        </div>
      </div>
      <p className={s.copy}>© {new Date().getFullYear()} {profile.name}. Designed &amp; Developed by Rahi.</p>
      <button className={s.top} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp size={20} /></button>
    </footer>
  );
}
