const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener('click', function (e) {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

//types
const typesItem = document.querySelectorAll('.types__item');

typesItem.forEach((element) => {
  element.addEventListener('click', clickTypes);
});

function clickTypes(e) {
  console.log(e.currentTarget);
  if (e.target.classList.value.includes('active')) {
    return;
  } else {
    typesItem.forEach((element) => {
      element.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  }
}
