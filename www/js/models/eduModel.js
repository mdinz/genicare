// Data edukasi. Ubah/tambah konten di sini tanpa menyentuh view atau controller.
// VIDEO: bila `src` diisi (alamat file mp4), pemutar video asli dipakai.
//        Bila kosong, animasi bawaan (scenes) yang diputar di dalam aplikasi.
// art: 'anatomy' (hl: kidney|filter|ureter|bladder), 'colors' (hl: array indeks 0-5), 'icon' (hl: droplet|clock|shield|alert)
export const VIDEOS = [
  { id: 'ginjal', title: 'Perjalanan urine: cara kerja ginjal', desc: 'Dari penyaringan darah sampai keluar dari tubuh', src: '', scenes: [
    { art: 'anatomy', hl: 'kidney', text: 'Kamu punya dua ginjal seukuran kepalan tangan, di punggung bagian bawah, kiri dan kanan tulang belakang.' },
    { art: 'anatomy', hl: 'filter', text: 'Darah terus mengalir ke ginjal. Ginjal menyaring limbah dan kelebihan air, lalu mengembalikan zat yang masih dibutuhkan ke darah.' },
    { art: 'anatomy', hl: 'ureter', text: 'Hasil saringan menjadi urine, lalu mengalir lewat dua saluran tipis bernama ureter menuju kandung kemih.' },
    { art: 'anatomy', hl: 'bladder', text: 'Kandung kemih menampung urine. Saat penuh kamu merasa ingin berkemih, dan urine keluar lewat uretra.' }
  ] },
  { id: 'warna', title: 'Warna urine dan kebiasaan minum', desc: 'Petunjuk sederhana dari warna urinemu', src: '', scenes: [
    { art: 'colors', hl: [], text: 'Warna urine bisa memberi petunjuk sederhana tentang kecukupan cairan tubuhmu.' },
    { art: 'colors', hl: [0, 1], text: 'Kuning pucat biasanya menandakan cairan tubuh cukup. Pertahankan kebiasaan minummu.' },
    { art: 'colors', hl: [3, 4], text: 'Kuning pekat sampai oranye bisa berarti urine lebih pekat. Coba tambah minum, kecuali dokter membatasi cairanmu.' },
    { art: 'colors', hl: [5], text: 'Merah, kecokelatan, atau keruh bisa karena makanan, obat, atau darah. Bila berulang atau disertai nyeri, periksakan ke dokter. Vitamin juga bisa mengubah warna urine.' }
  ] },
  { id: 'isk', title: 'Mencegah infeksi saluran kemih', desc: 'Empat kebiasaan sederhana yang membantu', src: '', scenes: [
    { art: 'icon', hl: 'droplet', text: 'Minum air yang cukup sepanjang hari membantu membilas kuman dari saluran kemih.' },
    { art: 'icon', hl: 'clock', text: 'Jangan menahan buang air kecil terlalu lama. Urine yang tertahan memberi kesempatan kuman berkembang.' },
    { art: 'icon', hl: 'shield', text: 'Jaga kebersihan area kemaluan. Bagi perempuan, bersihkan dari depan ke belakang, dan ganti pakaian yang basah atau lembap.' },
    { art: 'icon', hl: 'alert', text: 'Nyeri atau panas saat berkemih, demam, atau nyeri pinggang? Periksakan ke tenaga kesehatan. Jangan membeli antibiotik sendiri.' }
  ] }
];

