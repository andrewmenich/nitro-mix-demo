import Vue from "vue";

const vm = new Vue({
  el: "#confetti",
  components: {
      'confetti': () => import(/* webpackChunkName: "confetti" */ '../vue/Confetti.vue'),
  },
  data: {
  },
  methods: {
  },
  mounted() {
  },
});
  

export default vm;