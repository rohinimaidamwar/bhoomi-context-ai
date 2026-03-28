/* ── location.js — geolocation, reverse geocoding, city display ── */

let userLat  = null;
let userLon  = null;
let userCity = 'pune';

function requestLocation() {
  if (!navigator.geolocation) {
    setLocStatus('denied', t('locDenied'));
    return;
  }
  setLocStatus('pending', t('locGranting'));

  navigator.geolocation.getCurrentPosition(
    onLocSuccess,
    onLocError,
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function onLocSuccess(pos) {
  userLat = pos.coords.latitude;
  userLon = pos.coords.longitude;
  document.getElementById('locBanner').style.display = 'none';

  // Show coordinates while city loads
  setLocStatus('granted', `📍 ${userLat.toFixed(2)}°N`);

  // Fetch city name and update badge
  reverseGeocode(userLat, userLon);
}

function onLocError() {
  setLocStatus('denied', t('locDenied'));
}

async function reverseGeocode(lat, lon) {
  try {
    const res  = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );
    const data = await res.json();
    const addr = data.address || {};

    // Pick the most specific name available
    const city = addr.city || addr.town || addr.village || addr.county || 'pune';
    userCity = city.toLowerCase();

    // Capitalize for display: "Pune", "Nagpur" etc.
    const display = city.charAt(0).toUpperCase() + city.slice(1);
    setLocStatus('granted', '📍 ' + display);
  } catch (_) {
    // Keep coordinates if reverse geocode fails
  }
}

function setLocStatus(state, text) {
  const badge = document.getElementById('locBadge');
  badge.className = `loc-badge ${state}`;
  document.getElementById('locText').textContent = text;
}

function dismissBanner() {
  document.getElementById('locBanner').style.display = 'none';
}
