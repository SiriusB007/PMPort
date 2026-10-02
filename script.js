// Brand sparkle: a comet sweeps across the name, dropping 12 gold sparks.
(function sparkle() {
  const host = document.querySelector('.sparkle');
  if (!host) return;

  host.innerHTML = '<span class="comet"></span>';
  for (let i = 0; i < 12; i++) {
    const x = 6 + i * 8;                    // % across the name
    const size = 5 + ((i * 7) % 3) * 2;     // 5, 7 or 9px
    const spark = document.createElement('span');
    spark.className = 'spark';
    spark.style.cssText =
      `left:${x}%;top:${20 + ((i * 37) % 60)}%;width:${size}px;height:${size}px;` +
      `animation-delay:${Math.round(300 + (x / 100) * 1300)}ms`;
    host.appendChild(spark);
  }
})();

// Screenshots: show a dashed placeholder until an image exists in /images.
const placeholderIcon =
  '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
  'stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/>' +
  '<circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>';

document.querySelectorAll('.shot-frame').forEach((frame) => {
  const img = frame.querySelector('img');
  const showPlaceholder = () => {
    if (img) img.remove();
    frame.innerHTML =
      `<div class="shot-empty">${placeholderIcon}<span>Add a screenshot of ${frame.dataset.title}</span></div>`;
  };
  if (!img || (img.complete && img.naturalWidth === 0)) showPlaceholder();
  else img.addEventListener('error', showPlaceholder);
});

// Keep the footer year current.
document.getElementById('year').textContent = new Date().getFullYear();
