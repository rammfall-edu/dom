const button = document.querySelector('button');
const list = document.querySelector('ul');
const names = ['Bohdan', 'Stepan', 'Yura', 'Julia', 'Olena'];

const renderItem = (text) => {
  const item = document.createElement('li');
  const button = document.createElement('button');
  button.innerText = 'X';
  item.innerText = text;
  item.append(button);
  button.onclick = () => {
    item.remove();
  };
  item.onmousedown = () => {
    item.classList.add('red');
  };

  item.onmouseup = () => {
    item.classList.remove('red');
  }


  list.append(item);
};

names.forEach(renderItem);

