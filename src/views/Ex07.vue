<template>
  <div>
    <h1>従業員検索</h1>
    <label for="name">名前：</label>
    <input type="text" id="name" />
    <br />
    <button>検索</button>
    <hr />
    <h2>検索結果({{}}件)</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Ex07Component extends Vue {}
</script>

<style></style>
