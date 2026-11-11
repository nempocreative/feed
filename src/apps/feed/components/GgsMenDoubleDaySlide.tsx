import type { RefObject } from 'react';
import { MapPin } from 'lucide-react';
import barbershop from '@/assets/ggs-men-1111-barbershop-dark.jpg';
import menOverlay from '@/assets/ggs-men-header-footer.png.asset.json';
import { GGS_MEN_1111_PROMO } from './ggs-men-1111-promo';
import './GgsMenDoubleDaySlide.css';

function CrownIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M2.5 18.5h19l1.2-10.2-5.4 3.9L12 4.8l-5.3 7.4-5.4-3.9 1.2 10.2Zm-.4 2.2a1 1 0 0 1 1-1h17.8a1 1 0 1 1 0 2H3.1a1 1 0 0 1-1-1Z" />
    </svg>
  );
}

/** GGS Cowok slide 3: 11.11 "Paket GP Ganteng Pisan" — 11% off Potong Cuci Pijit over a dark barbershop photo. */
export function GgsMenDoubleDaySlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const p = GGS_MEN_1111_PROMO;
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggm11-root"
      role="img"
      aria-label={`GGS Barber Hairstudio Diskon ${p.date}: ${p.packageBadge} ${p.packageName} (${p.packageItems}) diskon ${p.discount}%. ${p.location}`}
    >
      <img className="ggm11-bg" src={barbershop} width={1088} height={1440} alt="" aria-hidden="true" />
      <span className="ggm11-shade" aria-hidden="true" />

      <section className="ggm11-head">
        <CrownIcon />
        <p className="ggm11-diskon">Diskon</p>
        <h2 className="ggm11-date">{p.date}</h2>
      </section>

      <p className="ggm11-tagline">
        {p.taglineTop} <em>{p.taglineHighlight}</em>
      </p>

      <section className="ggm11-pack">
        <p className="ggm11-pack-badge">{p.packageBadge}</p>
        <h3 className="ggm11-pack-name">{p.packageName}</h3>
        <p className="ggm11-pack-items">({p.packageItems})</p>
      </section>

      <section className="ggm11-disc">
        <p className="ggm11-disc-label">Diskon</p>
        <p className="ggm11-disc-value">{p.discount}%</p>
      </section>

      <p className="ggm11-urgency">{p.urgency}</p>

      <p className="ggm11-location">
        <MapPin aria-hidden="true" strokeWidth={2.4} />
        {p.location}
      </p>

      <img className="ggm11-watermark" src={menOverlay.url} alt="" draggable={false} />
    </div>
  );
}
