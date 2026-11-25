import { $, $$ } from '../utils/dom.js';
const TABS = [
  ['beranda', 'Beranda', '<path d="M3 11l9-8 9 8v10H3z"/>'],
  ['catatan', 'Catatan', '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>'],
  ['edukasi', 'Edukasi', '<path d="M3 5h7a2 2 0 012 2v13a2 2 0 00-2-2H3zM21 5h-7a2 2 0 00-2 2v13a2 2 0 012-2h7z"/>'],
  ['keluhan', 'Keluhan', '<path d="M12 21s-8-5-8-11a4.5 4.5 0 018-3 4.5 4.5 0 018 3c0 6-8 11-8 11z"/>'],
  ['ai', 'Tanya AI', '<path d="M21 12a8 8 0 01-11.5 7.2L4 20l1-4.5A8 8 0 1121 12z"/>']
];
export function build(onGo) {
  $('#nav').innerHTML = TABS.map(t => `<button data-t="${t[0]}"><svg viewBox="0 0 24 24">${t[2]}</svg>${t[1]}</button>`).join('');
  $('#nav').onclick = e => { const b = e.target.closest('button'); if (b) onGo(b.dataset.t); };
}
export function show(id) {
  $$('.tab').forEach(x => x.classList.toggle('on', x.id === id));
  $$('nav button').forEach(x => x.classList.toggle('on', x.dataset.t === id));
  window.scrollTo(0, 0);
}
export const hideSplash = () => $('#splash').classList.add('off');
