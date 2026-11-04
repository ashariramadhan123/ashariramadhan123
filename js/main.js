/*
=========================================================
TEMPAT EDIT KONTEN WEBSITE
1) Ganti data profil, email, sosial media.
2) Ganti gambar pada assets/images/ lalu samakan nama file.
3) Edit daftar game, project, timeline, favorit, dan skills.
Kamu tidak harus mengubah bagian fungsi di bawah DATA.
=========================================================
*/

const siteData = {
  // EDIT: nama brand, profil, dan kontak
  brand: "Rama",
  fullName: "Ashari Ramadhan",
  nickname: "Rama",
  study: "Teknologi Rekayasa Multimedia",
  campus: "Politeknik Negeri Media Kreatif Jakarta",
  email: "asharimengalun@gmail.com",
  social: [
    { label: "Instagram", value: "@rama.mengalun", url: "https://www.instagram.com/rama.mengalun/" },
    { label: "LinkedIn", value: "LinkedIn Profile", url: "https://linkedin.com/" },
    { label: "WhatsApp", value: "Chat WhatsApp", url: "https://wa.me/6281311409030" }
  ],

  // EDIT: data game yang sedang kamu mainkan
  currentlyPlaying: {
    title: "Animal Kaiser",
    platform: "[Mesin Arcade/PC]",
    genre: "Tactical Arcade Card Game / Fighting",
    note: "Game yang sangat membuat gua bernostalgia yang mana tadinya hanya bisa dimainkan di mesin Arcade di mall, sekarang bisa gua mainkan di PC",
    image: "assets/images/animal kaiser icon.jpg" // contoh: "assets/images/game-current.jpg"; kosongkan jika belum ada
  },

  // EDIT: tambahkan atau hapus game sesuai koleksi pribadi
  games: [
    { title: "Mobile Legends", genre: "MOBA", platform: "[Android]", status: "Playing", note: "Game MOBA 5v5 di HP di mana dua tim bertarung menghancurkan base lawan menggunakan berbagai hero dan strategi tim.", image: "assets/images/ML Icon.png", year: "2025" },
    { title: "Resident Evil Village", genre: "Survival Horror / Action", platform: "[Windows/PC]", status: "Completed", note: "Game survival horror (first-person) tempat Ethan Winters menjelajahi desa misterius penuh monster demi menyelamatkan putrinya.", image: "assets/images/re village.jpg", year: "2023" },
    { title: "Pokemon Go", genre: "AR / Location-Based", platform: "[Android]", status: "Hold On", note: "Game petualangan AR berbasis lokasi HP yang mengajak pemain menjelajahi dunia nyata untuk menangkap, melatih, dan bertarung dengan Pokémon.", image: "assets/images/pokemon go icon.png", year: "2024" },
    { title: "Point Blank", genre: "FPS", platform: "[Windows/PC]", status: "Hold On", note: "Game FPS online di PC yang mempertemukan tim Free Rebels dan CT-Force dalam pertempuran tembak-menembak yang cepat dan taktikal.", image: "assets/images/pb icon.png", year: "2023" }
  ],

  // EDIT: project portfolio. image bisa diisi path gambar lokal.
  projects: [
    { title: "DOKUMENTER KERAK TELOR", category: "Video", year: "2024", description: "Video dokumenter tentang kerak telor ini gua buat saat gua masih duduk di bangku SMK, saat itu gua diminta untuk membuat video dokumenter untuk kebutuhan Uji Kompetensi Siswa (USK).", tools: "Adobe Premiere Pro, Adobe After Effect", image: "assets/images/kerak telor icon.jpg", link: "assets/images/dokumenter kerak telor jadi.mp4" },
    { title: "PROJECT WEBSITE FKMPI POLIMEDIA", category: "Web", year: "2026", description: "Website FKMPI Polimedia adalah website resmi yang gua buat untuk membranding serta menjelaskan apa itu FKMPI Polimedia, gua mengimplementasikan apa yang sudah gua pelajari di perkuliahan untuk memajukan organisasi yang sedang gua pimpin saat ini.", tools: "HTML, CSS, JavaScript", image: "assets/images/web fkmpi.jpg", link: "https://fkmpipolimedia.netlify.app/" },
    { title: "PROJECT 3D MODELLING", category: "3D MODELLING", year: "2026", description: "Berawal dari tugas Animasi 3D yang mana diminta untuk membuat sebuah ruangan dengan view Isometric dengan elemen-elemen 3D", tools: "Blender", image: "assets/images/pertemuan 5.png", link: "assets/images/0000-0200.mp4" },
    { title: "PROJECT DESAIN", category: "Design", year: "2025", description: "Desain ini gua buat karena karakter yang ada di dalam desain adalah VTuber favorit gua (Moona Hoshinova) dan juga desain ini sekaligus menjadi tugas kuliah gua.", tools: "Adobe Photoshop", image: "assets/images/poster clipping mask.png", link: "assets/images/poster clipping mask.png" }
  ],

  // EDIT: musik, film, anime, atau tontonan favorit
  favorites: [
    { type: "MUSIC", title: "There For You - Martin Garrix & Troye Sivan", note: "Entah kenapa lagu ini selalu enak gua denger apalagi kalo abis lari pagi di Car Free Day dan lagu ini selalu balikin semangat dan mood gua.", image: "assets/images/there for you.jpg", url: "https://www.youtube.com/watch?v=pNNMr5glICM&list=RDpNNMr5glICM&start_radio=1" },
    { type: "MOVIE", title: "ANACONDA [1997]", note: "Salah satu film hewan buas terbaik menurut gua, dari segi horor dan mencekamnya dapet banget, apalagi ular yang digunain bukan cuma pake CGI tapi juga Animatronik.", image: "assets/images/Anaconda_1997.jpg", url: "https://youtu.be/ZkjWyIdIBJo?si=DTszA0LbpAKE5EGD" },
    { type: "ANIME", title: "Kaminaki Sekai no Kamisama Katsudou", note: "Anime yang lumayan absurd isinya tapi ini salah satu anime yang ga akan pernah gua lupain karena komedi dan visualnya yang full absurd.", image: "assets/images/cover-kaminaki-sekai-no-kamisama-katsudou.jpg", url: "https://youtu.be/RtmzC7XGNak?si=E_ZVf_gyLQtdMr1-" }
  ],

  // EDIT: perjalanan pendidikan/pengalaman. Tambah item sesuai kebutuhan.
  journey: [
    { year: "[2024]", title: "Kuliah", description: "Pada tahun ini gua lulus dari SMK dan melanjutkan ke jenjang perkuliahan dimana gua mendapatkan banyak pembelajaran baru yang sebelumnya mungkin belum atau hanya sedikit yang gua dapatkan di SMK." },
    { year: "[2025]", title: "Badan Eksekutif Mahasiswa (BEM Polimedia)", description: "Pada semester 2 di perkuliahan gua gabung dalam organisasi internal kampus yaitu BEM Polimedia dan dari BEM itu sendiri gua juga tergabung dalam organisasi eksternal kampus yaitu FKMPI Polimedia karena gua bertanggung jawab membawahi FKMPI Polimedia sebagai ODD (Organisasi Dibawah Divisi) yang dibawahi oleh BEM Polimedia khususnya Divisi Luar Kampus, tugas pokok dari divisi gua itu sebagai wajah kampus yang berarti gua bertugas membranding kampus Polimedia ke siswa-siswa yang akan melanjutkan perjalanan belajarnya ke jenjang yang lebih tinggi yaitu kuliah." },
    { year: "[2026]", title: "Forum Komunikasi Mahasiswa Politeknik se-Indonesia (FKMPI Polimedia)", description: "Setelah menjalani 1 tahun masa jabat di BEM Polimedia, gua mengambil langkah yang cukup besar dengan mencalonkan diri sebagai Koordinator Kampus atau Ketua dari FKMPI Polimedia yang mana sekarang gua bertugas untuk bertanggung jawab atas amanah yang sedang gua emban sebagai Koordinator Kampus FKMPI Polimedia." },
    { year: "[2026]", title: "Project", description: "Sudah banyak project yang gua kerjakan namun ada beberapa yang berkesan bagi gua, karena dari berbagai project yang sudah gua jalankan banyak juga cerita dan hal menarik dari berbagai macam project yang gua kerjakan. Contohnya seperti pembuatan website untuk FKMPI Polimedia yang mana itu adalah hal dan inovasi baru yang ada di saat gua menjabat sebagai Koordinator Kampus FKMPI Polimedia." },
  ],

  // EDIT: tools yang benar-benar kamu gunakan/pelajari
  skills: ["HTML", "CSS", "JavaScript", "Visual Studio Code", "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Figma", "Unity", "Blender"]
};

