<template>
  <div class="cap-width-padding">
    <h2>CS 252 Class Schedule</h2>
    <h3>Fall 2021</h3>
    <hr>
    <p>NOTE: This schedule is tentative and subject to change</p>

    <div class="weeks">
      <schedule-box
          v-for="(week, index) in schedule"
          :key="index"
          :schedule="week"
          :week-num="index+1"
          class="week-box"
      ></schedule-box>
    </div>

    <hr>
  </div>
</template>

<script>
import scheduleData from "../schedule-data";
import ScheduleBox from "../components/schedule-box";
export default {
  name: "Schedule",
  components: {ScheduleBox},
  data() {
    return {
      schedule: scheduleData
    }
  }
}
</script>

<style scoped>

.weeks {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.week-box {
  width: 100%;
  margin: 0.7rem 0;
}

@media only screen and (min-device-width: 641px) and (min-width: 641px) {
  .week-box {
    width: 31.5%;
    margin: 1.25rem 0;
  }
}
</style>