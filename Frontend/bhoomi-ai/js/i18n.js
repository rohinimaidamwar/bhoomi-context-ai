/* ── i18n.js — multilingual strings and language switcher ── */

const LANGUAGES = [
  { code: 'mr', flag: '🇮🇳', name: 'Marathi',  native: 'मराठी' },
  { code: 'hi', flag: '🇮🇳', name: 'Hindi',    native: 'हिंदी' },
  { code: 'en', flag: '🇬🇧', name: 'English',  native: 'English' },
  { code: 'pa', flag: '🇮🇳', name: 'Punjabi',  native: 'ਪੰਜਾਬੀ' },
  { code: 'te', flag: '🇮🇳', name: 'Telugu',   native: 'తెలుగు' },
  { code: 'ta', flag: '🇮🇳', name: 'Tamil',    native: 'தமிழ்' },
];

const STRINGS = {
  mr: {
    subtitle:       'किसानचा डिजिटल साथी',
    locGranting:    'शोधत आहे…',
    locDenied:      'Location नाकारली',
    locAllow:       'Allow करा',
    locBannerTitle: 'Location Permission आवश्यक',
    locBannerDesc:  'अचूक शेती सल्ल्यासाठी स्थान आवश्यक आहे',
    locDismiss:     'नंतर',
    placeholder:    'तुमचा प्रश्न लिहा… (मराठी, हिंदी, English)',
    welcomeTitle:   'नमस्ते शेतकरी भाऊ!',
    welcomeDesc:    'मी BhoomiAI आहे — तुमच्या शेतीच्या प्रत्येक प्रश्नाचे उत्तर देण्यासाठी सज्ज आहे.',
    topics: ['🌱 पीक सल्ला','🌧️ हवामान','💰 मंडी भाव','🌿 खत','💧 सिंचाई','🐛 कीड'],
    topicQueries: [
      'पीक सल्ला काय आहे?',
      'आजचे हवामान कसे आहे?',
      'गव्हाचा आजचा भाव किती आहे?',
      'खत कोणते वापरावे?',
      'पाणी व्यवस्थापन कसे करावे?',
      'कीड नियंत्रण कसे करावे?',
    ],
    quickPills: [
      { label: '🌾 गहू पेरणी कधी?',  query: 'Gahu che pik lavayla pahije ka aata?' },
      { label: '🍚 तांदूळ भाव?',      query: 'Aajcha tandool bajar bhav kiti aahe?' },
      { label: '🐛 कीड समस्या',       query: 'Pikavar kid ali aahe kay karu?' },
      { label: '🌽 खरीप पीक?',        query: 'Kharip haangamat konti pick changali?' },
    ],
    errServer:  'Server ला connect होता आले नाही.',
    errCheck:   'तुमचा server http://127.0.0.1:8000 वर चालू आहे का तपासा.',
    noRain:     '☀️ पाऊस नाही',
    rain:       '🌧️ पाऊस',
    sectionLabels: {
      answer:              '🌾 सल्ला',
      crop_recommendation: '🌱 पीक शिफारस',
      fertilizer_advice:   '🌿 खत सल्ला',
      irrigation_advice:   '💧 सिंचाई सल्ला',
      market_advice:       '💰 बाजार सल्ला',
    },
    cropLabels: { wheat:'गहू', rice:'तांदूळ', soybean:'सोयाबीन', onion:'कांदा', cotton:'कापूस' },
    perQtl: '/क्विं',
  },

  hi: {
    subtitle:       'किसान का डिजिटल साथी',
    locGranting:    'खोज रहे हैं…',
    locDenied:      'Location अस्वीकार',
    locAllow:       'Allow करें',
    locBannerTitle: 'Location Permission आवश्यक है',
    locBannerDesc:  'सटीक खेती सलाह के लिए आपका स्थान जरूरी है',
    locDismiss:     'बाद में',
    placeholder:    'अपना सवाल लिखें… (हिंदी, मराठी, English)',
    welcomeTitle:   'नमस्ते किसान भाई!',
    welcomeDesc:    'मैं BhoomiAI हूँ — आपकी खेती की हर समस्या का समाधान करने के लिए यहाँ हूँ।',
    topics: ['🌱 फसल सलाह','🌧️ मौसम','💰 मंडी भाव','🌿 खाद','💧 सिंचाई','🐛 कीट'],
    topicQueries: [
      'फसल की सलाह क्या है?',
      'आज का मौसम कैसा है?',
      'गेहूँ का आज का भाव क्या है?',
      'कौन सी खाद डालें?',
      'पानी प्रबंधन कैसे करें?',
      'कीट नियंत्रण कैसे करें?',
    ],
    quickPills: [
      { label: '🌾 गेहूँ कब बोएं?',   query: 'Gehu ki buwai kab karni chahiye?' },
      { label: '🍚 चावल का भाव?',     query: 'Aaj chawal ka mandi bhav kya hai?' },
      { label: '🐛 कीट समस्या',       query: 'Fasal mein keede lag gaye hain kya karoon?' },
      { label: '🌽 खरीफ फसल?',        query: 'Kharif mausam mein konsi fasal achchi hai?' },
    ],
    errServer:  'Server से connect नहीं हो पाया।',
    errCheck:   'आपका server http://127.0.0.1:8000 पर चल रहा है या नहीं जाँचें।',
    noRain:     '☀️ बारिश नहीं',
    rain:       '🌧️ बारिश',
    sectionLabels: {
      answer:              '🌾 सलाह',
      crop_recommendation: '🌱 फसल सिफारिश',
      fertilizer_advice:   '🌿 खाद सलाह',
      irrigation_advice:   '💧 सिंचाई सलाह',
      market_advice:       '💰 बाजार सलाह',
    },
    cropLabels: { wheat:'गेहूँ', rice:'चावल', soybean:'सोयाबीन', onion:'प्याज', cotton:'कपास' },
    perQtl: '/क्विं',
  },

  en: {
    subtitle:       "Farmer's Digital Companion",
    locGranting:    'Locating…',
    locDenied:      'Location denied',
    locAllow:       'Allow',
    locBannerTitle: 'Location Permission Required',
    locBannerDesc:  'We need your location for accurate farming advice',
    locDismiss:     'Later',
    placeholder:    'Type your question… (English, Hindi, Marathi)',
    welcomeTitle:   'Hello Farmer!',
    welcomeDesc:    "I'm BhoomiAI — ready to answer every question about your farm.",
    topics: ['🌱 Crop Advice','🌧️ Weather','💰 Market Price','🌿 Fertilizer','💧 Irrigation','🐛 Pest Control'],
    topicQueries: [
      'What crop advice do you have?',
      'How is the weather today?',
      'What is the wheat price today?',
      'Which fertilizer should I use?',
      'How to manage irrigation?',
      'How to control pests?',
    ],
    quickPills: [
      { label: '🌾 When to sow wheat?', query: 'When is the right time to sow wheat?' },
      { label: '🍚 Rice market price?', query: 'What is the rice market price today?' },
      { label: '🐛 Pest problem',        query: 'There are pests on my crop, what should I do?' },
      { label: '🌽 Kharif crop?',        query: 'Which crop is good for kharif season?' },
    ],
    errServer:  'Could not connect to server.',
    errCheck:   'Check if your server is running at http://127.0.0.1:8000.',
    noRain:     '☀️ No rain',
    rain:       '🌧️ Rain',
    sectionLabels: {
      answer:              '🌾 Advice',
      crop_recommendation: '🌱 Crop Recommendation',
      fertilizer_advice:   '🌿 Fertilizer Advice',
      irrigation_advice:   '💧 Irrigation Advice',
      market_advice:       '💰 Market Advice',
    },
    cropLabels: { wheat:'Wheat', rice:'Rice', soybean:'Soybean', onion:'Onion', cotton:'Cotton' },
    perQtl: '/qtl',
  },

  pa: {
    subtitle:       'ਕਿਸਾਨ ਦਾ ਡਿਜੀਟਲ ਸਾਥੀ',
    locGranting:    'ਲੱਭ ਰਹੇ ਹਾਂ…',
    locDenied:      'Location ਰੱਦ',
    locAllow:       'Allow ਕਰੋ',
    locBannerTitle: 'Location Permission ਲੋੜੀਂਦੀ ਹੈ',
    locBannerDesc:  'ਸਹੀ ਖੇਤੀ ਸਲਾਹ ਲਈ ਤੁਹਾਡੀ ਸਥਿਤੀ ਲੋੜੀਂਦੀ ਹੈ',
    locDismiss:     'ਬਾਅਦ ਵਿੱਚ',
    placeholder:    'ਆਪਣਾ ਸਵਾਲ ਲਿਖੋ…',
    welcomeTitle:   'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਕਿਸਾਨ ਭਰਾ!',
    welcomeDesc:    'ਮੈਂ BhoomiAI ਹਾਂ — ਤੁਹਾਡੀ ਖੇਤੀ ਦੇ ਹਰ ਸਵਾਲ ਦਾ ਜਵਾਬ ਦੇਣ ਲਈ ਤਿਆਰ ਹਾਂ।',
    topics: ['🌱 ਫ਼ਸਲ ਸਲਾਹ','🌧️ ਮੌਸਮ','💰 ਮੰਡੀ ਭਾਅ','🌿 ਖਾਦ','💧 ਸਿੰਚਾਈ','🐛 ਕੀੜੇ'],
    topicQueries: [
      'ਫ਼ਸਲ ਬਾਰੇ ਕੀ ਸਲਾਹ ਹੈ?',
      'ਅੱਜ ਦਾ ਮੌਸਮ ਕਿਵੇਂ ਹੈ?',
      'ਅੱਜ ਕਣਕ ਦਾ ਭਾਅ ਕੀ ਹੈ?',
      'ਕਿਹੜੀ ਖਾਦ ਪਾਉਣੀ ਚਾਹੀਦੀ ਹੈ?',
      'ਪਾਣੀ ਪ੍ਰਬੰਧਨ ਕਿਵੇਂ ਕਰਨਾ?',
      'ਕੀੜੇ ਕੰਟਰੋਲ ਕਿਵੇਂ ਕਰਨਾ?',
    ],
    quickPills: [
      { label: '🌾 ਕਣਕ ਕਦੋਂ ਬੀਜੀਏ?', query: 'ਕਣਕ ਬੀਜਣ ਦਾ ਸਹੀ ਸਮਾਂ ਕਿਹੜਾ ਹੈ?' },
      { label: '🍚 ਝੋਨੇ ਦਾ ਭਾਅ?',    query: 'ਅੱਜ ਝੋਨੇ ਦਾ ਮੰਡੀ ਭਾਅ ਕੀ ਹੈ?' },
      { label: '🐛 ਕੀੜੇ ਸਮੱਸਿਆ',     query: 'ਫ਼ਸਲ ਉੱਤੇ ਕੀੜੇ ਲੱਗੇ ਹਨ ਕੀ ਕਰਾਂ?' },
      { label: '🌽 ਖਰੀਫ਼ ਫ਼ਸਲ?',      query: 'ਖਰੀਫ਼ ਮੌਸਮ ਵਿੱਚ ਕਿਹੜੀ ਫ਼ਸਲ ਚੰਗੀ ਹੈ?' },
    ],
    errServer:  'Server ਨਾਲ ਜੁੜਨਾ ਸੰਭਵ ਨਹੀਂ ਹੋਇਆ।',
    errCheck:   'ਤੁਹਾਡਾ server http://127.0.0.1:8000 ਉੱਤੇ ਚੱਲ ਰਿਹਾ ਹੈ ਜਾਂ ਨਹੀਂ ਜਾਂਚੋ।',
    noRain:     '☀️ ਮੀਂਹ ਨਹੀਂ',
    rain:       '🌧️ ਮੀਂਹ',
    sectionLabels: {
      answer:              '🌾 ਸਲਾਹ',
      crop_recommendation: '🌱 ਫ਼ਸਲ ਸਿਫ਼ਾਰਿਸ਼',
      fertilizer_advice:   '🌿 ਖਾਦ ਸਲਾਹ',
      irrigation_advice:   '💧 ਸਿੰਚਾਈ ਸਲਾਹ',
      market_advice:       '💰 ਬਾਜ਼ਾਰ ਸਲਾਹ',
    },
    cropLabels: { wheat:'ਕਣਕ', rice:'ਝੋਨਾ', soybean:'ਸੋਇਆਬੀਨ', onion:'ਪਿਆਜ਼', cotton:'ਕਪਾਹ' },
    perQtl: '/ਕੁਇੰ',
  },

  te: {
    subtitle:       'రైతు డిజిటల్ సాయి',
    locGranting:    'వెతుకుతున్నాం…',
    locDenied:      'Location నిరాకరించారు',
    locAllow:       'Allow చేయండి',
    locBannerTitle: 'Location Permission అవసరం',
    locBannerDesc:  'ఖచ్చితమైన వ్యవసాయ సలహా కోసం మీ స్థానం అవసరం',
    locDismiss:     'తర్వాత',
    placeholder:    'మీ ప్రశ్న రాయండి…',
    welcomeTitle:   'నమస్కారం రైతు అన్నా!',
    welcomeDesc:    'నేను BhoomiAI — మీ వ్యవసాయానికి సంబంధించిన ప్రతి ప్రశ్నకూ సమాధానం ఇవ్వడానికి సిద్ధంగా ఉన్నాను.',
    topics: ['🌱 పంట సలహా','🌧️ వాతావరణం','💰 మార్కెట్ ధర','🌿 ఎరువు','💧 నీటిపారుదల','🐛 పురుగు'],
    topicQueries: [
      'పంట సలహా ఏమిటి?',
      'నేటి వాతావరణం ఎలా ఉంది?',
      'నేడు గోధుమ ధర ఎంత?',
      'ఏ ఎరువు వేయాలి?',
      'నీటి నిర్వహణ ఎలా చేయాలి?',
      'పురుగు నివారణ ఎలా చేయాలి?',
    ],
    quickPills: [
      { label: '🌾 గోధుమ ఎప్పుడు నాటాలి?', query: 'గోధుమ విత్తనానికి సరైన సమయం ఏమిటి?' },
      { label: '🍚 వరి ధర?',               query: 'నేడు వరి మార్కెట్ ధర ఎంత?' },
      { label: '🐛 పురుగు సమస్య',          query: 'పంటపై పురుగులు వచ్చాయి, ఏమి చేయాలి?' },
      { label: '🌽 ఖరీఫ్ పంట?',           query: 'ఖరీఫ్ సీజన్‌లో ఏ పంట మంచిది?' },
    ],
    errServer:  'Server కి connect అవ్వడం సాధ్యం కాలేదు.',
    errCheck:   'మీ server http://127.0.0.1:8000 లో నడుస్తుందో లేదో చెక్ చేయండి.',
    noRain:     '☀️ వర్షం లేదు',
    rain:       '🌧️ వర్షం',
    sectionLabels: {
      answer:              '🌾 సలహా',
      crop_recommendation: '🌱 పంట సిఫారసు',
      fertilizer_advice:   '🌿 ఎరువు సలహా',
      irrigation_advice:   '💧 నీటిపారుదల సలహా',
      market_advice:       '💰 మార్కెట్ సలహా',
    },
    cropLabels: { wheat:'గోధుమ', rice:'వరి', soybean:'సోయాబీన్', onion:'ఉల్లిపాయ', cotton:'పత్తి' },
    perQtl: '/క్విం',
  },

  ta: {
    subtitle:       'விவசாயியின் டிஜிட்டல் தோழர்',
    locGranting:    'தேடுகிறோம்…',
    locDenied:      'Location மறுக்கப்பட்டது',
    locAllow:       'Allow செய்யுங்கள்',
    locBannerTitle: 'Location Permission தேவை',
    locBannerDesc:  'சரியான விவசாய ஆலோசனைக்கு உங்கள் இடம் தேவை',
    locDismiss:     'பிறகு',
    placeholder:    'உங்கள் கேள்வியை எழுதுங்கள்…',
    welcomeTitle:   'வணக்கம் விவசாயி அண்ணா!',
    welcomeDesc:    'நான் BhoomiAI — உங்கள் விவசாயம் தொடர்பான ஒவ்வொரு கேள்விக்கும் பதில் சொல்ல தயாராக இருக்கிறேன்.',
    topics: ['🌱 பயிர் ஆலோசனை','🌧️ வானிலை','💰 சந்தை விலை','🌿 உரம்','💧 நீர்ப்பாசனம்','🐛 பூச்சி'],
    topicQueries: [
      'பயிர் ஆலோசனை என்ன?',
      'இன்றைய வானிலை எப்படி உள்ளது?',
      'கோதுமை இன்றைய விலை என்ன?',
      'என்ன உரம் போட வேண்டும்?',
      'நீர் மேலாண்மை எப்படி செய்வது?',
      'பூச்சி கட்டுப்பாடு எப்படி செய்வது?',
    ],
    quickPills: [
      { label: '🌾 கோதுமை எப்போது?', query: 'கோதுமை விதைக்க சரியான நேரம் எது?' },
      { label: '🍚 அரிசி விலை?',     query: 'இன்றைய அரிசி சந்தை விலை என்ன?' },
      { label: '🐛 பூச்சி பிரச்சனை', query: 'பயிரில் பூச்சிகள் வந்தன, என்ன செய்வது?' },
      { label: '🌽 கரீப் பயிர்?',   query: 'கரீப் பருவத்தில் என்ன பயிர் நல்லது?' },
    ],
    errServer:  'Server உடன் இணைக்க முடியவில்லை.',
    errCheck:   'உங்கள் server http://127.0.0.1:8000 இல் இயங்குகிறதா என சரிபாருங்கள்.',
    noRain:     '☀️ மழை இல்லை',
    rain:       '🌧️ மழை',
    sectionLabels: {
      answer:              '🌾 ஆலோசனை',
      crop_recommendation: '🌱 பயிர் பரிந்துரை',
      fertilizer_advice:   '🌿 உர ஆலோசனை',
      irrigation_advice:   '💧 நீர்ப்பாசன ஆலோசனை',
      market_advice:       '💰 சந்தை ஆலோசனை',
    },
    cropLabels: { wheat:'கோதுமை', rice:'அரிசி', soybean:'சோயாபீன்', onion:'வெங்காயம்', cotton:'பருத்தி' },
    perQtl: '/குவி',
  },
};

