<template>
  <div v-bind:class="'blue-box ' + color">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "blue-box",
  props: ["color"]
}
</script>

<style scoped>
.blue-box {
  padding: 1rem;
  color: white;
  background-color: var(--royal-blue);
  border-radius: 0.7rem;
  box-shadow: var(--light-shadow);
}

.navy {
  background-color: var(--navy-blue);
}

.dark {
  background-color: var(--dark-blue);
}

.royal {
  background-color: var(--royal-blue);
}

.blue-box h3 {
  color: white;
}

.blue-box th, td {
  border: 1px solid var(--light-gray);
}

</style>