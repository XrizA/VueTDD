<template>
  <div></div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Note",
  props: ["canvas"],
  setup(props) {
    const canvas = reactive(props.canvas);
    console.log(canvas);
  },
};
</script>