const ARTS = [
  { id: 'isk', title: 'Infeksi saluran kemih (ISK)', desc: 'Gejala, penanganan, dan pencegahan',
    intro: 'Infeksi saluran kemih (ISK) adalah salah satu infeksi yang paling sering terjadi. Kabar baiknya, sebagian besar kasus dapat ditangani dengan baik bila dikenali sejak awal.',
    sections: [
      { h: 'Apa itu ISK?', p: ['ISK terjadi ketika kuman, paling sering bakteri dari usus seperti E. coli, masuk lewat uretra (saluran keluar urine) lalu berkembang di saluran kemih. Infeksi bisa terjadi di kandung kemih (sistitis) atau naik hingga ke ginjal (pielonefritis).', 'ISK lebih sering dialami perempuan karena uretra perempuan lebih pendek, sehingga kuman lebih mudah mencapai kandung kemih. Meski begitu, laki-laki juga bisa terkena, dan ISK pada laki-laki sebaiknya selalu diperiksakan ke dokter.'] },
      { h: 'Gejala yang perlu dikenali', ul: ['Nyeri atau rasa panas saat berkemih', 'Sering ingin berkemih, tetapi urine yang keluar sedikit', 'Rasa tidak tuntas setelah berkemih', 'Urine keruh, berbau menyengat, atau kadang tampak kemerahan', 'Nyeri atau tidak nyaman di perut bagian bawah'] },
      { h: 'Kapan infeksi sudah naik ke ginjal?', p: ['Waspadai bila gejala di atas disertai demam, menggigil, nyeri pinggang atau punggung bagian samping, serta mual atau muntah. Kondisi ini bisa menandakan infeksi ginjal dan perlu pemeriksaan segera. Penderita diabetes, ibu hamil, dan lanjut usia sebaiknya tidak menunda.'] },
      { h: 'Penanganan', p: ['ISK dinilai oleh tenaga kesehatan, biasanya lewat wawancara gejala dan pemeriksaan urine. Bila disebabkan bakteri, dokter dapat meresepkan antibiotik yang sesuai. Jangan membeli antibiotik sendiri, dan jangan menghentikannya sebelum waktu yang dianjurkan walaupun gejala sudah membaik, karena infeksi bisa kambuh dan kuman bisa menjadi lebih sulit diobati. Minum cukup air selama sakit membantu, tetapi bukan pengganti pengobatan.'] },
      { h: 'Pencegahan', ul: ['Minum air putih yang cukup sepanjang hari', 'Jangan menahan buang air kecil terlalu lama', 'Berkemih setelah berhubungan seksual', 'Bagi perempuan, bersihkan area kemaluan dari depan ke belakang', 'Ganti pakaian dalam yang basah atau lembap, dan pilih bahan yang menyerap keringat', 'Hindari sabun pewangi atau semprotan di area kemaluan'] }
    ] },
  { id: 'batu', title: 'Batu ginjal', desc: 'Mengapa terbentuk dan kapan harus waspada',
    intro: 'Batu ginjal adalah endapan keras dari mineral dan garam yang terbentuk di dalam ginjal. Ukurannya bisa sekecil butir pasir sampai lebih besar, dan nyerinya sering digambarkan sebagai salah satu nyeri yang paling hebat.',
    sections: [
      { h: 'Mengapa batu terbentuk?', p: ['Batu terbentuk ketika urine terlalu pekat sehingga zat seperti kalsium, oksalat, atau asam urat mengendap dan menggumpal. Faktor yang meningkatkan risiko antara lain kurang minum, makanan yang sangat asin, riwayat batu pada keluarga, obesitas, dan beberapa kondisi medis tertentu.'] },
      { h: 'Gejala', p: ['Batu kecil kadang tidak menimbulkan gejala sampai bergerak ke ureter (saluran dari ginjal ke kandung kemih). Gejala yang dapat muncul:'], ul: ['Nyeri hebat di pinggang atau samping punggung yang datang bergelombang, dapat menjalar ke perut bagian bawah atau selangkangan', 'Urine kemerahan atau kecokelatan', 'Nyeri atau tidak nyaman saat berkemih', 'Mual atau muntah', 'Sering ingin berkemih'] },
      { h: 'Kapan harus segera ke fasilitas kesehatan', ul: ['Nyeri sangat hebat dan tidak tertahankan', 'Disertai demam atau menggigil', 'Tidak bisa berkemih, atau urine sangat sedikit', 'Muntah terus-menerus sehingga tidak bisa minum'], p: ['Batu yang menyumbat disertai infeksi dapat berbahaya dan perlu penanganan cepat.'] },
      { h: 'Penanganan', p: ['Batu yang kecil sering dapat keluar sendiri dengan minum cukup dan pereda nyeri sesuai anjuran dokter. Batu yang besar, menyumbat, atau menimbulkan komplikasi membutuhkan tindakan, misalnya pemecahan batu dengan gelombang kejut atau prosedur lain. Pilihan terbaik ditentukan dokter setelah pemeriksaan, termasuk pemeriksaan urine dan pencitraan seperti USG atau CT scan.'] },
      { h: 'Pencegahan', ul: ['Minum air putih cukup sepanjang hari. Urine yang berwarna kuning pucat adalah tanda yang baik', 'Kurangi garam berlebih', 'Makan seimbang dan jaga berat badan', 'Bila pernah memiliki batu ginjal, tanyakan ke dokter jenis batunya, karena pola makan yang dianjurkan bergantung pada jenis batu'] }
    ] },
  { id: 'pgk', title: 'Penyakit ginjal kronis', desc: 'Sering tanpa gejala: kenali risikonya',
    intro: 'Penyakit ginjal kronis (PGK) adalah penurunan fungsi ginjal yang berlangsung perlahan selama tiga bulan atau lebih. Karena sering tanpa gejala di awal, banyak orang baru menyadarinya setelah fungsi ginjal menurun cukup jauh.',
    sections: [
      { h: 'Penyebab dan faktor risiko', p: ['Dua penyebab terbanyak adalah diabetes dan tekanan darah tinggi, karena keduanya merusak pembuluh darah halus di ginjal. Faktor lain meliputi penyakit ginjal tertentu, batu atau sumbatan yang berulang, riwayat keluarga, merokok, obesitas, dan pemakaian obat tertentu dalam jangka panjang tanpa pengawasan.'] },
      { h: 'Gejala pada tahap lanjut', p: ['Gejala ini tidak spesifik dan bisa disebabkan hal lain, sehingga pemeriksaan tetap diperlukan:'], ul: ['Mudah lelah dan lemas', 'Bengkak di kaki, pergelangan, atau kelopak mata', 'Urine berbusa terus-menerus atau jumlah urine berubah', 'Sering bangun malam untuk berkemih', 'Mual, nafsu makan turun, atau kulit gatal'] },
      { h: 'Cara mengetahuinya', p: ['Pemeriksaan sederhana dapat menilai ginjal. Tes darah kreatinin, yang dipakai untuk menghitung eGFR, menunjukkan seberapa baik ginjal menyaring darah, sedangkan tes albumin atau protein dalam urine menunjukkan apakah ada kebocoran. Tekanan darah dan gula darah juga perlu dipantau.', 'Penderita diabetes, hipertensi, atau yang memiliki riwayat keluarga penyakit ginjal sebaiknya memeriksakan diri secara berkala sesuai anjuran dokter.'] },
      { h: 'Menjaga ginjal', ul: ['Kontrol tekanan darah dan gula darah, serta minum obat sesuai anjuran', 'Jangan merokok', 'Jaga berat badan dan aktif bergerak', 'Batasi garam berlebih', 'Hindari memakai obat pereda nyeri tertentu secara rutin dan jangka panjang tanpa anjuran dokter, serta hati-hati dengan jamu atau suplemen yang tidak jelas kandungannya', 'Minum cukup, kecuali dokter membatasi cairanmu'] },
      { h: 'Penting diingat', p: ['Jika kamu sudah didiagnosis penyakit ginjal atau gagal jantung, atau dokter membatasi cairanmu, jangan mengikuti target minum umum. Ikuti anjuran dokter yang merawatmu.'] }
    ] },
  { id: 'prostat', title: 'Kesehatan prostat dan testis', desc: 'Kenali kondisi normal dan tanda bahayanya',
    intro: 'Kesehatan organ reproduksi laki-laki sering baru dibicarakan ketika sudah ada keluhan. Mengenali kondisi normal dan tanda bahayanya membantu kamu mencari pertolongan di waktu yang tepat.',
    sections: [
      { h: 'Prostat dan fungsinya', p: ['Prostat adalah kelenjar seukuran kenari yang terletak di bawah kandung kemih dan mengelilingi uretra. Fungsinya menghasilkan cairan yang menjadi bagian dari air mani. Karena posisinya, perubahan pada prostat sering memengaruhi cara berkemih.'] },
      { h: 'Masalah prostat yang umum', ul: ['Pembesaran prostat jinak (BPH): sering terjadi seiring bertambahnya usia, dengan gejala pancaran urine lemah, sulit memulai berkemih, sering berkemih terutama malam hari, dan rasa tidak tuntas', 'Prostatitis (peradangan): nyeri di area panggul atau di antara anus dan kantong zakar, nyeri saat berkemih, dan pada kasus akut bisa disertai demam', 'Kanker prostat: pada tahap awal sering tidak menimbulkan gejala'], p: ['Pemeriksaan seperti tes PSA dan pemeriksaan oleh dokter sebaiknya didiskusikan sesuai usia dan faktor risiko, karena manfaat dan kekurangannya perlu dipertimbangkan bersama dokter.'] },
      { h: 'Testis: kenali yang normal', p: ['Testis berada di kantong zakar dan menghasilkan sperma serta hormon testosteron. Ukuran kiri dan kanan boleh sedikit berbeda. Pemeriksaan mandiri dapat dilakukan sebulan sekali setelah mandi air hangat, saat kulit kantong zakar rileks. Rasakan setiap testis dengan lembut, dan perhatikan apakah ada benjolan, pembengkakan, atau perubahan bentuk.'] },
      { h: 'Tanda bahaya pada testis', ul: ['Nyeri testis yang datang mendadak dan hebat, kadang disertai mual atau muntah. Ini dapat menandakan torsio (testis terpelintir), keadaan darurat yang harus ditangani dalam hitungan jam', 'Benjolan di testis, walaupun tidak nyeri', 'Pembengkakan disertai demam', 'Rasa berat atau perubahan ukuran yang menetap'] },
      { h: 'Kebiasaan yang membantu', ul: ['Minum cukup dan jangan menahan berkemih', 'Aktif bergerak dan menjaga berat badan', 'Gunakan pelindung saat olahraga yang berisiko benturan', 'Periksakan keluhan berkemih yang berubah, jangan dianggap hanya faktor usia'] }
    ] }
];
const words = a => [a.intro, ...a.sections.flatMap(s => [...(s.p || []), ...(s.ul || [])])].join(' ').split(/\s+/).length;
export const ARTICLES = ARTS.map(a => ({ ...a, min: Math.max(2, Math.round(words(a) / 180)) }));