// ---------------------------------------------------------
// FUNGSI WEBSITE — biasanya tidak perlu diubah
// ---------------------------------------------------------

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function makeImage(imagePath, alt = "") {
  if (!imagePath) return "";
  return `<img src="${escapeHTML(imagePath)}" alt="${escapeHTML(alt)}" loading="lazy">`;
}
function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}
function placeholder(label = "TAMBAHKAN GAMBAR") {
  return `<div class="image-placeholder"><span>${escapeHTML(label)}</span></div>`;
}
function imageMarkup(path, alt, label = "TAMBAHKAN GAMBAR") {
  return path ? makeImage(path, alt) : placeholder(label);
}

function renderBrandAndProfile() {
  $$(".brand").forEach(el => el.innerHTML = `${escapeHTML(siteData.brand)}<span>.</span>`);
  document.title = `${siteData.fullName} - Official Website`;
  $("#emailLink").textContent = siteData.email;
  $("#emailLink").href = `mailto:${siteData.email}`;
  $("#socialLinks").innerHTML = siteData.social.map(s =>
    `<a class="social-link" href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer"><span>${escapeHTML(s.label)}</span><span>${escapeHTML(s.value)} ↗</span></a>`
  ).join("");
}

function renderCurrentlyPlaying() {
  const game = siteData.currentlyPlaying;
  $("#currentlyTitle").textContent = game.title;
  $("#currentlyMeta").textContent = `${game.platform} · ${game.genre}`;
  $("#currentlyNote").textContent = game.note;
  $("#gamingNowTitle").textContent = game.title;
  $("#gamingNowMeta").textContent = `${game.platform} · ${game.genre}`;
  $("#gamingNowNote").textContent = game.note;
  ["#currentlyCover", "#gamingNowCover"].forEach(selector => {
    const el = $(selector);
    el.className = game.image ? el.className.replace("placeholder-cover", "") : el.className;
    el.innerHTML = game.image ? makeImage(game.image, game.title) : "GAME<br>COVER";
    if (game.image) {
      el.style.background = "transparent";
      el.style.padding = "0";
      el.querySelector("img").style.objectFit = "cover";
    }
  });
}

