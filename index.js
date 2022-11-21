// Write your code here!
const main= document.getElementById('main');
main.removeAttribute('id');

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "YOUR-NAME is the champion"