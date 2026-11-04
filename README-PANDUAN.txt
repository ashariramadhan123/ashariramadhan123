PANDUAN WEBSITE PRIBADI — PERSONAL ARCHIVE
==========================================

ISI FOLDER
- index.html             Struktur semua halaman/section website.
- css/style.css          Seluruh desain, warna, ukuran, responsive layout.
- js/main.js             Konten yang bisa kamu edit + fungsi interaktif.
- assets/images/         Tempat menyimpan foto, cover game, thumbnail project.

CARA MENJALANKAN
1. Ekstrak ZIP ke folder komputer.
2. Buka foldernya di Visual Studio Code.
3. Disarankan install extension "Live Server".
4. Klik kanan index.html > Open with Live Server.
   Bisa juga buka index.html langsung di browser, tetapi Live Server lebih nyaman.

BAGIAN YANG PALING SERING KAMU EDIT
Buka js/main.js. Di bagian atas ada objek `siteData`.
- fullName, nickname, study, campus: data diri.
- email dan social: email serta media sosial.
- currentlyPlaying: game yang sedang dimainkan.
- games: koleksi game.
- projects: portfolio.
- favorites: musik, film, anime/series favorit.
- journey: timeline pendidikan/pengalaman.
- skills: software/skill yang kamu gunakan.

CARA MEMASUKKAN FOTO
1. Simpan gambar ke folder assets/images/.
2. Gunakan nama file sederhana, misalnya:
   foto-diri.jpg
   landscape-1.jpg
   landscape-2.jpg
   landscape-3.jpg
   project-video.jpg
   game-1.jpg
3. Untuk gambar yang datanya berada di js/main.js, isi properti image:
   image: "assets/images/project-video.jpg"
   Jangan lupa tanda kutip dan koma jika masih ada properti setelahnya.

FOTO LANDSCAPE HOMEPAGE (SLIDER OTOMATIS)
Slider homepage saat ini memakai 3 file:
- assets/images/landscape-1.jpg
- assets/images/landscape-2.jpg
- assets/images/landscape-3.jpg

Simpan tiga foto landscape milikmu dengan nama persis seperti di atas. Idealnya foto lebar (rasio sekitar 16:9 atau 2:1). Slider otomatis berpindah setiap 5 detik. Tombol panah dan titik navigasi juga bisa dipakai untuk mengganti foto manual.
Kalau ingin menambah jumlah slide:
1. Tambahkan satu elemen `<div class="hero-slide"...>` lagi di index.html.
2. Sesuaikan nama file gambar.
3. Script slider akan membaca jumlah slide secara otomatis.

FOTO DIRI DI ABOUT ME
Di index.html cari `id="aboutPhoto"`. Cara termudah:
Ganti:
<div class="about-photo image-placeholder" id="aboutPhoto"><span>MASUKKAN<br>FOTO DIRI LU</span></div>
Menjadi:
<div class="about-photo"><img src="assets/images/foto-diri.jpg" alt="Foto diri" style="width:100%;height:100%;object-fit:cover"></div>

CARA MENAMBAH GAME
Di js/main.js, cari `games: [ ... ]`.
Duplikasi satu objek game, lalu ganti title, genre, platform, status, note, image, dan year.
Genre dipakai untuk membuat tombol filter otomatis. Status contoh: Playing, Completed, On Hold.

CARA MENAMBAH PROJECT
Di `projects: [ ... ]`, duplikasi satu objek.
- category: kategori filter, misalnya "Video", "Web", "Design", "3D & Game".
- image: path thumbnail project.
- description: deskripsi singkat.
- tools: aplikasi/teknologi.
- link: URL project/demo jika ada. Kosongkan ("") jika belum ada.
Kartu Home otomatis mengambil 3 project pertama.

CARA MENGEDIT MUSIK/FILM FAVORIT
Edit daftar `favorites`. Properti type bisa MUSIC, MOVIE, ANIME / SERIES, atau kategori lain.
image adalah path cover/poster lokal, url adalah link eksternal opsional.

CARA MENGEDIT TIMELINE DAN SKILLS
Edit `journey` untuk menambah pendidikan, pengalaman organisasi, kepanitiaan, atau project penting.
Edit `skills` sesuai kemampuan yang benar-benar kamu punya atau sedang pelajari.

LIGHT/DARK MODE
Tombol bulan/matahari di navbar mengganti tema. Pilihan tema disimpan di localStorage browser, jadi tema terakhir akan diingat pada browser/perangkat yang sama.

FORM CONTACT
Form kontak menyiapkan email melalui aplikasi email pengguna (mailto). Ini belum mengirim pesan ke database/server. Jika ingin pesan masuk tanpa membuka aplikasi email, nanti perlu backend atau layanan form.

CATATAN
- Ganti semua teks placeholder dalam tanda [KURUNG SIKU] dengan informasi asli.
- Pastikan nama file dan path gambar sama persis, termasuk ekstensi .jpg/.png/.webp.
- Gunakan foto yang kamu punya hak untuk dipakai.
- Untuk gambar cover game/film, gunakan gambar yang sesuai dan jangan mengklaim karya orang lain sebagai milikmu.
- Website ini menggunakan Google Fonts, jadi font online perlu koneksi internet; fallback font tetap tersedia.