/* Active language, default Marathi */
let currentLang = 'mr';

function t(key) {
  return STRINGS[currentLang]?.[key] ?? STRINGS.en[key] ?? key;
}

function tNested(section, key) {
  return STRINGS[currentLang]?.[section]?.[key]
    ?? STRINGS.en?.[section]?.[key]
    ?? key;
}

/* Build language dropdown menu items */
function buildLangMenu() {
  const menu = document.getElementById('langMenu');
  menu.innerHTML = LANGUAGES.map(l => `
    <div class="lang-option ${l.code === currentLang ? 'active' : ''}"
         onclick="setLanguage('${l.code}')">
      <span class="lang-flag">${l.flag}</span>
      <span class="lang-name">${l.name}</span>
      <span class="lang-native">${l.native}</span>
    </div>`).join('');
}

function toggleLangMenu() {
  document.getElementById('langMenu').classList.toggle('open');
}

/* Close dropdown if clicked outside */
document.addEventListener('click', e => {
  if (!e.target.closest('.lang-dropdown-wrap')) {
    document.getElementById('langMenu').classList.remove('open');
  }
});

function setLanguage(code) {
  currentLang = code;
  document.getElementById('langMenu').classList.remove('open');
  const lang = LANGUAGES.find(l => l.code === code);
  document.getElementById('langBtnLabel').textContent = lang.native;
  buildLangMenu();
  applyStrings();
}

