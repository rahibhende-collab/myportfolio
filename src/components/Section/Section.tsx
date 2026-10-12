import type { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';
import s from './Section.module.css';

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section id={id} ref={ref} className={`${s.section} ${s.reveal} ${visible ? s.visible : ''}`}>
      <div className={s.container}>
        <h2 className={s.title}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
export function Empty({ text }: { text: string }) {
  return <p className={s.empty}>{text}</p>;
}
