<template>
  <blue-box color="dark" class="instructor-box">
    <div class="instructor-inner">
      <h4> {{ name }} </h4>
      Email: <a v-bind:href="'mailto:' + email">{{ email }}</a><br>
      Phone: {{ phone }}<br>
      Office: {{ office }}
    </div>
    <div class="instructor-inner">
      <slot></slot>
    </div>
  </blue-box>
</template>

<script>
import BlueBox from "./blue-box";
export default {
  name: "instructor-box",
  components: {BlueBox},
  props: ["name", "email", "phone", "office"]
}
</script>

<style scoped>

.instructor-box {
  display: flex;
  margin: 0.5rem 0;
  padding: 1.25rem 0.625rem;
  width: 100%;
}

.instructor-box a {
  color: white;
  text-decoration: underline;
}

.instructor-box img {
  border-radius: 0.7rem;
}

.instructor-inner {
  margin: 0 10px;
}

@media only screen and (min-device-width: 641px) and (min-width: 641px) {
  .instructor-box {
    margin: 0 0 1rem;
    width: auto;
  }
}
</style>