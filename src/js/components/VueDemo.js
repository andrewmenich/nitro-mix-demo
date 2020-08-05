import Vue from "vue";
import VCalendar from 'v-calendar';

Vue.use(VCalendar);

const vm = new Vue({
  el: "#widget",
  delimiters: ["{$", "$}"],
  components: {
  },
  data: {
    mode: 'single',
    selectedDate: null,
  },
  methods: {
  },
  mounted() {
  },
});
  

export default vm;