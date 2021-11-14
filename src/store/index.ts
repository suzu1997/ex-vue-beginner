import { Student } from '@/types/student';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    student: [
      new Student(10, 'イチロー', 21, 1),
      new Student(20, 'ジロー', 32, 2),
      new Student(30, 'サブロー', 43, 1),
    ],
  },
  // getters: {
  //   getSearchStudentByName(name: string) {
  //     return 
  //   }
  // },
  mutations: {},
  actions: {},
  modules: {},
});
