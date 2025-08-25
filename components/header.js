// header.js

document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
      <nav class="navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed dark no-background">
        <div class="container d-flex justify-content-between align-items-center">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i class="fa fa-bars"></i>
            </button>
            <a href="index.html">
              <img src="assets/img/net.jpg" alt="logo" height="110px" />
            </a>
          </div>
          <div class="collapse navbar-collapse" id="navbar-menu">
           <button
              type="button"
              class="navbar-toggle close-btn"
              data-toggle="collapse"
              data-target="#navbar-menu"
              aria-label="Close navigation menu"
            >
              <i class="fa fa-times" aria-hidden="true"></i>
          </button>
            <ul
              class="nav navbar-nav navbar-center"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li><a href="index.html" class="active">Home</a></li>
              <li><a href="about.html">About us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="overlay-screen"></div>
      </nav>
  `;

  const headerContainer = document.getElementById("header");
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
  } else {
    console.error("No element with ID 'header' found to inject the header.");
  }
});
