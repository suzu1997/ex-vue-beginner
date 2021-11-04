<template>
  <div class="container">
    <div>名前: {{ name }}</div>
    <div>年齢: {{ age }}歳</div>
    <div>10年後の年齢: {{ plus10Year }}歳</div>
    <div>
      趣味:
      <span v-for="hobby of hobbies" v-bind:key="hobby">{{ hobby }} </span>
    </div>
    <br />
    <div><a v-bind:href="pageLink">自社ページリンク</a></div>
    <br />
    <img v-bind:src="imgSrc" width="250px" />
    <br />
    <button v-on:click="setInfo" v-bind:disabled="disabled">ボタン</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Ex01Component extends Vue {
  private name = '';
  private age = 0;
  private hobbies = [];
  private pageLink = '';
  private imgSrc = '';
  private disabled = false;

  setInfo() {
    this.name = '鈴原千絵';
    this.age = 24;
    this.hobbies = ['音楽', '映画鑑賞', '旅行'];
    this.pageLink = 'https://www.rakus-partners.co.jp/';
    this.imgSrc = 'img/IMG_2237.JPG';
    this.disabled = true;
  }
  get plus10Year(): number {
    return this.age + 10;
  }
}
</script>

<style scoped>
.container {
  border: 1px solid black;
  width: 280px;
  margin: 0 auto;
  text-align: left;
  padding: 5px;
}
</style>
