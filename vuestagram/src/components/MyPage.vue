<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input @input="search($event.target.value)" placeholder="🔍" />
    <div class="post-header" v-for="follower in searched" :key="follower.id">
      <div>
        <div class="profile" :style="`background-image:url(${follower.image})`"></div>
        <span class="profile-name">{{ follower.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "mypage",
  props: {
    one: Number,
  },
  setup() {
    let followers = ref([]);
    let searched = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((resp) => {
        followers.value = resp.data;
        searched.value = [...resp.data];
      });
    });

    const search = (keyword) => {
      searched.value = followers.value.filter((follower) => follower.name.includes(keyword));
    };

    return { followers, search, searched };
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
