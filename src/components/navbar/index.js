import Logo from "../Logo";

function NavBar() {
  return (
    <div className="nav">
      <div className="logo">
        <Logo />
      </div>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
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
                  <a href="" id="one" class="nav-link active">
                    HOME
                  </a>
                </li>
                <li class="nav-item">
                  <a href="" id="two" class="nav-link active">
                    ABOUT US
                  </a>
                </li>
                <li class="nav-item">
                  <a href="" id="three" class="nav-link active">
                    RESIDENTIAL
                  </a>
                </li>
                <li class="nav-item">
                  <a href="" id="four" class="nav-link active">
                    COMMERCIAL
                  </a>
                </li>
                <li class="nav-item">
                  <a href="" id="five" class="nav-link active">
                    CONTACT US
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
