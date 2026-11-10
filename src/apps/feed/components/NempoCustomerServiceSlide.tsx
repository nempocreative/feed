import type { RefObject } from 'react';
import { ArrowUpRight, Headset, Heart, PartyPopper, Sparkles } from 'lucide-react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import headsetAsset from '@/assets/nempo-feed-45-cs-headset.png.asset.json';
import { NempoHeader } from './KalaMudaRecruitSlide';
import { nempoCs } from './nempo-cs';
import './NempoCustomerServiceSlide.css';

const CHANNEL_ICONS = { instagram: FaInstagram, tiktok: FaTiktok } as const;
const SERVICE_ICONS = { eo: PartyPopper, wo: Heart, creative: Sparkles } as const;

/** NEMPO Feed slide 45: layanan pelanggan — EO / WO / Creative + admin channels. */
export function NempoCustomerServiceSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { badge, kicker, title, subtitle, servicesLabel, services, whatsapp, channels } = nempoCs;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="ncs-root kmt-root"
      aria-label={`${kicker} NEMPO: EO, WO, Creative. WhatsApp ${whatsapp.number}`}
    >
      <div className="ncs-bg" aria-hidden="true">
        <span className="ncs-grid" />
        <span className="ncs-ring ncs-ring-a" />
        <span className="ncs-ring ncs-ring-b" />
        <span className="ncs-glow" />
      </div>

      <NempoHeader badge={badge} />

      <div className="ncs-hero">
        <span className="ncs-kicker"><Headset aria-hidden="true" />{kicker}</span>
        <h2 className="ncs-title">
          {title[0]}<br /><em>{title[1]}</em>
        </h2>
        <p className="ncs-sub">{subtitle}</p>
      </div>

      <img className="ncs-art" src={headsetAsset.url} alt="" width={869} height={768} draggable={false} />

      <div className="ncs-bottom">
        <div className="ncs-services">
          <span className="ncs-section-label"><span />{servicesLabel}<span /></span>
          <div className="ncs-service-grid">
            {services.map(({ key, label, desc }) => {
              const Icon = SERVICE_ICONS[key];
              return (
                <div key={key} className={`ncs-service ncs-service--${key}`}>
                  <span className="ncs-service-icon"><Icon aria-hidden="true" /></span>
                  <strong>{label}</strong>
                  <span className="ncs-service-desc">{desc}</span>
                </div>
              );
            })}
          </div>
        </div>

        <a className="ncs-wa" href={whatsapp.href} target="_blank" rel="noreferrer">
          <span className="ncs-wa-icon"><FaWhatsapp aria-hidden="true" /></span>
          <span className="ncs-wa-text">
            <span>{whatsapp.label}</span>
            <strong>{whatsapp.number}</strong>
          </span>
          <span className="ncs-wa-go"><ArrowUpRight aria-hidden="true" /></span>
        </a>

        <div className="ncs-channels">
          {channels.map(({ key, name, handle, href }) => {
            const Icon = CHANNEL_ICONS[key];
            return (
              <a key={key} className={`ncs-channel ncs-channel--${key}`} href={href} target="_blank" rel="noreferrer">
                <span className="ncs-channel-icon"><Icon aria-hidden="true" /></span>
                <span className="ncs-channel-name">{name}</span>
                <strong>{handle}</strong>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