function renderProjects() {
  const home = $("#homeProjects");
  const portfolio = $("#portfolioGrid");
  const categories = ["All", ...new Set(siteData.projects.map(p => p.category))];
  $("#projectFilters").innerHTML = categories.map((c, i) => `<button class="filter-button ${i === 0 ? "active" : ""}" data-project-filter="${escapeHTML(c)}">${escapeHTML(c)}</button>`).join("");

  const card = (p, i, full = false) => `
    <article class="${full ? "portfolio-card" : "project-card"}">
      <div class="${full ? "portfolio-image" : "project-image"}">
        ${imageMarkup(p.image, p.title, "THUMBNAIL PROJECT")}
        <span class="card-index">${String(i + 1).padStart(2, "0")}</span>
      </div>
      <div class="card-meta"><span>${escapeHTML(p.category)}</span><span>${escapeHTML(p.year)}</span></div>
      <h3>${escapeHTML(p.title)}</h3>
      <p>${escapeHTML(p.description)}</p>
      ${full ? `<p class="small"><strong>Tools:</strong> ${escapeHTML(p.tools || "-")}</p>` : ""}      
${p.link ? `<a class="text-link" href="${escapeHTML(p.link)}" target="_blank" rel="noopener noreferrer">TONTON VIDEO / LIHAT PROJECT ↗</a>` : ""}
    </article>`;
  home.innerHTML = siteData.projects.slice(0, 3).map((p, i) => card(p, i)).join("");
  const renderPortfolio = (filter = "All") => {
    const filtered = filter === "All" ? siteData.projects : siteData.projects.filter(p => p.category === filter);
    portfolio.innerHTML = filtered.map((p, i) => card(p, i, true)).join("");
  };
  renderPortfolio();
  $("#projectFilters").addEventListener("click", e => {
    const button = e.target.closest("[data-project-filter]");
    if (!button) return;
    $$("#projectFilters .filter-button").forEach(b => b.classList.toggle("active", b === button));
    renderPortfolio(button.dataset.projectFilter);
  });
}

