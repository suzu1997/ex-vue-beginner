<template>
  <div>
    <div v-for="(input, index) of inputs" :key="index">
      <input type="text" v-model.number="inputs[index]" />
      <button type="button" v-on:click="deleteInput(index)">削除</button>
      <br />
    </div>
    <br />
    <button v-on:click="addInput">追加</button>
    <div>税抜き価格：{{ totalPrice.toLocaleString() }}円</div>
    <div>税込み価格：{{ taxIncludedPrice.toLocaleString() }}円</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Ex06Component extends Vue {
  private inputs = [];

  addInput() {
    this.inputs.push(0);
  }

  deleteInput(i: number) {
    this.inputs.splice(i, 1);
  }

  get totalPrice() {
    let totalPrice = 0;
    for (let input of this.inputs) {
      totalPrice += Number(input);
    }
    return Math.floor(totalPrice);
  }

  get taxIncludedPrice() {
    const TAX_RATE = 1.1;
    return Math.floor(this.totalPrice * TAX_RATE);
  }
}
</script>
