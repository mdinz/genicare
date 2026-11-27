import { VIDEOS, ARTICLES } from '../models/eduModel.js';
import * as Q from '../models/quizModel.js';
import * as V from '../views/eduView.js';

let mode = 'video', cur = null, scene = 0, timer = null, playing = false;
let soundOn = true, ac = null, musicTimer = null, step = 0;
const SEC = 6800;
const reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
const vid = () => VIDEOS.find(v => v.id === cur);

function cleanNarration(txt) {
  return (txt || '').replace(/\*\*/g, '').replace(/\*/g, '').replace(/→/g, ' menjadi ').trim();
}

function stopVoice() {
  try { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); } catch {}
}

function speakScene(sc) {
  stopVoice();
  if (!soundOn || !playing || !sc || !('speechSynthesis' in window)) return;
  try {
    const u = new SpeechSynthesisUtterance(cleanNarration(sc.text));
    u.lang = 'id-ID';
    u.rate = 1.04;
    u.pitch = 1.05;
    const voices = window.speechSynthesis.getVoices();
    const idVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('id'));
    if (idVoice) u.voice = idVoice;
    window.speechSynthesis.speak(u);
  } catch {}
}

function stopMusic() { clearInterval(musicTimer); musicTimer = null; }

function playWarmNote(freq, dur, vol) {
  if (!ac || !soundOn) return;
  const now = ac.currentTime;
  const o = ac.createOscillator(), g = ac.createGain(), f = ac.createBiquadFilter();
  o.type = 'sine';
  o.frequency.value = freq;
  f.type = 'lowpass';
  f.frequency.value = 1100;
  g.gain.setValueAtTime(0.0001, now);
  g.gain.linearRampToValueAtTime(vol, now + 0.04);
  g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
  o.connect(f); f.connect(g); g.connect(ac.destination);
  o.start(now); o.stop(now + dur + 0.05);
}

function startMusic() {
  stopMusic();
  if (!soundOn || !playing) return;
  try {
    if (!ac) ac = new (window.AudioContext || window.webkitAudioContext)();
    if (ac.state === 'suspended') ac.resume();
    // Soft warm lo-fi marimba chords (low volume so Indonesian voiceover stays clear)
    const chords = [
      [261.63, 329.63, 392.00, 493.88],
      [220.00, 261.63, 329.63, 392.00],
      [174.61, 220.00, 261.63, 349.23],
      [196.00, 246.94, 293.66, 392.00]
    ];
    musicTimer = setInterval(() => {
      if (!soundOn || !playing || !ac) return;
      const bar = Math.floor(step / 4) % chords.length;
      const chord = chords[bar];
      if (step % 4 === 0) {
        chord.forEach(freq => playWarmNote(freq, 1.35, 0.022));
      }
      playWarmNote(chord[step % chord.length] * 2, 0.45, 0.026);
      step++;
    }, 420);
  } catch {}
}

export function stop() {
  clearInterval(timer); timer = null; playing = false;
  stopMusic(); stopVoice();
}

const show = () => {
  const v = vid();
  V.showScene(v, scene, playing);
  if (playing && v && v.scenes) speakScene(v.scenes[scene]);
};

function start() {
  const v = vid(); stop(); playing = true;
  timer = setInterval(() => {
    if (scene < v.scenes.length - 1) { scene++; show(); }
    else { stop(); V.setPlaying(false, true); }
  }, SEC);
  V.setPlaying(true, false);
  V.setSoundLabel(soundOn);
  startMusic();
  if (v && v.scenes) speakScene(v.scenes[scene]);
}

function go(i) {
  const was = playing, v = vid();
  scene = Math.max(0, Math.min(v.scenes.length - 1, i));
  show();
  if (was) start();
}

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
  eduSound: () => {
    soundOn = !soundOn;
    V.setSoundLabel(soundOn);
    if (soundOn) {
      startMusic();
      const v = vid();
      if (playing && v && v.scenes) speakScene(v.scenes[scene]);
    } else {
      stopMusic(); stopVoice();
    }
  },
  quizSubmit: () => V.showResult(Q.grade(V.readAnswers(Q.QUESTIONS.length))),
  quizReset: () => V.renderQuiz(Q.QUESTIONS)
};
export const setup = () => render();
