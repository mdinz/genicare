import * as U from '../models/userModel.js';
import * as V from '../views/authView.js';
import { $ } from '../utils/dom.js';

let mode = 'masuk', enter = () => {}, leave = () => {};
const ERR = {
  'auth/email-already-in-use': 'Email ini sudah terdaftar. Coba masuk.',
  'auth/invalid-credential': 'Email atau kata sandi salah.', 'auth/wrong-password': 'Email atau kata sandi salah.', 'auth/user-not-found': 'Email atau kata sandi salah.',
  'auth/weak-password': 'Kata sandi terlalu lemah.', 'auth/too-many-requests': 'Terlalu banyak percobaan. Coba lagi beberapa menit lagi.',
  'auth/network-request-failed': 'Tidak ada koneksi internet.', 'auth/invalid-email': 'Format email belum benar.'
};
const setMode = m => { mode = m; V.setMode(m, U.isDemo()); };

export const showForm = () => { V.show(true); setMode('masuk'); };
export const hide = () => { V.show(false); V.clearPw(); };

async function submit(e) {
  e.preventDefault();
  const f = V.readForm();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) return V.error('Format email belum benar.');
  if (mode !== 'lupa' && f.pw.length < 8) return V.error('Kata sandi minimal 8 karakter.');
  if (mode === 'daftar') { if (!f.nama) return V.error('Isi namamu dulu.'); if (f.pw !== f.pw2) return V.error('Kata sandi dan ulangannya tidak sama.'); }
  V.busy(true); V.error('');
  try {
    if (mode === 'lupa') {
      await U.resetPassword(f.email, () => prompt('Mode demo. Masukkan kata sandi baru (minimal 8 karakter):'));
      V.error(U.isDemo() ? 'Mode demo: email tidak dikirim, kata sandi diubah langsung di perangkat ini.' : 'Jika email terdaftar, tautan reset sudah dikirim. Cek Kotak Masuk dan folder Spam.', true);
    } else {
      const u = mode === 'daftar' ? await U.register(f.nama, f.email, f.pw) : await U.login(f.email, f.pw);
      if (u) enter(u);
    }
  } catch (x) { V.error(ERR[x && x.code] || 'Terjadi kesalahan. Coba lagi.'); }
  V.busy(false);
}

export const actions = {
  eye: (id, el) => V.toggleEye(id, el),
  mode: m => setMode(m),
  logout: async () => { if (!confirm('Keluar dari akun?')) return; await U.logout(); leave(); }
};

export function setup() { V.init(); $('#af').addEventListener('submit', submit); }
export async function start(onEnter, onLeave) {
  enter = onEnter; leave = onLeave;
  try { await U.init(enter, leave); }
  catch { leave(); V.error('Tidak bisa memuat layanan akun. Periksa koneksi internet.'); }
}
