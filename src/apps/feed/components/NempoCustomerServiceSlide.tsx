import type { RefObject } from 'react';
import { ArrowUpRight, Headset } from 'lucide-react';
import { FaInstagram, FaTelegram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import headsetAsset from '@/assets/nempo-feed-45-cs-headset.png.asset.json';
import { NempoHeader } from './KalaMudaRecruitSlide';
import { nempoCs } from './nempo-cs';
import './NempoCustomerServiceSlide.css';

const ICONS = { instagram: FaInstagram, tiktok: FaTiktok, telegram: FaTelegram } as const;

/** NEMPO Feed slide 45: layanan pelanggan with all admin channels. */
export function NempoCustomerServiceSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { kicker, title, subtitle, whatsapp, channels, servicesLabel, services } = nempoCs;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="ncs-root kmt-root"
      aria-label={`${kicker} NEMPO: WhatsApp ${whatsapp.number}`}
    >
      <div className="ncs-bg" aria-hidden="true">
        <span className="ncs-grid" />
        <span className="ncs-ring ncs-ring-a" />
        <span className="ncs-ring ncs-ring-b" />
        <span className="ncs-glow" />
      </div>

      <NempoHeader badge={kicker} />

      <div className="ncs-hero">
        <span className="ncs-kicker"><Headset aria-hidden="true" />{kicker}</span>
        <h2 className="ncs-title">
          {title[0]}<br /><em>{title[1]}</em>
        </h2>
        <p className="ncs-sub">{subtitle}</p>
      </div>

      <img className="ncs-art" src={headsetAsset.url} alt="" width={869} height={768} draggable={false} />

      <div className="ncs-bottom">
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
            const Icon = ICONS[key];
            return (
              <a key={key} className={`ncs-channel ncs-channel--${key}`} href={href} target="_blank" rel="noreferrer">
                <span className="ncs-channel-icon"><Icon aria-hidden="true" /></span>
                <span className="ncs-channel-name">{name}</span>
                <strong>{handle}</strong>
              </a>
            );
          })}
        </div>

        <div className="ncs-services">
          <span className="ncs-services-label">{servicesLabel}</span>
          <span className="ncs-services-list">
            {services.map((s) => <span key={s}>{s}</span>)}
          </span>
        </div>
      </div>
    </section>
  );
}
