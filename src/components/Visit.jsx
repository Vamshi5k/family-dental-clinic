import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, Copy, MapPin, Phone } from 'lucide-react';
import { clinic, externalLinks, siteCopy } from '../content';
import Reveal from './Reveal';

function getOpenNow() {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
  const hour = Number(parts.find((part) => part.type === 'hour')?.value || 0);
  const minute = Number(parts.find((part) => part.type === 'minute')?.value || 0);
  const time = hour * 60 + minute;
  return (time >= 600 && time < 780) || (time >= 1050 && time < 1230);
}
export default function Visit() {
  const [openNow, setOpenNow] = useState(getOpenNow);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const timer = window.setInterval(() => setOpenNow(getOpenNow()), 60000);
    return () => window.clearInterval(timer);
  }, []);
  const copyAddress = async () => {
    try { await navigator.clipboard.writeText(`${clinic.address} (${clinic.landmark})`); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:?subject=${encodeURIComponent(siteCopy.visit.copyFallbackSubject)}&body=${encodeURIComponent(`${clinic.address} (${clinic.landmark})`)}`; }
  };
  return <section className="section visit-section" id="visit"><div className="container">
    <Reveal><div className="heading-row"><div><span className="eyebrow">{siteCopy.visit.eyebrow}</span><h2 className="section-title">{siteCopy.visit.title}</h2></div><span className={`open-badge ${openNow ? '' : 'closed-badge'}`}><span className="live-dot"/>{openNow ? siteCopy.visit.openNow : siteCopy.visit.closed}</span></div></Reveal>
    <div className="visit-layout">
      <Reveal><div className="visit-card"><h3>{siteCopy.visit.cardTitle}</h3><p className="address-text">{clinic.address}<br/><strong>({clinic.landmark})</strong></p><div className="visit-actions"><a className="btn btn-outline" href={clinic.tel}><Phone size={15}/>{siteCopy.floating.call} {clinic.phone}</a><button className="btn btn-outline" onClick={copyAddress}><Check size={15} style={{ display: copied ? 'block' : 'none' }}/><Copy size={15} style={{ display: copied ? 'none' : 'block' }}/>{copied ? siteCopy.visit.copiedAddress : siteCopy.visit.copyAddress}</button></div></div>
        <div className="visit-card" style={{ marginTop: 14 }}><h3>{siteCopy.visit.hoursTitle}</h3><table className="hours-table"><tbody><tr><td>{siteCopy.visit.days}</td><td>{siteCopy.visit.morningHours}</td></tr><tr><td>{siteCopy.visit.eveningLabel}</td><td>{siteCopy.visit.eveningHours}</td></tr></tbody></table><span className={`open-badge ${openNow ? '' : 'closed-badge'}`}><span className="live-dot"/>{openNow ? siteCopy.visit.openNow : siteCopy.visit.closed} · {siteCopy.visit.indiaTime}</span></div></Reveal>
      <Reveal delay={100}><div><div className="map-placeholder"><iframe title={siteCopy.visit.mapTitle} src={externalLinks.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ width: '100%', height: '100%', minHeight: 260, border: 0, position: 'absolute', inset: 0 }} /></div>
        {/* TODO: Replace the address-search embed with the clinic's verified Google Maps place URL when supplied. */}
        <div className="visit-card" style={{ padding: '17px 19px', marginTop: 14 }}><strong style={{ fontSize: 12 }}>{siteCopy.visit.fallbackTitle}</strong><p className="address-text" style={{ margin: '5px 0 0', fontSize: 11 }}>{siteCopy.visit.fallbackCopy}</p></div>
        <a className="btn btn-coral directions" href={externalLinks.directions} target="_blank" rel="noreferrer">{siteCopy.visit.directions} <ArrowUpRight size={15}/></a>
      </div></Reveal>
    </div>
  </div></section>;
}
