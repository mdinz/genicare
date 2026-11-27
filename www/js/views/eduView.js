import { $, $$ } from '../utils/dom.js';

const body = () => $('#eduBody');
const fmtReel = s => s.replace(/\*\*(.+?)\*\*/g, '<mark class="kw">$1</mark>').replace(/\*(.+?)\*/g, '<em>$1</em>');
const fmtArt = s => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');

/* ---------- karakter orang animasi (gaya TikTok edukasi) ---------- */
const charDoctor = (x = 46, y = 138) => `<g transform="translate(${x} ${y})" class="floaty">
  <ellipse cx="0" cy="76" rx="22" ry="6" fill="#00000033"/>
  <path d="M-20 74c0-26 8-38 20-38s20 12 20 38z" fill="#ffffff"/>
  <path d="M-7 36v38M7 36v38" stroke="#cbd5e1" stroke-width="2"/>
  <path d="M-12 36c0 12 24 12 24 0" fill="none" stroke="#0d9488" stroke-width="3"/>
  <circle cx="0" cy="18" r="18" fill="#fbd3b6"/>
  <path d="M-18 14c2-14 34-14 36 0-4-6-32-6-36 0z" fill="#1e293b"/>
  <circle cx="-6" cy="18" r="2.2" fill="#1e293b"/><circle cx="6" cy="18" r="2.2" fill="#1e293b"/>
  <path d="M-5 25q5 5 10 0" fill="none" stroke="#be123c" stroke-width="2" stroke-linecap="round"/>
  <path d="M18 44l16-14" stroke="#ffffff" stroke-width="7" stroke-linecap="round"/>
  <circle cx="35" cy="29" r="4.5" fill="#fbd3b6"/>
</g>`;

const charDrink = () => `<svg viewBox="0 0 260 230" role="img" aria-label="Animasi orang minum air">
  <circle class="ring" cx="130" cy="115" r="88"/>
  <g transform="translate(120 120)">
    <ellipse cx="0" cy="82" rx="34" ry="8" fill="#00000033"/>
    <path d="M-28 80c0-36 12-52 28-52s28 16 28 52z" fill="#14b8a6"/>
    <circle cx="0" cy="2" r="24" fill="#fbd3b6"/>
    <path d="M-24 -4c2-20 46-20 48 0-6-9-42-9-48 0z" fill="#1e293b"/>
    <circle cx="-8" cy="2" r="2.8" fill="#1e293b"/><circle cx="8" cy="2" r="2.8" fill="#1e293b"/>
    <path d="M-6 11q6 6 12 0" fill="none" stroke="#be123c" stroke-width="2.5" stroke-linecap="round"/>
    <g class="floaty">
      <path d="M24 38 L44 12" stroke="#14b8a6" stroke-width="9" stroke-linecap="round"/>
      <rect x="36" y="-8" width="18" height="24" rx="4" fill="#bae6fd" stroke="#fff" stroke-width="2"/>
      <rect x="38" y="2" width="14" height="12" rx="2" fill="#38bdf8"/>
    </g>
    <circle class="fp" cx="-46" cy="-22" r="5" fill="#5eead4"/><circle class="fp" cx="56" cy="-28" r="4" fill="#5eead4" style="animation-delay:.4s"/>
  </g>
</svg>`;

const charPain = () => `<svg viewBox="0 0 260 230" role="img" aria-label="Animasi orang menahan nyeri">
  <circle class="ring" cx="130" cy="115" r="84" style="stroke:#fb7185"/>
  <g transform="translate(130 120)">
    <ellipse cx="0" cy="82" rx="34" ry="8" fill="#00000033"/>
    <path d="M-28 80c0-36 12-52 28-52s28 16 28 52z" fill="#f43f5e"/>
    <circle cx="0" cy="2" r="24" fill="#fbd3b6"/>
    <path d="M-24 -4c2-20 46-20 48 0-6-9-42-9-48 0z" fill="#1e293b"/>
    <path d="M-11 -2l6 4M11 -2l-6 4" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="0" cy="13" r="4" fill="#be123c"/>
    <path d="M-26 42 Q-10 56 0 46 Q10 56 26 42" fill="none" stroke="#fbd3b6" stroke-width="8" stroke-linecap="round"/>
    <circle class="pulse-glow" cx="0" cy="52" r="14" fill="none" stroke="#fde047" stroke-width="3" stroke-dasharray="4 4"/>
  </g>
</svg>`;

