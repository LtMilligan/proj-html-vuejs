<template>
    <main class="app-main">
      <!-- Hero Section -->
      <section class="hero-section text-light py-5">
        <div class="container text-left">
          <h2 class="display-5">Upcoming Stock</h2>
          <h1 class="display-2 fw-bold">Resident Evil 3 <br> Remake</h1>
          <button class="btn btn-light btn-lg rounded-0 mt-3" style=":hover ">Shop Now</button>
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="features-section text-light py-4">
        <div class="container d-flex justify-content-around text-center">
          <div>
            <i class="bi bi-truck display-4"></i>
            <p class="mt-2">Free Delivery</p>
          </div>
          <div>
            <i class="bi bi-coin display-4"></i>
            <p class="mt-2">Money Return</p>
          </div>
          <div>
            <i class="bi bi-percent display-4"></i>
            <p class="mt-2">Member Discount</p>
          </div>
          <div>
            <i class="bi bi-arrow-counterclockwise display-4"></i>
            <p class="mt-2">Return Policy</p>
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
                <img src="../assets/category-image-01-446x550_t.jpg" class="img-fluid mb-3" alt="Category Image 1">
                <div class="position-absolute absolute-text">
                  <h4>Batman</h4>
                  <a href="#" class="text-y-path">Shop now</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="category-card text-light position-relative">
                <img src="../assets/category-image-02-446x550_t.jpg" class="img-fluid mb-3" alt="Category Image 2">
                <div class="position-absolute absolute-text">
                  <h4>Bayonetta</h4>
                  <a href="#" class="text-y-path">Shop now</a>
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
            <div class="col-1 p-2 border border-end-0 text-center">
              <a class="text-over">Featured</a>
            </div>
            <div class="col-1 p-2 border text-center">
              <a class="text-over">New Arrival</a>
            </div>
            <div class="col-1 p-2 border border-start-0 text-center">
              <a class="text-over">Best sellers</a>
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
      <section class="testimonial-section text-light py-5">
        <div class="container text-center">
          <blockquote class="blockquote">
            <p class="mb-4">"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."</p>
            <footer class="blockquote-footer text-light">
              Lukas Chris <cite title="Source Title">(Web Designer)</cite>
            </footer>
          </blockquote>
        </div>
      </section>
  
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
            <img src="../assets/brand-01.png" alt="Brand 1" height="40">
            <img src="../assets/brand-02.png" alt="Brand 2" height="40">
            <img src="../assets/brand-03.png" alt="Brand 3" height="40">
            <img src="../assets/brand-04.png" alt="Brand 4" height="40">
            <img src="../assets/brand-05.png" alt="Brand 5" height="40">
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script>
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

  .absolute-text {
    bottom: 15px;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    padding: 10px;
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
  }
  </style>
  