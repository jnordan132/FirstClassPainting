import Logo from "../Logo";

function Change() {
  return (
    <div className="nav">
      <div className="mainInfo">
        <div className="logo">
          <Logo />
        </div>
        <div className="callForEst">
          <div>
            <h6>
              <b>Call For A Quote Today</b>
            </h6>
            <h2>
              <b>(910)-555-2893</b>
            </h2>
          </div>
        </div>
      </div>
      <div class="container-fullwidth">
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
                  <a href="/" class="nav-link active">
                    HOME
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/about" class="nav-link active">
                    ABOUT US
                  </a>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <div class="dropbtn">
                      RESIDENTIAL <div className="arrow">&#9660;</div>
                    </div>
                    <div class="dropdown-content">
                      <a href="/residential/exterior">EXTERIOR</a>
                      <a href="/residential/interior">INTERIOR</a>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <div class="dropbtn">
                      COMMERCIAL <div className="arrow">&#9660;</div>
                    </div>
                    <div class="dropdown-content">
                      <a href="/commercial/exterior">EXTERIOR</a>
                      <a href="/commercial/interior">INTERIOR</a>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <a href="/contact" class="nav-link active">
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

export default Change;
