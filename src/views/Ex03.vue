<template>
  <div>
    <input type="text" v-model.number="num1" />
    +
    <input type="text" v-model.number="num2" />
    ={{ totalNum }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Ex03Component extends Vue {
  private num1 = '';
  private num2 = '';

  get totalNum() {
    return this.num1 + this.num2;
  }
}
</script>

<style></style>
