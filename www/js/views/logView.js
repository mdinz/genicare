import { $, $$ } from '../utils/dom.js';
const WARNA = ['#f6f1c9', '#f1e68a', '#e9cf3c', '#d9a521', '#b9741a', '#8a3b14'];
const WARNA_DESC = [
  'Skala 1: Kuning sangat pucat · Hidrasi sangat baik',
  'Skala 2: Kuning pucat · Hidrasi cukup',
  'Skala 3: Kuning sedang · Mulai tambah minum',
  'Skala 4: Kuning pekat · Kurang cairan, minum air putih',
  'Skala 5: Oranye/amber · Dehidrasi atau pengaruh vitamin/obat',
  'Skala 6: Kecokelatan/merah · Waspada, pantau atau periksa ke dokter'
];

export function setup() {
  $('#quick').innerHTML = [150, 250, 500].map(n => `<button class="preset" data-act="water" data-arg="${n}">+${n} ml</button>`).join('');
  $('#warna').innerHTML = WARNA.map((c, i) => `<button style="background:${c}" aria-label="Warna ${i + 1}" data-act="color" data-arg="${i + 1}"></button>`).join('');
}
export const selectColor = n => {
  $$('#warna button').forEach((b, j) => b.classList.toggle('s', n != null && j === n - 1));
  const h = $('#warnaHint');
  if (h) h.textContent = n != null ? WARNA_DESC[n - 1] : 'Pilih warna urine yang paling sesuai.';
};
export const readUrineForm = () => $$('.kl:checked').map(x => x.value);
export function resetUrineForm() { $$('.kl').forEach(x => { x.checked = false; }); selectColor(null); }
export const readCustomMl = () => { const v = +$('#ml').value; $('#ml').value = ''; return v; };
export function setInputs(target, rem, uRem) {
  $('#target').value = target;
  $('#remInt').value = rem;
  if (uRem) renderUrineRem(uRem);
}

export function renderUrineRem(u) {
  $('#uRemMode').value = u.mode;
  $('#uRemIntBox').hidden = u.mode !== 'interval';
  $('#uRemTimeBox').hidden = u.mode !== 'custom';
  $('#uRemNoteBox').hidden = u.mode === 'off';
  $('#uRemMin').value = u.minutes;
  $('#uRemStart').value = u.start;
  $('#uRemEnd').value = u.end;
  $('#uRemNote').value = u.note;
  $$('#uRemPresets button').forEach(b => b.classList.toggle('on', +b.dataset.arg === +u.minutes));
  $('#uRemTimes').innerHTML = u.times.length
    ? u.times.map(t => `<span class="chip">${t}<button type="button" aria-label="Hapus ${t}" data-act="uRemDelTime" data-arg="${t}">×</button></span>`).join('')
    : '<p class="note">Belum ada jam yang ditambahkan.</p>';
}

export const readNewUrineTime = () => $('#uRemTimeIn').value;
let toastTimer;
export function showToast(msg) {
  const el = $('#toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('on'), 4500);
}

export function render(d) {
  const j = new Date().getHours(), sp = j < 11 ? 'Selamat pagi' : j < 15 ? 'Selamat siang' : j < 19 ? 'Selamat sore' : 'Selamat malam';
  $('#sapa').textContent = sp + (d.nama ? ', ' + d.nama.split(' ')[0] : '') + '!';
  if ($('#heroAvatar') && d.nama && d.nama.trim()) $('#heroAvatar').textContent = d.nama.trim()[0].toUpperCase();
  $('#hAir').textContent = d.today.ml + ' ml'; $('#hKemih').textContent = d.today.n + ' kali';
  const tgt = d.target || 2000, pct = Math.min(100, Math.round((d.today.ml / tgt) * 100));
  if ($('#hPct')) $('#hPct').textContent = `${pct}% (${d.today.ml}/${tgt} ml)`;
  if ($('#hBar')) $('#hBar').style.width = pct + '%';
  $('#riwayat').innerHTML = d.today.rows.length
    ? d.today.rows.map(r => `<div class="log"><span>${r.s}</span><span>${r.t}</span></div>`).join('')
    : '<p class="note">Belum ada catatan hari ini. Mulai dengan mencatat segelas air.</p>';
  $('#mingguan').innerHTML = d.week.map(w => {
    const wp = Math.min(100, Math.round((w.ml / tgt) * 100));
    return `<div class="wrow"><div class="log" style="border:0;padding:4px 0"><span><strong>${w.d}</strong></span><span>${w.ml} ml · ${w.n}x berkemih${w.ok ? ' ✓' : ''}</span></div><div class="wbar"><i style="width:${wp}%"></i></div></div>`;
  }).join('');
  $('#akun').textContent = d.account;
}
export function download(text) {
  const a = document.createElement('a');
  a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text); a.download = 'ringkasan-genicare.txt'; a.click();
}
