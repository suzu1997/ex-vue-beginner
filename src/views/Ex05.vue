<template>
  <div class="container">
    <div class="error" v-if="name === ''">名前が入力されていません</div>
    <label for="name">名前：</label><br />
    <input type="text" id="name" v-model="name" /><br />
    <div class="error" v-if="age === ''">年齢が入力されていません</div>
    <label for="age">年齢：</label><br />
    <input type="text" id="age" v-model="age" /><br />
    <div class="error" v-if="comment === ''">コメントが入力されていません</div>
    <label for="comment">コメント：</label><br />
    <textarea id="comment" rows="5" v-model="comment"></textarea>
    <hr />
    <div>
      入力値：<br />
      名前：{{ name }}<br />
      年齢：{{ age }}<br />
      コメント：
      <pre>{{ comment }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Ex05Component extends Vue {
  private name = '';
  private age = '';
  private comment = '';
}
</script>

<style>
.container {
  border: 1px solid black;
  width: 230px;
  margin: 0 auto;
  text-align: left;
  padding: 5px;
}

.error {
  color: red;
}
</style>
