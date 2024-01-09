document.addEventListener("DOMContentLoaded", function () {
	let currentImageIndex = 0;
	const images = document.querySelectorAll(".slider img");
	const dots = document.querySelectorAll(".dotSlider li");
	const intervalTime = 5000; // 5 secondes
	let interval; // Déclaration de la variable interval en dehors de la fonction

	function changeImage(index) {
		images.forEach((image) => {
			image.style.display = "none"; // Masque toutes les images
		});

		dots.forEach((dot) => {
			dot.classList.remove("active"); // Retire la classe 'active' de tous les li
		});

		currentImageIndex = index;

		if (currentImageIndex >= images.length) {
			currentImageIndex = 0; // Revient à la première image si on arrive à la fin
		} else if (currentImageIndex < 0) {
			currentImageIndex = images.length - 1; // Revient à la dernière image si on est au début
		}

		images[currentImageIndex].style.display = "block"; // Affiche l'image actuelle
		dots[currentImageIndex].classList.add("active"); // Ajoute la classe 'active' au li correspondant à l'image
	}

	function nextImage() {
		changeImage(currentImageIndex + 1);
	}

	function prevImage() {
		changeImage(currentImageIndex - 1);
	}

	// Affiche la première image au chargement de la page
	images[currentImageIndex].style.display = "block";
	dots[currentImageIndex].classList.add("active");

	// Change l'image toutes les 2 secondes
	interval = setInterval(nextImage, intervalTime);

	// Écouteur d'événement pour le bouton droit
	document.querySelector(".sliderDroit").addEventListener("click", function () {
		clearInterval(interval); // Arrête le défilement automatique
		nextImage();
		interval = setInterval(nextImage, intervalTime); // Redémarre le défilement automatique
	});

	// Écouteur d'événement pour le bouton gauche
	document
		.querySelector(".sliderGauche")
		.addEventListener("click", function () {
			clearInterval(interval); // Arrête le défilement automatique
			prevImage();
			interval = setInterval(nextImage, intervalTime); // Redémarre le défilement automatique
		});
});
