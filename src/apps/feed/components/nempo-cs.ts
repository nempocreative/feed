/** NEMPO Feed slide 45 — layanan pelanggan (customer service). */
export const NEMPO_CS_SLIDE = 45;

export const nempoCs = {
  kicker: 'Layanan Pelanggan',
  title: ['Ada yang bisa', 'kami bantu?'],
  subtitle: 'Tanya, konsultasi, atau order desain — langsung chat admin NEMPO.',
  whatsapp: { label: 'Chat admin via WhatsApp', number: '0857 2498 1356', href: 'https://wa.me/6285724981356' },
  channels: [
    { key: 'instagram', name: 'Instagram', handle: '@nempo.id', href: 'https://instagram.com/nempo.id' },
    { key: 'tiktok', name: 'TikTok', handle: '@nempo.id', href: 'https://www.tiktok.com/@nempo.id' },
    { key: 'telegram', name: 'Telegram', handle: '@nempoid', href: 'https://t.me/nempoid' },
  ],
  servicesLabel: 'Siap bantu order',
  services: ['Desain Branding Usaha', 'Poster Produk', 'Greeting Card'],
} as const;

/** wa.me link for an Indonesian 08… number. */
export function waLink(number: string) {
  return `https://wa.me/62${number.replace(/\D/g, '').replace(/^0/, '')}`;
}
