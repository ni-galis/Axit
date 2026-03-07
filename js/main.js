
const menu = document.querySelector(".menu__list")
const menuBtn = document.querySelector(".burger-btn")

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    body.classList.toggle('lock')
  })

  menu.addEventListener('click', e => {
    if (e.target.classList.contains('menu__list')) {
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      body.classList.remove('lock')
    }
  })
}

//=============== TRANSITION-TABS ======================

const tab_1 = document.querySelector(".block-tab_1");
const tab_2 = document.querySelector(".block-tab_2");
const tab_3 = document.querySelector(".block-tab_3");

//if (tab_1 && tab_2 && tab_3) {
//  tab_2.addEventListener('mouseover', () => {
//    tab_1.style.backgroundColor = '#333333'
//    tab_2.style.backgroundColor = '#ff8b38'
//    tab_3.style.backgroundColor = '#333333'
//  })

//  tab_1.addEventListener('mousever', () => {
//    tab_1.style.backgroundColor = '#ff8b38'
//    tab_2.style.backgroundColor = '#333333'
//    tab_3.style.backgroundColor = '#333333'
//  })

//  tab_3.addEventListener('click', () => {
//    tab_3.style.backgroundColor = '#ff8b38'
//    tab_2.style.backgroundColor = '#333333'
//    tab_1.style.backgroundColor = '#333333'
//  })
//}
//------------------------------
if (tab_1 && tab_2 && tab_3) {
  tab_1.addEventListener('mouseover', () => {
    tab_1.classList.add('active')
    tab_2.classList.remove('active')
    tab_3.classList.remove('active')
  })

  tab_2.addEventListener('mouseover', () => {
    tab_1.classList.remove('active')
    tab_2.classList.add('active')
    tab_3.classList.remove('active')

  })

  tab_3.addEventListener('mouseover', () => {
    tab_3.classList.add('active')
    tab_1.classList.remove('active')
    tab_2.classList.remove('active')
  })




}





