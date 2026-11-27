import { get, set } from './store.js';
import { hari, jam } from '../utils/date.js';

const defaultUrineRem = () => ({
  mode: 'off', // 'off' | 'interval' | 'custom'
  minutes: 180,
  times: ['08:00', '11:00', '14:00', '17:00', '20:00'],
  start: '06:00',
  end: '22:00',
  note: 'Waktunya buang air kecil, jangan ditahan ya!'
});

export const state = { air: [], kemih: [], target: 2000, rem: 0, urineRem: defaultUrineRem() };
const sum = a => a.reduce((s, x) => s + x.ml, 0);

export function load() {
  state.air = get('gc_air', []);
  state.kemih = get('gc_kemih', []);
  state.target = get('gc_target', 2000);
  state.rem = get('gc_rem', 0);
  state.urineRem = { ...defaultUrineRem(), ...get('gc_urine_rem', {}) };
}
export function clear() { state.air = []; state.kemih = []; state.urineRem = defaultUrineRem(); }
export function addWater(ml) { if (!(ml > 0)) return false; state.air.push({ d: hari(), t: jam(), ml }); set('gc_air', state.air); return true; }
export function addUrine(w, kl) { state.kemih.push({ d: hari(), t: jam(), w, kl }); set('gc_kemih', state.kemih); }
export function setTarget(n) { state.target = n >= 500 ? n : 2000; set('gc_target', state.target); }
export function setReminder(n) { state.rem = n; set('gc_rem', n); }
export function setUrineReminder(patch) {
  state.urineRem = { ...state.urineRem, ...patch };
  set('gc_urine_rem', state.urineRem);
}
export function addUrineTime(t) {
  if (!/^\d{2}:\d{2}$/.test(t) || state.urineRem.times.includes(t)) return false;
  const times = [...state.urineRem.times, t].sort();
  setUrineReminder({ times });
  return true;
}
export function removeUrineTime(t) {
  setUrineReminder({ times: state.urineRem.times.filter(x => x !== t) });
}

export function today() {
  const a = state.air.filter(x => x.d === hari()), k = state.kemih.filter(x => x.d === hari());
  const rows = [
    ...a.map(x => ({ t: x.t, s: 'Minum ' + x.ml + ' ml' })),
    ...k.map(x => ({ t: x.t, s: 'Berkemih' + (x.w ? ' · warna ' + x.w : '') + (x.kl.length ? ' · ' + x.kl.join(', ') : '') }))
  ].sort((p, q) => q.t.localeCompare(p.t));
  return { ml: sum(a), n: k.length, rows };
}
export function week() {
  const r = [];
  for (let i = 6; i >= 0; i--) { const d = hari(i), ml = sum(state.air.filter(x => x.d === d)); r.push({ d: d.slice(5), ml, n: state.kemih.filter(x => x.d === d).length, ok: ml >= state.target }); }
  return r;
}
export const summaryText = () => 'Ringkasan GeniCare 7 hari\n' + week().map(w => `${w.d}: ${w.ml} ml, ${w.n}x berkemih`).join('\n') + '\n\nBawa catatan ini saat konsultasi dengan dokter.';
