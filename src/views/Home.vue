<template>
  <div class="home">
    <div class="blog__banner">
      <h1 class="blog__banner-title">Welcome, leather sack!</h1>
    </div>

    <div class="blog__container">
      <h2 class="blog__container-title">Your stupid thoughts</h2>
      <ul class="blog__list">
        <li 
          is="blogItem"
          v-for="blogItem in blogItemsList"
          v-bind:key="blogItem.id"
          v-bind:name="blogItem.name"
          v-bind:text="blogItem.text"
          v-on:click="indexBlogItem"

        ></li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import blogItem from "../components/BlogItem.vue"

export default {
  data: function () {
    return {
    }
  },
  components: {
    blogItem: blogItem
  },
  computed: {
    blogItemsList() {
      return this.$store.state.blogItemsList
    },
   
  },
  methods: {
     indexBlogItem() {
        console.log(3) 
    
    }
  }
}

</script>

<style>
  .blog__banner {
    background-color: #42b983;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .blog__banner-title {
    color: #ffffff;
   
  }

  .blog__list {
    padding: 0;
  }


</style>
