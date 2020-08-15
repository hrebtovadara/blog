<template>
    <div class="feedback">
      {{ feedbackText }}
      <button v-on:click="$emit('remove')">&times;</button>
    </div>
</template>

<script>
export default {
    props: ['feedbackText']
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