/* =========================
   DROPDOWN SIDEBAR
========================= */
function toggleMenu(element) {
    const parent = element.parentElement;
    parent.classList.toggle('open');
}

/* =========================
   COOKIES (opCIONAL)
========================= */
function acceptCookies() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    }
}

function rejectCookies() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'false');
    }
}

/* =========================
   VALIDACIÓN AL CARGAR
========================= */
document.addEventListener('DOMContentLoaded', () => {

    // Ocultar banner de cookies si ya se respondió
    const banner = document.getElementById('cookie-banner');
    if (banner && localStorage.getItem('cookiesAccepted')) {
        banner.style.display = 'none';
    }

});

// Contenido de ejemplo solo para las páginas que usamos
const pages = {
  mision: `<section class="hero">
    <h1>Misión</h1>
    <p>Página vacía para rellenar la misión de la cooperativa.</p>
  </section>`,

  historia: `<section class="hero">
    <h1>Historia</h1>
    <p>En 1970, y por iniciativa del voluntario del cuerpo de paz Stephen Henrick nació la cooperativa agropecuaria de servicios múltiples El Progreso R.L.
    Este voluntario orientó a los agricultores interesados sobre filosofía, doctrina cooperativa
    y aspectos organizativos. Durante 1970-1971 funcionó como pre-cooperativa.
    Se constituyó el 19 de Julio de 1971 y su registro oficial se realizó el 19 de agosto de 1971.</p>
  </section>`,

  vision: `<section class="hero">
    <h1>Valores</h1>
    <p>Página vacía para rellenar los valores de la cooperativa.</p>
  </section>`
};

document.querySelectorAll('.sidebar-menu li[data-page]').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.sidebar-menu li').forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const page = item.dataset.page;
    if (pages[page]) {
      document.getElementById('page-content').innerHTML = pages[page];
    }
  });
});

function verPrestamo(id) {
    document.getElementById('page-content').innerHTML = pages.prestamo_detalle(id);
}

function volverPrestamos() {
    document.getElementById('page-content').innerHTML = pages.prestamos;
}
