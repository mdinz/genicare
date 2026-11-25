import { $, $$ } from '../utils/dom.js';

const body = () => $('#eduBody');
const svgI = p => `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const PLAY = svgI('<circle cx="12" cy="12" r="9"/><path d="M10 8.5l5 3.5-5 3.5z"/>');
const DOC = svgI('<path d="M6 3h9l4 4v14H6z"/><path d="M9 11h7M9 15h7"/>');

/* ---------- ilustrasi animasi ---------- */
const anatomy = hl => `<svg viewBox="0 0 240 300" data-hl="${hl}" role="img" aria-label="Diagram ginjal, ureter, dan kandung kemih">
<g class="part k"><ellipse cx="78" cy="78" rx="21" ry="36" transform="rotate(-10 78 78)" fill="#c9645a"/><ellipse cx="162" cy="78" rx="21" ry="36" transform="rotate(10 162 78)" fill="#c9645a"/>
<circle class="fp" cx="76" cy="70" r="3.5" fill="#fff"/><circle class="fp" cx="84" cy="88" r="3" fill="#fff" style="animation-delay:.4s"/><circle class="fp" cx="164" cy="70" r="3.5" fill="#fff" style="animation-delay:.2s"/><circle class="fp" cx="156" cy="88" r="3" fill="#fff" style="animation-delay:.7s"/>
<text class="lbl" x="22" y="40">Ginjal</text></g>
<g class="part u" fill="none" stroke="#e0a39a" stroke-width="5" stroke-linecap="round"><path d="M88 112C96 150 108 182 112 212"/><path d="M152 112C144 150 132 182 128 212"/>
<circle r="4.5" fill="#f2c94c" stroke="none" opacity="0"><animateMotion dur="2.4s" repeatCount="indefinite" path="M88 112C96 150 108 182 112 212"/><animate attributeName="opacity" values="0;1;1;0" dur="2.4s" repeatCount="indefinite"/></circle>
<circle r="4.5" fill="#f2c94c" stroke="none" opacity="0"><animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite" path="M152 112C144 150 132 182 128 212"/><animate attributeName="opacity" values="0;1;1;0" dur="2.4s" begin="1.2s" repeatCount="indefinite"/></circle>
<text class="lbl" x="170" y="160" stroke="none">Ureter</text></g>
<g class="part b"><path d="M120 206c-28 0-42 18-42 38 0 22 19 32 42 32s42-10 42-32c0-20-14-38-42-38z" fill="#e8a59b"/><ellipse cx="120" cy="256" rx="24" ry="11" fill="#f2c94c" opacity=".75"/><path d="M120 276v20" stroke="#e0a39a" stroke-width="6" stroke-linecap="round"/>
<text class="lbl" x="166" y="236">Kandung kemih</text><text class="lbl" x="130" y="294">Uretra</text></g></svg>`;

const WARNA = ['#f6f1c9', '#f1e68a', '#e9cf3c', '#d9a521', '#b9741a', '#8a3b14'];
const colors = hl => `<svg viewBox="0 0 240 190" role="img" aria-label="Skala warna urine">${WARNA.map((c, i) =>
  `<rect class="tube${!hl.length || hl.includes(i) ? '' : ' off'}" x="${14 + i * 36}" y="24" width="28" height="110" rx="12" fill="${c}" stroke="#0003" style="animation-delay:${i * .1}s"/><text class="lbl" x="${28 + i * 36}" y="156" text-anchor="middle">${i + 1}</text>`).join('')}</svg>`;

const ICON = {
  droplet: '<path d="M120 52C120 52 76 104 76 134a44 44 0 0088 0C164 104 120 52 120 52z"/>',
  clock: '<circle cx="120" cy="115" r="54"/><path d="M120 82v36l24 14"/>',
  shield: '<path d="M120 52l52 20v44c0 34-28 54-52 64-24-10-52-30-52-64V72z"/><path d="M96 118l18 18 32-36"/>',
  alert: '<path d="M120 54a38 38 0 00-38 38v32l-14 22h104l-14-22V92a38 38 0 00-38-38z"/><path d="M104 170a16 16 0 0032 0"/>'
};
const icon = n => `<svg viewBox="0 0 240 230" aria-hidden="true"><circle class="ring" cx="120" cy="115" r="86"/><g class="ico" fill="none" stroke="var(--teal)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">${ICON[n]}</g></svg>`;
const ART = { anatomy, colors, icon };

/* ---------- tampilan ---------- */
export function setMode(m) {
  $$('#eduSeg button').forEach(b => { const on = b.dataset.arg === m; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
}

export function renderVideoList(list) {
  body().innerHTML = list.map(v => `<button class="item" data-act="eduOpen" data-arg="${v.id}"><div class="th">${PLAY}</div><div><b>${v.title}</b><span class="s">${v.desc} · ${v.src ? 'video' : v.scenes.length + ' bagian'}</span></div></button>`).join('')
    + '<p class="note">Animasi diputar di dalam aplikasi, tidak perlu mengunduh video.</p>';
}

export function renderPlayer(v) {
  body().innerHTML = `<button class="lnk" data-act="eduBack">← Kembali</button><h3 style="margin:4px 0 10px">${v.title}</h3>`
    + (v.src
      ? `<video class="vid" controls playsinline preload="metadata" src="${v.src}"></video>`
      : '<div class="stage" id="stage"></div><p class="cap" id="cap" aria-live="polite"></p><div class="dots" id="dots"></div><div class="ctl"><button class="btn o" data-act="eduPrev" aria-label="Sebelumnya">‹</button><button class="btn" id="pp" data-act="eduPlay" style="min-width:96px"></button><button class="btn o" data-act="eduNext" aria-label="Berikutnya">›</button></div><p class="note" id="cnt" style="text-align:center"></p>')
    + '<div class="btns" style="justify-content:center"><button class="btn o" data-act="eduMode" data-arg="kuis">Uji pemahamanmu dengan kuis</button></div>';
}
export function setPlaying(p, end) { const b = $('#pp'); if (b) b.textContent = p ? 'Jeda' : end ? 'Ulangi' : 'Putar'; }
export function showScene(v, i, playing) {
  if (v.src) return;
  const s = v.scenes[i];
  $('#stage').innerHTML = ART[s.art](s.hl);
  $('#cap').textContent = s.text;
  $('#dots').innerHTML = v.scenes.map((_, j) => `<i class="${j <= i ? 'on' : ''}"></i>`).join('');
  $('#cnt').textContent = `${i + 1} / ${v.scenes.length}`;
  setPlaying(playing, !playing && i === v.scenes.length - 1);
}

export function renderArticleList(list) {
  body().innerHTML = list.map(a => `<button class="item" data-act="eduOpen" data-arg="${a.id}"><div class="th">${DOC}</div><div><b>${a.title}</b><span class="s">${a.desc} · ±${a.min} menit baca</span></div></button>`).join('');
}
export function renderArticle(a) {
  body().innerHTML = `<article class="art"><button class="lnk" data-act="eduBack">← Kembali</button><h3>${a.title}</h3><p class="note">±${a.min} menit baca</p><p class="lead">${a.intro}</p>`
    + a.sections.map(s => `<h4>${s.h}</h4>${(s.p || []).map(t => `<p>${t}</p>`).join('')}${s.ul ? `<ul>${s.ul.map(t => `<li>${t}</li>`).join('')}</ul>` : ''}`).join('')
    + '<p class="note">Informasi ini bersifat umum dan bukan pengganti pemeriksaan oleh tenaga kesehatan.</p>'
    + '<div class="btns"><button class="btn o" data-act="eduMode" data-arg="kuis">Coba kuis</button><button class="btn o" data-act="eduBack">Artikel lain</button></div></article>';
}

// Kunci jawaban baru ditampilkan setelah tombol kirim ditekan.
export function renderQuiz(qs) {
  body().innerHTML = '<div class="card"><h3>Kuis singkat</h3><p class="note">Jawab semua pertanyaan, lalu tekan Kirim. Penjelasan baru muncul setelah kamu mengirim.</p>'
    + qs.map((k, i) => `<p style="margin:12px 0 2px;font-size:14.5px">${i + 1}. ${k.q}</p><label class="ck"><input type="radio" name="k${i}" value="1"> Benar</label><label class="ck"><input type="radio" name="k${i}" value="0"> Salah</label><p class="note" id="e${i}"></p>`).join('')
    + '<div class="btns"><button class="btn" data-act="quizSubmit">Kirim jawaban</button></div><p class="note" id="skor"></p></div>';
}
export const readAnswers = n => Array.from({ length: n }, (_, i) => { const v = document.querySelector(`input[name=k${i}]:checked`); return v ? v.value : null; });
export function showResult(r) {
  r.items.forEach((x, i) => { $('#e' + i).textContent = (x.skipped ? 'Belum dijawab. ' : x.ok ? 'Benar. ' : 'Kurang tepat. ') + x.note; });
  $('#skor').textContent = `Skor: ${r.score} dari ${r.total}`;
  const o = $('#qa'); if (o) o.remove();
  $('#skor').insertAdjacentHTML('afterend', '<div class="btns" id="qa"><button class="btn o" data-act="quizReset">Ulangi kuis</button><button class="btn o" data-act="eduMode" data-arg="artikel">Baca artikel</button></div>');
}
