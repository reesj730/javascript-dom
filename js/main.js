
window.addEventListener('load', function() { 
  // All of the javascript for your project would go inside this load function.
	console.log('the page has loaded');

//1. Click button to append content
	var button = document.querySelector('#add-item');
	var container = document.querySelector('.container');

	console.log ('The container is', container);

	button.addEventListener('click', function(event) { 
		var image = document.createElement('img');
		image.src = 'assets/imgs/fish.png';
		document.body.appendChild(image);
	});

//2. Set the position of the new element randomly 

 let fish = document.querySelectorAll('.fish');
  let container = document.querySelector('#container2');
  // place our bubbles randomly
  fish.forEach(function (bubble) {
    fish.style.left = (100 * Math.random()) + '%';
    fish.style.top = (100 * Math.random()) + '%';
  });
  container.addEventListener('click', function (event) {
    if (event.target.classList.contains('fish')) {
      event.target.remove();
    }
  });

//3. Remove item on click

//4. Count how many items are inside the box

//5. Add a series of swatches to allow coloring the boxes

//6. Add another button to clear the content area

//7. Add one more feature to your page. You choose the interaction.


});