function go(url) {
  window.location.href = url;
}

function byText(txt) {
  var all = document.querySelectorAll('p, div, button, span, i');
  var best = null;
  for (var i = 0; i < all.length; i++) {
    var el = all[i];
    if (el.children.length === 0 || el.tagName === 'BUTTON') {
      if (el.textContent.trim() === txt) {
        if (!best) best = el;
      }
    }
  }
  return best;
}

function byIconClass(cls) {
  return document.querySelector('i.' + cls);
}

function wireText(txt, url) {
  var el = byText(txt);
  if (el) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', function () { go(url); });
  }
}

function wireIcon(cls, url) {
  var el = byIconClass(cls);
  if (el) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', function () { go(url); });
  }
}
