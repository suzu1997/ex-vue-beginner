<template>
  <div>
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

<style></style>
