export const LIST = [['nyeri','Nyeri atau panas saat berkemih'],['sering','Sering berkemih dari biasanya'],['darah','Urine berdarah atau merah'],['busa','Urine berbusa terus-menerus'],['pinggang','Nyeri pinggang'],['demam','Demam atau menggigil'],['muntah','Mual atau muntah'],['testis','Nyeri testis mendadak dan hebat'],['tahan','Tidak bisa berkemih sama sekali']];

// Berbasis aturan, BUKAN diagnosis. Tinjau aturan ini bersama dokter sebelum rilis.
export function evaluate(sel) {
  const h = x => sel.includes(x);
  let level = 'hijau', text = 'Belum ada tanda bahaya dari yang kamu pilih. Tetap minum cukup dan pantau di catatan.';
  if (h('nyeri') || h('sering') || h('darah') || h('busa') || h('pinggang')) { level = 'kuning'; text = 'Sebaiknya konsultasi ke tenaga kesehatan dalam waktu dekat untuk dinilai, terutama bila berlangsung lebih dari beberapa hari.'; }
  if (h('testis') || h('tahan') || (h('demam') && h('pinggang')) || (h('muntah') && h('pinggang'))) { level = 'merah'; text = 'Kombinasi keluhan ini bisa menandakan kondisi serius. Segera cari pertolongan medis atau ke IGD.'; }
  return { level, text };
}
