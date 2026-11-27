import { VIDEOS, ARTICLES } from '../models/eduModel.js';
import * as Q from '../models/quizModel.js';
import * as V from '../views/eduView.js';

let mode = 'video', cur = null, scene = 0, timer = null, playing = false;
let soundOn = true, ac = null, musicTimer = null, step = 0;
const SEC = 6000;
const reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
const vid = () => VIDEOS.find(v => v.id === cur);

function stopMusic() { clearInterval(musicTimer); musicTimer = null; }
function playTone(freq, dur, type, vol) {
  if (!ac || !soundOn) return;
  const now = ac.currentTime;
  const o = ac.createOscillator(), g = ac.createGain();
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(0.001, now);
  g.gain.linearRampToValueAtTime(vol, now + 0.015);
  g.gain.exponentialRampToValueAtTime(0.001, now + dur);
  o.connect(g); g.connect(ac.destination);
  o.start(now); o.stop(now + dur + 0.02);
}
function startMusic() {
  stopMusic();
  if (!soundOn || !playing) return;
  try {
    if (!ac) ac = new (window.AudioContext || window.webkitAudioContext)();
    if (ac.state === 'suspended') ac.resume();
    const chords = [[261.63, 329.63, 392], [392, 493.88, 587.33], [220, 261.63, 329.63], [174.61, 220, 261.63]];
    const melody = [523.25, 659.25, 783.99, 659.25, 587.33, 659.25, 783.99, 880.0];
    const bass = [130.81, 196.0, 110.0, 174.61];
    musicTimer = setInterval(() => {
      if (!soundOn || !playing || !ac) return;
      const bar = Math.floor(step / 8) % 4;
      playTone(melody[step % melody.length], 0.28, 'triangle', 0.09);
      if (step % 2 === 0) playTone(bass[bar] * 0.5, 0.3, 'sine', 0.11);
      if (step % 4 === 0) chords[bar].forEach(f => playTone(f, 0.7, 'sine', 0.035));
      step++;
    }, 300);
  } catch {}
}

export function stop() { clearInterval(timer); timer = null; playing = false; stopMusic(); }
const show = () => V.showScene(vid(), scene, playing);
function start() {
  const v = vid(); stop(); playing = true;
  timer = setInterval(() => {
    if (scene < v.scenes.length - 1) { scene++; show(); }
    else { stop(); V.setPlaying(false, true); }
  }, SEC);
  V.setPlaying(true, false);
  V.setSoundLabel(soundOn);
  startMusic();
}
function go(i) { const was = playing, v = vid(); scene = Math.max(0, Math.min(v.scenes.length - 1, i)); show(); if (was) start(); }

function render() {
  V.setMode(mode);
  if (mode === 'video') {
    if (!cur) V.renderVideoList(VIDEOS);
    else { const v = vid(); V.renderPlayer(v); if (!v.src) { scene = 0; show(); if (!reduced()) start(); } }
  } else if (mode === 'artikel') {
    cur ? V.renderArticle(ARTICLES.find(a => a.id === cur)) : V.renderArticleList(ARTICLES);
  } else V.renderQuiz(Q.QUESTIONS);
  window.scrollTo(0, 0);
}

export const actions = {
  eduMode: m => { stop(); mode = m; cur = null; render(); },
  eduOpen: id => { stop(); cur = id; render(); },
  eduBack: () => { stop(); cur = null; render(); },
  eduPlay: () => {
    if (playing) { stop(); V.setPlaying(false, false); return; }
    if (scene >= vid().scenes.length - 1) scene = 0;
    show(); start();
  },
  eduPrev: () => go(scene - 1),
  eduNext: () => go(scene + 1),
  eduSound: () => { soundOn = !soundOn; V.setSoundLabel(soundOn); soundOn ? startMusic() : stopMusic(); },
  quizSubmit: () => V.showResult(Q.grade(V.readAnswers(Q.QUESTIONS.length))),
  quizReset: () => V.renderQuiz(Q.QUESTIONS)
};
export const setup = () => render();
