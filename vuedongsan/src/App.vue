<template>
  <div>
    <transition name="fade">
      <Modal @close-modal="modalCheck = false" :onerooms="onerooms" :clickedIndex="clickedIndex" :modalCheck="modalCheck" />
    </transition>

    <div class="menu">
      <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
    </div>

    <Discount v-if="showDiscount" />

    <button @click="priceSort">가격순정렬</button>
    <button @click="sortBack">되돌리기</button>

    <Card @open-modal="modalCheck = true clickedIndex = i" v-for="(oneroom, i) in onerooms" :key="i" :oneroom="oneroom" />
  </div>
</template>

<script>
import data from "./assets/oneroom"
import Discount from "./Discount.vue"
import Modal from "./Modal.vue"
import Card from "./Card.vue"

export default {
  name: "App",
  data() {
    // data 보관함 (Object 형식)
    return {
      showDiscount: true,
      onerooms_origin: [...data],
      clickedIndex: 0,
      onerooms: data,
      modalCheck: false,
      reports: [0, 0, 0],
      menus: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      prices: [50, 60, 70],
    }
  },
  methods: {
    priceSort() {
      this.onerooms.sort(function(a, b) {
        return a.price - b.price
      })
    },
    sortBack() {
      this.onerooms = [...this.onerooms_origin]
    },
  },
  components: {
    Discount: Discount,
    Modal: Modal,
    Card: Card,
  },
}
</script>

<style>
.fade-enter-from {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0px);
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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
