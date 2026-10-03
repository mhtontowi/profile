// Edit this one line when your domain email is ready.
var EMAIL = "mirza@YOUR-DOMAIN.com";

(function () {
  document.querySelectorAll("[data-email]").forEach(function (el) {
    el.textContent = EMAIL;
    if (el.tagName === "A") el.href = "mailto:" + EMAIL;
  });

  var buttons = document.querySelectorAll(".lang button");
  if (!buttons.length) return;
  function setLang(l) {
    document.documentElement.lang = l;
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.set === l)); });
    try { localStorage.setItem("lang", l); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var fromHash = location.hash === "#de" ? "de" : location.hash === "#en" ? "en" : null;
  var fromBrowser = (navigator.languages || [navigator.language || "en"]).some(function (x) { return /^de/i.test(x); }) ? "de" : "en";
  setLang(fromHash || saved || fromBrowser);
  buttons.forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.set); }); });
})();
