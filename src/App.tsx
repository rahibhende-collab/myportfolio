import { useEffect, useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import Home from './pages/Home';

type Theme = 'dark' | 'light';

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    try { return localStorage.getItem('theme') === 'light' ? 'light' : 'dark'; } catch { return 'dark'; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch { /* ignore */ }
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <Home />
      <Footer />
    </>
  );
}
