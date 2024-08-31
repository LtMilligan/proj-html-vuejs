<template>
    <footer class="app-footer bg-dark text-light py-5">
      <div class="container">
        <div class="row">
          <!-- Address Info -->
          <div class="col-lg-3 col-md-6 mb-4">
            <h5 class="text-uppercase mb-4">Address Info</h5>
            <p>
              <i class="bi bi-geo-alt-fill me-2"></i>
              60 29th Street San Francisco, CA 94110
            </p>
            <p>
              507-Union Trade Center, United States of America
            </p>
            <p>
              <i class="bi bi-telephone-fill me-2"></i>
              (+00) 123-456-789
            </p>
            <p>
              <i class="bi bi-envelope-fill me-2"></i>
              demo@example.com
            </p>
          </div>
  
          <!-- Information Links -->
          <div class="col-lg-3 col-md-6 mb-4">
            <h5 class="text-uppercase mb-4">Information</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-light text-decoration-none">Bookmark</a></li>
              <li><a href="#" class="text-light text-decoration-none">Features</a></li>
              <li><a href="#" class="text-light text-decoration-none">Sitemap</a></li>
              <li><a href="#" class="text-light text-decoration-none">Lists</a></li>
              <li><a href="#" class="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>
  
          <!-- Extras Links -->
          <div class="col-lg-3 col-md-6 mb-4">
            <h5 class="text-uppercase mb-4">Extras</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-light text-decoration-none">Delivery</a></li>
              <li><a href="#" class="text-light text-decoration-none">Cart</a></li>
              <li><a href="#" class="text-light text-decoration-none">Terms & Conditions</a></li>
              <li><a href="#" class="text-light text-decoration-none">My Account</a></li>
              <li><a href="#" class="text-light text-decoration-none">About Us</a></li>
            </ul>
          </div>
  
          <!-- Newsletter -->
          <div class="col-lg-3 col-md-6 mb-4">
            <h5 class="text-uppercase mb-4">Our Newsletter</h5>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
            <form class="input-group">
              <input type="email" class="form-control" placeholder="Enter your email" aria-label="Enter your email">
              <button class="btn btn-warning" type="submit">
                <i class="bi bi-arrow-right"></i>
              </button>
            </form>
            <!-- Social Media Links -->
            <div class="mt-4">
              <a href="#" class="text-light me-3"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-light me-3"><i class="bi bi-twitter"></i></a>
              <a href="#" class="text-light me-3"><i class="bi bi-google"></i></a>
              <a href="#" class="text-light me-3"><i class="bi bi-instagram"></i></a>
              <a href="#" class="text-light"><i class="bi bi-skype"></i></a>
            </div>
          </div>
        </div>
      </div>
      <!-- Bottom Footer -->
      <div class="bg-darker text-center py-3">
        <div class="container d-flex justify-content-between align-items-center">
          <p class="mb-0">&copy; 2023 Codezeel</p>
          <!-- Payment Icons -->
           <!-- RICORDARE DI FARE LE IMMAGINI DEI PAGAMENTI DA UNICO FILE A VARI -->
          <div>
            <img src="" alt="American Express" height="25">
            <img src="" alt="Discover" height="25">
            <img src="" alt="PayPal" height="25">
            <img src="" alt="Visa" height="25">
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "AppFooter",
  };
  </script>
  
  <style scoped>
  .app-footer {
    background-image: url('/path-to-your-background-image.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .bg-darker {
    background-color: #111;
  }
  
  h5 {
    font-weight: bold;
  }
  
  .bi {
    font-size: 1.5rem;
  }
  
  .form-control {
    border: none;
    border-radius: 0;
  }
  
  .btn-warning {
    border-radius: 0;
  }
  
  .list-unstyled li a:hover {
    color: #ffaa00;
  }
  
  a.text-light:hover {
    color: #ffaa00;
  }
  </style>
  