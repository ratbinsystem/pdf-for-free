import JButton from "../library/JButton";

export default () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-danger">
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
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <JButton text="Login" className="btn-outline-danger">
            <i className="bi bi-google text-warning"></i>
          </JButton>
        </div>
      </div>
    </nav>
  );
};
