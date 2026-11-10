import { describe, expect, it } from 'vitest';
import { NEMPO_CS_SLIDE, nempoCs, waLink } from './nempo-cs';

describe('NEMPO customer service slide', () => {
  it('is slide 45', () => {
    expect(NEMPO_CS_SLIDE).toBe(45);
  });
  it('WhatsApp button opens the shown admin number', () => {
    expect(nempoCs.whatsapp.number).toBe('0857 2498 1356');
    expect(nempoCs.whatsapp.href).toBe(waLink(nempoCs.whatsapp.number));
    expect(nempoCs.whatsapp.href).toBe('https://wa.me/6285724981356');
  });
  it('lists Instagram, TikTok and Telegram handles', () => {
    expect(nempoCs.channels.map((c) => c.handle)).toEqual(['@nempo.id', '@nempo.id', '@nempoid']);
  });
});
