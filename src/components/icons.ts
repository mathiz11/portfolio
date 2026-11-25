/**
 * Icônes au trait (24×24), dessinées pour le site.
 * Chaque entrée contient l'intérieur du <svg>.
 */
export const icons = {
  user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c1.2-3.8 4-5.5 7.5-5.5s6.3 1.7 7.5 5.5"/>',
  code: '<path d="M8 7 3 12l5 5"/><path d="m16 7 5 5-5 5"/><path d="M13.5 5l-3 14"/>',
  graduation: '<path d="M2.5 9 12 4.5 21.5 9 12 13.5Z"/><path d="M6.5 11v4.5c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3V11"/><path d="M21.5 9v5"/>',
  runner: '<circle cx="15" cy="4.5" r="2"/><path d="M8 10.5 11 8.5l3 .5 2 3 2.5 1"/><path d="M13.5 9 11 14l3 2.5-1 4.5"/><path d="M11 14l-2 3.5H5"/>',
  heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20Z" stroke-linecap="round" stroke-linejoin="round"/>',
  map: '<path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20Z"/><path d="M9 4v13.5M15 6.5V20"/>',
  github: '<circle cx="6" cy="5.5" r="2.2"/><circle cx="6" cy="18.5" r="2.2"/><circle cx="18" cy="8" r="2.2"/><path d="M6 7.7v8.6M18 10.2c0 4-6 3-11 6.6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/>',
  bike: '<circle cx="5.5" cy="16" r="3.5"/><circle cx="18.5" cy="16" r="3.5"/><path d="M5.5 16H11L9 9Z"/><path d="M9 9h7l-5 7M16 9l2.5 7"/>',
  mountain: '<path d="M2 20 9 7l4.5 7.5L16 10l6 10Z"/><path d="M7 10.8 9 12.2l2-1.4"/>',
  road: '<path d="M8.5 3 4 21"/><path d="M15.5 3 20 21"/><path d="M12 4v2.5M12 10v3M12 16.5V20"/>',
  football: '<circle cx="12" cy="12" r="9"/><path d="m12 8.5 3.3 2.4-1.3 3.9h-4l-1.3-3.9Z"/><path d="M12 8.5V3M15.3 10.9l5.2-1.7M14 14.8l3.2 4.4M10 14.8l-3.2 4.4M8.7 10.9 3.5 9.2"/>',
  scooter: '<circle cx="5.5" cy="18" r="2.5"/><circle cx="18.5" cy="18" r="2.5"/><path d="M8 18h8"/><path d="M17.5 15.5 14.5 4H11.5"/>',
  scissors: '<circle cx="6.5" cy="6.5" r="2.5"/><circle cx="6.5" cy="17.5" r="2.5"/><path d="M8.6 8 20 18.5"/><path d="M8.6 16 20 5.5"/>',
  wrench: '<path d="M14.5 3.5a4.5 4.5 0 0 0-1 4.8l-9 9a2 2 0 0 0 2.8 2.8l9-9a4.5 4.5 0 0 0 4.8-1l-2.6-.4-.6-2.6-2.6-.6Z"/>',
} as const;

export type IconName = keyof typeof icons;
