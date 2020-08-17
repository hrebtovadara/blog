import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    blogItemsList: [
      {
        id: 4,
        userId: 1,
        name: 'мысль #4',
        text: 'человек-невидимка может встречаться со слепым человеком, и для второго эти отношения не будут чем-то необычным',
        date: new Date()
      },
      {
        id: 3,
        userId: 2,
        name: 'мысль #3',
        text: 'если курильщик впадет в кому на достаточно длинный срок, избавит ли это его от никотиновой зависисмости?',
        date: new Date()
      },
      {
        id: 2,
        userId: 3,
        name: 'мысль #2',
        text: 'когда мы говорим с кем-то во сне, мы не знаем, что нам ответит собеседник, хотя его слова придумывает наш мозг',
        date: new Date()
      },
      {
        id: 1,
        userId: 1,
        name: 'мысль #1',
        text: 'особенно резко точку зрения меняет удар в глаз',
        date: new Date()
      },
    ],
    counter: 5,
    users: [
      {
        id: 1,
        userLogin: "Киборг-убийца",
        userName: "Арнольд",
        userSurname: "Шварцнеггер",
      },
      {
        id: 2,
        userLogin: "Тот-кого-нельзя-называть",
        userName: "Том",
        userSurname: "Реддл",
      },
      {
        id: 3,
        userLogin: "Красотка",
        userName: "Леголас",
        userSurname: "Зеленолист",
      },
    ],
    comments: [
      {
        id: 1,
        userId: 1,
        thoughtId: 1,
        feedbackText: "YouTube: https://youtu.be/wSSE0thGmcc",
        date: new Date()
      },
      {
        id: 2,
        userId: 2,
        thoughtId: 1,
        feedbackText: "YouTube: https://youtu.be/QajyNRnyPMs",
        date: new Date()
      },
    ],
    commentsCounter: 3,
  },
  mutations: {
    addNewBlogPost(state, payload): any {
      state.blogItemsList.unshift({
        id: state.counter++,
        userId: payload.userId,
        name: payload.name,
        text: payload.text,
        date: new Date()
      })
    },
    removeComment(state, id) {
      state.comments = state.comments.filter(com => com.id != id);
    },
    addNewComment(state, payload) {
      state.comments.unshift({
        id: state.commentsCounter++,
        userId: payload.userId,
        thoughtId: payload.thoughtId,
        feedbackText: payload.feedbackText,
        date: new Date()
      })
    }
  },
  getters: {
    getCurrentThought: function (state) {
      return function (id: number) {
        return state.blogItemsList.find(el => el.id === id)
      }
    },
    getComments: function (state) {
      return function (id: number) {
        return state.comments.filter(el => el.thoughtId === id)
      }
    },
    getRandomUser: function (state) {
      return function () {
        const index = Math.floor(Math.random() * (state.users.length) + 1) - 1;
        return state.users[index];
      }
    },
    getUserById: function (state) {
      return function (id: number) {
        return state.users.find(el => el.id === id)
      }
    }
  },
  actions: {
    asyncChange(context, payload) {
      context.commit('addNewBlogPost', payload)
    },

    removeComment(context, payload) {
      context.commit('removeComment', payload)
    },

    addNewComment(context, payload) {
      context.commit('addNewComment', payload)
    }
  },
  plugins: [createPersistedState()],
});
