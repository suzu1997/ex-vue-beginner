<template>
  <div class="container">
    <h1>従業員検索</h1>
    <label for="name">名前：</label>
    <input type="text" id="name" v-model="inputName" />
    <br />
    <button v-on:click="search">検索</button>
    <hr />
    <h2>検索結果({{ searchResult.length }}件)</h2>
    <ul>
      <li v-for="student of searchResult" :key="student.id">
        {{ student.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Ex07Component extends Vue {
  private inputName = '';
  private searchResult = [];

  search() {
    this.searchResult = this.getSearchResult;
  }
  get getSearchResult() {
    return this.$store.getters.getSearchStudentByName(this.inputName);
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 250px;
  border: 1px solid #000;
  padding: 5px;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>
