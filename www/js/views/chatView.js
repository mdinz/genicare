import { $ } from '../utils/dom.js';
export const scroll = () => { $('#chat').scrollTop = 1e9; };
export function add(role, text) { const d = document.createElement('div'); d.className = 'm ' + role; d.textContent = text; $('#chat').appendChild(d); scroll(); return d; }
export const clear = () => { $('#chat').innerHTML = ''; };
export const count = () => $('#chat').children.length;
export const busy = b => { $('#kirim').disabled = b; };
export const readInput = () => { const v = $('#q').value.trim(); $('#q').value = ''; return v; };