/* ---------- ilustrasi animasi gaya TikTok kesehatan ---------- */
const anatomy = hl => `<svg viewBox="0 0 270 270" data-hl="${hl}" role="img" aria-label="Diagram ginjal, ureter, dan kandung kemih">
<defs>
  <linearGradient id="kg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fb7185"/><stop offset="100%" stop-color="#be123c"/></linearGradient>
  <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fda4af"/><stop offset="100%" stop-color="#e11d48"/></linearGradient>
</defs>
${charDoctor(44, 158)}
<g transform="translate(30 0)">
<g class="part k">
  <ellipse cx="96" cy="72" rx="22" ry="38" transform="rotate(-12 96 72)" fill="url(#kg)"/>
  <ellipse cx="184" cy="72" rx="22" ry="38" transform="rotate(12 184 72)" fill="url(#kg)"/>
  <circle class="fp" cx="93" cy="64" r="4" fill="#fff"/><circle class="fp" cx="102" cy="84" r="3.2" fill="#5eead4" style="animation-delay:.35s"/>
  <circle class="fp" cx="187" cy="64" r="4" fill="#fff" style="animation-delay:.2s"/><circle class="fp" cx="178" cy="84" r="3.2" fill="#5eead4" style="animation-delay:.65s"/>
  <text class="lbl" x="44" y="30">Ginjal</text>
</g>
<g class="part u" fill="none" stroke="#fda4af" stroke-width="5.5" stroke-linecap="round">
  <path d="M108 106C116 142 128 172 132 200"/>
  <path d="M172 106C164 142 152 172 148 200"/>
  <circle r="5" fill="#fde047" stroke="none" opacity="0"><animateMotion dur="2s" repeatCount="indefinite" path="M108 106C116 142 128 172 132 200"/><animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite"/></circle>
  <circle r="5" fill="#fde047" stroke="none" opacity="0"><animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M172 106C164 142 152 172 148 200"/><animate attributeName="opacity" values="0;1;1;0" dur="2s" begin="1s" repeatCount="indefinite"/></circle>
  <text class="lbl" x="184" y="154" stroke="none">Ureter</text>
</g>
<g class="part b">
  <path d="M140 192c-30 0-44 18-44 38 0 22 18 32 44 32s44-10 44-32c0-20-14-38-44-38z" fill="url(#bg)"/>
  <ellipse class="floaty" cx="140" cy="240" rx="26" ry="11" fill="#fde047" opacity=".85"/>
  <text class="lbl" x="188" y="226">Kandung kemih</text>
</g></g></svg>`;

const WARNA = ['#f6f1c9', '#f1e68a', '#e9cf3c', '#d9a521', '#b9741a', '#8a3b14'];
const colors = hl => `<svg viewBox="0 0 270 200" role="img" aria-label="Skala warna urine">
${charDoctor(38, 118)}
<g transform="translate(36 8)">${WARNA.map((c, i) =>
  `<rect class="tube${!hl.length || hl.includes(i) ? '' : ' off'}" x="${24 + i * 33}" y="18" width="25" height="106" rx="12" fill="${c}" stroke="#ffffff55" stroke-width="1.5" style="animation-delay:${i * .08}s"/>
   <text class="lbl" x="${36.5 + i * 33}" y="144" text-anchor="middle">${i + 1}</text>`).join('')}</g></svg>`;

const isk = () => `<svg viewBox="0 0 270 240" role="img" aria-label="Ilustrasi bakteri pada kandung kemih">
${charDoctor(42, 146)}
<g transform="translate(24 0)">
<path d="M140 30c-44 0-64 28-64 58 0 38 28 62 64 62s64-24 64-62c0-30-20-58-64-58z" fill="#fb7185" opacity=".9"/>
<ellipse cx="140" cy="116" rx="42" ry="18" fill="#fde047" opacity=".7"/>
<path d="M140 150v54" stroke="#fda4af" stroke-width="11" stroke-linecap="round"/>
<g class="pulse-glow">
  <circle class="fp" cx="122" cy="88" r="8" fill="#dc2626"/><circle class="fp" cx="156" cy="98" r="7" fill="#dc2626" style="animation-delay:.3s"/>
  <circle class="fp" cx="138" cy="70" r="6" fill="#fde047" style="animation-delay:.5s"/>
</g>
<circle r="5" fill="#dc2626"><animateMotion dur="1.7s" repeatCount="indefinite" path="M140 202 L140 130"/></circle>
<text class="lbl" x="140" y="226" text-anchor="middle">Bakteri masuk → Sistitis</text>
</g></svg>`;

