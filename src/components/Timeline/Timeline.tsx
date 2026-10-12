import type { TimelineItem } from '../../types';
import { Empty } from '../Section/Section';
import s from './Timeline.module.css';

export function Timeline({ items, empty }: { items: TimelineItem[]; empty: string }) {
  if (!items.length) return <Empty text={empty} />;
  return (
    <ol className={s.list}>
      {items.map((it) => (
        <li key={it.title} className={s.item}>
          <span className={s.dot} aria-hidden="true" />
          <div className={s.card}>
            <h3>{it.title}</h3>
            {it.subtitle && <p className={s.sub}>{it.subtitle}</p>}
            {it.period && <span className={s.period}>{it.period}</span>}
            {it.details && <ul>{it.details.map((d) => <li key={d}>{d}</li>)}</ul>}
          </div>
        </li>
      ))}
    </ol>
  );
}
