import { VIDEOS, ARTICLES } from '../models/eduModel.js';
import * as Q from '../models/quizModel.js';
import * as V from '../views/eduView.js';

let mode = 'video', cur = null, scene = 0, timer = null, playing = false;
let soundOn = true, ac = null, musicTimer = null, step = 0;
const SEC = 6000;
const reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
const vid = () => VIDEOS.find(v => v.id === cur);

function stopMusic() { clearInterval(musicTimer); musicTimer = null; }
function startMusic() {
  stopMusic();
  if (!soundOn || !playing) return;
  try {
    if (!ac) ac = new (window.AudioContext || window.webkitAudioContext)();
    if (ac.state === 'suspended') ac.resume();
    const notes = [523.25, 659.25, 783.99, 659.25, 587.33, 659.25, 783.99, 880.0];
    musicTimer = setInterval(() => {
      if (!soundOn || !playing || !ac) return;
      const now = ac.currentTime;
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = 'sine';
      o.frequency.value = notes[step % notes.length];
      g.gain.setValueAtTime(0.08, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      o.connect(g); g.connect(ac.destination);
      o.start(now); o.stop(now + 0.36);
      step++;
    }, 340);
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
