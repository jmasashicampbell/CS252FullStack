<template>
  <div class="cap-width-padding">
    <h2>CS 252 Homework Assignments</h2>
    <hr>
    <p>Homework assignments are due by the 10:00 pm on the due date.</p>
    <p>Please upload a PDF file to Learning Suite containing your solutions.</p>
    <p>Late submissions are not accepted.</p>
    <p>Email submissions are not accepted.</p>
    <hr>
    <homework-box></homework-box>
  </div>
</template>

<script>
import HomeworkBox from "../components/homework-box";
export default {
  name: "Homework",
  components: {HomeworkBox}
}
</script>

<style scoped>

</style>