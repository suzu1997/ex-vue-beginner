<template>
  <div>
    <div v-for="(input, index) of inputs" :key="input.id">
      <input type="text" v-model.number="input.price" />
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
  private inputId = 0;

  addInput() {
    this.inputs.push({ id: this.inputId, price: 0 });
    this.inputId++;
  }

  deleteInput(i: number) {
    this.inputs.splice(i, 1);

    console.log('削除: ' + i);
  }

  get totalPrice() {
    let totalPrice = 0;
    for (let input of this.inputs) {
      totalPrice += Number(input.price);
    }
    return Math.floor(totalPrice);
  }

  get taxIncludedPrice() {
    return Math.floor(this.totalPrice * 1.1);
  }
}
</script>