function renderGames() {
  const filters = ["All", ...new Set(siteData.games.map(g => g.genre))];
  $("#gameFilters").innerHTML = filters.map((f, i) => `<button class="filter-button ${i === 0 ? "active" : ""}" data-game-filter="${escapeHTML(f)}">${escapeHTML(f)}</button>`).join("");
  const grid = $("#gameGrid");
  const render = filter => {
    const games = filter === "All" ? siteData.games : siteData.games.filter(g => g.genre === filter);
    grid.innerHTML = games.map(g => `
      <article class="game-card">
        <div class="game-cover">${imageMarkup(g.image, g.title, "GAME COVER")}</div>
        <p class="eyebrow">${escapeHTML(g.genre)} · ${escapeHTML(g.year)}</p>
        <h3>${escapeHTML(g.title)}</h3>
        <p>${escapeHTML(g.platform)}</p><p>${escapeHTML(g.note)}</p>
        <span class="game-status">${escapeHTML(g.status)}</span>
      </article>`).join("");
  };
  render("All");
  $("#gameFilters").addEventListener("click", e => {
    const button = e.target.closest("[data-game-filter]");
    if (!button) return;
    $$("#gameFilters .filter-button").forEach(b => b.classList.toggle("active", b === button));
    render(button.dataset.gameFilter);
  });
}

function renderFavorites() {
  $("#favoriteGrid").innerHTML = siteData.favorites.map(f => `
    <article class="favorite-card">
      <div class="favorite-image">${imageMarkup(f.image, f.title, "COVER / POSTER")}</div>
      <p class="eyebrow">${escapeHTML(f.type)}</p>
      <h3>${escapeHTML(f.title)}</h3>
      <p>${escapeHTML(f.note)}</p>
      ${f.url ? `<a class="text-link" href="${escapeHTML(f.url)}" target="_blank" rel="noopener noreferrer">OPEN LINK ↗</a>` : ""}
    </article>`).join("");
  $("#homeFavorites").innerHTML = siteData.favorites.slice(0, 3).map(f => `<span>${escapeHTML(f.title)}</span>`).join("");
}

function renderJourneyAndSkills() {
  $("#timeline").innerHTML = siteData.journey.map(item => `
    <article class="timeline-item"><span class="timeline-year">${escapeHTML(item.year)}</span><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.description)}</p></article>`).join("");
  $("#skillTags").innerHTML = siteData.skills.map(skill => `<span>${escapeHTML(skill)}</span>`).join("");
}

