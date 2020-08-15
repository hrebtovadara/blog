<template>
  <div class="create">
    <h1>this is an create page</h1>
    <div class="create-recording">
        <label class="create-recording__label" for="create-recording__name">name recording</label>
        <input class="create-recording__name" id="create-recording__name" type="text" v-model="nameRecording">
        <label class="create-recording__label" for="create-recording__text">text recording</label>
        <textarea class="create-recording__text" id="create-recording__text" type="text" v-model="textRecording"></textarea>
        
        <button class="create-recording__button" @click="AddNewrecording">add new create-recording</button>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            nameRecording:'',
            textRecording: ''
        }
    },
    methods: {
        AddNewrecording() {
            this.$store.dispatch('asyncChange', {
                name:this.nameRecording, 
                text:this.textRecording
            })
        }
    }
}
</script>

<style>
    .create-recording {
        width: 400px;
        min-height: 400px;
        padding: 20px 0;
        border: 4px solid #42b983;
        border-radius: 10px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .create-recording:hover {
        background-color: #42b9834a;
    }

    .create-recording__name {
        width: 300px;
        border: 2px solid #389c6f;
        border-radius: 3px;
        margin-top: 10px;
        margin-bottom: 20px;
    }

     .create-recording__text {
        width: 300px;
        min-height: 200px;
        border: 2px solid #389c6f;
        border-radius: 3px;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .create-recording__label {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: #2c3e50;
        font-size: 20px;
    }

    .create-recording__button {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: #FFFFFF;
        font-size: 20px;
        background-color: #42b983;
        border: 2px solid #389c6f;
        border-radius: 5px;
        padding: 10px;
    }
</style>