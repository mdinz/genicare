// Data edukasi GeniCare: Video animasi gaya TikTok & 8 Materi Utama Kesehatan Genitourinary (tanpa materi menstruasi).
export const VIDEOS = [
  {
    id: 'ginjal',
    title: 'Perjalanan Urine: Cara Kerja Ginjal',
    desc: 'Dari penyaringan darah sampai keluar dari tubuh',
    tag: 'ANATOMI',
    src: '',
    scenes: [
      { art: 'anatomy', hl: 'kidney', badge: 'TAHAP 1 · GINJAL', headline: '2 Filter Ajaib di Tubuhmu', text: 'Kamu punya dua **ginjal** seukuran kepalan tangan di punggung bawah, kiri dan kanan tulang belakang.' },
      { art: 'anatomy', hl: 'filter', badge: 'TAHAP 2 · PENYARINGAN', headline: 'Saring 180 Liter Darah/Hari', text: 'Darah terus mengalir ke ginjal. Ginjal menyaring **limbah & kelebihan air**, lalu mengembalikan zat penting ke darah.' },
      { art: 'anatomy', hl: 'ureter', badge: 'TAHAP 3 · URETER', headline: 'Mengalir Lewat 2 Saluran Tipis', text: 'Hasil saringan menjadi **urine**, lalu turun lewat dua saluran tipis bernama **ureter** menuju kandung kemih.' },
      { art: 'anatomy', hl: 'bladder', badge: 'TAHAP 4 · KANDUNG KEMIH', headline: 'Tampung & Keluarkan', text: 'Kandung kemih menampung urine. Saat penuh muncul sinyal ingin berkemih, lalu keluar lewat **uretra**.' }
    ]
  },
  {
    id: 'warna',
    title: 'Kenali Warna Urine & Hidrasi',
    desc: 'Petunjuk cepat kondisi cairan tubuh dari warna urinemu',
    tag: 'HIDRASI',
    src: '',
    scenes: [
      { art: 'colors', hl: [], badge: 'URINE COLOR GUIDE', headline: 'Cek Warna Urinemu Tiap Hari', text: 'Warna urine bisa menjadi **indikator sederhana** untuk melihat apakah tubuhmu cukup cairan.' },
      { art: 'colors', hl: [0, 1], badge: 'SKALA 1–2 · OPTIMAL', headline: 'Kuning Pucat = Hidrasi Cukup', text: '**Kuning pucat jernih** menandakan cairan tubuhmu tercukupi. Pertahankan kebiasaan minum teratur.' },
      { art: 'colors', hl: [3, 4], badge: 'SKALA 4–5 · KURANG MINUM', headline: 'Kuning Pekat = Waktunya Minum', text: 'Warna **kuning pekat hingga oranye** berarti urine lebih terkonsentrasi. Segera tambah minum air putih.' },
      { art: 'colors', hl: [5], badge: 'SKALA 6 · WASPADA', headline: 'Merah / Cokelat? Periksa!', text: 'Urine **merah, kecokelatan, atau keruh** bisa disebabkan darah, obat, atau infeksi. Bila berulang, segera periksa.' }
    ]
  },
  {
    id: 'isk',
    title: 'ISK & Sistitis: Kenali & Cegah',
    desc: 'Mengapa nyeri saat kencing dan cara mencegahnya',
    tag: 'INFEKSI',
    src: '',
    scenes: [
      { art: 'isk', hl: 'entry', badge: 'FAKTA ISK & SISTITIS', headline: 'Bakteri Masuk Lewat Uretra', text: '**Sistitis** terjadi saat bakteri (seringnya *E. coli*) masuk lewat uretra dan menginfeksi **kandung kemih**.' },
      { art: 'icon', hl: 'droplet', badge: 'CEGAH #1', headline: 'Bilas Kuman dengan Air Putih', text: 'Minum air yang cukup sepanjang hari membantu **membilas bakteri** sebelum sempat berkembang biak.' },
      { art: 'icon', hl: 'clock', badge: 'CEGAH #2', headline: 'Stop Tahan Kencing!', text: 'Menahan buang air kecil terlalu lama membuat urine tergenang dan jadi **sarang bakteri**.' },
      { art: 'icon', hl: 'alert', badge: 'TANDA BAHAYA', headline: 'Demam + Nyeri Pinggang = Bahaya', text: 'Nyeri/panas saat berkemih disertai **demam atau nyeri pinggang** bisa berarti infeksi naik ke ginjal. Segera ke dokter!' }
    ]
  },
  {
    id: 'batu',
    title: 'Batu Saluran Kemih & Hidronefrosis',
    desc: 'Bagaimana kristal terbentuk dan menyumbat aliran urine',
    tag: 'SUMBATAN',
    src: '',
    scenes: [
      { art: 'stone', hl: 'crystal', badge: 'PROSES TERBENTUK', headline: 'Urine Pekat Jadi Kristal', text: 'Kurang minum membuat mineral seperti kalsium & asam urat mengendap lalu menggumpal menjadi **batu**.' },
      { art: 'stone', hl: 'block', badge: 'NYERI KOLIK', headline: 'Batu Turun Menyumbat Ureter', text: 'Batu yang bergeser ke **ureter** memicu nyeri pinggang hebat bergelombang yang menjalar ke perut bawah.' },
      { art: 'hydro', hl: 'swell', badge: 'KOMPLIKASI · HIDRONEFROSIS', headline: 'Urine Tertahan = Ginjal Bengkak', text: 'Bila saluran tersumbat total, urine menumpuk di ginjal hingga membengkak (**hidronefrosis**).' },
      { art: 'icon', hl: 'shield', badge: 'PENCEGAHAN', headline: 'Minum Cukup & Kurangi Garam', text: 'Jaga urine tetap kuning pucat, **kurangi makanan tinggi garam**, dan segera periksa bila nyeri hebat.' }
    ]
  },
  {
    id: 'akickd',
    title: 'Bedanya AKI vs CKD pada Ginjal',
    desc: 'Gangguan ginjal akut yang mendadak vs kronis yang menahun',
    tag: 'GINJAL',
    src: '',
    scenes: [
      { art: 'akickd', hl: 'aki', badge: 'AKI · MENDADAK', headline: 'AKI: Terjadi dalam Jam–Hari', text: '**AKI (Acute Kidney Injury)** adalah penurunan fungsi ginjal mendadak akibat dehidrasi berat, infeksi, atau obat.' },
      { art: 'akickd', hl: 'ckd', badge: 'CKD · MENAHUN', headline: 'CKD: Berlangsung > 3 Bulan', text: '**CKD (Penyakit Ginjal Kronis)** berkembang perlahan > 3 bulan, sering dipicu **diabetes & hipertensi**.' },
      { art: 'akickd', hl: 'lab', badge: 'DETEKSI DINI', headline: 'Cek Kreatinin, eGFR & Albumin', text: 'CKD tahap awal **sering tanpa gejala**. Tes darah **eGFR** dan **protein urine** membantu deteksi dini.' },
      { art: 'icon', hl: 'shield', badge: 'JAGA GINJALMU', headline: 'Kontrol Tensi & Hindari Obat Sembarangan', text: 'Kendalikan tekanan darah & gula darah, dan **hindari obat antinyeri jangka panjang** tanpa resep dokter.' }
    ]
  },
  {
    id: 'pria',
    title: 'Prostat (BPH), Varikokel & Kesehatan Pria',
    desc: 'Memahami pembesaran prostat, varikokel, dan fungsi reproduksi',
    tag: 'PRIA',
    src: '',
    scenes: [
      { art: 'bph', hl: 'normal', badge: 'ANATOMI PROSTAT', headline: 'Prostat Mengelilingi Uretra', text: 'Kelenjar **prostat** berada tepat di bawah kandung kemih dan mengelilingi saluran keluar urine.' },
      { art: 'bph', hl: 'enlarged', badge: 'BPH · PEMBESARAN JINAK', headline: 'Prostat Membesar = Pancaran Lemah', text: 'Pada **BPH**, prostat yang membesar menekan uretra sehingga pancaran urine lemah dan sering terbangun malam.' },
      { art: 'varikokel', hl: 'vein', badge: 'VARIKOKEL', headline: 'Vena Melebar di Kantong Zakar', text: '**Varikokel** adalah pelebaran vena di skrotum yang terasa seperti "kantong cacing" dan dapat memengaruhi kesuburan.' },
      { art: 'icon', hl: 'alert', badge: 'PERIKSA RUTIN', headline: 'Jangan Anggap Sepele Keluhan', text: 'Segera ke dokter bila ada **benjolan, pegal menahun, disfungsi ereksi**, atau nyeri testis mendadak (darurat!).' }
    ]
  }
];

