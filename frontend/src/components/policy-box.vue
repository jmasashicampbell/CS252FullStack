<template>
  <blue-box class="policy-box">
    <h3>{{ title }}</h3>
    <slot></slot>
  </blue-box>
</template>

<script>
import BlueBox from "./blue-box";
export default {
  name: "policy-box",
  components: {BlueBox},
  props: ["title"]
}
</script>

<style scoped>

.policy-box {
  margin: 0.7rem 0;
}

@media only screen and (min-device-width: 641px) and (min-width: 641px) {
  .policy-box {
    display: inline-block;
    width: 100%
  }
}
</style>