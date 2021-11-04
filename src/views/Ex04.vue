<template>
  <div>
    <input type="text" v-model.number="price1" /><br />
    <input type="text" v-model.number="price2" /><br />
    <input type="text" v-model.number="price3" />
    <div>税抜き価格：{{ totalPrice.toLocaleString() }}円</div>
    <div>税込み価格：{{ taxIncludedPrice.toLocaleString() }}円</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Ex04Component extends Vue {
  private price1 = 0;
  private price2 = 0;
  private price3 = 0;

  get totalPrice() {
    return this.price1 + this.price2 + this.price3;
  }
  get taxIncludedPrice() {
    return this.totalPrice * 1.1;
  }
}
</script>

<style></style>
