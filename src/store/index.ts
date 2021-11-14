import { Item } from '@/types/item';
import { Student } from '@/types/student';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    students: [
      new Student(10, 'イチロー', 21, 1),
      new Student(20, 'ジロー', 32, 2),
      new Student(30, 'サブロー', 43, 1),
    ],
    items: [
      new Item(10, '手帳ノート', 1000),
      new Item(20, '文房具セット', 1500),
      new Item(30, 'ファイル', 2000),
    ],
  },
  getters: {
    getSearchStudentByName(state) {
      return (inputName: string) => {
        return state.students.filter((student) =>
          student.name.includes(inputName)
        );
      };
    },
    getAllItems(state) {
      return state.items;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
