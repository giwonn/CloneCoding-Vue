<template>
<div>
  <div>
      <img :src="oneroom.image" class="room-img">
      <h4 @click="$emit('open-modal')">{{oneroom.title}}</h4>
      <p>{{oneroom.price}}원</p>
  </div>
</div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        oneroom: Object,
    }
}
</script>

<style>

</style>