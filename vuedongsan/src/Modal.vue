<template>
  <div class="black-bg" v-if="modalCheck">
      <div class="white-bg">
        <img :src="onerooms[clickedIndex].image" style="width:100%;">
        <h4>{{onerooms[clickedIndex].title}}</h4>
        <p>{{onerooms[clickedIndex].content}}</p>
        <!-- <input @input="month = $event.target.value"> -->
        <input v-model="month">
        <p> {{month}}개월 선택함 :  {{onerooms[clickedIndex].price * month}}원</p>
        <button @click="$emit('close-modal')">닫기</button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data() {
      return {
        month: 1,
      }
    },
    // watch: {
    //   month(month) {
    //     if (isNaN(month)) {
    //       alert('숫자만 입력하라')
    //       this.month = 1;
    //     }
    //   }
    // },
    updated() {
      if (this.month == 2) {
        alert(`2개월은 너무 적음.. 안팝니다`);
        this.month = 3;
      }
    },
    props: {
        onerooms: Array,
        clickedIndex: Number,
        modalCheck: Boolean,
    },
}
</script>

<style>

</style>