import { VIDEOS, ARTICLES } from '../models/eduModel.js';
import * as Q from '../models/quizModel.js';
import * as V from '../views/eduView.js';

let mode = 'video', cur = null, scene = 0, timer = null, playing = false;
const SEC = 6000; // lama tiap bagian animasi
const reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
const vid = () => VIDEOS.find(v => v.id === cur);

export function stop() { clearInterval(timer); timer = null; playing = false; }
const show = () => V.showScene(vid(), scene, playing);
function start() {
  const v = vid(); stop(); playing = true;
  timer = setInterval(() => {
    if (scene < v.scenes.length - 1) { scene++; show(); }
    else { stop(); V.setPlaying(false, true); }
  }, SEC);
  V.setPlaying(true, false);
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
  quizSubmit: () => V.showResult(Q.grade(V.readAnswers(Q.QUESTIONS.length))),
  quizReset: () => V.renderQuiz(Q.QUESTIONS)
};
export const setup = () => render();
