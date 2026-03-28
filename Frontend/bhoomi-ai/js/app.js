/* ── app.js — app bootstrap and initialization ── */

window.addEventListener('DOMContentLoaded', () => {

  // Build language dropdown options
  buildLangMenu();

  // Apply default language strings to all DOM elements
  applyStrings();

  // Auto-request location after a short delay
  // (gives the page time to render before the browser prompt appears)
  setTimeout(requestLocation, 600);

});
