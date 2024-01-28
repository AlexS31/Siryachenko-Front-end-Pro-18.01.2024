const birthYear = prompt('Введіть рік народження:');
const currentYear = new Date().getFullYear(); 

switch (true) {
case (birthYear !== null && !isNaN(birthYear)):
  const age = currentYear - parseInt(birthYear);
  alert (`Ваш вік:  ${age}   років`);
  break;
 default:
  alert('Шкода, що Ви не захотіли ввести свій рiк народження.');
}

const cityName = prompt('Введіть місто, в якому ви живете:');

if (cityName !== null && cityName !== '') {
  const lowerCaseCity = cityName.toLowerCase();

  switch (lowerCaseCity) {
    case 'київ':
      alert('Ти живеш у столиці України.');
      break;
    case 'вашингтон':
      alert('Ти живеш у столиці Сполучених Штатів Америки.');
      break;
    case 'лондон':
      alert('Ти живеш у столиці Великої Британії.');
      break;
    default:
      alert(`Ти живеш у місті ${cityName}.`);
      break;
  }
} else {
  alert('Шкода, що Ви не захотіли ввести мiсто, в якому живете.');
}



const favoriteSport = prompt('Введіть ваш улюблений вид спорту:');

if (favoriteSport !== null && favoriteSport !== '') {
  let lowerCaseSport = favoriteSport.toLowerCase();

  switch (lowerCaseSport) {
    case 'футбол':
      alert('Круто! Хочеш стати, як Лiонель Мессi');
      break;
    case 'теніс':
      alert('Круто! Хочеш стати, як Рафаель Надаль?');
      break;
    case 'баскетбол':
      alert('Круто! Хочеш стати, як Леброн Джеймс?');
      break;
    default:
        alert(`Твiй улюблений вид спорту ${favoriteSport}.`);
      break;
  }
} else {
  alert('Шкода, що Ви не захотіли ввести Ваш улюблений вид спорту.');
}