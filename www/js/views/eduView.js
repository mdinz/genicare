import { $, $$ } from '../utils/dom.js';

const body = () => $('#eduBody');
const svgI = p => `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const PLAY = svgI('<circle cx="12" cy="12" r="9"/><path d="M10 8.5l5 3.5-5 3.5z"/>');
const DOC = svgI('<path d="M6 3h9l4 4v14H6z"/><path d="M9 11h7M9 15h7"/>');

const fmtReel = s => s.replace(/\*\*(.+?)\*\*/g, '<mark class="kw">$1</mark>').replace(/\*(.+?)\*/g, '<em>$1</em>');
const fmtArt = s => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');

/* ---------- ilustrasi animasi gaya TikTok kesehatan ---------- */
const anatomy = hl => `<svg viewBox="0 0 260 280" data-hl="${hl}" role="img" aria-label="Diagram ginjal, ureter, dan kandung kemih">
<defs>
  <linearGradient id="kg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ff7e73"/><stop offset="100%" stop-color="#b83b35"/></linearGradient>
  <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f79c91"/><stop offset="100%" stop-color="#d45c52"/></linearGradient>
</defs>
<g class="part k">
  <ellipse cx="82" cy="74" rx="24" ry="40" transform="rotate(-12 82 74)" fill="url(#kg)"/>
  <ellipse cx="178" cy="74" rx="24" ry="40" transform="rotate(12 178 74)" fill="url(#kg)"/>
  <circle class="fp" cx="79" cy="64" r="4" fill="#fff"/><circle class="fp" cx="88" cy="86" r="3.2" fill="#6fffe9" style="animation-delay:.35s"/>
  <circle class="fp" cx="181" cy="64" r="4" fill="#fff" style="animation-delay:.2s"/><circle class="fp" cx="172" cy="86" r="3.2" fill="#6fffe9" style="animation-delay:.65s"/>
  <text class="lbl" x="20" y="34">Ginjal</text>
</g>
<g class="part u" fill="none" stroke="#f5a89e" stroke-width="5.5" stroke-linecap="round">
  <path d="M94 110C102 146 116 176 121 206"/>
  <path d="M166 110C158 146 144 176 139 206"/>
  <circle r="5" fill="#f9d448" stroke="none" opacity="0"><animateMotion dur="2s" repeatCount="indefinite" path="M94 110C102 146 116 176 121 206"/><animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite"/></circle>
  <circle r="5" fill="#f9d448" stroke="none" opacity="0"><animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M166 110C158 146 144 176 139 206"/><animate attributeName="opacity" values="0;1;1;0" dur="2s" begin="1s" repeatCount="indefinite"/></circle>
  <text class="lbl" x="178" y="156" stroke="none">Ureter</text>
</g>
<g class="part b">
  <path d="M130 198c-32 0-46 20-46 40 0 23 20 34 46 34s46-11 46-34c0-20-14-40-46-40z" fill="url(#bg)"/>
  <ellipse class="floaty" cx="130" cy="248" rx="28" ry="12" fill="#f9d448" opacity=".82"/>
  <path d="M130 272v14" stroke="#f5a89e" stroke-width="6" stroke-linecap="round"/>
  <text class="lbl" x="182" y="232">Kandung kemih</text>
