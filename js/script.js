// MR DU CORTE - configurações e interações
// Edite os campos abaixo quando tiver os dados definitivos da barbearia.
const CONFIG = {
  whatsapp: "5581985472176",
  endereco: "Endereço da barbearia a definir",
  cidade: "Cidade - Estado a definir",
  instagram: "https://instagram.com/",
  mapa: "Brasil",
  horarios: "Consulte os horários pelo WhatsApp."
};

function atualizarSite() {
  const mensagem = encodeURIComponent("Olá! Gostaria de agendar um horário na MR DU CORTE.");
  document.querySelectorAll(".whatsapp-link").forEach(link => {
    link.href = `https://wa.me/${CONFIG.whatsapp}?text=${mensagem}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  document.getElementById("address").textContent = CONFIG.endereco;
  document.getElementById("city").textContent = CONFIG.cidade;
  document.getElementById("openingHours").textContent = CONFIG.horarios;
  document.getElementById("googleMap").src =
    "https://maps.google.com/maps?q=" + encodeURIComponent(CONFIG.mapa) + "&output=embed";
  document.getElementById("instagramLink").href = CONFIG.instagram;
  document.getElementById("year").textContent = new Date().getFullYear();
}

atualizarSite();

// Menu para dispositivos móveis
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const aberto = navLinks.classList.toggle("active");
  menuToggle.textContent = aberto ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", String(aberto));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Animações suaves ao rolar a página
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
