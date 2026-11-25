import { AI_URL } from '../config.js';
import { getToken } from './userModel.js';

const hist = [];
export const reset = () => { hist.length = 0; };
const MERAH = /(testis.*(sakit|nyeri).*(mendadak|hebat)|tidak bisa (buang air|kencing|berkemih)|demam.*nyeri pinggang|pingsan|sesak)/i;

function demo(t) {
  t = t.toLowerCase();
  if (/minum|air|cairan/.test(t)) return 'Kebutuhan cairan berbeda tiap orang. Pantau warna urine: kuning pucat biasanya tanda cukup. Jika kamu punya penyakit ginjal atau jantung, ikuti batas cairan dari dokter.';
  if (/\bisk\b|infeksi|panas|nyeri.*kemih/.test(t)) return 'Nyeri atau panas saat berkemih bisa jadi tanda infeksi saluran kemih. Cukup minum dan periksa ke tenaga kesehatan. Jangan minum antibiotik tanpa resep.';
  if (/busa/.test(t)) return 'Urine berbusa kadang karena pancaran kuat. Bila terjadi terus-menerus, periksakan urine untuk melihat kadar protein.';
  if (/warna|merah|cokelat/.test(t)) return 'Urine merah atau kecokelatan bisa karena darah, makanan, atau obat. Bila berulang atau disertai nyeri, periksa ke dokter.';
  if (/ginjal|kreatinin|egfr/.test(t)) return 'eGFR dan albumin urine adalah dua penanda penting untuk menilai ginjal. Hasil laboratoriummu sebaiknya dibahas dengan dokter.';
  return 'Ini mode demo tanpa AI sungguhan. Sambungkan AI_URL ke backend agar aku bisa menjawab lebih lengkap.';
}

// Kontrak backend: POST {messages:[{role,content}]} + header Authorization: Bearer <Firebase ID token> -> {reply:"..."}
export async function ask(text) {
  hist.push({ role: 'user', content: text });
  try {
    let r;
    if (MERAH.test(text)) r = 'Keluhan yang kamu sebut bisa serius. Segera ke IGD atau fasilitas kesehatan terdekat.';
    else if (AI_URL) {
      const tk = await getToken();
      const x = await fetch(AI_URL, { method: 'POST', headers: { 'Content-Type': 'application/json', ...(tk ? { Authorization: 'Bearer ' + tk } : {}) }, body: JSON.stringify({ messages: hist.slice(-12) }) });
      if (!x.ok) throw new Error('http ' + x.status);
      r = (await x.json()).reply;
    } else { await new Promise(z => setTimeout(z, 700)); r = demo(text); }
    hist.push({ role: 'assistant', content: r });
    return r;
  } catch (e) { hist.pop(); throw e; }
}