</g></svg>`;

const WARNA = ['#f6f1c9', '#f1e68a', '#e9cf3c', '#d9a521', '#b9741a', '#8a3b14'];
const colors = hl => `<svg viewBox="0 0 260 190" role="img" aria-label="Skala warna urine">${WARNA.map((c, i) =>
  `<rect class="tube${!hl.length || hl.includes(i) ? '' : ' off'}" x="${18 + i * 38}" y="22" width="30" height="114" rx="14" fill="${c}" stroke="#ffffff55" stroke-width="1.5" style="animation-delay:${i * .08}s"/>
   <text class="lbl" x="${33 + i * 38}" y="158" text-anchor="middle">${i + 1}</text>`).join('')}</svg>`;

const isk = () => `<svg viewBox="0 0 260 240" role="img" aria-label="Ilustrasi bakteri pada kandung kemih">
<path d="M130 34c-48 0-70 30-70 64 0 42 30 68 70 68s70-26 70-68c0-34-22-64-70-64z" fill="#e67e73" opacity=".9"/>
<ellipse cx="130" cy="126" rx="46" ry="20" fill="#f9d448" opacity=".65"/>
<path d="M130 166v54" stroke="#f5a89e" stroke-width="12" stroke-linecap="round"/>
<g class="pulse-glow">
  <circle class="fp" cx="110" cy="96" r="8" fill="#ff4d4d"/><circle class="fp" cx="148" cy="108" r="7" fill="#ff4d4d" style="animation-delay:.3s"/>
  <circle class="fp" cx="128" cy="76" r="6" fill="#ffd166" style="animation-delay:.5s"/>
</g>
<circle r="5" fill="#ff4d4d"><animateMotion dur="1.8s" repeatCount="indefinite" path="M130 218 L130 142"/></circle>
<text class="lbl" x="130" y="234" text-anchor="middle">Bakteri masuk lewat uretra → Sistitis</text>
</svg>`;

const stone = hl => `<svg viewBox="0 0 260 240" role="img" aria-label="Ilustrasi batu saluran kemih">
<ellipse cx="90" cy="78" rx="30" ry="48" transform="rotate(-10 90 78)" fill="#c95a52"/>
<path d="M104 122 C122 156 144 178 168 206" fill="none" stroke="#f5a89e" stroke-width="14" stroke-linecap="round"/>
${hl === 'crystal'
  ? '<polygon class="ico" points="88,66 98,74 94,88 82,88 78,74" fill="#ffe066" stroke="#fff" stroke-width="1.5"/><polygon class="ico" points="104,88 112,94 108,104 98,102" fill="#ffd166" style="animation-delay:.25s"/>'
  : '<circle class="ring" cx="132" cy="166" r="24" style="stroke:#ff6b6b"/><polygon class="pulse-glow" points="132,154 143,163 139,177 125,177 121,163" fill="#ffe066" stroke="#fff" stroke-width="1.5"/>'}
<text class="lbl" x="165" y="110">${hl === 'crystal' ? 'Kristal menumpuk' : 'Batu menyumbat ureter'}</text>
</svg>`;

const hydro = () => `<svg viewBox="0 0 260 240" role="img" aria-label="Ilustrasi hidronefrosis">
<ellipse class="pulse-glow" cx="110" cy="86" rx="44" ry="62" transform="rotate(-8 110 86)" fill="#d65d55"/>
<ellipse class="floaty" cx="114" cy="88" rx="24" ry="34" fill="#f9d448" opacity=".82"/>
<path d="M126 146 L146 210" stroke="#f5a89e" stroke-width="11" stroke-linecap="round"/>
<rect x="128" y="170" width="22" height="14" rx="4" fill="#ff595e" transform="rotate(-18 139 177)"/>
<text class="lbl" x="164" y="88">Ginjal membengkak</text>
<text class="lbl" x="164" y="182">Sumbatan aliran</text>
</svg>`;

const akickd = hl => `<svg viewBox="0 0 260 220" role="img" aria-label="Perbandingan AKI dan CKD">
<rect x="16" y="24" width="106" height="152" rx="16" fill="${hl === 'aki' ? '#ff6b6b33' : '#ffffff12'}" stroke="${hl === 'aki' ? '#ff8787' : '#ffffff33'}" stroke-width="2"/>
<text class="lbl" x="69" y="50" text-anchor="middle">AKI (Akut)</text>
<polyline points="30,86 56,86 72,144 106,148" fill="none" stroke="#ff8787" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<text class="lbl" x="69" y="166" text-anchor="middle">Jam – Hari</text>
<rect x="138" y="24" width="106" height="152" rx="16" fill="${hl === 'ckd' ? '#6fffe933' : '#ffffff12'}" stroke="${hl === 'ckd' ? '#6fffe9' : '#ffffff33'}" stroke-width="2"/>
<text class="lbl" x="191" y="50" text-anchor="middle">CKD (Kronis)</text>
<polyline points="152,82 178,96 202,116 228,142" fill="none" stroke="#6fffe9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<text class="lbl" x="191" y="166" text-anchor="middle">&gt; 3 Bulan</text>
</svg>`;

const bph = hl => `<svg viewBox="0 0 260 240" role="img" aria-label="Ilustrasi BPH pembesaran prostat">
<path d="M130 28c-36 0-52 22-52 46 0 26 22 40 52 40s52-14 52-40c0-24-16-46-52-46z" fill="#e68a7e"/>
<ellipse class="${hl === 'enlarged' ? 'pulse-glow' : ''}" cx="130" cy="144" rx="${hl === 'enlarged' ? 42 : 24}" ry="${hl === 'enlarged' ? 28 : 18}" fill="#d46a6a" stroke="#fff3" stroke-width="2"/>
<path d="M130 114v104" stroke="#f9d448" stroke-width="${hl === 'enlarged' ? 4 : 10}" stroke-linecap="round" stroke-dasharray="10 8">
  <animate attributeName="stroke-dashoffset" from="18" to="0" dur=".8s" repeatCount="indefinite"/>
