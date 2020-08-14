<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div 
     is="blogItem"
          v-for="blogItem in indexBlogView"
          v-bind:key="blogItem.id"
          v-bind:name="blogItem.name"
          v-bind:text="blogItem.text"
    ></div>

     <div class="feedback-container">
       <div class="feedback-container__new-comment">
         <label for="newComment">оставьте ваш комментарий:</label>
         <textarea class="feedback-container__text" id="newComment" v-model="newCommentText"></textarea>
         <button @click="addNewComment">добавить никому не нужное мнение</button>
       </div>

      <ul class="feedback-comments">
        <li
          is="feedBack"
          v-for="feedbackItem in feedbackList"
          v-bind:key="feedbackItem.id"
          v-bind:feedbackText="feedbackItem.feedbackText"
        ></li>
      </ul>
       
     </div>
  </div>

 
</template>

<script>
import blogItem from "../components/BlogItem.vue"
import feedBack from "../components/Feedback.vue"

export default {
  data: function () {
    return {
      feedbackList: [
        {
          id: 1,
          feedbackText: "Жизнь за Нерзула!11"
        }
      ],
      counterComment: 2,
      newCommentText: ''
    }
  },
  components: {
    blogItem,
    feedBack
  },
  computed: {
    indexBlogView() {
      return this.$store.state.blogItemsList.slice(0,1)
    }
  },
  methods: {
    addNewComment(newCommentText) {
        this.feedbackList.push({
            id: this.counterComment,
            feedbackText: this.newCommentText
        })
    }
  }
}
</script>

<style>
    .feedback-container__new-comment {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      margin: 0 auto;
      border-radius: 10px;
      width: 360px;
      height: 200px;
    }

    .feedback-container {
      box-sizing: border-box;
        width: 400px;
        min-height: 500px;
        padding: 20px 0;
        border: 4px solid #42b983;
        border-radius: 10px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .feedback-container__text {
        border: 2px solid #42b983;
        border-radius: 10px;
        width: 280px;
        height: 100px;
    }

    .feedback-comments {
      padding: 0;
    }
</style>