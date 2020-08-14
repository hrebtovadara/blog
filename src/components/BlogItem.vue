<template>
    <div class="blog-item">
        <router-link class="blog-item__name" to="/about">{{name}}</router-link>
        <p class="blog-item__text">{{text}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: [
        "name",
        "text"
    ]
}
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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
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
</style>