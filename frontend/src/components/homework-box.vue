<template>
  <blue-box class="homework-box">
    <table>
      <tr>
        <th v-if="!admin">
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
        <th v-if="admin">Show</th>
        <th v-if="admin">
          <button
            type="button"
            class="button"
            @click="showEditModal"
          >
            &#10133;
          </button>
        </th>
      </tr>
      <tr v-for="assignment in assignments" :key="assignment.num">
        <td v-if="!admin">
          <input
              type="checkbox"
              :checked="assignment.completed"
              @change="updateCompleted($event, assignment.id)"
          />
        </td>
        <td :class="{completed: assignment.completed}">{{ assignment.assignmentNum }}</td>
        <td :class="{completed: assignment.completed}">{{ assignment.chapterNum }}</td>
        <td :class="{completed: assignment.completed}" v-html="assignment.exercises"></td>
        <td :class="{completed: assignment.completed}"><strong>{{ assignment.dueDate }}</strong></td>
        <td v-if="admin">
          <span v-if="assignment.show">&check;</span>
        </td>
        <td v-if="admin">
          <button
              type="button"
              class="button"
              @click="showEditModal(assignment)"
          >
            Edit
          </button>
        </td>
      </tr>
      <tr v-if="!admin"><td colspan=5>More will be posted later.</td></tr>
    </table>
  </blue-box>
</template>

<script>
import axios from 'axios';
import BlueBox from "./blue-box";

export default {
  name: "homework-box",
  components: {BlueBox},
  data() {
    return {
      homeworkData: [],
      completed: JSON.parse(localStorage.getItem("completedAssignments") || "[]"),
    };
  },
  computed: {
    assignments() {
      return this.homeworkData.map(assignment => {
          assignment.completed = !this.admin && this.completed.includes(assignment.id);
          return assignment;
        }
      )
    },
  },
  props: ["admin"],
  created() {
    this.getHomework();
  },
  methods: {
    async getHomework() {
      try {
        const url = this.admin ? "/api/homework/all" : "/api/homework";
        const response = await axios.get(url);
        console.log(response.data);
        this.homeworkData = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
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
        this.completed = this.homeworkData.map(x => x.id);
      } else {
        this.completed = [];
      }
      localStorage.setItem("completedAssignments", JSON.stringify(this.completed));
    },
    showEditModal(assignment) {
      this.$emit('show', assignment);
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

button {
  width: 3rem;
}


@media only screen and (min-device-width: 641px) and (min-width: 641px) {
  .homework-box table {
    font-size: 1rem;
  }
}
</style>