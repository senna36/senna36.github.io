const bg = window.document.body;

bg.style.display = "none"

window.onload = function() {
  setTimeout(function() {
    bg.style.display = "block"
  }, 5000)
}