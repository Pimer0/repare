

const ButtonContacte = () => {
  const redirectToContactPage = () => {
    window.location.href = '/contact.html';
  };

  return (
    <div className="boutonContacte">
      <button onClick={redirectToContactPage}>
        Nous contacter
      </button>
    </div>
  );
};

export default ButtonContacte;
