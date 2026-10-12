import { Award, ExternalLink } from 'lucide-react';
import type { Achievement, Internship, SkillGroup } from '../../types';
import { Empty } from '../Section/Section';
import s from './Cards.module.css';

export function Chips({ items }: { items: string[] }) {
  return <ul className={s.chips}>{items.map((i) => <li key={i} className={s.chip}>{i}</li>)}</ul>;
}

export function SkillsGrid({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className={s.grid}>
      {groups.map((g) => (
        <article key={g.category} className={s.card}>
          <h3>{g.category}</h3>
          <Chips items={g.items} />
        </article>
      ))}
    </div>
  );
}

function CertLink({ href, label }: { href?: string; label: string }) {
  return href
    ? <a className={s.link} href={href} target="_blank" rel="noreferrer"><ExternalLink size={15} /> {label}</a>
    : <span className={s.muted}>Certificate link coming soon</span>;
}

export function InternshipGrid({ items }: { items: Internship[] }) {
  return (
    <div className={s.grid}>
      {items.map((i) => (
        <article key={i.title} className={s.card}>
          <span className={s.badge}>{i.status}</span>
          <h3>{i.title}</h3>
          <p className={s.muted}>{i.organization} · {i.type} · {i.duration}</p>
          <p>{i.description}</p>
          <Chips items={i.skills} />
          <CertLink href={i.certificate} label="View Certificate" />
        </article>
      ))}
    </div>
  );
}

export function AchievementGrid({ items }: { items: Achievement[] }) {
  if (!items.length) return <Empty text="Add achievements and certificates in src/data/index.ts" />;
  return (
    <div className={s.grid}>
      {items.map((a) => (
        <article key={a.title} className={s.card}>
          <Award className={s.icon} />
          <h3>{a.title}</h3>
          <p className={s.muted}>{a.organization}{a.date ? ` · ${a.date}` : ''}</p>
          {a.credentialId && <p className={s.muted}>ID: {a.credentialId}</p>}
          <CertLink href={a.link} label="View Certificate" />
        </article>
      ))}
    </div>
  );
}
