<template>
    <template>
        <MDBCarousel
          v-model="carousel5"
          :items="items5"
        />
      </template>
</template>

<script>
  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";
  export default {
    components: {
      MDBCarousel
    },
    setup() {
      const items5 = [
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp",
          alt: "...",
          label: "First slide label",
          caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp",
          alt: "...",
          label: "Second slide label",
          caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp",
          alt: "...",
          label: "Third slide label",
          caption:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        }
      ];
      const carousel5 = ref(0);
      return {
        items5,
        carousel5
      };
    }
  };
</script>

<style>
    
</style>