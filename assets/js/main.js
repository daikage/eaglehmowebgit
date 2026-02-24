// Mobile nav toggle
const toggle = document.querySelector('.mobile-toggle');
const header = document.querySelector('.header');
if (toggle){
  // initialize aria
  toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    document.documentElement.classList.toggle('mobile-open');
  });
}

// Elevate header on scroll
if (header){
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 2);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* Motion: auto-apply reveal animations across all pages */
function addGroup(selector, baseDelay = 0, inc = 100, extra = []) {
  const nodes = document.querySelectorAll(selector);
  let i = 0;
  nodes.forEach(n => {
    if (!n.classList.contains('reveal')) n.classList.add('reveal', ...extra);
    n.style.setProperty('--reveal-delay', `${baseDelay + i * inc}ms`);
    i++;
  });
}
function autoReveal(){
  // Top-level content blocks
  addGroup('.section .container > *', 0, 80, ['reveal--up']);
  // Grids and cards
  addGroup('.grid > *', 0, 80, ['reveal--up']);
  addGroup('.card', 0, 90, ['reveal--up']);
  // Hero media and other media blocks
  addGroup('.hero-media', 120, 100, ['reveal--right']);
  // Headings and paragraphs (if not already captured)
  addGroup('h1, h2, h3, p', 0, 60, ['reveal--up']);
  // Lists and table rows
  addGroup('.checklist li', 0, 50, ['reveal--up']);
  addGroup('table.table thead, table.table tbody tr', 0, 40, ['reveal--up']);
  // Forms
  addGroup('.form-row > *', 0, 80, ['reveal--up']);
  // Footer columns
  addGroup('.footer .grid > *', 0, 80, ['reveal--up']);
}
autoReveal();

// IntersectionObserver to trigger animations on scroll (once per element)
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Stats counters on home
const animatedCounters = new WeakSet();
function animateCounter(el, to, duration = 1800){
  const suffix = el.dataset.suffix ? ` ${el.dataset.suffix}` : '';
  const startTime = performance.now();
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
  function tick(now){
    const p = Math.min(1, (now - startTime) / duration);
    const val = Math.round(easeOutCubic(p) * to);
    el.textContent = val.toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const counterEls = document.querySelectorAll('.counter[data-count]');
if (counterEls.length){
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const el = entry.target;
        if (!animatedCounters.has(el)){
          const target = parseInt(el.dataset.count, 10);
          const duration = el.dataset.duration ? parseInt(el.dataset.duration, 10) : 1800;
          animateCounter(el, target, duration);
          animatedCounters.add(el);
        }
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counterEls.forEach(el => counterObserver.observe(el));
}

// Simple FAQ accordion
document.querySelectorAll('[data-accordion]').forEach(acc => {
  acc.addEventListener('click', e => {
    const header = e.target.closest('.acc-header');
    if (!header) return;
    const item = header.parentElement;
    const body = item.querySelector('.acc-body');
    const icon = header.querySelector('span'); // plus/minus
    item.classList.toggle('open');
    const isOpen = item.classList.contains('open');
    body.style.maxHeight = isOpen ? (body.scrollHeight + 'px') : '0px';
    if (icon) icon.textContent = isOpen ? '−' : '+'; // update affordance
    header.setAttribute('aria-expanded', String(isOpen));
  });
});

// Providers filter (basic client-side)
const providerSearch = document.querySelector('#provider-search');
if (providerSearch){
  providerSearch.addEventListener('input', () => {
    const q = providerSearch.value.toLowerCase();
    document.querySelectorAll('[data-provider-row]').forEach(row => {
      const hay = row.innerText.toLowerCase();
      row.style.display = hay.includes(q) ? '' : 'none';
    });
  });
}
