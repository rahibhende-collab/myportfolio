import { useEffect, useState } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { navLinks, profile } from '../../data';
import s from './Navbar.module.css';

interface Props { theme: 'dark' | 'light'; onToggleTheme: () => void }

export function Navbar({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = 'home';
      for (const l of navLinks) {
        const el = document.getElementById(l.toLowerCase());
        if (el && el.offsetTop - 120 <= window.scrollY) current = l.toLowerCase();
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`${s.nav} ${scrolled || open ? s.scrolled : ''}`}>
      <div className={s.inner}>
        <button className={s.logo} onClick={() => go('home')} aria-label="Go to top">{profile.name}<span>.</span></button>
        <nav className={`${s.links} ${open ? s.open : ''}`} aria-label="Main navigation">
          {navLinks.map((l) => (
            <button key={l} onClick={() => go(l.toLowerCase())}
              className={active === l.toLowerCase() ? s.active : ''}
              aria-current={active === l.toLowerCase() ? 'page' : undefined}>{l}</button>
          ))}
          <a className={s.resume} href={profile.resume} download><Download size={16} /> Download Resume</a>
        </nav>
        <div className={s.actions}>
          <button className={s.icon} onClick={onToggleTheme} aria-label="Toggle theme">{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button className={`${s.icon} ${s.burger}`} onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
    </header>
  );
}
