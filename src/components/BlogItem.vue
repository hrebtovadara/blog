<template>
  <div class="blog-item">
    <router-link class="blog-item__name" :to="path">{{name}}</router-link>
    <p class="blog-item__text">{{text}}</p>
    <div class="blog-item__autor">
      <p class="blog-item__autor--login">{{user.userLogin}}</p>
      <div class="blog-item__autor--name">
        <span class="blog-item__autor--firstname">{{user.userName}}</span>
        <span>{{user.userSurname}}</span>
      </div>
      <p class="blog-item__date">{{date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["id", "userId", "name", "text", "date"],
  computed: {
    path() {
      return "/" + this.id;
    },
    user() {
      return this.$store.getters.getUserById(this.userId);
    }
  }
};
</script>

<style>
.blog-item {
  box-sizing: border-box;
  width: 400px;
  min-height: 200px;
  padding: 20px;
  border: 4px solid #42b983;
  border-radius: 10px;
  margin: 0 auto;

  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.blog-item:hover {
  background-color: #42b98330;
}

.blog-item__name {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  font-size: 30px;
}

.blog-item__text {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  font-size: 20px;
}

.blog-item__autor {
  width: 200px;
  text-align: left;
}

.blog-item__autor--login {
  font-size: 20px;
  color: #1b5f40;
  margin-bottom: 10px;
}

.blog-item__autor--name {
  font-size: 12px;
  line-height: 12px;
}

.blog-item__autor--firstname {
  margin-right: 3px;
}

.blog-item__date {
  font-size: 10px;
  text-align: left;
}
</style>