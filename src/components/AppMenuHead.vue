<template>
    <li class="nav-item">
        <a class="nav-link" :href="link.url" :class="{ active: link.active }">{{ link.text }}</a>
      </li>
</template>
<script>
export default {
    props: {
        link: Object,
    }
}
</script>
<style scoped>
.nav-link {
    font-weight: bold;
    margin-left: 15px;
    margin-right: 15px;
  }
  
  .nav-link.active,
  .nav-link:hover {
    color: #ffaa00 !important;
  }
</style>