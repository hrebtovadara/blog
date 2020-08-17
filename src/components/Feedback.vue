<template>
  <div class="feedback">
    <p class="feedback__text">{{ feedbackText }}</p>
    <button class="feedback__remove" v-on:click="removeComment">&times;</button>

    <div class="feedback__info">
      <span class="feedback__info--login">{{user.userLogin}}</span>
      <br />
      <span>{{user.userName}}</span>
      <span>{{user.userSurname}}</span>
      <br />
      <span>{{date}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'


@Component 

export default class Feedback extends Vue {
  @Prop() readonly id!: number
  @Prop() readonly userId!: number
  @Prop() readonly feedbackText!: string
  @Prop() readonly date!: string

  get user():any {
      return this.$store.getters.getUserById(this.userId);
    }

  public removeComment():void {
      this.$store.dispatch("removeComment", this.id);
    }

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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
}

.feedback__remove {
  position: absolute;
  top: 5px;
  right: 5px;
}

.feedback__info {
  font-size: 10px;
  text-align: left;
}

.feedback__info--login {
  font-size: 12px;
  color: #1b5f40;
}
</style>