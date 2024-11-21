import './Header.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header() {
  return (
    <header className="bg-dark text-white shadow">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        {/* Logo and Brand */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="header-logo me-2" 
          />
          <span className="fs-4 fw-bold">Metal Constructions</span>
        </a>

        {/* Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#catalog">Catalog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacts">Contacts</a>
            </li>
          </ul>
          {/* Phone Button */}
          <a 
            href="tel:+1234567890" 
            className="btn btn-primary ms-lg-3"
          >
            +1 (234) 567-890
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;


