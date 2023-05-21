function getFortune() {
  let numElement = document.getElementById('pickNumber');
  let num = parseInt(numElement.value);
  let nameElement = document.getElementById('userName');
  let name = nameElement.value;
  let petElement = document.getElementById('pickPet');
  let pet = petElement.value;
  let fortuneString = 'You will';
  let fortune = document.getElementById('fortune');

  if (name == 'Pooj') {
    fortuneString += ' be a professor';
  }

  if (num >= 5) {
    fortuneString += ', find true love';
  } else if (num > 0) {
    fortuneString += ', become a millionaire';
  } else {
    fortuneString += ', achieve your craziest dreams';
  }

  switch (num) {
    case 0:
      fortuneString += ', and spend a fortune on gifts';
      fortune.style.backgroundColor = 'green'
      break;

    case 1:
      fortuneString += ', and develop superpowers';
      fortune.style.color = 'blue';
      break;

    case 2:
      fortuneString += ', and make three new friends';
      break;

    case 3:
      fortuneString += ', and develop a cure for a disease';
      break;

    case 4:
      fortuneString += ', and become the true Ruler of the North';
      break;

    case 5:
      fortuneString += ', and find a golden egg';
      fortune.style.backgroundColor = 'golden';
      break;

    case 6:
      fortuneString += ', and become a world leader';
      break;

    case 7:
      fortuneString += ', and win the lottery';
      break;

    default:
      fortuneString += ', and fall into the mystical arts';
      break;
  }

  if (name == 'Dhelis' && num == 7) {
    fortuneString += ' and graduate this year';
  }

  if (num == 2 || name == 'Dave') {
    fortuneString += ' and be named Dave';
  }

  if (pet === 'cat') {
    fortuneString += ' with the power of invisibility';
  } else if (pet === 'dog') {
    fortuneString += ' with super-human strength';
  } else {
    fortuneString += ' with your amazing, loyal pet';
  }

  fortune.innerText = fortuneString;
  numElement.value = 0;
  nameElement.value = '';
}
