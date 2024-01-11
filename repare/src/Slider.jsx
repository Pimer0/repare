import React, { useEffect, useState } from 'react';

const Slider = () => {
  useEffect(() => {
    let currentImageIndex = 0;
    const images = document.querySelectorAll(".slider img");
    const dots = document.querySelectorAll(".dotSlider li");
    const intervalTime = 5000; // 5 secondes
    let interval; // Déclaration de la variable interval en dehors de la fonction

    function changeImage(index) {
      images.forEach((image, i) => {
        image.style.display = i === index ? "block" : "none";
      });

      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }

    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      changeImage(currentImageIndex);
    }

    function prevImage() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      changeImage(currentImageIndex);
    }

    // Affiche la première image au chargement de la page
    changeImage(currentImageIndex);

    // Change l'image toutes les 5 secondes
    interval = setInterval(nextImage, intervalTime);

    // Écouteur d'événement pour le bouton droit
    document.querySelector(".sliderDroit").addEventListener("click", function () {
      clearInterval(interval); // Arrête le défilement automatique
      nextImage();
      interval = setInterval(nextImage, intervalTime); // Redémarre le défilement automatique
    });

    // Écouteur d'événement pour le bouton gauche
    document.querySelector(".sliderGauche").addEventListener("click", function () {
      clearInterval(interval); // Arrête le défilement automatique
      prevImage();
      interval = setInterval(nextImage, intervalTime); // Redémarre le défilement automatique
    });

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []); // Le tableau de dépendances est vide, donc useEffect s'exécutera une seule fois au montage.

  return (
    <div className="Slider">
      <div className="contentSlider">
        <button className="sliderGauche">
          <img src="/src/Assets/angle-droit (gauche).png" alt="bouton gauche" />
        </button>
        <div className="slider">
          <img
            src="/src/Assets/salvador-escalante-EfjlkpoGjs4-unsplash.jpg"
            alt="Image 1"
          />
          <img src="/src/Assets/IMG_05062.png" alt="Image 2" />
          <img src="/src/Assets/IMG_05063.png" alt="Image 3" />
        </div>
        <button className="sliderDroit">
          <img src="/src/Assets/angle-droit (droit).png" alt="bouton droit" />
        </button>
      </div>
      <div className="containerDotSlider">
        <div className="dotSlider">
          <li className="listeUn"></li>
          <li className="listeDeux"></li>
          <li className="listeTrois"></li>
        </div>
      </div>
    </div>
  );
}

export default Slider;
