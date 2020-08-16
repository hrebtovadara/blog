import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogItemsList: [
      {
        id: 4,
        name: 'мысль #4',
        text: 'человек-невидимка может встречаться со слепым человеком, и для второго эти отношения не будут чем-то необычным'
      },
      {
        id: 3,
        name: 'мысль #3',
        text: 'если курильщик впадет в кому на достаточно длинный срок, избавит ли это его от никотиновой зависисмости?'
      },
      {
        id: 2,
        name: 'мысль #2',
        text: 'когда мы говорим с кем-то во сне, мы не знаем, что нам ответит собеседник, хотя его слова придумывает наш мозг'
      },
      {
        id: 1,
        name: 'мысль #1',
        text: 'особенно резко точку зрения меняет удар в глаз'
      },
    ],
    counter:  5,
    users: [
      {
        userLogin: "Киборг-убийца",
        userName: "Арнольд",
        userSurname: "Шварцнеггер",
      },
      {
        userLogin: "Тот-кого-нельзя-называть",
        userName: "Том",
        userSurname: "Реддл",
      },
      {
        userLogin: "Красотка",
        userName: "Леголас",
        userSurname: "Зеленолист",
      },
    ],
    comments: [
      {
        id: 1,
        userLogin: "Красотка",
        thoughtId: 1,
        feedbackText: "1211111113123",
      },
      {
        id: 2,
        userLogin: "Красотка",
        thoughtId: 1,
        feedbackText: "123dfdf123",
      },
    ],
    commentsCounter: 3,
  },
  mutations: {
    addNewBlogPost(state, payload):any {
      state.blogItemsList.unshift({
          id: state.counter++,
          name: payload.name,
          text: payload.text,
      })
    },
    removeComment(state, id) {
        state.comments = state.comments.filter(com => com.id != id);
    },
    addNewComment(state, payload) {
      state.comments.unshift({
        id: state.commentsCounter++,
        userLogin: "Красотка",
        thoughtId: payload.thoughtId,
        feedbackText: payload.feedbackText
      })
    }
  },
  getters: {
    getCurrentThought: function(state) {
        return function (id:number) {
          return state.blogItemsList.find(el => el.id === id)
        }
    },
    
    getComments:  function(state) {
      return function (id:number) {
        return state.comments.filter(el => el.thoughtId === id)
      }
    },

    
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
  }
});