</path>
<text class="lbl" x="130" y="232" text-anchor="middle">${hl === 'enlarged' ? 'Prostat membesar → aliran menyempit' : 'Prostat normal mengelilingi uretra'}</text>
</svg>`;

const varikokel = () => `<svg viewBox="0 0 260 230" role="img" aria-label="Ilustrasi varikokel">
<path d="M84 44c0 80-16 146 46 146s46-66 46-146" fill="#e09f94" opacity=".35" stroke="#ffffff44" stroke-width="2"/>
<ellipse cx="106" cy="144" rx="18" ry="24" fill="#e69a8d"/>
<ellipse cx="154" cy="144" rx="18" ry="24" fill="#e69a8d"/>
<path class="pulse-glow" d="M98 48 C84 72 114 82 96 102 C82 116 112 124 98 134" fill="none" stroke="#6ec1ff" stroke-width="6" stroke-linecap="round"/>
<path class="pulse-glow" d="M108 52 C122 76 92 88 110 108" fill="none" stroke="#4da6ff" stroke-width="4.5" stroke-linecap="round"/>
<text class="lbl" x="130" y="214" text-anchor="middle">Vena skrotum melebar (varikokel)</text>
</svg>`;

const ICON = {
  droplet: '<path d="M120 52C120 52 76 104 76 134a44 44 0 0088 0C164 104 120 52 120 52z"/>',
  clock: '<circle cx="120" cy="115" r="54"/><path d="M120 82v36l24 14"/>',
  shield: '<path d="M120 52l52 20v44c0 34-28 54-52 64-24-10-52-30-52-64V72z"/><path d="M96 118l18 18 32-36"/>',
  alert: '<path d="M120 54a38 38 0 00-38 38v32l-14 22h104l-14-22V92a38 38 0 00-38-38z"/><path d="M104 170a16 16 0 0032 0"/>'
};
const icon = n => `<svg viewBox="0 0 240 230" aria-hidden="true"><circle class="ring" cx="120" cy="115" r="82"/><circle class="ring" cx="120" cy="115" r="64" style="animation-delay:.6s"/><g class="ico" fill="none" stroke="#6fffe9" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round">${ICON[n]}</g></svg>`;
const ART = { anatomy, colors, icon, isk, stone, hydro, akickd, bph, varikokel };

