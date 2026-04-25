/* ==========================================================
   Shared footer template for Road to Shodan
   Each page declares <footer id="site-footer"
                              data-kanji="..."
                              data-tagline="..."
                              data-nav="href|label||href|label"></footer>
   Then includes this script. The footer is rendered into the
   element on DOMContentLoaded.
   ========================================================== */

(function () {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  const kanji = footer.dataset.kanji || '道';
  const tagline = footer.dataset.tagline || 'The road continues.';
  const navData = footer.dataset.nav || '';

  // nav format: "href1|label1||href2|label2"
  const navHTML = navData
    .split('||')
    .filter(Boolean)
    .map(item => {
      const [href, label] = item.split('|');
      return `<a href="${href}">${label}</a>`;
    })
    .join(' &nbsp; · &nbsp; ');

  // hits.sh visit-counter badge — colors match site palette
  const counterURL =
    'https://hits.sh/rajeshgheware.github.io/karate.svg' +
    '?style=flat-square&label=visits&color=c9a35e&labelColor=0f2540';

  footer.innerHTML = `
    <div class="container">
      <div class="footer-jp">${kanji}</div>
      <p>${tagline}</p>
      ${navHTML
        ? `<div class="footer-rule"></div><p>${navHTML}</p>`
        : ''}
      <div class="footer-rule"></div>
      <p style="margin: 1rem 0;">
        <a href="https://github.com/rajeshgheware/karate"
           target="_blank" rel="noopener"
           style="border:none; display:inline-block;"
           title="View source on GitHub">
          <img src="${counterURL}"
               alt="visit count"
               style="vertical-align: middle; height: 22px;">
        </a>
      </p>
      <p>Personal study reference for Okinawa Shōrin-Ryū Karate.</p>
      <p>School: <a href="https://oskacademy.com" target="_blank" rel="noopener">OSK Academy</a>
         · Renshi Sajesh P. · Kyōshi Chandran P.R.</p>
      <p style="margin-top: 1.5rem; font-size: 0.85rem; opacity: 0.7;">
        "Karate-dō wa rei ni hajimari rei ni owaru" — Karate begins and ends with courtesy. — Funakoshi
      </p>
    </div>
  `;
})();
