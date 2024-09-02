<template>
    <main class="app-main">
      <!-- Hero Section -->
      <section class="hero-section text-light py-5">
        <div class="container text-left">
          <div class="bg-trapezio">
            <h2 class="display-5 fw-bold">Upcoming Stock</h2>
          </div>
          <h1 class="display-2 fw-bold mb-5">Resident Evil 3 <br> Remake</h1>
          <button class="btn btn-light btn-lg rounded-0 mt-3">Shop Now</button>
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="features-section text-light py-4 mt-5">
        <div class="container d-flex justify-content-around text-center">
          <div>
            <div class="d-inline-block">
              <i class="bi bi-truck display-4"></i>
            </div>
            <div class="d-inline-block text-start ms-4">
              <p class="fw-bold p-0 m-0">Free Delivery</p>
              <p>Free Shipping On All Order</p>
            </div>
          </div>
          <div>
            <div class="d-inline-block">
              <i class="bi bi-coin display-4"></i>
            </div>
            <div class="d-inline-block text-start ms-4">
              <p class="fw-bold p-0 m-0">Money Return</p>
              <p>Back Guarantee in 7 days</p>
            </div>
          </div>
          <div>
            <div class="d-inline-block">
              <i class="bi bi-percent display-4"></i>
            </div>
            <div class="d-inline-block text-start ms-4">
              <p class="fw-bold p-0 m-0">Member Discount</p>
              <p>On every order over $130.00</p>
            </div>
          </div>
          <div>
            <div class="d-inline-block">
              <i class="bi bi-arrow-counterclockwise display-4"></i>
            </div>
            <div class="d-inline-block text-start ms-4">
              <p class="fw-bold p-0 m-0">Return Policy</p>
              <p>Support 24 hours a day</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Double Game Section -->
      <section class="double-game py-5">
        <div class="container">
          <div class="row d-flex justify-content-between">
            <div class="col-6 position-relative">
              <img src="../assets/cms-banner-01.jpg" alt="Banner-01" width="100%">
              <div class="position-absolute absolute-double">
                <div class="bg-trapezio-double mb-4">
                  <h3 class="fw-bold fst-italic">Most Popular</h3>
                </div>
                <h2 class="fw-bold text-light">The Battlefield 4<br>Naval Strike</h2>
              </div>
            </div>
            <div class="col-6 position-relative">
              <img src="../assets/cms-banner-02.jpg" alt="Banner-02" width="100%">
              <div class="position-absolute absolute-double">
                <div class="bg-trapezio-double mb-4">
                  <h3 class="fw-bold fst-italic">Latest Game</h3>
                </div>
                <h2 class="fw-bold text-light">Assassin's Creed<br>Unity Game</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Special Category Section -->
      <section class="special-category py-5">
        <div class="container">
          <h2 class="text-center text-light mb-5">Special Category</h2>
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="category-card text-light position-relative">
                <img src="../assets/category-image-02-446x550_t.jpg" class="img-fluid mb-3" alt="Category Image 1">
                <div class="position-absolute absolute-text">
                  <h4>Batman</h4>
                  <a href="#" class="text-y-path">Shop now</a>
                </div>
                <div class="position-absolute absolute-button">
                  <button class="btn" type="button">Batman</button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="category-card text-light position-relative">
                <img src="../assets/category-image-01-446x550_t.jpg" class="img-fluid mb-3" alt="Category Image 2">
                <div class="position-absolute absolute-text">
                  <h4>Bayonetta</h4>
                  <a href="#" class="text-y-path">Shop now</a>
                </div>
                <div class="position-absolute absolute-button">
                  <button class="btn" type="button">Bayonetta</button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="category-card text-light position-relative">
                <img src="../assets/category-image-03-446x550_t.jpg" class="img-fluid mb-3" alt="Category Image 3">
                <div class="position-absolute absolute-text">
                  <h4>Dark Solus</h4>
                  <a href="#" class="text-y-path">Shop now</a>
                </div>
                <div class="position-absolute absolute-button">
                  <button class="btn" type="button">Dark Souls</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Our Products Section -->
      <section class="our-products text-light py-5">
        <div class="container">
          <h2 class="text-center mb-5">Our Products</h2>
          <div class="row justify-content-center mb-5">
            <div class="col-2 p-2 border border-end-0 text-center">
              <a class="text-decoration-none text-over">Featured</a>
            </div>
            <div class="col-2 p-2 border text-center">
              <a class="text-decoration-none text-over">New Arrival</a>
            </div>
            <div class="col-2 p-2 border border-start-0 text-center">
              <a class="text-decoration-none text-over">Best sellers</a>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-4 mb-4" v-for="product in products" :key="product.id">
              <div class="product-card bg-cards text-light">
                <img :src="product.image" class="img-fluid mb-3" :alt="product.name">
                <div class="text-cards">
                  <div class="product-rating mb-2">
                    <i v-for="n in 5" :key="n" class="bi" :class="n <= product.rating ? 'bi-star-fill text-warning' : 'bi-star-fill text-secondary'"></i>
                  </div>
                  <h5>{{ product.name }}</h5>
                  <p v-if="product.sale_price===null" class="text-y-path">&pound; {{ product.full_price }}</p>
                  <p v-else class="text-y-path"><del>&pound; {{ product.full_price }}</del> &pound; {{ product.sale_price }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Double Game Section -->
      <section class="double-game py-5">
        <div class="container">
          <div class="row d-flex justify-content-between">
            <div class="col-6 position-relative">
              <img src="../assets/cms-banner-03.jpg" alt="Banner-03" width="100%">
              <div class="position-absolute absolute-double">
                <div class="bg-trapezio-double mb-4">
                  <h3 class="fw-bold fst-italic">20% Discount</h3>
                </div>
                <h2 class="fw-bold text-light">Dragon's Dogma<br>Video Game</h2>
              </div>
            </div>
            <div class="col-6 position-relative">
              <img src="../assets/cms-banner-04.jpg" alt="Banner-04" width="100%">
              <div class="position-absolute absolute-double">
                <div class="bg-trapezio-double mb-4">
                  <h3 class="fw-bold fst-italic">30% Discount</h3>
                </div>
                <h2 class="fw-bold text-light">World Of Tanks<br>New Game</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Deal of the Day Section -->
      <section class="deal-of-the-day py-5">
        <div class="container text-center text-light">
          <h2 class="mb-4">Deal Of The Day</h2>
          <div class="row justify-content-center mb-5">
            <div class="col-1 p-2 border border-end-0 text-center">
              <span>1026 days</span>
            </div>
            <div class="col-1 p-2 border text-center">
              <span>13 hours</span>
            </div>
            <div class="col-1 p-2 border border-start-0 text-center">
              <span>24 mins</span>
            </div>
            <div class="col-1 p-2 border border-start-0 text-center">
              <span>17 secs</span>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-4 mb-4" v-for="deal in deals" :key="deal.id">
              <div class="deal-card bg-cards text-light">
                <img :src="deal.image" class="img-fluid mb-3" :alt="deal.name">
                <div class="text-cards">
                  <div class="deal-rating mb-2">
                    <i v-for="n in 5" :key="n" class="bi" :class="n <= deal.rating ? 'bi-star-fill text-warning' : 'bi-star-fill text-secondary'"></i>
                  </div>
                  <h5>{{ deal.name }}</h5>
                  <p class="text-y-path">&pound; {{ deal.price }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Testimonial Section -->

  
      <!-- New Game Blogs Section -->
      <section class="new-game-blogs py-5">
        <div class="container">
          <h2 class="text-center text-light mb-5">New Game Blogs</h2>
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4" v-for="blog in blogs" :key="blog.id">
              <div class="blog-card text-light">
                <img :src="blog.image" class="img-fluid mb-3" :alt="blog.title">
                <!-- AGGIUNGERE AL CICLO LA DATA DI PUBBLICAZIONE ED IL NUMERO DI COMMENTI -->
                <h5>{{ blog.title }}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Brands Section -->
      <section class="brands-section text-light py-4">
        <div class="container text-center">
          <div class="d-flex justify-content-around">
            <img src="../assets/brand-01.png" alt="Brand 1" height="70">
            <img src="../assets/brand-02.png" alt="Brand 2" height="70">
            <img src="../assets/brand-03.png" alt="Brand 3" height="70">
            <img src="../assets/brand-04.png" alt="Brand 4" height="70">
            <img src="../assets/brand-05.png" alt="Brand 5" height="70">
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  import AppCarousel from './AppCarousel.vue';

  export default {
    name: "AppMain",
    data() {
      return {
        products: [
          { id: 1, name: "Shopping Mahjong connect", image: "/src/assets/04.jpg", full_price: "180", sale_price: "100", rating: 4},
          { id: 2, name: "BangBangShooting", image: "/src/assets/09.jpg", full_price: "83 - 90", sale_price: null, rating: 0},
          { id: 3, name: "Taishou x Alice Epilogue", image: "/src/assets/03.jpg", full_price: "150", sale_price: null, rating: 0},
          { id: 4, name: "Labyrinths of the World", image: "/src/assets/11.jpg", full_price: "100", sale_price: null, rating: 2}
        ],
        deals: [
            { id: 1, name: "Shopping Mahjong connect", image: "/src/assets/04.jpg", price: "100", rating: 4},
          { id: 2, name: "BangBangShooting", image: "/src/assets/18.jpg", price: "56", rating: 0},
          { id: 3, name: "Buddy and Lucky Solitaire", image: "/src/assets/02.jpg", price: "150", rating: 0},
          { id: 4, name: "Taishou x Alice Epilogue", image: "/src/assets/10.jpg", price: "160", rating: 0}  
        ],
        blogs: [
          { id: 1, title: "Anyway REPS is a NYC agency repres enting photographers", image: "/src/assets/Nisi-ut-aliquid-ex-ea-com-1400x878_t.jpg" },
          { id: 2, title: "Nusual risus suscipit Lorem Ipsum is simply text", image: "/src/assets/Architecto-beatae-vitae-dicta-1400x878_t.jpg" },
          { id: 3, title: "Nostrum Iesum Christum Lorem Ipsum is simply text", image: "/src/assets/At-vero-eos-et-accusamus-1400x878_t.jpg" }
        ],
      };
      
    },
    components: {
      AppCarousel
    }
  };
  </script>
  
  <style scoped>
  .hero-section {
    color: #fff;
    background-image: url('/src/assets/jumbo.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 900px;
  }
  
  .features-section .bi {
    font-size: 3rem;
  }

  .features-section i:hover {
    color: #f9aa01;
  }
  
  .category-card {
    border-radius: 8px;
  }
  
  .product-card, .deal-card, .blog-card {
    text-align: left;
    border-radius: 8px;
  }

  .text-cards {
    padding-left: 5px;
  }
  
  .countdown-timer div {
    min-width: 90px;
    font-size: 26px;
  }
  
  blockquote {
    font-size: 1.5rem;
    border-left: 0.25rem solid #f9aa01;
  }
  
  .brands-section img {
    opacity: 0.8;
    transition: opacity 0.3s;
  }
  
  .brands-section img:hover {
    opacity: 1;
  }

  button:hover {
    background-color: #f9aa01;
  }

  .text-y-path {
    color: #f9aa01;
  }

  .bg-y-path {
    background-color: #f9aa01;
  }

  .bg-trapezio {
    background-color: #f9aa01;
    width: 450px;
    clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
    text-align: center;
    margin-top: 230px;
    margin-bottom: 50px;
    color: black;
  }

  .bg-trapezio-double {
    background-color: #f9aa01;
    width: 220px;
    clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
    text-align: center;
    color: black;
    padding-top: 5px;
  }

  .absolute-text {
    bottom: 15px;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    padding: 10px;
  }

  .absolute-button {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f9aa01;
    color: black;
    display: none;
  }

  .category-card:hover {
    .absolute-button {
      display: block;
    }
  }

  .text-over {
    color: white;
  }

  .text-over:hover {
    color: #f9aa01;
  }

  .bg-cards {
    background-color: #170E1F;
  }

  .app-main {
    background-image: url("../assets/body-bg.jpg");
  }

  .testimonial-section {
    background-image: url("../assets/parallax.jpg");
    background-position: center;
    padding: 50px 0;
  }

  .absolute-double {
    top: 60px;
    left: 300px;
  }
  </style>
  