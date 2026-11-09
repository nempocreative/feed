import cafeLoopAsset from '@/assets/tion/tion-slide-13-roti-o-cafe-loop.mp4.asset.json';
import cafePosterAsset from '@/assets/tion/tion-slide-13-roti-o-cafe-poster.jpg.asset.json';

export const rotiOPromo = {
  brand: "Roti'O",
  deal: 'Momen Manis',
  price: 'Rp23.500',
  priceNumber: '23.500',
  normalPrice: 'Rp50.000',
  discount: '-53%',
  menu: ['1 Ube Choco Pastry / Martabak', '/ 2 Mini Pastry'],
  bonus: 'Free 1 Drink',
};

/** Slide 13: Roti'O B1G1 promo in the slide 12 (Heyam) look, over looping café footage. */
export default function RotiOPromoSlide() {
  return (
    <div className="tion13" aria-hidden="false">
      <video
        className="tion13__video"
        src={cafeLoopAsset.url}
        poster={cafePosterAsset.url}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="tion13__shade" aria-hidden="true" />

      <header className="tion13__top">
        <p className="tion13__kicker">Promo B1G1 · {rotiOPromo.brand}</p>
        <h1 className="tion13__headline">{rotiOPromo.deal}</h1>
      </header>

      <div
        className="tion13__price"
        role="img"
        aria-label={`Harga ${rotiOPromo.price}, normal ${rotiOPromo.normalPrice}, hemat ${rotiOPromo.discount}`}
      >
        <span className="tion13__price-off">{rotiOPromo.discount}</span>
        <span className="tion13__price-now">
          <small>Rp</small>
          {rotiOPromo.priceNumber}
        </span>
        <s className="tion13__price-was">{rotiOPromo.normalPrice}</s>
      </div>

      <footer className="tion13__bottom">
        <p className="tion13__menu">
          {rotiOPromo.menu.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <strong>{rotiOPromo.bonus}</strong>
        </p>
        <p className="tion13__cta">
          <span className="tion13__cta-arrow" aria-hidden="true">
            ↓
          </span>
          Klik link lokasi di bawah
        </p>
      </footer>
    </div>
  );
}
