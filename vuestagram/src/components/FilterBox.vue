<template>
  <div @click="fire" :class="`${filter} filter-item`" :style="`background-image:url(${mydata.postImage})`">
    <slot></slot>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "filterbox",
  computed: {
    ...mapState(["mydata"]),
  },
  methods: {
    fire() {
      // this.emitter.emit("filtered", this.filter);
      this.$store.commit("setFilter", this.filter);
    },
  },
  props: {
    filter: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
