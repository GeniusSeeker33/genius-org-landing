/* /js/main.js */
/* Loads shared partials and handles nav state */

async function injectPartial(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const res  = await fetch(file);
    const html = await res.text();
    el.innerHTML = html;
  } catch (err) {
    console.warn("Partial failed to load:", file);
  }
}

/* Highlight the current page in the nav */
function setActiveNav() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const links = document.querySelectorAll('.nav a');

  links.forEach(link => {
    const href = new URL(link.href).pathname.replace(/\/$/, '') || '/';
    if (href === path) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('nav-active');
    }
  });
}

/* Inject partials, then set nav state once header is in the DOM */
async function init() {
  await injectPartial("site-header", "/partials/header.html");
  setActiveNav();

  injectPartial("site-footer",    "/partials/footer.html");
  injectPartial("genius-waitlist", "/partials/genius-waitlist.html");
}

init();
