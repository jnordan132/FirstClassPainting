function NavBar() {
  return (
    <div className="nav">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <h4>First Class Painting</h4>
            <button
              class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="toggler-icon top-bar"></span>
              <span class="toggler-icon middle-bar"></span>
              <span class="toggler-icon bottom-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a href="" class="nav-link active">
                    nav_1
                  </a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link active">
                    nav_2
                  </a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link active">
                    nav_3
                  </a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link active">
                    nav_4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
