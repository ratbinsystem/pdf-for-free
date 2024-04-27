import Search from "../component/search";
import JButton from "../library/JButton";
export default () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex" id="navbarTogglerDemo02">
          <Search />
          <JButton text="Login" className="btn-outline-danger d-flex me-0">
            <i className="bi bi-google text-warning pe-1"></i>
          </JButton>
        </div>
      </div>
    </nav>
  );
};
