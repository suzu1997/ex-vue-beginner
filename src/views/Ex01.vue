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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Ex01Component extends Vue {
  private name = '鈴原千絵';
  private age = 24;
  private hobbies = ['音楽', '映画鑑賞', '旅行'];
  private pageLink = 'https://www.rakus-partners.co.jp/';
  private imgSrc = 'img/IMG_2237.JPG';

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
