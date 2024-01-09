import ButtonContacte from './ButtonContacte';

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="/index.html">
          <img src="/src/Assets/Repare.svg" alt="Logo Repare" />
        </a>
      </div>
      <ButtonContacte />
    </header>
  );
}

export default Header;
