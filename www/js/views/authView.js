import { $, $$ } from '../utils/dom.js';
const EYE = '<svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
const EYEOFF = '<svg viewBox="0 0 24 24"><path d="M3 3l18 18M10.6 5.1A9.7 9.7 0 0112 5c6.5 0 10 7 10 7a17 17 0 01-3.2 4M6.5 6.6C3.7 8.3 2 12 2 12s3.5 7 10 7c1.7 0 3.2-.4 4.5-1M9.9 9.9a3 3 0 004.2 4.2"/></svg>';

export const init = () => $$('.eye').forEach(b => { b.innerHTML = EYE; });
export function toggleEye(id, b) {
  const i = $('#' + id), s = i.type === 'password';
  i.type = s ? 'text' : 'password'; b.innerHTML = s ? EYEOFF : EYE;
  b.setAttribute('aria-pressed', s); b.setAttribute('aria-label', s ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi');
}
export const error = (t, ok) => { const e = $('#err'); e.textContent = t; e.className = ok ? 'ok' : ''; };
export const busy = b => { $('#aBtn').disabled = b; };
export const show = v => { $('#auth').hidden = !v; };
export const clearPw = () => { $('#pw').value = ''; $('#pw2').value = ''; };
export const readForm = () => ({ nama: $('#nama').value.trim(), email: $('#em').value.trim().toLowerCase(), pw: $('#pw').value, pw2: $('#pw2').value });
export function setMode(m, demo) {
  error('');
  $('#fNama').hidden = m !== 'daftar'; $('#fPw').hidden = m === 'lupa'; $('#fPw2').hidden = m !== 'daftar'; $('#lnkLupa').hidden = m !== 'masuk';
  $('#aBtn').textContent = { masuk: 'Masuk', daftar: 'Daftar', lupa: 'Kirim tautan reset' }[m];
  $('#aSub').textContent = { masuk: 'Masuk untuk melanjutkan.', daftar: 'Buat akun baru.', lupa: 'Masukkan email akunmu. Kami kirim tautan untuk membuat kata sandi baru.' }[m];
  $('#pw').autocomplete = m === 'daftar' ? 'new-password' : 'current-password';
  const l = $('#lnkA'); l.textContent = m === 'masuk' ? 'Belum punya akun? Daftar' : m === 'daftar' ? 'Sudah punya akun? Masuk' : 'Kembali ke Masuk';
  l.dataset.act = 'mode'; l.dataset.arg = m === 'masuk' ? 'daftar' : 'masuk';
  $('#demoBan').textContent = demo ? 'Mode demo: akun tersimpan di perangkat ini dan email tidak dikirim.' : '';
}
