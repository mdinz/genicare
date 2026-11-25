import * as Auth from './controllers/authController.js';
import * as Log from './controllers/logController.js';
import * as Edu from './controllers/eduController.js';
import * as Sym from './controllers/symptomController.js';
import * as Chat from './controllers/chatController.js';
import * as Nav from './views/navView.js';

const actions = { ...Auth.actions, ...Log.actions, ...Edu.actions, ...Sym.actions, ...Chat.actions };
document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]'); if (!el) return;
  const f = actions[el.dataset.act]; if (f) f(el.dataset.arg ?? el.dataset.target, el);
});

function go(id) { Nav.show(id); if (id !== 'edukasi') Edu.stop(); if (id === 'ai') Chat.greet(); }
function enter(u) { Log.onEnter(u); Chat.reset(); Auth.hide(); go('beranda'); Nav.hideSplash(); }
function leave() { Edu.stop(); Log.onLeave(); Chat.reset(); Auth.showForm(); Nav.hideSplash(); }

Nav.build(go); Auth.setup(); Log.setup(); Edu.setup(); Sym.setup(); Chat.setup();
setTimeout(() => Auth.start(enter, leave), 2100); // splash tampil minimal ±2 detik
