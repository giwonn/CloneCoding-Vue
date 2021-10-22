<template>
  <div>
    <div class="black-bg" v-if="modalCheck">
      <div class="white-bg">
        <img :src="onerooms[clickedIndex].image" style="width:100%;">
        <h4>{{onerooms[clickedIndex].title}}</h4>
        <p>{{onerooms[clickedIndex].content}}</p>
        <p>{{onerooms[clickedIndex].price}}원</p>
        <Discount/>
        <button @click="modalCheck = false">닫기</button>
      </div>
    </div>

    <div class="menu">
      <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
    </div>

    <Discount/>

    <div v-for="(oneroom, i) in onerooms" :key='i'>
      <img :src="oneroom.image" class="room-img">
      <h4 @click="modalCheck = true; clickedIndex = i">{{oneroom.title}}</h4>
      <p>{{oneroom.price}}원</p>
    </div>
  </div>
</template>

<script>
import data from './assets/oneroom';
import Discount from './Discount.vue';

export default {
  name: 'App',
  data() {   // data 보관함 (Object 형식)
    return {
      clickedIndex: 0,
      onerooms: data,
      modalCheck: false,
      reports: [0, 0, 0],
      menus: ['Home', 'Shop', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      prices: [50, 60, 70],
    }
  },
  methods: {
  },
  components: {
    Discount: Discount,
  }
}
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
