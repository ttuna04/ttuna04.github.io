// Shared by every page: the light/dark theme. Light by default; the visitor's choice is remembered
// (versioned key, so stale values are ignored). Loaded in <head>, so the theme is set before the page
// is drawn and dark mode doesn't flash white when moving between pages.
(function () {
  var KEY = "theme-v2";
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  document.documentElement.setAttribute("data-theme", stored === "dark" || stored === "light" ? stored : "light");
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  });
})();
