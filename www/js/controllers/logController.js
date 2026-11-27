import * as H from '../models/healthModel.js';
import * as V from '../views/logView.js';
import { setScope } from '../models/store.js';
import { $ } from '../utils/dom.js';

let color = null, timer, urineTimer, lastFiredKey = '', user = null;

function refresh() { V.render({ nama: user && user.nama, account: user ? user.nama + ' · ' + user.email : '', today: H.today(), week: H.week(), target: H.state.target }); }
function notify(title, body) {
  V.showToast(`${title}: ${body}`);
  try {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, { body });
    }
  } catch {}
}
function reqPerm() {
  if ('Notification' in window && Notification.permission === 'default') Notification.requestPermission();
}
function schedule() { // Di APK ganti dengan @capacitor/local-notifications
  clearInterval(timer); if (!H.state.rem) return;
  reqPerm();
  timer = setInterval(() => notify('GeniCare · Minum', 'Waktunya minum air.'), H.state.rem * 36e5);
}
function inWindow(nowHM, start, end) {
  if (!start || !end) return true;
  return start <= end ? (nowHM >= start && nowHM <= end) : (nowHM >= start || nowHM <= end);
}
function scheduleUrine() {
  clearInterval(urineTimer);
  const u = H.state.urineRem;
  if (!u || u.mode === 'off') return;
  reqPerm();
  const msg = (u.note || '').trim() || 'Waktunya buang air kecil, jangan ditahan ya!';
  if (u.mode === 'interval') {
    const ms = Math.max(15, +u.minutes || 180) * 60000;
    urineTimer = setInterval(() => {
      const now = new Date();
      const hm = now.toTimeString().slice(0, 5);
      if (inWindow(hm, u.start, u.end)) notify('GeniCare · Berkemih', msg);
    }, ms);
  } else if (u.mode === 'custom') {
    urineTimer = setInterval(() => {
      const now = new Date();
      const hm = now.toTimeString().slice(0, 5);
      const key = now.toDateString() + ' ' + hm;
      if (u.times.includes(hm) && lastFiredKey !== key) {
        lastFiredKey = key;
        notify('GeniCare · Berkemih', msg);
      }
    }, 15000);
  }
}
const addWater = ml => { if (H.addWater(ml)) refresh(); };

export const actions = {
  water: a => addWater(+a),
  waterCustom: () => addWater(V.readCustomMl()),
  color: a => { color = +a; V.selectColor(color); },
  urine: () => { H.addUrine(color, V.readUrineForm()); color = null; V.resetUrineForm(); refresh(); },
  download: () => V.download(H.summaryText()),
  uRemPreset: m => { H.setUrineReminder({ minutes: +m }); V.renderUrineRem(H.state.urineRem); scheduleUrine(); },
  uRemAddTime: () => { if (H.addUrineTime(V.readNewUrineTime())) { V.renderUrineRem(H.state.urineRem); scheduleUrine(); } },
  uRemDelTime: t => { H.removeUrineTime(t); V.renderUrineRem(H.state.urineRem); scheduleUrine(); },
  uRemTest: () => { reqPerm(); notify('GeniCare · Berkemih', (H.state.urineRem.note || '').trim() || 'Waktunya buang air kecil, jangan ditahan ya!'); }
};

export function setup() {
  V.setup();
  $('#target').addEventListener('change', e => { H.setTarget(+e.target.value); V.setInputs(H.state.target, H.state.rem, H.state.urineRem); refresh(); });
  $('#remInt').addEventListener('change', e => { H.setReminder(+e.target.value); schedule(); });
  $('#uRemMode').addEventListener('change', e => { H.setUrineReminder({ mode: e.target.value }); V.renderUrineRem(H.state.urineRem); scheduleUrine(); });
  $('#uRemMin').addEventListener('change', e => { const m = Math.max(15, Math.min(720, +e.target.value || 180)); H.setUrineReminder({ minutes: m }); V.renderUrineRem(H.state.urineRem); scheduleUrine(); });
  $('#uRemStart').addEventListener('change', e => { H.setUrineReminder({ start: e.target.value }); scheduleUrine(); });
  $('#uRemEnd').addEventListener('change', e => { H.setUrineReminder({ end: e.target.value }); scheduleUrine(); });
  $('#uRemNote').addEventListener('change', e => { H.setUrineReminder({ note: e.target.value }); scheduleUrine(); });
}
export function onEnter(u) { user = u; setScope(u.uid); H.load(); V.setInputs(H.state.target, H.state.rem, H.state.urineRem); refresh(); schedule(); scheduleUrine(); }
export function onLeave() { user = null; clearInterval(timer); clearInterval(urineTimer); H.clear(); setScope(null); }
