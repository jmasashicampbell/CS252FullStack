<template>
  <blue-box class="homework-box">
    <table>
      <tr>
        <th>
          <input
              type="checkbox"
              :checked="assignments.every(x => x.completed)"
              @change="updateAllCompleted"
          />
        </th>
        <th>#</th>
        <th>Ch.</th>
        <th>Exercises</th>
        <th>Due</th>
      </tr>
      <tr v-for="assignment in assignments" :key="assignment.num">
        <td>
          <input
              type="checkbox"
              :checked="assignment.completed"
              @change="updateCompleted($event, assignment.id)"
          />
        </td>
        <td :class="{completed: assignment.completed}">{{ assignment.assignmentNum }}</td>
        <td :class="{completed: assignment.completed}">{{ assignment.chapter }}</td>
        <td :class="{completed: assignment.completed}" v-html="assignment.exercises"></td>
        <td :class="{completed: assignment.completed}"><strong>{{ assignment.dueDate }}</strong></td>
      </tr>
      <tr><td colspan=5>More will be posted later.</td></tr>
    </table>
  </blue-box>
</template>

<script>
import homeworkData from "../homework-data";
import BlueBox from "./blue-box";
export default {
  name: "homework-box",
  components: {BlueBox},
  data() {
    return {
      homeworkData,
      completed: JSON.parse(localStorage.getItem("completedAssignments") || "[]"),
    }
  },
  computed: {
    assignments() {
      let assignArr = [];
      for (let assignment of homeworkData) {
        assignment.completed = this.completed.includes(assignment.id);
        assignArr.push(assignment);
      }
      return assignArr;
    },
  },
  methods: {
    updateCompleted(event, id) {
      if (event.target.checked) {
        this.completed.push(id);
      } else {
        const index = this.completed.indexOf(id);
        if (index > -1) {
          this.completed.splice(index, 1);
        }
      }
      localStorage.setItem("completedAssignments", JSON.stringify(this.completed));
    },
    updateAllCompleted(event) {
      if (event.target.checked) {
        this.completed = homeworkData.map(x => x.id);
      } else {
        this.completed = [];
      }
      localStorage.setItem("completedAssignments", JSON.stringify(this.completed));
    }
  }
}
</script>

<style scoped>
.homework-box {
  padding: 1em;
}

.homework-box table {
  border-collapse: collapse;
  width: 100%;
  font-size: 0.8rem;
}

.homework-box th, td {
  border-color: var(--light-gray);
  padding: 0.5rem;
}


.completed {
  text-decoration: line-through;
  color: var(--light-gray);
}

@media only screen and (min-device-width: 641px) and (min-width: 641px) {
  .homework-box table {
    font-size: 1rem;
  }
}
</style>