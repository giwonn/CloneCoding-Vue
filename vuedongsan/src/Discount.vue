<template>
    <div class="discount">
        <h4>지금 결제하면 {{percent}}% 할인</h4>
    </div>
</template>

<script>
export default {
    name: 'Discount',
    data() {
        return {
            percent: 20,
        }
    },
    mounted() {
        const interval = setInterval(() => {
            this.percent--;
            if (this.percent === 0) {
                clearInterval(interval);
            }
        }, 1000);
    },
}
</script>

<style>
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>