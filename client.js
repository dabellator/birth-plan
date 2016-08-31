(function () {

	var i;
	var radio;
	var form;

	for(i=0;i<images.length;i++){
		form = document.getElementById('images');
		container = document.getElementById('images');
		image = document.createElement('img');
		image.setAttribute('src', images[i].path);
		image.setAttribute('name', images[i].name);
		image.onclick = function() {
			if(!this.hasAttribute('select')){
				this.setAttribute('select', 'on');
				this.setAttribute('class', 'select');
			} else {
				this.removeAttribute('select');
				this.removeAttribute('class');
			}
		};

		container.appendChild(image);
	}

	function showPlan() {
		var images = document.querySelectorAll('[select]');

		// add name to page
		var name = document.getElementById('name');
		var header = document.getElementById('header');

		var nameInput = document.getElementById('name-field').value;

		header.setAttribute('class', 'show');
		name.innerHTML = nameInput;
		//title.setAttribute('class', 'show');

		// add selected images to pages
		for(i=0;i<images.length;i++){
			var plan = document.getElementById('birth-plan');
			var div = document.createElement('div');
			var image = document.createElement('img');

			image.setAttribute('src', images[i].src);
			div.setAttribute('class', 'col-4');
			div.appendChild(image);
			plan.appendChild(div);
		}
		document.getElementById('birth-form').setAttribute('class', 'hide');
	}

	document.getElementById('button').onclick = showPlan;

})();
