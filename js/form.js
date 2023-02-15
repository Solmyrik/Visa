const buttonOne = document.querySelector('.button-1');
const buttonTwo = document.querySelector('.button-2');
const inputNameOne = document.querySelector('.input-name-1');
const inputTelOne = document.querySelector('.input-tel-1');
const inputNameTwo = document.querySelector('.input-name-2');
const inputTelTwo = document.querySelector('.input-tel-2');

buttonOne.onclick = async (e) => {
  let currentName = inputNameOne.value;
  let currentPhone = inputTelOne.value;

  if (currentPhone.length > 17 && currentName.length > 1) {
    console.log(currentPhone, currentName);
    let formData = new FormData();
    formData.append('phoneNumberOne', currentPhone);
    formData.append('nameOne', currentName);
    let responce = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });
    alert('Ваша заявка отправлена');
    inputNameOne.value = '';
    inputTelOne.value = '';
  } else {
    alert('Введите корректно имя и номер телефона');
  }
};

buttonTwo.onclick = async (e) => {
  let currentName = inputNameTwo.value;
  let currentPhone = inputTelTwo.value;

  if (currentPhone.length > 17 && currentName.length > 1) {
    console.log(currentPhone, currentName);
    let formData = new FormData();
    formData.append('phoneNumberOne', currentPhone);
    formData.append('nameOne', currentName);
    let responce = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });
    alert('Ваша заявка отправлена');
    inputNameTwo.value = '';
    inputTelTwo.value = '';
  } else {
    alert('Введите корректно имя и номер телефона');
  }
};

const quizBtn = document.querySelector('.quiz__btn');

const quizChoiseOne = document.querySelector('.quiz-1');
const quizChoiseTwo = document.querySelector('.quiz-2');
const quizChoiseThree = document.querySelector('.quiz-3');
const quizChoiseFour = document.querySelector('.quiz-4');
const quizChoiseFive = document.querySelector('.quiz-5');
const quizChoiseSix = document.querySelector('.quiz-6');
const quizChoiseSeven = document.querySelector('.quiz-7');
const quizChoiseEight = document.querySelector('.quiz-8');
const quizChoiseNine = document.querySelector('.quiz-9');

quizBtn.onclick = async (e) => {
  let currentChoiceOne = 'Туристическая';
  const currentChoiceTwo = quizChoiseTwo.value;
  const currentChoiceThree = quizChoiseThree.value;
  let currentChoiceFour = 'Работаю в компании';
  const currentChoiceFive = quizChoiseFive.value;
  let currentChoiceSix = 'Нет';
  const currentChoiceSeven = quizChoiseSeven.value;
  const currentChoiceEight = quizChoiseEight.value;
  const currentChoiceNine = quizChoiseNine.value;
  for (const child of quizChoiseOne.children) {
    if (child.className.includes('active')) {
      currentChoiceOne = child.textContent;
    }
  }
  for (const child of quizChoiseFour.children) {
    if (child.className.includes('active')) {
      currentChoiceFour = child.textContent;
    }
  }
  for (const child of quizChoiseSix.children) {
    if (child.className.includes('active')) {
      currentChoiceSix = child.textContent;
    }
  }

  if (currentChoiceNine.length > 17 && currentChoiceSeven.length > 1) {
    let formData = new FormData();
    formData.append('key1', currentChoiceOne);
    formData.append('key2', currentChoiceTwo);
    formData.append('key3', currentChoiceThree);
    formData.append('key4', currentChoiceFour);
    formData.append('key5', currentChoiceFive);
    formData.append('key6', currentChoiceSix);
    formData.append('key7', currentChoiceSeven);
    formData.append('key8', currentChoiceEight);
    formData.append('key9', currentChoiceNine);
    let responce = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });
    alert('Ваша заявка отправлена');
    inputNameTwo.value = '';
    inputTelTwo.value = '';
  } else {
    alert('Введите корректно имя и номер телефона');
  }
};