/* Push all translated strings into the DOM */
function applyStrings() {
  const s = STRINGS[currentLang] || STRINGS.en;

  // Subtitle
  document.getElementById('appSubtitle').textContent = s.subtitle;

  // Location banner
  document.getElementById('locBannerTitle').textContent = s.locBannerTitle;
  document.getElementById('locBannerDesc').textContent  = s.locBannerDesc;
  document.getElementById('locBannerBtn').textContent   = s.locAllow;
  document.getElementById('locBannerDismiss').title     = s.locDismiss;

  // Textarea placeholder
  document.getElementById('msgInput').placeholder = s.placeholder;

  // Topic chips
  const chips = document.querySelectorAll('.topic-chip');
  s.topics.forEach((label, i) => { if (chips[i]) chips[i].textContent = label; });
  chips.forEach((chip, i) => {
    chip.onclick = () => insertTopic(chip, s.topicQueries[i] || '');
  });

  // Welcome screen
  const es = document.getElementById('emptyState');
  if (es) {
    es.querySelector('h2').textContent = s.welcomeTitle;
    es.querySelector('p').textContent  = s.welcomeDesc;
    const pillsEl = es.querySelector('.quick-pills');
    pillsEl.innerHTML = s.quickPills.map(p =>
      `<span class="quick-pill" onclick="fillAndSend('${p.query}')">${p.label}</span>`
    ).join('');
  }
}
