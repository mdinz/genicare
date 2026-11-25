export const QUESTIONS = [
  { q: 'Urine berwarna kuning pucat biasanya menandakan cairan tubuh cukup.', a: true, note: 'Warna urine juga bisa berubah karena makanan, vitamin, atau obat.' },
  { q: 'Menahan buang air kecil adalah kebiasaan yang baik.', a: false, note: 'Menahan berkemih terlalu sering dapat meningkatkan risiko infeksi.' },
  { q: 'Diabetes dan tekanan darah tinggi termasuk penyebab utama penyakit ginjal kronis.', a: true, note: 'Keduanya merusak pembuluh darah halus di ginjal. Kontrol rutin sangat penting.' },
  { q: 'Nyeri testis mendadak dan hebat boleh ditunggu sampai besok.', a: false, note: 'Ini keadaan darurat (kemungkinan torsio) yang perlu evaluasi segera.' },
  { q: 'Antibiotik untuk ISK boleh dibeli sendiri dan dihentikan begitu gejala membaik.', a: false, note: 'Antibiotik harus sesuai resep dan dipakai sesuai anjuran dokter agar infeksi tidak kambuh.' },
  { q: 'Penyakit ginjal kronis tahap awal sering tidak bergejala.', a: true, note: 'Karena itu pemeriksaan berkala penting bagi penderita hipertensi dan diabetes.' },
  { q: 'Batu ginjal selalu membutuhkan operasi.', a: false, note: 'Batu kecil sering keluar sendiri dengan minum cukup dan pengawasan. Tindakan dibutuhkan bila batu besar, menyumbat, atau menimbulkan komplikasi.' },
  { q: 'Pembesaran prostat jinak dapat menyebabkan pancaran urine lemah dan sering berkemih di malam hari.', a: true, note: 'Keluhan berkemih yang berubah sebaiknya diperiksakan, bukan dianggap hanya faktor usia.' }
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
