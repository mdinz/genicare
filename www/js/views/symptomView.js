import { $, $$ } from '../utils/dom.js';
export const renderList = list => { $('#gejala').innerHTML = list.map(g => `<label class="ck"><input type="checkbox" value="${g[0]}"> ${g[1]}</label>`).join(''); };
export const selected = () => $$('#gejala input:checked').map(x => x.value);
export function showResult(r) {
  const el = $('#hasil'); el.style.display = 'block';
  el.className = `card alert-card alert-${r.level}`;
  el.innerHTML = `<span class="pill ${r.level}">${r.level.toUpperCase()}</span><p style="margin-top:10px;line-height:1.55">${r.text}</p><p class="note">Ini bukan diagnosis.</p>`;
}
