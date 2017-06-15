(function () {

	var i;
	var radio;
	var form;
	var selectedImages;
	var allImages;

	var BPGRoutes = "https://e3hr1v9ebl.execute-api.us-west-2.amazonaws.com/prod";
	var s3BucketURL = "https://s3-us-west-2.amazonaws.com/bpg-image-test";

	function fetchImages() {

		return fetch(`${BPGRoutes}/data/BPG-Data-images-MVLLBSNLK1D4`, {
			method: "GET",
			mode: 'cors'
		}).then(function(res) {
			return res.json();
		}).then(function(data) {
			allImages = data.body;
			return data.body;
		});
	};

	function displayImage(images) {
		for (i=0;i<images.length;i++) {
			form = document.getElementById('images');
			container = document.getElementById('images');
			image = document.createElement('img');
			image.setAttribute('src', `${s3BucketURL}/${images[i].name}`);
			image.setAttribute('id', images[i].id);
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
	}

	function previewPlan(selectedImages) {
		selectedImages = selectedImages || document.querySelectorAll('[select]');
		console.log(selectedImages);
		// add name to page
		var name = document.getElementById('name');
		var selectedImageElement = document.getElementById('selectedImageElement');

		var nameInput = document.getElementById('name-field').value;

		selectedImageElement.setAttribute('class', 'show');
		name.innerHTML = nameInput;
		//title.setAttribute('class', 'show');

		// add selected images to pages
		for(i=0;i<selectedImages.length;i++){
			var src = selectedImages[i].src || `${s3BucketURL}/${selectedImages[i].name}`
			var plan = document.getElementById('birth-plan');
			var div = document.createElement('div');
			var image = document.createElement('img');

			image.setAttribute('src', src);
			div.setAttribute('class', 'col-4');
			div.appendChild(image);
			plan.appendChild(div);
		}
		document.getElementById('birth-form').setAttribute('class', 'hide');
	}

	function randomID() {
		var letters = 'abcdefghijklmnopqrstuvxyz';
		var numbers = '1234567890';
		var sets = [letters, numbers];
		var id = '';

		for (i=0;i<12;i++) {
			var set = sets[Math.floor(Math.random() * sets.length)];
			var character = set[Math.floor(Math.random() * set.length)];
			if (set.length === letters.length && Math.round(Math.random())) character = character.toUpperCase();
			id = id.concat(character);
		}
		return id;
	}

	function savePlan(id) {
		var formIds = [];
		id = id || randomID();
		var i;

		for (i=0;i<selectedImages.length;i++) {
			formIds.push(selectedImages[i].id);
		}

		if (!id) id = randomID();

		var planData = {
			selectedImages: formIds
		};

		fetch(`${BPGRoutes}/data/BPG-formData/${id}`, {
			method: "PUT",
			headers: {
				'Content-Type': 'application/json'
			},
			mode: 'cors',
			body: JSON.stringify(planData)
		})
	}

	function fetchBirthPlan(id) {
		if (!id) return null;

		fetch(`${BPGRoutes}/data/BPG-formData/${id}`, {
			method: "GET",
			mode: 'cors',
		}).then(function(res) {
			return res.json();
		}).then(function(data) {
			var selectedImages = data.body.selectedImages;
			return previewPlan(allImages.filter(function(imageData) {
				var i;
				for (i=0;i<selectedImages.length;i++) {
					if (selectedImages[i] === imageData.id) return true;
				}
				return false;
			}))
		})
	}

	document.getElementById('previewPlan').onclick = function() {previewPlan()};
	document.getElementById('savePlan').onclick = function() {savePlan()};
	document.getElementById('fetchBirthPlan').onclick = function() {
		var id = document.getElementById('birthPlanId').value;
		fetchBirthPlan(id);
	};

	fetchImages().then(displayImage);
})();
