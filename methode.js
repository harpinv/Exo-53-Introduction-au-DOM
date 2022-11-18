let myPara = document.querySelector('.para');
console.log(myPara);
myPara.style.color = 'dodgerBlue';
myPara.style.width = '100px';

let myPic = document.querySelector('.spanTest');
console.log(myPic);
myPic.style.backgroundColor = 'red';
myPic.style.transformOrigin = ' center center';
myPic.style.transform = 'rotate(45deg)';

let myText = document.getElementById('premier')
console.log(myText);
myText.style.animation = 'text';
myText.style.animationDuration = '5s';

let myChange = document.getElementById('deuxieme');
console.log(myChange);
myChange.innerText = 'Je cour plus vite sur la route';

let lien = document.querySelector('.lien');
console.log(lien);
lien.innerText = 'Click sur ce lien';
lien.href = 'https://fr.wikipedia.org/wiki/Chien';
lien.alt = 'Les chien Wikipédia';