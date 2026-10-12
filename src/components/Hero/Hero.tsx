import { useState } from 'react';
import { Download, FolderOpen, Github, Linkedin, Mail, Send } from 'lucide-react';
import { profile } from '../../data';
import s from './Hero.module.css';

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export function Avatar({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  return failed
    ? <div className={`${s.fallback} ${className ?? ''}`} role="img" aria-label="Avatar of Rahi">R</div>
    : <img className={className} src={profile.photo} alt={`${profile.fullName} profile`} onError={() => setFailed(true)} />;
}

export function Hero() {
  return (
    <section id="home" className={s.hero}>
      <div className={s.inner}>
        <div className={s.text}>
          <p className={s.hello}>Hi, I'm</p>
          <h1>{profile.fullName}</h1>
          <p className={s.role}>{profile.title}</p>
          <p className={s.intro}>{profile.intro}</p>
          <div className={s.cta}>
            <button className={s.primary} onClick={() => go('projects')}><FolderOpen size={18} /> View My Projects</button>
            <a className={s.secondary} href={profile.resume} download><Download size={18} /> Download Resume</a>
            <button className={s.secondary} onClick={() => go('contact')}><Send size={18} /> Contact Me</button>
          </div>
          <div className={s.social}>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>
        <div className={s.visual}>
          <div className={s.ring}><Avatar className={s.photo} /></div>
          <pre className={s.code} aria-hidden="true">{`const rahi = {\n  role: "Developer",\n  stack: ["React", "Node"],\n  learning: "AI / ML",\n};`}</pre>
        </div>
      </div>
    </section>
  );
}
