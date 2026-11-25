// Penyimpanan lokal per akun. Ganti isi file ini (mis. ke Firestore) tanpa menyentuh controller/view.
let uid = 'x';
export const setScope = u => { uid = u || 'x'; };
export const get = (k, d) => { try { return JSON.parse(localStorage.getItem(k + '_' + uid)) ?? d; } catch { return d; } };
export const set = (k, v) => { try { localStorage.setItem(k + '_' + uid, JSON.stringify(v)); } catch {} };
export const getGlobal = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
export const setGlobal = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
