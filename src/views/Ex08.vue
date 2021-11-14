<template>
  <div class="container">
    <div class="item-list">
      <div class="title">商品一覧</div>
      <ul>
        <li v-for="item of getAllItems" :key="item.id">
          {{ item.name }}({{ item.price.toLocaleString() }}円)
          <button v-on:click="addToCart(item)">カートへ</button>
        </li>
      </ul>
    </div>
    <div class="shopping-cart">
      <div class="title">ショッピングカート</div>
      <ul>
        <li v-for="(item, index) of cartItems" :key="index">
          {{ item.name }}({{ item.price.toLocaleString() }}円)
          <button v-on:click="removeFromCart(index)">削除</button>
        </li>
      </ul>
      合計 {{ totalPriceInCart.toLocaleString() }} 円
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Item } from '@/types/item';

@Component
export default class Ex08Component extends Vue {
  private cartItems: Array<Item> = [];

  addToCart(item: Item) {
    this.cartItems.push(item);
  }
  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  get totalPriceInCart() {
    let totalPrice = 0;
    this.cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  }
  get getAllItems() {
    return this.$store.getters.getAllItems;
  }
}
</script>

<style scoped>
.container {
  display: flex;
  width: 500px;
  margin: 0 auto;
  border: 1px solid #000;
}
.title {
  margin-top: 10px;
  font-weight: bold;
}
.item-list {
  border-right: 1px solid #333;
  width: 250px;
}
.shopping-cart {
  width: 250px;
}
li {
  list-style: none;
  margin-bottom: 5px;
}
ul {
  margin-left: 0;
  padding-left: 5px;
  text-align: left;
}
button {
  background-color: purple;
  color: white;
  border-radius: 10px;
  padding: 5px;
}
button:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>
