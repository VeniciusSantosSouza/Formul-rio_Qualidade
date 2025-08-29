const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const conteudo = document.querySelector('.conteudo')
const backgroud = document.querySelector('.backgroud')

botao.addEventListener('click', () =>{
  menuLateral.classList.toggle('ativo')
  conteudo.classList.toggle('ativo')
  backgroud.classList.toggle('ativo')
  botao.classList.toggle('ativo')
  document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ?' #34495e': '#ecf0f1'; 
})

backgroud.addEventListener('click', () =>{
  menuLateral.classList.remove('ativo')
  conteudo.classList.remove('ativo')
  backgroud.classList.remove('ativo')
  botao.classList.remove('ativo')
  document.body.style.backgroundColor = '#ecf0f1'
})


/* Abrir SubMenus*/

document.querySelectorAll(".menu > a").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    let submenu = item.nextElementSibling;

    
    document.querySelectorAll(".submenu").forEach(sm => {
      if (sm !== submenu) sm.classList.remove("ativo");
    });

    submenu.classList.toggle("ativo");
  });
});




