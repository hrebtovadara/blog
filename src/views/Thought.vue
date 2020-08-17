<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div
      is="blogItem"
      v-bind:key="blogItem.id"
      v-bind:name="blogItem.name"
      v-bind:text="blogItem.text"
      v-bind:id="blogItem.id"
      v-bind:userId="blogItem.userId"
      v-bind:date="new Date()"
    ></div>

    <div class="feedback-container">
      <div class="feedback-container__new-comment">
        <label for="newComment">оставьте ваш комментарий:</label>
        <textarea class="feedback-container__text" id="newComment" v-model="newCommentText"></textarea>
        <button @click="addNewComment">добавить никому не нужное мнение</button>
      </div>

      <ul class="feedback-comments">
        <feed-back
          v-for="feedbackItem in feedbackList"
          v-bind:key="feedbackItem.id"
          v-bind:id="feedbackItem.id"
          v-bind:userId="feedbackItem.userId"
          v-bind:feedbackText="feedbackItem.feedbackText"
          v-bind:date="new Date()"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import blogItem from "@/components/BlogItem.vue";
import feedBack from "@/components/Feedback.vue";

@Component ({
  components: {
    blogItem,
    feedBack
  }
})

export default class Thought extends Vue {
  private counterComment = 2
  private newCommentText = ""

  get blogItem(): object {
      return this.$store.getters.getCurrentThought(this.selectedId);
    }
  get feedbackList(): Array<object> {
      return this.$store.getters.getComments(this.selectedId);
    }
  get selectedId(): number {
      return parseInt(this.$route.params.id);
    }

  public addNewComment(newCommentText: string): any {
      const user = this.$store.getters.getRandomUser();
      this.$store.dispatch("addNewComment", {
        feedbackText: this.newCommentText,
        thoughtId: this.selectedId,
        userId: user.id
      });
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