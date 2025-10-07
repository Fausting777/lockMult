// /js/lang-switch.js
(function(){
  function switchLang(target) {
    var loc = window.location;
    var parts = loc.pathname.split('/').filter(Boolean);

    if (parts.length === 0) {
      window.location.href = '/' + target + '/';
      return;
    }
    if (parts[0] === 'ru' || parts[0] === 'de') {
      parts[0] = target;
    } else {
      parts.unshift(target);
    }
    var keepSlash = loc.pathname.endsWith('/');
    var newPath = '/' + parts.join('/') + (keepSlash ? '/' : '');
    window.location.href = newPath + loc.search + loc.hash;
  }

  window.switchLang = switchLang;

  // Highlight current language
  document.addEventListener('DOMContentLoaded', function(){
    var p = window.location.pathname.split('/').filter(Boolean);
    var current = (p[0] === 'ru') ? 'ru' : 'de';
    var links = document.querySelectorAll('.lang-switch a');
    links.forEach(function(a){
      if ((a.dataset.lang||'').toLowerCase() === current) a.setAttribute('aria-current','true');
      else a.removeAttribute('aria-current');
    });
  });
})();