/* ---------- tampilan ---------- */
export function setMode(m) {
  $$('#eduSeg button').forEach(b => { const on = b.dataset.arg === m; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
}

export function renderVideoList(list) {
  body().innerHTML = list.map(v => `<button class="item" data-act="eduOpen" data-arg="${v.id}"><div class="th">${PLAY}</div><div><span class="tag">${v.tag || 'ANIMASI'}</span><b>${v.title}</b><span class="s">${v.desc} · ${v.src ? 'video' : v.scenes.length + ' adegan'}</span></div></button>`).join('')
    + '<p class="note">Animasi interaktif gaya TikTok diputar langsung di aplikasi tanpa kuota tambahan.</p>';
}

export function renderPlayer(v) {
  body().innerHTML = `<button class="lnk" data-act="eduBack">← Kembali</button><h3 style="margin:4px 0 10px">${v.title}</h3>`
    + (v.src
      ? `<video class="vid" controls playsinline preload="metadata" src="${v.src}"></video>`
      : `<div class="reel" id="reel">
          <div class="reel-bars" id="dots"></div>
          <div class="reel-top"><span class="reel-badge" id="rBadge"></span><span class="reel-cnt" id="cnt"></span></div>
          <div class="stage" id="stage"></div>
          <div class="reel-cap" id="rCap"><div class="reel-h" id="rHead"></div><p class="cap" id="cap" aria-live="polite"></p></div>
        </div>
        <div class="ctl"><button class="btn o" data-act="eduPrev" aria-label="Sebelumnya">‹</button><button class="btn" id="pp" data-act="eduPlay" style="min-width:104px"></button><button class="btn o" data-act="eduNext" aria-label="Berikutnya">›</button></div>`)
    + '<div class="btns" style="justify-content:center;margin-top:12px"><button class="btn o" data-act="eduMode" data-arg="kuis">Uji pemahamanmu dengan kuis</button></div>';
}

export function setPlaying(p, end) {
  const b = $('#pp'); if (b) b.textContent = p ? 'Jeda' : end ? 'Ulangi' : 'Putar';
  const r = $('#reel'); if (r) r.classList.toggle('paused', !p);
}

export function showScene(v, i, playing) {
  if (v.src) return;
  const s = v.scenes[i];
  const st = $('#stage');
  st.style.animation = 'none'; st.offsetHeight; st.style.animation = '';
  st.innerHTML = (ART[s.art] || ART.icon)(s.hl);
  const rc = $('#rCap');
  rc.style.animation = 'none'; rc.offsetHeight; rc.style.animation = '';
  $('#rBadge').textContent = s.badge || v.tag || 'EDUKASI';
  $('#rHead').textContent = s.headline || '';
  $('#cap').innerHTML = fmtReel(s.text);
  $('#dots').innerHTML = v.scenes.map((_, j) => `<i class="${j < i ? 'done' : j === i ? 'cur' : ''}"><b></b></i>`).join('');
  $('#cnt').textContent = `${i + 1} / ${v.scenes.length}`;
  setPlaying(playing, !playing && i === v.scenes.length - 1);
}

export function renderArticleList(list) {
  body().innerHTML = list.map(a => `<button class="item" data-act="eduOpen" data-arg="${a.id}"><div class="th">${DOC}</div><div><span class="tag">MATERI ${a.num || ''}</span><b>${a.title}</b><span class="s">${a.desc} · ±${a.min} menit baca</span></div></button>`).join('');
}

export function renderArticle(a) {
  body().innerHTML = `<article class="art"><button class="lnk" data-act="eduBack">← Kembali</button><h3>${a.num ? a.num + '. ' : ''}${a.title}</h3><p class="note">±${a.min} menit baca</p><p class="lead">${fmtArt(a.intro)}</p>`
    + a.sections.map(s => `<h4>${s.h}</h4>${(s.p || []).map(t => `<p>${fmtArt(t)}</p>`).join('')}${s.ul ? `<ul>${s.ul.map(t => `<li>${fmtArt(t)}</li>`).join('')}</ul>` : ''}`).join('')
    + '<p class="note">Informasi ini bersifat umum dan bukan pengganti pemeriksaan oleh tenaga kesehatan.</p>'
    + '<div class="btns"><button class="btn o" data-act="eduMode" data-arg="kuis">Coba kuis</button><button class="btn o" data-act="eduBack">Materi lain</button></div></article>';
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
  $('#skor').insertAdjacentHTML('afterend', '<div class="btns" id="qa"><button class="btn o" data-act="quizReset">Ulangi kuis</button><button class="btn o" data-act="eduMode" data-arg="artikel">Baca materi</button></div>');
}
