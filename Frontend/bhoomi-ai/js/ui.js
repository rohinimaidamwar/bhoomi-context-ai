/* ── ui.js — bubble rendering, typing indicator, DOM helpers ── */

function nowTime() {
  return new Date().toLocaleTimeString(currentLang + '-IN', {
    hour: '2-digit', minute: '2-digit'
  });
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 96) + 'px';
}

function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function scrollBottom() {
  const c = document.getElementById('chatArea');
  c.scrollTo({ top: c.scrollHeight, behavior: 'smooth' });
}

function removeEmpty() {
  document.getElementById('emptyState')?.remove();
}

/* ── User bubble ── */
function addUserBubble(text) {
  removeEmpty();
  const c   = document.getElementById('chatArea');
  const div = document.createElement('div');
  div.className = 'msg-row me';
  div.innerHTML = `
    <div class="bubble-wrap">
      <div class="bubble me">${escHtml(text)}</div>
      <div class="bubble-time">${nowTime()}</div>
    </div>
    <div class="avatar me"><i class="bi bi-person-fill"></i></div>`;
  c.appendChild(div);
  scrollBottom();
}

/* ── Typing indicator ── */
function addTyping() {
  const c   = document.getElementById('chatArea');
  const div = document.createElement('div');
  div.className = 'msg-row';
  div.id        = 'typingRow';
  div.innerHTML = `
    <div class="avatar ai">🤖</div>
    <div class="bubble ai typing-bubble">
      <span></span><span></span><span></span>
    </div>`;
  c.appendChild(div);
  scrollBottom();
}

function removeTyping() {
  document.getElementById('typingRow')?.remove();
}

/* ── AI bubble (wraps any inner HTML content) ── */
function addAiBubble(innerHtml) {
  const c   = document.getElementById('chatArea');
  const div = document.createElement('div');
  div.className = 'msg-row';
  div.innerHTML = `
    <div class="avatar ai">🤖</div>
    <div class="bubble-wrap" style="max-width:90%">
      ${innerHtml}
      <div class="bubble-time">${nowTime()}</div>
    </div>`;
  c.appendChild(div);
  scrollBottom();
}

/* ── Error bubble ── */
function addErrorBubble(msg) {
  addAiBubble(`
    <div class="bubble ai">
      <div class="error-card">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <span>${msg}</span>
      </div>
    </div>`);
}

/* ── Topic chips & quick pills ── */
function insertTopic(el, text) {
  document.querySelectorAll('.topic-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  const ta = document.getElementById('msgInput');
  ta.value = text;
  autoResize(ta);
  ta.focus();
}

function fillAndSend(text) {
  const ta = document.getElementById('msgInput');
  ta.value = text;
  autoResize(ta);
  sendMessage();
}
