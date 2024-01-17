import React from 'react';

function Footer() {
    const redirectToContact = () => {
        window.location.href = '/contact.html';
    };

    return (
        <footer>
            <div className="footerButton">
                <a href="#">
                    <img src="/src/Assets/instagram.svg" alt="Instagram" />
                </a>
                <a href="#">
                    <img src="/src/Assets/whatsapp.svg" alt="WhatsApp" />
                </a>
                <a href="#" onClick={redirectToContact}>
                    <img src="/src/Assets/appel-telephonique.svg" alt="Téléphone" />
                </a>
            </div>
            <div className="footerLinks">
                <a href="/contact.html">Nous contacter</a>
                <a href="/">Accueil</a>
                <p>Site conçu par Pmerandon</p>
            </div>
        </footer>
    );
}

export default Footer;
