<template>
<div>
  <div v-for="(post, idx) in blog" :key="idx">
    <h5 @click="$router.push('/test/blog/detail/'+post.number)" class="list-title">{{post.title}}</h5>
    <!-- <h5><router-link :to="'/detail/'+post.number">{{post.title}}</router-link></h5> -->
    <p>{{post.date}}</p>
  </div>
</div>
</template>

<script>
export default {
    name: 'List',
    props: {
        blog: Array,
    }

}
</script>

<style>
.list-title {
    color: blue;
    text-decoration: underline;
}
</style>