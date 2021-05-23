import menuDishes from '../menu.json';
import foodCartTpl from '../templates/food-card.hbs';

const foodCard = foodCartTpl(menuDishes);
const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', foodCard);