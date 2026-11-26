// Ano automático no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Ampliar screenshots
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

// Copiar e-mail de imprensa
const status = document.getElementById("copy-status");

document.getElementById("copy-email").addEventListener("click", async () => {
  const email = document.getElementById("email").textContent.trim();
  try {
    await navigator.clipboard.writeText(email);
    status.textContent = "E-mail copiado.";
  } catch {
    status.textContent = "Não foi possível copiar. Selecione o e-mail manualmente.";
  }
  setTimeout(() => (status.textContent = ""), 3000);
});
