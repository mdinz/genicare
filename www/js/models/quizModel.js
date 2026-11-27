export const QUESTIONS = [
  { q: 'Sistitis adalah infeksi saluran kemih yang terjadi pada kandung kemih.', a: true, note: 'Benar. Sistitis adalah bentuk ISK paling sering, ditandai nyeri/panas saat berkemih dan sering ingin kencing.' },
  { q: 'Menahan buang air kecil terlalu sering dapat meningkatkan risiko infeksi saluran kemih.', a: true, note: 'Benar. Urine yang tertahan memberi kesempatan bakteri berkembang biak di kandung kemih.' },
  { q: 'Batu saluran kemih yang menyumbat ureter dapat memicu pembengkakan ginjal (hidronefrosis).', a: true, note: 'Benar. Sumbatan membuat urine menumpuk di ginjal sehingga ginjal membengkak dan nyeri.' },
  { q: 'AKI (gangguan ginjal akut) selalu bersifat permanen dan tidak bisa pulih.', a: false, note: 'Salah. AKI terjadi mendadak dalam jam–hari dan sering dapat pulih bila penyebabnya (seperti dehidrasi berat atau sumbatan) ditangani cepat.' },
  { q: 'CKD (penyakit ginjal kronis) tahap awal sering tidak menimbulkan gejala.', a: true, note: 'Benar. Karena itu penderita diabetes dan hipertensi disarankan cek eGFR dan albumin urine secara berkala.' },
  { q: 'BPH (pembesaran prostat jinak) adalah jenis kanker prostat.', a: false, note: 'Salah. BPH adalah pembesaran prostat yang bersifat jinak, walau gejalanya bisa mengganggu aliran urine.' },
  { q: 'Disfungsi ereksi yang terjadi berulang dapat menjadi tanda awal gangguan pembuluh darah atau diabetes.', a: true, note: 'Benar. Pembuluh darah penis lebih kecil sehingga sering terdampak lebih dulu. Hindari obat kuat ilegal dan konsultasikan ke dokter.' },
  { q: 'Varikokel adalah pelebaran pembuluh darah vena di skrotum yang sering terasa seperti "kantong cacing".', a: true, note: 'Benar. Varikokel dapat menyebabkan rasa pegal dan memengaruhi kesuburan pria, namun dapat ditangani.' },
  { q: 'Nyeri testis mendadak dan sangat hebat boleh ditunggu sampai besok.', a: false, note: 'Salah. Nyeri testis mendadak dan hebat adalah keadaan darurat (kemungkinan torsio testis) yang harus segera ke IGD.' },
  { q: 'Antibiotik untuk ISK boleh dibeli sendiri dan dihentikan begitu gejala membaik.', a: false, note: 'Salah. Antibiotik harus sesuai resep dan dihabiskan sesuai anjuran dokter agar infeksi tidak kambuh atau kebal.' }
];
export function grade(ans) { // ans: array '1' | '0' | null
  let score = 0;
  const items = QUESTIONS.map((k, i) => {
    const skipped = ans[i] == null, ok = !skipped && (ans[i] === '1') === k.a;
    if (ok) score++;
    return { ok, skipped, note: k.note };
  });
  return { score, total: QUESTIONS.length, items };
}
