/**
 * @param {string} name
 * @param {number} age
 * @param {boolean} isHidden
 * @constructor
 * @property {string} name
 * @property {number} age
 * @property {Element} ref
 * @property {boolean} isHidden
 */
function User(name, age, isHidden = false) {
  this.name = name;
  this.age = age;
  this.ref = null;
  this.isHidden = isHidden;
  const methods = [
    {
      name: 'updateName',
      selector: 'span',
      field: 'name',
    },
    {
      name: 'updateAge',
      selector: 'span:last-child',
      field: 'age',
    }
  ];

  // this.updateName = function (newName) {
  //   this.name = newName;
  //   this.ref.querySelector('span').innerText = newName;
  // };
  //
  // this.updateAge = function (newAge) {
  //   this.age = newAge;
  //   this.ref.querySelector('span:last-child').innerText = newAge;
  // };

  methods.forEach(({ name, selector, field }) => {
    this[name] = function (property) {
      this[field] = property;
      this.ref.querySelector(selector).innerText = property;
    }
  });

  this.hide = function () {
    this.ref.classList.toggle('hide');
  };
}

const users = [
  new User('Bohdan', 25),
  new User('John', 54),
  new User('Will', 30),
  new User('Lester', 21),
  new User('Jason', 46),
  new User('Alice', 27, true),
  new User('Stephan', 78),
];
const list = document.querySelector('ul');

users.forEach((user) => {
  const { name, age, isHidden } = user;
  user.ref = renderUser(name, age, isHidden);
});

function renderUser(name, age, isHidden) {
  const item = document.createElement('li');
  isHidden && item.classList.add('hide');

  item.innerHTML = `
    <span>${name}</span>  
    <span>${age}</span>  
  `;
  list.append(item);

  return item;
}

