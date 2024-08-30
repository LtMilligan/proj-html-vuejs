<template>
    <header class="app-header">
      <!-- Top Bar -->
      <div class="top-bar bg-dark text-light py-2 border-bottom border-dark-subtle">
        <div class="container d-flex justify-content-between">
          <div>
            <a href="#" class="text-light me-3">Wishlist(0)</a>
            <a href="#" class="text-light">Need Help?</a>
          </div>
          <div>
            <span>Call 24/7: 800-8754-987</span>
          </div>
        </div>
      </div>
  
      <!-- Main Navigation Bar -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <!-- Logo -->
          <a class="navbar-brand" href="#">
            <img src="../assets/logo.png" alt="GameHoax Logo" height="40" />
          </a>
          
          <!-- Toggle button for mobile view -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <!-- Navbar Links -->
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <AppMenuHead v-for="(link, index) in arrays.navLinks" :key="index" :link="link"/>
            </ul>
          </div>
          <div class="d-flex">
            <a href="#" class="text-light me-3">
              <i class="bi bi-search"></i>
            </a>
            <a href="#" class="text-light me-3">
              <i class="bi bi-person"></i>
            </a>
            <a href="#" class="text-light">
              <i class="bi bi-bag"></i>
              <span class="ms-1 text-orange">(0) £0.00</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  import { arrays } from "../arrey"
  import AppMenuHead from "./AppMenuHead.vue";

  export default {
    name: "AppHeader",
    data() {
      return {
        arrays
      }
    },
    components: {
      AppMenuHead
    }
  };
  </script>
  
  <style scoped>
  .top-bar a {
    text-decoration: none;
    font-size: 0.9rem;
  }
  
  .navbar-brand img {
    height: 40px;
  }
  
  .nav-link {
    font-weight: bold;
  }
  
  .nav-link.active,
  .nav-link:hover {
    color: #ffaa00 !important;
  }
  
  .bi {
    font-size: 1.2rem;
  }

  .text-orange {
    color: #ffaa00;
  }
  </style>
  