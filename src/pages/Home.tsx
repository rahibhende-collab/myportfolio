import { Chips, InternshipGrid, SkillsGrid } from '../components/Cards/Cards';
import { Contact } from '../components/Contact/Contact';
import { Avatar, Hero } from '../components/Hero/Hero';
import { Projects } from '../components/Projects/Projects';
import { Section } from '../components/Section/Section';
import { Timeline } from '../components/Timeline/Timeline';
import { education, internships, interests, journey, profile, quickFacts, skillGroups } from '../data';
import s from './Home.module.css';

export default function Home() {
  return (
    <main>
      <Hero />
      <Section id="about" title="About Me">
        <div className={s.about}>
          <Avatar className={s.aboutPhoto} />
          <div>
            <p>
              I'm {profile.fullName}, an MCA student and aspiring software developer who enjoys turning ideas into clean, usable products.
              I'm focused on full stack development with the MERN stack and curious about how AI and Machine Learning can make software smarter.
            </p>
            <p className={s.gap}>I believe in continuous learning, building real projects, and writing code that is simple, readable, and maintainable.</p>
            <Chips items={interests} />
            <dl className={s.facts}>
              {quickFacts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
          </div>
        </div>
      </Section>
      <Section id="education" title="Education"><Timeline items={education} empty="Add education in src/data/index.ts" /></Section>
      <Section id="projects" title="Projects"><Projects /></Section>
      <Section id="skills" title="Skills"><SkillsGrid groups={skillGroups} /></Section>
      <Section id="journey" title="My Journey"><Timeline items={journey} empty="Add milestones in src/data/index.ts" /></Section>
      <Section id="internships" title="Internships"><InternshipGrid items={internships} /></Section>
      <Section id="contact" title="Contact"><Contact /></Section>
    </main>
  );
}
