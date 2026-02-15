/* /js/main.js */
/* Loads shared header and footer into every page */

async function injectPartial(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const res = await fetch(file);
    const html = await res.text();
    el.innerHTML = html;
  } catch (err) {
    console.warn("Partial failed to load:", file);
  }
}

injectPartial("site-header", "/partials/header.html");
injectPartial("site-footer", "/partials/footer.html");