const stone = hl => `<svg viewBox="0 0 270 240" role="img" aria-label="Ilustrasi batu saluran kemih">
${charDoctor(42, 146)}
<g transform="translate(22 0)">
<ellipse cx="104" cy="76" rx="28" ry="46" transform="rotate(-10 104 76)" fill="#e11d48"/>
<path d="M118 118 C134 152 154 174 176 202" fill="none" stroke="#fda4af" stroke-width="13" stroke-linecap="round"/>
${hl === 'crystal'
  ? '<polygon class="ico" points="102,64 112,72 108,86 96,86 92,72" fill="#fde047" stroke="#fff" stroke-width="1.5"/><polygon class="ico" points="118,86 126,92 122,102 112,100" fill="#fbbf24" style="animation-delay:.25s"/>'
  : '<circle class="ring" cx="144" cy="162" r="24" style="stroke:#fb7185"/><polygon class="pulse-glow" points="144,150 155,159 151,173 137,173 133,159" fill="#fde047" stroke="#fff" stroke-width="1.5"/>'}
<text class="lbl" x="174" y="106">${hl === 'crystal' ? 'Kristal menumpuk' : 'Batu menyumbat'}</text>
</g></svg>`;

const hydro = () => `<svg viewBox="0 0 270 240" role="img" aria-label="Ilustrasi hidronefrosis">
${charDoctor(42, 146)}
<g transform="translate(24 0)">
<ellipse class="pulse-glow" cx="116" cy="84" rx="42" ry="60" transform="rotate(-8 116 84)" fill="#e11d48"/>
<ellipse class="floaty" cx="120" cy="86" rx="22" ry="32" fill="#fde047" opacity=".85"/>
<path d="M132 144 L152 206" stroke="#fda4af" stroke-width="11" stroke-linecap="round"/>
<rect x="134" y="168" width="22" height="14" rx="4" fill="#dc2626" transform="rotate(-18 145 175)"/>
<text class="lbl" x="168" y="86">Ginjal bengkak</text>
<text class="lbl" x="168" y="178">Sumbatan</text>
</g></svg>`;

const akickd = hl => `<svg viewBox="0 0 270 220" role="img" aria-label="Perbandingan AKI dan CKD">
${charDoctor(36, 138)}
<g transform="translate(46 0)">
<rect x="14" y="24" width="92" height="148" rx="14" fill="${hl === 'aki' ? '#f43f5e33' : '#ffffff12'}" stroke="${hl === 'aki' ? '#fda4af' : '#ffffff33'}" stroke-width="2"/>
<text class="lbl" x="60" y="48" text-anchor="middle">AKI (Akut)</text>
<polyline points="24,84 48,84 62,140 94,144" fill="none" stroke="#fda4af" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<text class="lbl" x="60" y="162" text-anchor="middle">Jam – Hari</text>
<rect x="116" y="24" width="92" height="148" rx="14" fill="${hl === 'ckd' ? '#5eead433' : '#ffffff12'}" stroke="${hl === 'ckd' ? '#5eead4' : '#ffffff33'}" stroke-width="2"/>
<text class="lbl" x="162" y="48" text-anchor="middle">CKD (Kronis)</text>
<polyline points="126,80 150,94 172,114 196,138" fill="none" stroke="#5eead4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<text class="lbl" x="162" y="162" text-anchor="middle">&gt; 3 Bulan</text>
</g></svg>`;

const bph = hl => `<svg viewBox="0 0 270 240" role="img" aria-label="Ilustrasi BPH pembesaran prostat">
${charDoctor(42, 146)}
<g transform="translate(22 0)">
<path d="M140 28c-34 0-48 20-48 44 0 24 20 38 48 38s48-14 48-38c0-24-14-44-48-44z" fill="#fda4af"/>
<ellipse class="${hl === 'enlarged' ? 'pulse-glow' : ''}" cx="140" cy="140" rx="${hl === 'enlarged' ? 40 : 22}" ry="${hl === 'enlarged' ? 26 : 16}" fill="#e11d48" stroke="#fff3" stroke-width="2"/>
<path d="M140 110v102" stroke="#fde047" stroke-width="${hl === 'enlarged' ? 4 : 10}" stroke-linecap="round" stroke-dasharray="10 8">
  <animate attributeName="stroke-dashoffset" from="18" to="0" dur=".8s" repeatCount="indefinite"/>
</path>
<text class="lbl" x="140" y="228" text-anchor="middle">${hl === 'enlarged' ? 'Prostat membesar → aliran sempit' : 'Prostat normal'}</text>
</g></svg>`;

