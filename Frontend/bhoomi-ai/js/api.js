/* ── api.js — API call and response card rendering ── */

const API_URL = 'http://127.0.0.1:8000/advice';

/* ── Send message & call API ── */
async function sendMessage() {
  const ta    = document.getElementById('msgInput');
  const query = ta.value.trim();
  if (!query) return;

  const ph  = parseFloat(document.getElementById('soilPh').value) || 5.5;
  const btn = document.getElementById('sendBtn');

  ta.value = '';
  autoResize(ta);
  btn.disabled = true;

  addUserBubble(query);
  addTyping();

  const payload = {
    query,
    lat:  userLat  ?? 21.132370,
    lon:  userLon  ?? 79.083165,
    city: userCity || 'pune',
    soil: { ph }
  };

  try {
    const res = await fetch(API_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'accept': 'application/json' },
      body:    JSON.stringify(payload)
    });

    removeTyping();

    if (!res.ok) {
      const errBody = await res.text().catch(() => '');
      addErrorBubble(`Server Error <strong>${res.status}</strong>: ${errBody || 'कृपया पुन्हा प्रयत्न करा.'}`);
    } else {
      const data = await res.json();
      renderResponse(data);
    }
  } catch (err) {
    removeTyping();
    const isNetwork = err instanceof TypeError;
    addErrorBubble(
      isNetwork
        ? `${t('errServer')}<br><small>${t('errCheck')}</small>`
        : `Error: ${escHtml(err.message)}`
    );
  } finally {
    btn.disabled = false;
  }
}

/* ── Render structured API response card ── */
function renderResponse(data) {
  const { weather, prices, advice } = data;

  const weatherBlock = buildWeatherBlock(weather);
  const pricesBlock  = buildPricesBlock(prices);
  const adviceBlock  = buildAdviceBlock(advice);

  const card = `<div class="response-card">${weatherBlock}${pricesBlock}${adviceBlock}</div>`;
  addAiBubble(card);
}

function buildWeatherBlock(weather) {
  const icon = weather.temperature_2m > 35 ? '🌡️'
             : weather.temperature_2m > 25 ? '⛅'
             : '❄️';

  const precipStr = weather.precipitation > 0
    ? `${t('rain')}: ${weather.precipitation} mm`
    : t('noRain');

  return `
    <div class="rc-weather">
      <div class="w-icon">${icon}</div>
      <div>
        <div class="temp">${weather.temperature_2m}°C</div>
        <div class="meta">${precipStr}<br>${fmtDateTime(weather.time)}</div>
      </div>
    </div>`;
}

function buildPricesBlock(prices) {
  const perQtl = t('perQtl');
  const items  = Object.entries(prices).map(([crop, val]) => {
    const label = tNested('cropLabels', crop) || crop;
    return `<div class="price-pill">${label} <span class="price-val">₹${val}${perQtl}</span></div>`;
  }).join('');

  return `<div class="rc-prices">${items}</div>`;
}

function buildAdviceBlock(advice) {
  const SECTION_KEYS = [
    'answer',
    'crop_recommendation',
    'fertilizer_advice',
    'irrigation_advice',
    'market_advice',
  ];

  return SECTION_KEYS
    .filter(key => advice[key])
    .map(key => {
      const label = tNested('sectionLabels', key) || key;
      return `
        <div class="rc-section">
          <div class="rc-section-label">${label}</div>
          <p>${escHtml(advice[key])}</p>
        </div>`;
    })
    .join('');
}

function fmtDateTime(iso) {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleString(currentLang + '-IN', {
      day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
    });
  } catch (_) { return iso; }
}
