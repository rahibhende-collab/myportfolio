import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data';
import s from './Contact.module.css';

interface FormValues { name: string; email: string; subject: string; message: string }
type Status = 'idle' | 'success' | 'error';

// To connect a real service, create a .env file with VITE_FORM_ENDPOINT=<your Formspree URL>
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

async function sendMessage(values: FormValues): Promise<void> {
  if (!ENDPOINT) { await new Promise((r) => setTimeout(r, 800)); return; } // demo mode
  const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(values) });
  if (!res.ok) throw new Error('Request failed');
}

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>();
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (values: FormValues) => {
    setStatus('idle');
    try { await sendMessage(values); setStatus('success'); reset(); } catch { setStatus('error'); }
  };

  return (
    <div className={s.wrap}>
      <div>
        <h3 className={s.heading}>Let's Work Together</h3>
        <p className={s.text}>I'm always open to discussing software development opportunities, interesting projects, internships, and collaborations.</p>
        <ul className={s.info}>
          <li><Mail size={18} /> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><Linkedin size={18} /> <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><Github size={18} /> <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </div>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>Name
          <input {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'At least 2 characters' } })} aria-invalid={!!errors.name} />
          {errors.name && <span role="alert">{errors.name.message}</span>}
        </label>
        <label>Email
          <input type="email" {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' } })} aria-invalid={!!errors.email} />
          {errors.email && <span role="alert">{errors.email.message}</span>}
        </label>
        <label>Subject
          <input {...register('subject', { required: 'Subject is required', minLength: { value: 3, message: 'At least 3 characters' } })} aria-invalid={!!errors.subject} />
          {errors.subject && <span role="alert">{errors.subject.message}</span>}
        </label>
        <label>Message
          <textarea rows={5} {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'At least 10 characters' }, maxLength: { value: 1000, message: 'Max 1000 characters' } })} aria-invalid={!!errors.message} />
          {errors.message && <span role="alert">{errors.message.message}</span>}
        </label>
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Message'}</button>
        {status === 'success' && <p className={s.ok} role="status">Thanks! Your message has been sent.</p>}
        {status === 'error' && <p className={s.bad} role="alert">Something went wrong. Please try again or email me directly.</p>}
      </form>
    </div>
  );
}