const varikokel = () => `<svg viewBox="0 0 270 230" role="img" aria-label="Ilustrasi varikokel">
${charDoctor(42, 140)}
<g transform="translate(22 0)">
<path d="M96 42c0 76-14 140 44 140s44-64 44-140" fill="#fda4af" opacity=".32" stroke="#ffffff44" stroke-width="2"/>
<ellipse cx="118" cy="138" rx="17" ry="23" fill="#fda4af"/>
<ellipse cx="162" cy="138" rx="17" ry="23" fill="#fda4af"/>
<path class="pulse-glow" d="M110 46 C96 70 124 80 108 100 C94 114 122 122 110 130" fill="none" stroke="#60a5fa" stroke-width="6" stroke-linecap="round"/>
<path class="pulse-glow" d="M120 50 C134 74 104 86 122 106" fill="none" stroke="#3b82f6" stroke-width="4.5" stroke-linecap="round"/>
<text class="lbl" x="140" y="210" text-anchor="middle">Vena skrotum melebar (varikokel)</text>
</g></svg>`;

const ICON = {
  droplet: () => charDrink(),
  alert: () => charPain(),
  clock: () => `<svg viewBox="0 0 270 230" aria-hidden="true">${charDoctor(44, 144)}<g transform="translate(36 0)"><circle class="ring" cx="120" cy="115" r="76"/><g class="ico" fill="none" stroke="#5eead4" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="120" cy="115" r="48"/><path d="M120 86v32l22 12"/></g></g></svg>`,
  shield: () => `<svg viewBox="0 0 270 230" aria-hidden="true">${charDoctor(44, 144)}<g transform="translate(36 0)"><circle class="ring" cx="120" cy="115" r="76"/><g class="ico" fill="none" stroke="#5eead4" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"><path d="M120 58l46 18v38c0 30-24 48-46 58-22-10-46-28-46-58V76z"/><path d="M98 116l16 16 28-32"/></g></g></svg>`
};
const icon = n => (ICON[n] ? ICON[n]() : ICON.shield());
const ART = { anatomy, colors, icon, isk, stone, hydro, akickd, bph, varikokel };

