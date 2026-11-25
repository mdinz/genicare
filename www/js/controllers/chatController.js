import * as M from '../models/chatModel.js';
import * as V from '../views/chatView.js';
import { $ } from '../utils/dom.js';

async function ask() {
  const t = V.readInput(); if (!t) return;
  V.add('u', t); const w = V.add('a', 'Sedang mengetik…'); V.busy(true);
  try { w.textContent = await M.ask(t); } catch { w.textContent = 'Tidak bisa terhubung. Periksa koneksi internet lalu coba lagi.'; }
  V.busy(false); V.scroll();
}
export const actions = { ask };
export const greet = () => { if (!V.count()) V.add('a', 'Halo! Aku asisten GeniCare. Tanyakan hal seputar kebiasaan minum, ginjal, atau saluran kemih.'); };
export const reset = () => { V.clear(); M.reset(); };
export const setup = () => $('#q').addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); ask(); } });
