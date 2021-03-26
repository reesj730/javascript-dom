

let button = document.querySelector('#duck');
let wrap = document.querySelector('#wrap');
let score = document.querySelector("#score-counter");


let redBtn = document.querySelector('#red');
let yellowBtn = document.querySelector('#yellow');
let purpleBtn = document.querySelector('#purple');
let blueBtn = document.querySelector('#blue');


button.addEventListener("click", () => {
  addDuck();
  console.log('click');
});

const addDuck = () => {
  const img = document.createElement('img');
  img.src = 'https://bit.ly/2KQJVKc';
  img.id = "image";

  img.style.left = Math.round(Math.random() * document.getElementById('wrap').clientWidth) + 'px';
  img.style.top = Math.round(Math.random() * document.getElementById('wrap').clientHeight) + 'px';

  document.getElementById('wrap').appendChild(img);

  let images = wrap.querySelectorAll('#image');
  let count = images.length;
  score.innerHTML = count;
};


wrap.addEventListener("click", () => {
  if (event.target.id == 'image') {
     event.target.remove();
     let images = wrap.querySelectorAll('#image');
     let count = images.length;
     score.innerHTML = count;
  }
});


redBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = 'red'; 
});

yellowBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = 'yellow'; 
});

purpleBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = 'purple'; 
});

blueBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = 'blue'; 
});


let changeBackground = function() {
  const totalCount = 9;
  let num = Math.ceil( Math.random() * totalCount );
  document.getElementById('wrap').append('imgs/'+num+'.png');
}



