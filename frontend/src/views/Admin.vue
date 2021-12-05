<template>
  <div class="cap-width-padding">
    <h2>Homework</h2>
    <homework-box
      ref="homeworkBox"
      v-bind:admin=true
      @show="showModal"
    />

    <edit-modal
      v-bind:title="assignmentSelected ? 'Edit Assignment' : 'New Assignment'"
      v-bind:edit="assignmentSelected"
      v-show="isModalVisible"
      @save="saveAssignment"
      @delete="deleteAssignment"
      @close="closeModal"
    >
      <table>
        <tr>
          <td>Assignment #</td>
          <td><input v-model="selectedAssignment.assignmentNum" size=10 /></td>
        </tr>
        <tr>
          <td>Chapter</td>
          <td><input v-model="selectedAssignment.chapterNum" size=10 /></td>
        </tr>
        <tr>
          <td colspan=2>
            Exercises<br/>
            <textarea v-model="selectedAssignment.exercises" rows=3 cols=32 />
          </td>
        </tr>
        <tr>
          <td>Due Date</td>
          <td><input v-model="selectedAssignment.dueDate" size=10 /></td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" v-model="selectedAssignment.show" />
            Show
          </td>
        </tr>
      </table>
    </edit-modal>
  </div>
</template>

<script>
import HomeworkBox from "../components/homework-box";
import EditModal from "../components/edit-modal";
import axios from "axios";

export default {
  name: "Admin",
  components: {HomeworkBox, EditModal},
  data() {
    return {
      isModalVisible: false,
      selectedAssignment: {}
    };
  },
  computed: {
    assignmentSelected() {
      return this.selectedAssignment._id !== undefined;
    }
  },
  methods: {
    showModal(assignment) {
      const emptyAssignment = {
        _id: undefined,
        assignmentNum: "",
        chapterNum: "",
        exercises: "",
        dueDate: "",
        show: false,
      }
      this.selectedAssignment = assignment ? {...assignment} : emptyAssignment;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    async saveAssignment() {
      if (this.selectedAssignment._id === undefined) {
        await axios.post('/api/homework', this.selectedAssignment);
      } else {
        const url = '/api/homework/' + this.selectedAssignment._id;
        await axios.put(url, this.selectedAssignment);
      }
      await this.$refs.homeworkBox.getHomework();
      this.closeModal();
    },
    async deleteAssignment() {
      const url = '/api/homework/' + this.selectedAssignment._id;
      await axios.delete(url, this.selectedAssignment);
      await this.$refs.homeworkBox.getHomework();
      this.closeModal();
    },
  }
}
</script>

<style scoped>

</style>