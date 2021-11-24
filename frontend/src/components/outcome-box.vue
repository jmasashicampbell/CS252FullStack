<template>
  <blue-box color="">
    <h4>{{ title }}</h4>
    <p>{{ body }}</p>
  </blue-box>
</template>

<script>
import BlueBox from "./blue-box";
export default {
  name: "outcome-box",
  components: {BlueBox},
  props: ['title', 'body']
}
</script>