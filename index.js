const types = {
  vegetables: 'vegetables',
  almostMeat: 'almostMeat',
  meat: 'meat',
}

const goods = [
  {
    name: 'Tomato',
    price: 10,
    type: types.vegetables,
  },
  {
    name: 'Cucumber',
    price: 8,
    type: types.vegetables,
  },
  {
    name: 'Onion',
    price: 5,
    type: types.vegetables,
  },
  {
    name: 'Carrot',
    price: 15,
    type: types.vegetables,
  },
  {
    name: 'Potato',
    price: 20,
    type: types.vegetables,
  },
  {
    name: 'Meat',
    price: 50,
    type: types.meat,
  },
  {
    name: 'Fish',
    price: 70,
    type: types.meat,
  },
  {
    name: 'Eggs',
    price: 8,
    type: types.almostMeat,
  },
  {
    name: 'Chicken',
    price: 35,
    type: types.almostMeat,
  },
  {
    name: 'Cheese',
    price: 60,
    type: types.almostMeat,
  },
];



function renderGoods(arr) {
  const list = document.querySelector('ul');

  list.innerHTML = '';
  arr.forEach(({ price, name, type }) => {
    const item = document.createElement('li');
    const nameElem = document.createElement('span');
    const priceElem = document.createElement('span');

    nameElem.innerText = name;
    priceElem.innerText = price;
    item.dataset.type = type;
    item.append(nameElem, priceElem);
    list.append(item);
  });
}

const expensiveGoods = goods.filter(({ price }) => {
  return price >= 20;
});

function filterByType(type) {
  const filteredGoods = goods.filter(({ type: goodType }) => {
    return type === goodType;
  });

  renderGoods(filteredGoods);
}

renderGoods(goods);
