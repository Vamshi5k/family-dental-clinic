import { ArrowUpRight, GraduationCap, Heart } from 'lucide-react';
import { clinic, siteCopy } from '../content';
import Reveal from './Reveal';

export default function Doctor() {
  return <section className="section" id="doctor"><div className="container doctor-layout">
    <Reveal><div className="doctor-portrait" role="img" aria-label={`${siteCopy.doctor.portraitAria} for ${clinic.doctor}`}><div className="portrait-arch"/><div className="initials">{siteCopy.doctor.initials}</div><span className="portrait-caption">{siteCopy.doctor.portraitCaption}</span></div></Reveal>
    <Reveal delay={100}><div className="doctor-copy"><span className="eyebrow">{siteCopy.doctor.eyebrow}</span><h2 className="section-title">{clinic.doctor}</h2><p>{siteCopy.doctor.biography}</p><div className="chips"><span className="chip"><GraduationCap size={14}/> {clinic.degree}</span><span className="chip">{clinic.college}</span></div><p>{siteCopy.doctor.healthcareNote}</p>
      <div className="second-doctor"><span className="second-avatar"><Heart size={18}/></span><div><strong>{siteCopy.doctor.secondDentist}</strong><p>{siteCopy.doctor.nameNotProvided}</p></div><a href={clinic.whatsapp} aria-label={siteCopy.doctor.teamAria} target="_blank" rel="noreferrer" style={{ marginLeft: 'auto', color: 'var(--teal700)' }}><ArrowUpRight size={18}/></a></div>
    </div></Reveal>
  </div></section>;
}
