import * as H from '../models/healthModel.js';
import * as V from '../views/logView.js';
import { setScope } from '../models/store.js';
import { $ } from '../utils/dom.js';

let color = null, timer, user = null;

function refresh() { V.render({ nama: user && user.nama, account: user ? user.nama + ' · ' + user.email : '', today: H.today(), week: H.week() }); }
function schedule() { // Di APK ganti dengan @capacitor/local-notifications
  clearInterval(timer); if (!H.state.rem) return;
  if ('Notification' in window) Notification.requestPermission();
  timer = setInterval(() => { try { new Notification('GeniCare', { body: 'Waktunya minum air.' }); } catch { alert('Waktunya minum air.'); } }, H.state.rem * 36e5);
}
const addWater = ml => { if (H.addWater(ml)) refresh(); };

export const actions = {
  water: a => addWater(+a),
  waterCustom: () => addWater(V.readCustomMl()),
  color: a => { color = +a; V.selectColor(color); },
  urine: () => { H.addUrine(color, V.readUrineForm()); color = null; V.resetUrineForm(); refresh(); },
  download: () => V.download(H.summaryText())
};

export function setup() {
  V.setup();
  $('#target').addEventListener('change', e => { H.setTarget(+e.target.value); V.setInputs(H.state.target, H.state.rem); refresh(); });
  $('#remInt').addEventListener('change', e => { H.setReminder(+e.target.value); schedule(); });
}
export function onEnter(u) { user = u; setScope(u.uid); H.load(); V.setInputs(H.state.target, H.state.rem); refresh(); schedule(); }
export function onLeave() { user = null; clearInterval(timer); H.clear(); setScope(null); }
