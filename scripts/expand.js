const ElementClick = window.document.getElementById("click-for-expand");
const ElementText = window.document.getElementById("text");

ElementClick.addEventListener("click", function() {
  
  ElementClick.style.display = "none"
  ElementText.innerHTML = "Tenho 16 anos e estou no 1º ano do ensino médio com o curso Técnico em Marketing Digital integrado. Também faço um curso de Gestão Empresarial e estudo Análise e Desenvolvimento de Sistemas por conta própria. Tenho interesse em tecnologias emergentes e estratégias de marketing, buscando sempre expandir meus conhecimentos e criar soluções inovadoras.";
})

ElementText.addEventListener("click", function() {
  ElementClick.style.display = "none"
  ElementText.innerHTML = "Tenho 16 anos e estou no 1º ano do ensino médio com o curso Técnico em Marketing Digital integrado. Também faço um curso de Gestão Empresarial e estudo Análise e Desenvolvimento de Sistemas por conta própria. Tenho interesse em tecnologias emergentes e estratégias de marketing, buscando sempre expandir meus conhecimentos e criar soluções inovadoras.";
})

