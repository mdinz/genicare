import { $, $$ } from '../utils/dom.js';
const WARNA = ['#f6f1c9', '#f1e68a', '#e9cf3c', '#d9a521', '#b9741a', '#8a3b14'];

export function setup() {
  $('#quick').innerHTML = [150, 250, 500].map(n => `<button class="btn o" data-act="water" data-arg="${n}">+${n} ml</button>`).join('');
  $('#warna').innerHTML = WARNA.map((c, i) => `<button style="background:${c}" aria-label="Warna ${i + 1}" data-act="color" data-arg="${i + 1}"></button>`).join('');
}
export const selectColor = n => $$('#warna button').forEach((b, j) => b.classList.toggle('s', n != null && j === n - 1));
export const readUrineForm = () => $$('.kl:checked').map(x => x.value);
export function resetUrineForm() { $$('.kl').forEach(x => { x.checked = false; }); selectColor(null); }
export const readCustomMl = () => { const v = +$('#ml').value; $('#ml').value = ''; return v; };
export function setInputs(target, rem) { $('#target').value = target; $('#remInt').value = rem; }

export function render(d) {
  const j = new Date().getHours(), sp = j < 11 ? 'Selamat pagi' : j < 15 ? 'Selamat siang' : j < 19 ? 'Selamat sore' : 'Selamat malam';
  $('#sapa').textContent = sp + (d.nama ? ', ' + d.nama.split(' ')[0] : '') + '!';
  $('#hAir').textContent = d.today.ml + ' ml'; $('#hKemih').textContent = d.today.n + ' kali';
  $('#riwayat').innerHTML = d.today.rows.length
    ? d.today.rows.map(r => `<div class="log"><span>${r.s}</span><span>${r.t}</span></div>`).join('')
    : '<p class="note">Belum ada catatan hari ini. Mulai dengan mencatat segelas air.</p>';
  $('#mingguan').innerHTML = d.week.map(w => `<div class="log"><span>${w.d}</span><span>${w.ml} ml · ${w.n}x berkemih${w.ok ? ' ✓' : ''}</span></div>`).join('');
  $('#akun').textContent = d.account;
}
export function download(text) {
  const a = document.createElement('a');
  a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text); a.download = 'ringkasan-genicare.txt'; a.click();
}
