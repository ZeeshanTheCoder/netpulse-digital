// footer.js

document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
     <footer class="py-0">
      <div class="ecg-rhythm" style="top: 0; left: 20%"></div>
      <div
        class="ecg-rhythm"
        style="top: 0; right: 20%; animation-delay: 1s"
      ></div>
      <div class="footer-row m-0">
        <div class="footer-col footer-logo" style="--i: 0">
          <img src="assets/img/net.jpg" height="110px" alt="Netpulse Logo" />
          <ul class="mt-2">
            <li>
              <i class="flaticon-email me-2"></i>netpulsedigitalS@gmail.com
            </li>
            <li><i class="flaticon-call me-2"></i> +1 832 220 8552</li>
          </ul>
        </div>

        <div class="footer-col" style="--i: 1">
          <h5>Pages</h5>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>

        <!-- New Services Column -->
        <div class="footer-col" style="--i: 2">
          <h5>Services</h5>
          <ul>
            <li><a href="DigitalMarketing.html">Digital Marketing</a></li>
            <li><a href="Design.html">Creative Design</a></li>
            <li><a href="Web.html">Web Development</a></li>
            <li><a href="AIAutomation.html">AI Automation</a></li>
            <li><a href="Ebooks.html">E-Books</a></li>
            <li><a href="MobileApp.html">Mobile App Development</a></li>
          </ul>
        </div>

        <div class="footer-col" style="--i: 3">
          <h5>Latest Posts</h5>
          <ul>
            <li><a href="blog-detail.html">Top 5 Marketing Trends - Jul 22, 2025</a></li>
            <li>
              <a href="blog-detail.html">Why Responsive Design Matters - Jul 10, 2025</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom pb-2">
        <div>&copy; 2025 Netpulse Digital. All rights reserved.</div>
        <div>
          <a>Terms</a>
          <a>Privacy</a>
          <a>Support</a>
        </div>
      </div>
    </footer>
  `;

  const footerContainer = document.getElementById("footer");
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  } else {
    console.error("No element with ID 'footer' found to inject the footer.");
  }
});
