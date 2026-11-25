import { FB } from '../config.js';
import { getGlobal as gl, setGlobal as sg } from './store.js';

let fb = null, reg = false;
export const isDemo = () => !FB.apiKey;
const need = () => { if (!isDemo() && !fb) throw { code: 'auth/network-request-failed' }; };
const toUser = u => ({ uid: u.uid, nama: u.displayName || u.email.split('@')[0], email: u.email });
const script = u => new Promise((ok, no) => { const s = document.createElement('script'); s.src = u; s.onload = ok; s.onerror = no; document.head.appendChild(s); });
async function hash(s) { // hanya untuk mode demo
  try { const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)); return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join(''); }
  catch { return btoa(unescape(encodeURIComponent(s))); }
}

export async function init(onUser, onNone) {
  if (!isDemo()) {
    await script('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
    await script('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js');
    firebase.initializeApp(FB); fb = firebase.auth();
    fb.onAuthStateChanged(u => u ? (!reg && onUser(toUser(u))) : onNone());
    return;
  }
  const em = gl('gc_sess', null), a = em && gl('gc_acc', {})[em];
  a ? onUser({ uid: a.uid, nama: a.nama, email: em }) : onNone();
}

export async function register(nama, em, pw) {
  need();
  if (fb) {
    reg = true;
    try { const c = await fb.createUserWithEmailAndPassword(em, pw); await c.user.updateProfile({ displayName: nama }); return { uid: c.user.uid, nama, email: em }; }
    finally { reg = false; }
  }
  const A = gl('gc_acc', {}); if (A[em]) throw { code: 'auth/email-already-in-use' };
  A[em] = { nama, h: await hash(pw), uid: 'u' + Date.now().toString(36) };
  sg('gc_acc', A); sg('gc_sess', em);
  return { uid: A[em].uid, nama, email: em };
}

export async function login(em, pw) { // Firebase: return null, user datang lewat onAuthStateChanged
  need();
  if (fb) { await fb.signInWithEmailAndPassword(em, pw); return null; }
  const a = gl('gc_acc', {})[em];
  if (!a || a.h !== await hash(pw)) throw { code: 'auth/invalid-credential' };
  sg('gc_sess', em);
  return { uid: a.uid, nama: a.nama, email: em };
}

export async function resetPassword(em, askNew) {
  need();
  if (fb) { await fb.sendPasswordResetEmail(em); return; }
  const A = gl('gc_acc', {}); if (!A[em]) return;
  const n = askNew(); if (n && n.length >= 8) { A[em].h = await hash(n); sg('gc_acc', A); }
}

export async function logout() { if (fb) await fb.signOut(); else sg('gc_sess', null); }
export const getToken = async () => (fb && fb.currentUser) ? fb.currentUser.getIdToken() : '';
