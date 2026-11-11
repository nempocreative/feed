import type { RefObject } from 'react';
import photo from '@/assets/ggs-men-burst-fade-cover.jpg.asset.json';
import menOverlay from '@/assets/ggs-men-header-footer.png.asset.json';
import './GgsMenCutCoverSlide.css';

/** GGS Cowok slide 4: video cover naming the haircut (Burst Fade) over the owner's client photo. */
export function GgsMenCutCoverSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggmc-root"
      role="img"
      aria-label="GGS Barber Hairstudio — model rambut Burst Fade"
    >
      <img className="ggmc-photo" src={photo.url} width={1440} height={1920} alt="" aria-hidden="true" />
      <span className="ggmc-shade" aria-hidden="true" />

      <section className="ggmc-head" aria-hidden="true">
        <p className="ggmc-kicker">
          <span />
          Model Rambut
          <span />
        </p>
        <h2 className="ggmc-title">
          <b>Burst</b>
          <em>Fade</em>
        </h2>
      </section>

      <img className="ggmc-watermark" src={menOverlay.url} alt="" draggable={false} />
    </div>
  );
}
