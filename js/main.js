const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

const listMenu = document.querySelector('.menu__list');
listMenu.addEventListener('click', (e) => {
  if (e.target.className === 'menu__link') {
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  }
});

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

// choice
const choice = document.querySelectorAll('.choice');

choice.forEach((ch) => {
  onChoice(ch);
});

function onChoice(elem) {
  elem.addEventListener('click', (e) => {
    if (e.target.className === 'choice__item') {
      for (const child of elem.children) {
        child.classList.remove('active');
      }
      e.target.classList.add('active');
    }
  });
}
