import React from 'react';

function DivCTA() {
    const redirectToContact = () => {
        window.location.href = '/contact.html';
    };

    return (
        <div className="divCTA">
            <div className="divButton">
                <button onClick={redirectToContact}>
                    Parlez-nous.
                </button>
            </div>
        </div>
    );
}

export default DivCTA;
