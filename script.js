//Seleciona todos botões da barra de navegação
const btnAboutMe = document.getElementById("btn-about");
const btnFormation = document.getElementById("btn-formation");
const btnProjects = document.getElementById("btn-projects");
const btnContact = document.getElementById("btn-contact");

//Seleciona todas as seções da página
const sectionFormation = document.getElementById("formation");
const sectionAboutMe = document.getElementById("about-me");
const sectionProjects = document.getElementById("projects");
const sectionContact = document.getElementById("contact");

//Funções aonde ao clicar na seção correspondente mostra ela, garante que não mostra as outras e ativa um css no botão para saber qual a seção está selecionada no momento
btnAboutMe.addEventListener("click", () => {
  btnAboutMe.classList.add("active");
  btnFormation.classList.remove("active");
  btnProjects.classList.remove("active");
  btnContact.classList.remove("active");

  sectionAboutMe.classList.remove("hidden");
  sectionFormation.classList.add("hidden");
  sectionProjects.classList.add("hidden");
  sectionContact.classList.add("hidden");
});

btnFormation.addEventListener("click", () => {
  btnFormation.classList.add("active");
  btnAboutMe.classList.remove("active");
  btnProjects.classList.remove("active");
  btnContact.classList.remove("active");

  sectionFormation.classList.remove("hidden");
  sectionAboutMe.classList.add("hidden");
  sectionProjects.classList.add("hidden");
  sectionContact.classList.add("hidden");
});

btnProjects.addEventListener("click", () => {
  btnProjects.classList.add("active");
  btnAboutMe.classList.remove("active");
  btnFormation.classList.remove("active");
  btnContact.classList.remove("active");

  sectionProjects.classList.remove("hidden");
  sectionAboutMe.classList.add("hidden");
  sectionFormation.classList.add("hidden");
  sectionContact.classList.add("hidden");
});

btnContact.addEventListener("click", () => {
  btnContact.classList.add("active");
  btnAboutMe.classList.remove("active");
  btnFormation.classList.remove("active");
  btnProjects.classList.remove("active");

  sectionContact.classList.remove("hidden");
  sectionAboutMe.classList.add("hidden");
  sectionFormation.classList.add("hidden");
  sectionProjects.classList.add("hidden");
});
