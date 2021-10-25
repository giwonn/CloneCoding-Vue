import axios from "axios";
import { createStore } from "vuex";
import data from "./assets/data";

const store = createStore({
  state() {
    return {
      data: data,
      step: 0,
      mydata: {
        name: "Giwon Lim",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: "",
        likes: 0,
        date: "Oct 25",
        liked: false,
        content: "",
        filter: "",
      },
    };
  },
  mutations: {
    clickCancel(state) {
      if (state.step !== 0) {
        state.step = 0;
      }
    },
    postWriting(state, data) {
      state.data.unshift({ ...data });
      state.mydata.postImage = "";
      state.mydata.content = "";
      state.mydata.filter = "";
    },
    setPostImage(state, data) {
      state.mydata.postImage = data;
    },
    setContent(state, data) {
      state.mydata.content = data;
    },
    setFilter(state, data) {
      state.mydata.filter = data;
    },
    setMore(state, data) {
      state.data.unshift(data);
    },
    plusStep(state) {
      if (state.step == 2) {
        state.step = 0;
      } else {
        state.step++;
      }
    },
    like(state, i) {
      const data = state.data[i];
      if (!data.liked) {
        data.likes++;
        data.liked = true;
      } else {
        data.likes--;
        data.liked = false;
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
