// ===== Traduções =====
// Para mudar um texto, edite o valor na linguagem correspondente.
const translations = {
  pt: {
    htmlLang: "pt-BR",
    title: "Press Kit – Galactic Overstrike",
    metaDesc: "Press kit oficial de Galactic Overstrike, um top-down shooter de arena gratuito.",
    langLabel: "Idioma",
    navLabel: "Seções",
    pitch: "Torne-se o campeão da arena.",
    navFacts: "Fact sheet",
    navDesc: "Descrição",
    navTrailer: "Trailer",
    navShots: "Screenshots",
    navLogos: "Logos",
    navAbout: "Sobre",
    navContact: "Contato",
    factDev: "Desenvolvedor",
    factDevVal: "lucasananin (desenvolvedor solo)",
    factPlatforms: "Plataformas",
    factPlatformsVal: "Windows e Web",
    factGenre: "Gênero",
    factPrice: "Preço",
    factPriceVal: "Gratuito",
    factLang: "Idioma",
    factLangVal: "Inglês",
    factAvail: "Disponível em",
    desc: "Galactic Overstrike é um jogo de tiro de arena top-down, ambientado em uma galáxia alienígena distante. Pulverize seus inimigos com um enorme arsenal de armas, incluindo metralhadoras, rifles de plasma e lançadores de foguetes. Torne-se o campeão da arena ou acabe como mais uma mancha de sangue no chão.",
    features: "Principais características",
    feat1: "Estilo artístico único.",
    feat2: "Mais de 20 armas: metralhadoras, rifles de plasma, lançadores de foguetes e muito mais.",
    feat3: "9 tipos de inimigos, cada um com seu próprio comportamento. Adapte suas táticas!",
    feat4: "Luta contra chefe: enfrente o desafio supremo da arena.",
    trailerLabel: "Assistir ao trailer de Galactic Overstrike no YouTube",
    trailerAlt: "Trailer de Galactic Overstrike",
    shotsNote: "Clique em uma imagem para ampliar.",
    shotsZip: "Baixar todas (.zip)",
    shotAlt: "Screenshot {n} de Galactic Overstrike",
    logosTitle: "Logo e ícone",
    logo: "Logo",
    icon: "Ícone",
    logoAlt: "Logo de Galactic Overstrike",
    iconAlt: "Ícone de Galactic Overstrike",
    aboutTitle: "Sobre o desenvolvedor",
    about: "Galactic Overstrike é desenvolvido por lucasananin, desenvolvedor solo.",
    credits: "Créditos",
    creditsItem: "lucasananin – Desenvolvedor solo",
    copyEmail: "Copiar e-mail",
    copied: "E-mail copiado.",
    copyFail: "Não foi possível copiar. Selecione o e-mail manualmente.",
    footer: "O material deste press kit pode ser usado livremente para divulgação do jogo.",
    lightboxLabel: "Imagem ampliada",
    close: "Fechar"
  },
  en: {
    htmlLang: "en",
    title: "Press Kit – Galactic Overstrike",
    metaDesc: "Official press kit for Galactic Overstrike, a free top-down arena shooter.",
    langLabel: "Language",
    navLabel: "Sections",
    pitch: "Become the champion of the arena.",
    navFacts: "Fact sheet",
    navDesc: "Description",
    navTrailer: "Trailer",
    navShots: "Screenshots",
    navLogos: "Logos",
    navAbout: "About",
    navContact: "Contact",
    factDev: "Developer",
    factDevVal: "lucasananin (solo developer)",
    factPlatforms: "Platforms",
    factPlatformsVal: "Windows and Web",
    factGenre: "Genre",
    factPrice: "Price",
    factPriceVal: "Free",
    factLang: "Language",
    factLangVal: "English",
    factAvail: "Available on",
    desc: "Galactic Overstrike is a top-down arena shooter set in a distant alien galaxy. Obliterate your enemies with a huge arsenal of weapons, including machine guns, plasma rifles, and rocket launchers. Become the arena champion or end up as just another bloodstain on the floor.",
    features: "Key features",
    feat1: "Unique art style.",
    feat2: "20+ weapons: machine guns, plasma rifles, rocket launchers, and more.",
    feat3: "9 enemy types, each with its own behavior. Adapt your tactics!",
    feat4: "Boss fight: face the arena's ultimate challenge.",
    trailerLabel: "Watch the Galactic Overstrike trailer on YouTube",
    trailerAlt: "Galactic Overstrike trailer",
    shotsNote: "Click an image to enlarge.",
    shotsZip: "Download all (.zip)",
    shotAlt: "Galactic Overstrike screenshot {n}",
    logosTitle: "Logo and icon",
    logo: "Logo",
    icon: "Icon",
    logoAlt: "Galactic Overstrike logo",
    iconAlt: "Galactic Overstrike icon",
    aboutTitle: "About the developer",
    about: "Galactic Overstrike is developed by lucasananin, a solo developer.",
    credits: "Credits",
    creditsItem: "lucasananin – Solo developer",
    copyEmail: "Copy email",
    copied: "Email copied.",
    copyFail: "Could not copy. Please select the email manually.",
    footer: "The material in this press kit may be used freely to promote the game.",
    lightboxLabel: "Enlarged image",
    close: "Close"
  }
};

// ===== Idioma =====
const STORAGE_KEY = "presskit-lang";
let currentLang = "pt";
const copyStatus = document.getElementById("copy-status");

function savedLang() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return translations[value] ? value : null;
  } catch {
    return null;
  }
}

function setLang(lang, save = true) {
  const t = translations[lang];
  currentLang = lang;

  document.documentElement.lang = t.htmlLang;
  document.title = t.title;
  document.querySelector('meta[name="description"]').setAttribute("content", t.metaDesc);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t[el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.alt = t[el.dataset.i18nAlt];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t[el.dataset.i18nAria]);
  });
  document.querySelectorAll("img[data-shot]").forEach((img, i) => {
    img.alt = t.shotAlt.replace("{n}", i + 1);
  });

  document.querySelector(".lang").setAttribute("aria-label", t.langLabel);
  document.querySelector(".toc").setAttribute("aria-label", t.navLabel);
  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  copyStatus.textContent = "";

  if (save) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignora */ }
  }
}

document.querySelectorAll(".lang button").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

// Idioma inicial: escolha salva > idioma do navegador (português) > inglês
const browserLang = (navigator.language || "").toLowerCase().startsWith("pt") ? "pt" : "en";
setLang(savedLang() || browserLang, false);

// ===== Ano automático no rodapé =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Ampliar screenshots =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".gallery a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    lightboxImg.src = link.href;
    lightboxImg.alt = link.querySelector("img").alt;
    lightbox.showModal();
  });
});

document.getElementById("close-lightbox").addEventListener("click", () => lightbox.close());

// Fechar ao clicar fora da imagem
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.close();
});

// ===== Copiar e-mail de imprensa =====
document.getElementById("copy-email").addEventListener("click", async () => {
  const email = document.getElementById("email").textContent.trim();
  const t = translations[currentLang];
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = t.copied;
  } catch {
    copyStatus.textContent = t.copyFail;
  }
  setTimeout(() => (copyStatus.textContent = ""), 3000);
});
