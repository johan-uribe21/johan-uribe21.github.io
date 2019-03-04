const input = document.getElementById('input');
const button = document.getElementById('button');
const ul = document.getElementById('list');

function clickAdd() {
  if (input.value.length > 0) {
    addLi();
  }
}

function addLi() {
  const newLi = document.createElement('li');
  newLi.innerHTML = `${input.value}<button class="remove">remove</button>`;
  // newLi.innerHTML = input.value;
  ul.appendChild(newLi);
  input.value = '';
}

function enterAdd(event) {
  if (input.value.length > 0 && event.key === 'Enter') {
    addLi();
  }
}

function removeLi(event) {
  if (event.target.className === 'remove') {
    ul.removeChild(event.target.parentElement);
  }
}

ul.addEventListener('click', removeLi);
button.addEventListener('click', clickAdd);
input.addEventListener('keypress', enterAdd);