const ARTS = [
  {
    id: 'isk',
    num: 1,
    title: 'ISK & Sistitis',
    desc: 'Infeksi saluran kemih bawah hingga ginjal, gejala, dan pencegahannya',
    intro: 'Infeksi Saluran Kemih (ISK) adalah infeksi yang terjadi di sistem kemih, mulai dari uretra, kandung kemih (sistitis), hingga ginjal (pielonefritis). Sistitis merupakan bentuk ISK paling sering.',
    sections: [
      { h: 'Apa itu ISK dan Sistitis?', p: ['**Sistitis** adalah peradangan atau infeksi pada kandung kemih yang umumnya disebabkan oleh bakteri usus seperti *Escherichia coli (E. coli)* yang masuk melalui uretra lalu berkembang biak.', 'Perempuan lebih rentan mengalami sistitis karena uretra lebih pendek. Namun, laki-laki juga dapat mengalaminya—terutama bila ada sumbatan atau pembesaran prostat—dan harus selalu diperiksakan ke dokter.'] },
      { h: 'Gejala Utama Sistitis & ISK Bawah', ul: ['Nyeri atau rasa panas/perih saat buang air kecil (disuria)', 'Sering ingin berkemih, tetapi urine keluar sedikit-sedikit', 'Rasa tidak tuntas setelah berkemih', 'Nyeri atau rasa tertekan di perut bagian bawah (di atas tulang kemaluan)', 'Urine tampak keruh, berbau menyengat, atau sedikit kemerahan'] },
      { h: 'Tanda Infeksi Naik ke Ginjal (Pielonefritis)', p: ['Segera cari pertolongan medis bila keluhan di atas disertai **demam tinggi, menggigil, nyeri pinggang atau punggung samping, serta mual dan muntah**. Ibu hamil, lansia, dan penderita diabetes perlu pemeriksaan lebih cepat.'] },
      { h: 'Penanganan & Pencegahan', ul: ['Periksakan ke dokter untuk tes urine dan antibiotik yang sesuai bila terbukti infeksi bakteri—jangan membeli antibiotik sendiri atau menghentikannya sebelum habis', 'Minum air putih yang cukup sepanjang hari untuk membantu membilas kuman', 'Jangan menahan buang air kecil terlalu lama', 'Bersihkan area kemaluan dari arah depan ke belakang, serta berkemih setelah berhubungan seksual'] }
    ]
  },
  {
    id: 'batu',
    num: 2,
    title: 'Batu Saluran Kemih',
    desc: 'Batu di ginjal, ureter, dan kandung kemih: penyebab dan tanda bahaya',
    intro: 'Batu saluran kemih adalah endapan keras dari mineral dan garam yang terbentuk di ginjal dan dapat turun ke ureter atau kandung kemih. Ukurannya bervariasi dari seukuran pasir hingga beberapa sentimeter.',
    sections: [
      { h: 'Mengapa Batu Bisa Terbentuk?', p: ['Batu terbentuk ketika urine terlalu pekat sehingga zat seperti kalsium, oksalat, atau asam urat mengkristal dan saling menempel.', 'Risiko meningkat pada orang yang **kurang minum air putih**, sering mengonsumsi makanan tinggi garam/protein hewani berlebih, memiliki riwayat batu di keluarga, obesitas, atau gangguan metabolik tertentu.'] },
      { h: 'Gejala yang Sering Muncul', ul: ['Nyeri pinggang hebat yang datang bergelombang (kolik) dan dapat menjalar ke perut bawah atau selangkangan', 'Urine berwarna kemerahan, merah muda, atau kecokelatan (hematuria)', 'Nyeri atau rasa panas saat berkemih bila batu berada dekat kandung kemih', 'Sering ingin berkemih atau aliran urine tiba-tiba terhenti', 'Mual dan muntah akibat nyeri hebat'] },
      { h: 'Kapan Harus Segera ke IGD?', ul: ['Nyeri sangat hebat tidak tertahankan', 'Disertai demam atau menggigil (tanda infeksi di balik sumbatan)', 'Tidak bisa buang air kecil sama sekali', 'Muntah terus-menerus hingga tidak bisa minum'], p: ['Batu yang menyumbat aliran urine dapat memicu pembengkakan ginjal (**hidronefrosis**) dan kerusakan ginjal bila terlambat ditangani.'] },
      { h: 'Penanganan & Pencegahan', ul: ['Batu kecil (< 4–5 mm) sering dapat keluar sendiri dengan minum cukup dan obat pereda nyeri/pelancar dari dokter', 'Batu besar atau menyumbat ditangani dengan prosedur medis seperti ESWL (gelombang kejut) atau endoskopi (URS/PCNL)', 'Minum air putih cukup hingga urine berwarna kuning pucat dan batasi asupan garam harian'] }
    ]
  },
  {
    id: 'aki',
    num: 3,
    title: 'AKI (Gangguan Ginjal Akut)',
    desc: 'Penurunan fungsi ginjal mendadak dalam hitungan jam hingga hari',
    intro: 'AKI (*Acute Kidney Injury*) atau Gangguan Ginjal Akut adalah penurunan fungsi ginjal yang terjadi secara mendadak—dalam hitungan jam hingga beberapa hari—sehingga limbah metabolisme menumpuk di dalam darah.',
    sections: [
      { h: 'Penyebab Umum AKI', ul: ['**Prerenal (aliran darah ke ginjal turun):** dehidrasi berat, diare/muntah hebat, perdarahan, atau syok/tekanan darah turun drastis', '**Renal (kerusakan jaringan ginjal):** infeksi berat (sepsis), reaksi obat-obatan tertentu (misalnya obat antinyeri NSAID dosis tinggi, antibiotik tertentu, atau zat kontras)', '**Postrenal (sumbatan aliran urine):** batu saluran kemih yang menyumbat total, pembesaran prostat berat (BPH), atau sumbatan kandung kemih'] },
      { h: 'Gejala yang Perlu Diwaspadai', ul: ['Jumlah urine menurun drastis atau bahkan tidak keluar sama sekali', 'Bengkak di kaki, pergelangan kaki, atau wajah', 'Lemas berat, sesak napas, mual, atau kebingungan/mengantuk tidak biasa'] },
      { h: 'Mengapa AKI Harus Cepat Ditangani?', p: ['Berbeda dengan penyakit ginjal kronis, **AKI sering kali masih bisa pulih** apabila penyebabnya ditemukan dan ditangani dengan cepat di fasilitas kesehatan (misalnya rehidrasi cairan, menghentikan obat pemicu, atau mengatasi sumbatan).', 'Penundaan penanganan dapat membuat kerusakan ginjal menjadi permanen atau berkembang menjadi gagal ginjal kronis.'] },
      { h: 'Langkah Pencegahan', ul: ['Segera penuhi cairan saat diare, muntah, atau demam tinggi', 'Hindari mengonsumsi obat pereda nyeri atau jamu/suplemen tanpa pengawasan dokter', 'Segera periksa bila urine mendadak berkurang drastis'] }
    ]
  },
  {
    id: 'ckd',
    num: 4,
    title: 'CKD (Penyakit Ginjal Kronis)',
    desc: 'Penurunan fungsi ginjal menahun yang sering tanpa gejala di awal',
    intro: 'CKD (*Chronic Kidney Disease*) atau Penyakit Ginjal Kronis adalah kerusakan atau penurunan fungsi ginjal yang berlangsung perlahan selama **3 bulan atau lebih**.',
    sections: [
      { h: 'Penyebab & Faktor Risiko Utama', p: ['Dua penyebab tersering CKD adalah **diabetes melitus** dan **hipertensi (tekanan darah tinggi)**, karena keduanya merusak pembuluh darah halus penyaring di ginjal secara bertahap.', 'Faktor risiko lain meliputi riwayat penyakit ginjal di keluarga, infeksi atau batu ginjal berulang, merokok, obesitas, dan penggunaan obat pereda nyeri jangka panjang.'] },
      { h: 'Mengapa Sering Tidak Disadari?', p: ['Ginjal memiliki cadangan fungsi yang besar, sehingga CKD tahap 1–2 sering **tidak menimbulkan gejala sama sekali**. Keluhan biasanya baru terasa ketika fungsi ginjal sudah menurun jauh:'], ul: ['Mudah lelah, pucat, dan sulit berkonsentrasi', 'Bengkak di tungkai, pergelangan kaki, atau kelopak mata saat bangun tidur', 'Urine berbusa menetap (tanda kebocoran protein/albumin)', 'Sering bangun malam untuk berkemih', 'Kulit gatal, mual, dan nafsu makan menurun'] },
      { h: 'Pemeriksaan untuk Deteksi Dini', p: ['Pemeriksaan laboratorium kunci adalah **kreatinin serum (untuk menghitung eGFR)** guna melihat kemampuan saring ginjal, serta **albumin/protein urine** untuk mendeteksi kebocoran.', 'Penderita diabetes dan hipertensi disarankan melakukan skrining ginjal berkala sesuai anjuran dokter.'] },
      { h: 'Menjaga Fungsi Ginjal yang Tersisa', ul: ['Kontrol tekanan darah dan kadar gula darah secara disiplin', 'Batasi konsumsi garam berlebih dan berhenti merokok', 'Jangan mengikuti target minum umum bila dokter sudah membatasi cairanmu (terutama pada CKD lanjut)'] }
    ]
  },
  {
    id: 'bph',
    num: 5,
    title: 'BPH (Pembesaran Prostat Jinak)',
    desc: 'Pembesaran kelenjar prostat yang menekan saluran kemih pada pria',
    intro: 'BPH (*Benign Prostatic Hyperplasia*) adalah pembesaran kelenjar prostat yang bersifat **jinak (bukan kanker)** dan sangat umum terjadi pada pria seiring bertambahnya usia, terutama di atas 50 tahun.',
    sections: [
      { h: 'Bagaimana BPH Memengaruhi Berkemih?', p: ['Prostat mengelilingi pangkal uretra tepat di bawah kandung kemih. Ketika ukurannya membesar, saluran urine menyempit sehingga kandung kemih harus bekerja lebih keras untuk mendorong urine keluar.'] },
      { h: 'Gejala BPH (Keluhan Saluran Kemih Bawah)', ul: ['Pancaran urine lemah, terputus-putus, atau menetes di akhir berkemih', 'Sulit atau harus mengejan untuk memulai buang air kecil', 'Rasa tidak tuntas setelah berkemih', 'Sering buang air kecil, terutama terbangun beberapa kali di malam hari (nokturia)', 'Keinginan berkemih yang mendadak dan sulit ditahan'] },
      { h: 'Tanda Bahaya yang Memerlukan Pertolongan Segera', p: ['Bila tiba-tiba **tidak bisa berkemih sama sekali** disertai nyeri hebat di perut bawah (retensi urine akut), atau muncul urine berdarah dan demam, segera ke IGD untuk penanganan cepat.'] },
      { h: 'Penanganan & Kebiasaan Membantu', ul: ['Pemeriksaan oleh dokter (wawancara skor gejala, pemeriksaan fisik, USG, atau tes PSA bila perlu)', 'Penanganan dapat berupa pemantauan berkala, obat pelemas otot prostat/pengecil prostat, hingga tindakan operasi minimal invasif bila menyumbat berat', 'Kurangi minum 1–2 jam sebelum tidur, batasi kafein dan alkohol, serta jangan menahan berkemih'] }
    ]
  },
  {
    id: 'hidronefrosis',
    num: 6,
    title: 'Hidronefrosis',
    desc: 'Pembengkakan ginjal akibat aliran urine tersumbat',
    intro: 'Hidronefrosis adalah kondisi membengkaknya satu atau kedua ginjal karena urine tidak dapat mengalir keluar dengan lancar menuju kandung kemih, sehingga menumpuk dan menekan jaringan ginjal.',
    sections: [
      { h: 'Penyebab Tersering Hidronefrosis', ul: ['**Batu saluran kemih** yang menyumbat ureter', '**Pembesaran prostat (BPH)** yang menghambat pengosongan kandung kemih', 'Penyempitan saluran ureter bawaan atau akibat jaringan parut', 'Penekanan saluran kemih dari luar (misalnya massa atau pembesaran organ panggul)'] },
      { h: 'Gejala yang Dapat Muncul', p: ['Hidronefrosis ringan yang terjadi perlahan kadang tidak bergejala. Bila sumbatan terjadi cepat atau berat, keluhan meliputi:'], ul: ['Nyeri pinggang atau punggung samping yang terasa tumpul hingga sangat hebat', 'Mual dan muntah', 'Frekuensi berkemih berubah atau rasa tidak tuntas', 'Demam bila disertai infeksi pada urine yang tergenang'] },
      { h: 'Mengapa Perlu Ditangani?', p: ['Tekanan urine yang tertahan terus-menerus dapat merusak nefron (unit penyaring ginjal) secara permanen dan memicu infeksi ginjal berat.'] },
      { h: 'Diagnosis & Penanganan', p: ['Dokter umumnya mendeteksi hidronefrosis dengan **USG ginjal** atau CT scan. Penanganannya berfokus pada **mengatasi sumbatannya**—mulai dari pemasangan selang sementara (stent/kateter) untuk mengalirkan urine, pemecahan batu, hingga penanganan prostat.'] }
    ]
  },
  {
    id: 'de',
    num: 7,
    title: 'Disfungsi Ereksi',
    desc: 'Mengenal penyebab medis, psikologis, dan penanganan yang aman',
    intro: 'Disfungsi ereksi (DE) adalah ketidakmampuan yang menetap atau berulang untuk mencapai atau mempertahankan ereksi yang cukup untuk aktivitas seksual. Kondisi ini umum terjadi dan **bisa menjadi sinyal awal kesehatan pembuluh darah**.',
    sections: [
      { h: 'Penyebab Fisik & Psikologis', ul: ['**Gangguan pembuluh darah & saraf:** diabetes, hipertensi, kolesterol tinggi, dan kebiasaan merokok mempersempit aliran darah ke penis', '**Faktor hormonal & obat:** kadar testosteron rendah atau efek samping obat tertentu', '**Faktor psikologis:** stres kerja, kecemasan performa, kelelahan, kurang tidur, atau depresi'] },
      { h: 'Kaitan dengan Kesehatan Jantung & Pembuluh Darah', p: ['Pembuluh darah penis berukuran lebih kecil dibandingkan pembuluh darah jantung. Karena itu, disfungsi ereksi yang muncul berulang terkadang merupakan **tanda peringatan dini** adanya penyempitan pembuluh darah atau diabetes yang belum terdeteksi.'] },
      { h: 'Kapan Perlu Konsultasi ke Dokter?', ul: ['Keluhan berlangsung terus-menerus selama lebih dari beberapa minggu/bulan', 'Disertai keluhan lain seperti sering haus/sering kencing (curiga diabetes), nyeri dada saat aktivitas, atau penurunan gairah berat'] },
      { h: 'Penanganan Aman & Hindari Obat Ilegal', ul: ['Perbaiki gaya hidup: berhenti merokok, olahraga rutin, tidur cukup, kelola stres, dan kontrol gula darah serta tekanan darah', 'Konsultasikan ke dokter untuk evaluasi penyebab dan terapi yang aman', '**Peringatan:** Hindari jamu atau "obat kuat" tanpa izin edar resmi karena sering dicampur bahan kimia obat dosis tinggi yang berbahaya bagi jantung dan ginjal'] }
    ]
  },
  {
    id: 'varikokel',
    num: 8,
    title: 'Varikokel',
    desc: 'Pelebaran pembuluh darah vena di skrotum yang memengaruhi kesuburan',
    intro: 'Varikokel adalah pelebaran pembuluh darah vena di dalam kantong zakar (skrotum)—mirip seperti varises pada kaki. Kondisi ini paling sering terjadi di sisi kiri dan kerap ditemukan pada remaja hingga pria dewasa muda.',
    sections: [
      { h: 'Bagaimana Ciri & Gejalanya?', ul: ['Teraba benjolan lunak berkelok-kelok di atas testis yang sering digambarkan seperti **"kantong cacing"**, terutama saat berdiri atau mengejan, dan berkurang saat berbaring', 'Rasa pegal, berat, atau nyeri tumpul di skrotum setelah berdiri lama atau berolahraga berat', 'Ukuran testis di sisi yang terkena tampak lebih kecil (pada derajat lanjut)'] },
      { h: 'Pengaruhnya terhadap Kesuburan', p: ['Pelebaran vena menyebabkan aliran darah melambat dan suhu di sekitar testis meningkat. Suhu yang terlalu hangat dapat mengganggu produksi dan kualitas sperma, sehingga varikokel menjadi salah satu penyebab terbanyak masalah kesuburan pria yang **dapat ditangani**.'] },
      { h: 'Kapan Harus ke Dokter?', ul: ['Bila menemukan benjolan atau pembengkakan di skrotum', 'Bila nyeri pegal mengganggu aktivitas', 'Bila sedang merencanakan kehamilan dan mengalami kesulitan memiliki keturunan', 'Catatan: bila nyeri testis datang **mendadak dan sangat hebat**, segera ke IGD karena bisa menandakan torsio testis (keadaan darurat), bukan varikokel biasa'] },
      { h: 'Penanganan', p: ['Varikokel ringan tanpa keluhan dan tanpa gangguan kesuburan cukup dipantau dengan penggunaan celana dalam penyangga yang nyaman. Bila menimbulkan nyeri menetap, penyusutan testis, atau gangguan kualitas sperma, dokter urologi dapat menyarankan tindakan perbaikan vena (varikokelektomi atau embolisasi).'] }
    ]
  }
];

const words = a => [a.intro, ...a.sections.flatMap(s => [...(s.p || []), ...(s.ul || [])])].join(' ').split(/\s+/).length;
export const ARTICLES = ARTS.map(a => ({ ...a, min: Math.max(2, Math.round(words(a) / 170)) }));