function setupSlider() {
  const slides = $$(".hero-slide");
  const dots = $("#sliderDots");
  const counter = $("#slideCounter");
  const progress = $("#sliderProgress");
  let current = 0;
  let timer;
  const interval = 5000;
  dots.innerHTML = slides.map((_, i) => `<button class="slider-dot ${i === 0 ? "active" : ""}" aria-label="Tampilkan foto ${i + 1}" data-slide="${i}"></button>`).join("");
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("active", i === current));
    $$(".slider-dot", dots).forEach((d, i) => d.classList.toggle("active", i === current));
    counter.textContent = `${String(current + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    progress.style.transition = "none";
    progress.style.width = "0";
    requestAnimationFrame(() => {
      progress.style.transition = `width ${interval}ms linear`;
      progress.style.width = "100%";
    });
  }
  function restart() { clearInterval(timer); timer = setInterval(() => show(current + 1), interval); }
  $("#prevSlide").addEventListener("click", () => { show(current - 1); restart(); });
  $("#nextSlide").addEventListener("click", () => { show(current + 1); restart(); });
  dots.addEventListener("click", e => {
    const dot = e.target.closest("[data-slide]");
    if (dot) { show(Number(dot.dataset.slide)); restart(); }
  });
  show(0); restart();
}

function setupTheme() {
  const root = document.documentElement;
  const saved = localStorage.getItem("personal-archive-theme");
  if (saved === "dark" || saved === "light") root.dataset.theme = saved;
  const updateIcon = () => $("#themeIcon").textContent = root.dataset.theme === "dark" ? "☀" : "☾";
  updateIcon();
  $("#themeToggle").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("personal-archive-theme", root.dataset.theme);
    updateIcon();
  });
}

function setupNavigation() {
  const sections = $$(".page-section");
  const navLinks = $$(".desktop-nav a");
  const mobileNav = $("#mobileNav");
  const menuToggle = $("#menuToggle");

  function activate(id) {
    const targetId = id && document.getElementById(id) ? id : "home";
    sections.forEach(section => section.classList.toggle("is-active", section.id === targetId));
    navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${targetId}`));
    mobileNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function onNavClick(e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    e.preventDefault();
    const id = link.getAttribute("href").slice(1);
    history.pushState(null, "", `#${id}`);
    activate(id);
  }
  $(".desktop-nav").addEventListener("click", onNavClick);
  mobileNav.addEventListener("click", onNavClick);
  $$('a[href^="#"]').filter(a => !a.closest(".desktop-nav") && !a.closest("#mobileNav")).forEach(link => {
    link.addEventListener("click", e => {
      const id = link.getAttribute("href").slice(1);
      if (!document.getElementById(id)) return;
      e.preventDefault();
      history.pushState(null, "", `#${id}`);
      activate(id);
    });
  });
  menuToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "×" : "☰";
  });
  window.addEventListener("popstate", () => activate(location.hash.slice(1) || "home"));
  activate(location.hash.slice(1) || "home");
}

function setupContactForm() {
  const form = $("#contactForm");
  const status = $("#formStatus");

  if (!form || !status) return;

  const forminit = new Forminit();
  const FORM_ID = "c74noop14uc";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;

    button.disabled = true;
    button.textContent = "Mengirim...";
    status.textContent = "Pesan sedang dikirim...";

    try {
      const formData = new FormData(form);

      const { data, error } = await forminit.submit(
        FORM_ID,
        formData
      );

      if (error) {
        throw new Error(error.message || "Pengiriman gagal.");
      }

      status.textContent = "Pesan berhasil dikirim!";
      form.reset();

      const successModal = document.getElementById("successModal");
const closeSuccessModal = document.getElementById("closeSuccessModal");

closeSuccessModal.addEventListener("click", () => {
  successModal.close();
});
      document.getElementById("successModal").showModal();

      console.log("Forminit submission berhasil:", data);
    } catch (error) {
      console.error("Forminit error:", error);
      status.textContent =
        "Pesan gagal dikirim. " +
        (error.message || "Coba lagi, ya.");
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  });
}
function init() {
  renderBrandAndProfile();
  renderCurrentlyPlaying();
  renderProjects();
  renderGames();
  renderFavorites();
  renderJourneyAndSkills();
  setupSlider();
  setupTheme();
  setupNavigation();
  setupContactForm();
  $("#year").textContent = new Date().getFullYear();
}
document.addEventListener("DOMContentLoaded", init);