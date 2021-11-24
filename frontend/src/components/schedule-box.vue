<template>
  <blue-box>
    <h3>Week {{ weekNum }}</h3>
    <table>
      <tr v-for="(day, index) in schedule.days" :key="index">
        <td>{{ addDays(schedule.startDate, index) }}</td>
        <td v-html="day"></td>
      </tr>
    </table>
  </blue-box>
</template>

<script>
import BlueBox from "./blue-box";
import moment from 'moment';
export default {
  name: "schedule-box",
  components: {BlueBox},
  props: ["weekNum", "schedule"],
  methods: {
    addDays(refDate, days) {
      let date = moment(refDate, "YYYY-MM-DD");
      let newDate = date.add(days, "d")
      return newDate.format("MMM D");
    }
  }
}
</script>

<style scoped>

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 0.625rem;
}

</style>