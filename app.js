'use strict';
const guide = window.HOUSE_GUIDE;
const icons = {
  key: '<circle cx="8" cy="9" r="5"/><path d="m12 13 9 9m-3-3 3-3m-6 0 3-3"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 11h18m-13 5h2m4 0h2"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3m1-16a3 3 0 0 1 0 6m3 10v-3a6 6 0 0 0-2-4"/>',
  home: '<path d="m2 11 10-8 10 8M5 9v12h14V9m-10 12v-7h6v7"/>',
  wifi: '<path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0m-11 4a6 6 0 0 1 8 0"/><circle cx="12" cy="20" r="1"/>',
  bin: '<path d="M3 6h18M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7m4-7v7"/>',
  leaf: '<path d="M20 3C7 2 2 8 5 16c8 5 16-1 15-13ZM3 22 16 9"/>',
  book: '<path d="M12 6v15M3 3c4-1 7 0 9 3 2-3 5-4 9-3v16c-4-1-7 0-9 2-2-2-5-3-9-2Z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v1"/>'
};
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.home}</svg>`;
document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });
document.querySelector('#essentials').innerHTML = guide.essentials.map(item => `<article class="essential-card"><span class="card-icon">${icon(item.icon)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p>${item.href ? `<a class="pill" href="${escapeHtml(item.href)}">${escapeHtml(item.label)} ↗</a>` : `<span class="pill">${escapeHtml(item.label)}</span>`}</article>`).join('');
function displayDate(value) {
  if (!value) return 'Not recorded';
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime()) ? escapeHtml(value) : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
document.querySelector('#maintenance-rows').innerHTML = guide.maintenance.map(item => `<tr><td>${escapeHtml(item.title)}<small>${escapeHtml(item.detail)}</small></td><td>${escapeHtml(item.frequency || 'To confirm')}</td><td>${displayDate(item.last)}</td><td><span class="date-pill">${item.next ? displayDate(item.next) : item.frequency === 'As needed' ? 'Check salt level' : 'To be scheduled'}</span></td></tr>`).join('');
if (guide.maintenance.some(item => item.last || item.next)) document.querySelector('.table-note').textContent = 'Dates are recorded by the family. Check the schedule before planning service.';
document.querySelector('#hoa-details').innerHTML = guide.hoa.map(item => `<div><dt>${escapeHtml(item.label)}</dt><dd>${item.phone ? `<a href="tel:${escapeHtml(item.phone.replace(/[^+\d]/g, ''))}">${escapeHtml(item.value)}</a>` : escapeHtml(item.value || 'To be added')}</dd></div>`).join('');
document.querySelector('#water-care').innerHTML = guide.waterCare.map(item => `<article class="water-care-card"><span class="pill">${escapeHtml(item.badge)}</span><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.intro)}</p><ol>${item.steps.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol><p class="care-note">${escapeHtml(item.note)}</p>${item.source ? `<p class="care-source"><a href="${escapeHtml(item.source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.source.title)} ↗</a><span>${escapeHtml(item.source.note)}</span></p>` : ''}</article>`).join('');
 document.querySelector('#water-photo-grid').innerHTML = guide.waterPhotos.map(item => `<figure><a href="assets/water-system/${escapeHtml(item.file)}" target="_blank" rel="noopener noreferrer" aria-label="Open photo: ${escapeHtml(item.title)}"><img src="assets/water-system/${escapeHtml(item.file)}" alt="${escapeHtml(item.alt)}" loading="lazy" width="1200" height="1600"><span>Open photo ↗</span></a><figcaption><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.caption)}</p></figcaption></figure>`).join('');
 document.querySelector('a[href="#water-photos"]').addEventListener('click', () => { document.querySelector('#water-photos').open = true; });
function renderContacts(filter = 'all') {
  document.querySelector('#contact-cards').innerHTML = guide.contacts.filter(item => filter === 'all' || item.category === filter).map(item => `<article class="contact-card"><span class="contact-avatar">${icon(item.category === 'neighbor' ? 'people' : 'home')}</span><div><h3>${escapeHtml(item.role)}</h3><p>${escapeHtml(item.name || 'Contact to add')}</p>${item.phone ? `<a href="tel:${escapeHtml(item.phone.replace(/[^+\d]/g, ''))}">${escapeHtml(item.phone)}</a>` : ''}<small>${escapeHtml(item.note)}</small></div></article>`).join('');
}
renderContacts();
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  renderContacts(button.dataset.filter);
}));
const storageKey = 'perch-lake-departure-v1';
let checked = new Set();
try { const saved = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (Array.isArray(saved)) checked = new Set(saved.filter(id => guide.checklist.some(item => item.id === id))); } catch { /* The checklist remains usable without storage. */ }
document.querySelector('#checklist-items').innerHTML = guide.checklist.map(item => `<label class="check-item"><input type="checkbox" value="${escapeHtml(item.id)}" ${checked.has(item.id) ? 'checked' : ''}><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.detail)}</small></span></label>`).join('');
function updateProgress(save = false) {
  const total = guide.checklist.length;
  document.querySelector('#progress-label').textContent = checked.size === total ? `All ${total} complete. Ready for the next visit.` : `${checked.size} of ${total} complete`;
  const progress = document.querySelector('#checklist-progress');
  progress.max = total; progress.value = checked.size;
  if (save) { try { localStorage.setItem(storageKey, JSON.stringify([...checked])); } catch { document.querySelector('#storage-note').textContent = 'Browser storage is unavailable. Checkmarks will last only until this page closes.'; } }
}
document.querySelector('#checklist-items').addEventListener('change', event => {
  const input = event.target;
  if (!input.matches('input[type="checkbox"]')) return;
  input.checked ? checked.add(input.value) : checked.delete(input.value);
  updateProgress(true);
});
const resetDialog = document.createElement('dialog');
resetDialog.setAttribute('aria-labelledby', 'reset-title');
resetDialog.innerHTML = '<div class="dialog-heading"><h2 id="reset-title">Ready for a new visit?</h2></div><p>This will clear this device’s departure checkmarks.</p><div style="display:flex;gap:12px;margin-top:20px"><button type="button" class="button" id="confirm-reset">Clear checkmarks</button><button type="button" class="text-button" id="cancel-reset">Keep checkmarks</button></div>';
document.body.append(resetDialog);
document.querySelector('#reset-checklist').addEventListener('click', () => { if (checked.size) resetDialog.showModal(); });
document.querySelector('#cancel-reset').addEventListener('click', () => resetDialog.close());
document.querySelector('#confirm-reset').addEventListener('click', () => { checked.clear(); document.querySelectorAll('#checklist-items input').forEach(input => { input.checked = false; }); updateProgress(true); resetDialog.close(); });
updateProgress();
const searchDialog = document.querySelector('#search-dialog');
const searchInput = document.querySelector('#guide-search');
const index = [
  ...guide.essentials.map(item => ({ title: item.title, text: `${item.text} ${item.label}`, href: '#house' })),
  ...guide.maintenance.map(item => ({ title: item.title, text: `${item.detail}. ${item.frequency || 'Schedule to confirm'}`, href: '#maintenance' })),
  ...guide.contacts.map(item => ({ title: item.role, text: `${item.name || 'Contact to add'}. ${item.phone || ''} ${item.note}`, href: '#contacts' })),
  ...guide.waterCare.map(item => ({ title: item.title, text: `${item.badge}. ${item.intro} ${item.steps.join(' ')} ${item.note}`, href: '#water-system' })),
  ...guide.waterPhotos.map(item => ({ title: item.title, text: item.caption, href: '#water-photos' })),
  ...guide.checklist.map(item => ({ title: item.title, text: item.detail, href: '#checklist' })),
  { title: 'HOA fees & house records', text: guide.hoa.map(item => `${item.label}: ${item.value || 'To be added'}`).join(' · '), href: '#hoa' },
  { title: 'Lake house address', text: '11159 Perch Lake Dr W, Cement City, MI 49233', href: '#overview' },
  { title: 'What to add next', text: 'Appliance manuals, dock, boat, trash, opening, winter preparation, and local favorites.', href: '#hoa' }
];
function search() {
  const query = searchInput.value.trim().toLowerCase();
  const matches = query ? index.filter(item => query.split(/\s+/).every(term => `${item.title} ${item.text}`.toLowerCase().includes(term))) : [];
  document.querySelector('#search-summary').textContent = !query ? 'Search essentials, schedules, people, and checklists.' : matches.length ? `${matches.length} ${matches.length === 1 ? 'result' : 'results'}` : 'No matches. Try a broader term, such as water or lawn.';
  document.querySelector('#search-results').innerHTML = matches.map(item => `<a href="${item.href}"><strong>${escapeHtml(item.title)} ↗</strong><p>${escapeHtml(item.text)}</p></a>`).join('');
}
document.querySelector('.search-toggle').addEventListener('click', () => { searchDialog.showModal(); searchInput.focus(); search(); });
document.querySelector('#close-search').addEventListener('click', () => searchDialog.close());
searchInput.addEventListener('input', search);
document.querySelector('#search-results').addEventListener('click', event => { const link = event.target.closest('a'); if (link) { if (link.hash === '#water-photos') document.querySelector('#water-photos').open = true; if (link.hash === '#contacts') { document.querySelector('[data-filter="all"]').click(); } searchDialog.close(); } });
