<template>
  <div class="blog-item">
    <router-link class="blog-item__name" to="/about">{{name}}</router-link>
    <p class="blog-item__text">{{text}}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      selectedPlace: {}
    };
  },
  methods: {}
};
</script>