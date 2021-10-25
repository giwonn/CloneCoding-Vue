import axios from "axios";
import { createStore } from "vuex";
import data from "./assets/data";

const store = createStore({
  state() {
    return {
      data: data,
      name: "kim",
      age: 20,
      likes: 30,
      likeCheck: false,
      more: {},
    };
  },
  mutations: {
    setMore(state, data) {
      state.more = data;
    },
    setName(state) {
      state.name = "park";
    },
    plusAge(state, data) {
      state.age += data;
    },
    like(state) {
      if (!state.likeCheck) {
        state.likes++;
        state.likeCheck = true;
      } else {
        state.likes--;
        state.likeCheck = false;
      }
    },
  },
  actions: {
    getData(context) {
      axios.get(`https://codingapple1.github.io/vue/more0.json`).then((resp) => {
        context.commit("setMore", resp.data);
      });
    },
  },
});

export default store;