/* ---------- tampilan ---------- */
export function setMode(m) {
  $$('#eduSeg button').forEach(b => { const on = b.dataset.arg === m; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
}

const svgI = p => `<svg viewBox="0 0 24 24">${p}</svg>`;
const PLAY_ICO = svgI('<circle cx="12" cy="12" r="9"/><polygon points="10 8.5 16 12 10 15.5 10 8.5" fill="currentColor" stroke="none"/>');
const DOC_ICO = svgI('<path d="M6 3h9l4 4v14H6z"/><path d="M9 11h7M9 15h7"/>');

export function renderVideoList(list) {
  body().innerHTML = list.map(v => `<button class="item" data-act="eduOpen" data-arg="${v.id}"><div class="th">${PLAY_ICO}</div><div><span class="tag">${v.tag || 'ANIMASI'}</span><b>${v.title}</b><span class="s">${v.desc} · ${v.src ? 'video' : v.scenes.length + ' adegan'}</span></div></button>`).join('')
    + '<p class="note">Animasi karakter & organ diputar langsung di aplikasi tanpa kuota tambahan.</p>';
}

export function renderPlayer(v) {
  body().innerHTML = `<button class="lnk" data-act="eduBack">← Kembali</button><h3 style="margin:6px 0 10px">${v.title}</h3>`
    + (v.src
      ? `<video class="vid" controls playsinline preload="metadata" src="${v.src}"></video>`
      : `<div class="reel" id="reel">
          <div class="reel-bars" id="dots"></div>
          <div class="reel-top"><span class="reel-badge" id="rBadge"></span><span class="reel-cnt" id="cnt"></span></div>
          <div class="stage" id="stage"></div>
          <div class="reel-cap" id="rCap"><div class="reel-h" id="rHead"></div><p class="cap" id="cap" aria-live="polite"></p></div>
        </div>
        <div class="ctl"><button class="btn-sm btn-outline" data-act="eduPrev" aria-label="Sebelumnya">‹</button><button class="btn" id="pp" data-act="eduPlay" style="min-width:104px"></button><button class="btn-sm btn-outline" data-act="eduNext" aria-label="Berikutnya">›</button><button class="btn-sm" id="eduSnd" data-act="eduSound">Musik: On</button></div>`)
    + '<div class="btns" style="justify-content:center;margin-top:14px"><button class="btn-sm btn-outline" data-act="eduMode" data-arg="kuis">Uji pemahamanmu dengan kuis</button></div>';
}

export function setPlaying(p, end) {
  const b = $('#pp'); if (b) b.textContent = p ? 'Jeda' : end ? 'Ulangi' : 'Putar';
  const r = $('#reel'); if (r) r.classList.toggle('paused', !p);
}

export function setSoundLabel(on) {
  const b = $('#eduSnd'); if (b) b.textContent = on ? 'Musik: On' : 'Musik: Off';
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
  body().innerHTML = list.map(a => `<button class="item" data-act="eduOpen" data-arg="${a.id}"><div class="th">${DOC_ICO}</div><div><span class="tag">MATERI ${a.num || ''}</span><b>${a.title}</b><span class="s">${a.desc} · ±${a.min} menit baca</span></div></button>`).join('');
}

export function renderArticle(a) {
  body().innerHTML = `<article class="art"><button class="lnk" data-act="eduBack">← Kembali</button><h3>${a.num ? a.num + '. ' : ''}${a.title}</h3><p class="note">±${a.min} menit baca</p><p class="lead">${fmtArt(a.intro)}</p>`
    + a.sections.map(s => `<h4>${s.h}</h4>${(s.p || []).map(t => `<p>${fmtArt(t)}</p>`).join('')}${s.ul ? `<ul>${s.ul.map(t => `<li>${fmtArt(t)}</li>`).join('')}</ul>` : ''}`).join('')
    + '<p class="note">Informasi ini bersifat umum dan bukan pengganti pemeriksaan oleh tenaga kesehatan.</p>'
    + '<div class="btns mt8"><button class="btn-sm" data-act="eduMode" data-arg="kuis">Coba kuis</button><button class="btn-sm btn-outline" data-act="eduBack">Materi lain</button></div></article>';
}

// Kunci jawaban baru ditampilkan setelah tombol kirim ditekan.
export function renderQuiz(qs) {
  body().innerHTML = '<div class="card"><div class="card-head"><span class="card-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 116 0c0 2-3 2-3 4M12 17h.01"/></svg></span><h3>Kuis singkat</h3></div><p class="note" style="margin-top:0">Jawab semua pertanyaan, lalu tekan Kirim. Penjelasan baru muncul setelah kamu mengirim.</p>'
    + qs.map((k, i) => `<p style="margin:14px 0 4px;font-size:14.5px;font-weight:700">${i + 1}. ${k.q}</p><label class="ck"><input type="radio" name="k${i}" value="1"> Benar</label><label class="ck"><input type="radio" name="k${i}" value="0"> Salah</label><p class="note" id="e${i}"></p>`).join('')
    + '<div class="btns mt8"><button class="btn btn-full" data-act="quizSubmit">Kirim jawaban</button></div><p class="note" id="skor"></p></div>';
}
export const readAnswers = n => Array.from({ length: n }, (_, i) => { const v = document.querySelector(`input[name=k${i}]:checked`); return v ? v.value : null; });
export function showResult(r) {
  r.items.forEach((x, i) => { $('#e' + i).textContent = (x.skipped ? 'Belum dijawab. ' : x.ok ? 'Benar. ' : 'Kurang tepat. ') + x.note; });
  $('#skor').textContent = `Skor: ${r.score} dari ${r.total}`;
  const o = $('#qa'); if (o) o.remove();
  $('#skor').insertAdjacentHTML('afterend', '<div class="btns mt8" id="qa"><button class="btn-sm" data-act="quizReset">Ulangi kuis</button><button class="btn-sm btn-outline" data-act="eduMode" data-arg="artikel">Baca materi</button></div>');
}
