<template>
  <Whiteboard :boardId="boardId" />
  <WhiteboardControls />
</template>

<script>
import { useRoute } from "vue-router";
import Whiteboard from "@/components/board/Whiteboard.vue";
import WhiteboardControls from "@/components/board/WhiteboardControls.vue";

export default {
  name: "Board",
  components: {
    Whiteboard,
    WhiteboardControls,
  },
  setup() {
    const route = useRoute()
    const boardId = route.params.id;

    return {
      boardId
    }
  },
};
</script>
