<template>
  <div class="getdate">
    <InlineCalendar :dayClick="dayClick" />
  </div>
</template>
<script>
import InlineCalendar from "../components/inlineCalendar";
export default {
  data() {
    return {};
  },
  components:{
      InlineCalendar
  },
  methods: {
    dayClick(date) {
      console.log("date---->", date);
      console.log("date.format('YYYY-MM-DD')--->", date.format("YYYY-MM-DD"));
      let dates = date.format("YYYY-MM-DD");
    }
  }
};
</script>