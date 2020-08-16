<template>
  <div class="feedback">
    {{ feedbackText }}
    <button v-on:click="removeComment">&times;</button>
  </div>
</template>

<script>
export default {
    props: ['id', 'feedbackText'],
    methods: {
      removeComment() {
        this.$store.dispatch('removeComment', this.id)
    }}
}
</script>

<style>
.feedback {
  box-sizing: border-box;
  width: 360px;
  min-height: 50px;
  padding: 10px;
  border: 2px solid #42b983;
  border-radius: 10px;
  margin: 10px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
</style>