function Slider () {

    return (
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
    );
}

export default Slider 