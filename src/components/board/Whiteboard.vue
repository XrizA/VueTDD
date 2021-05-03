<template>
  <div>boardId: {{ boardId }}</div>
  <canvas id="canvas"></canvas>
</template>

<script>
import { markRaw, toRefs } from "vue";
import useBoardContent from "@/composition/board/useBoardContent";
import { fabric } from "fabric";

export default {
  name: "Whiteboard",
  props: ["boardId"],
  setup(props) {
    const { boardId } = toRefs(props);
    const { figures, getBoardContent } = useBoardContent(boardId.value);
    const canvas = markRaw(
      new fabric.Canvas("canvas", {
        width: 1247,
        height: 1100,
      })
    );

    canvas.add(
      new fabric.Rect({
        left: 0,
        top: 0,
        height: 100,
        width: 100,
        stroke: "#ffffff",
        fill: "#ffffff",
      })
    );

    console.log(canvas);

    return {
      canvas,
      figures,
      getBoardContent,
    };
  },
};
</script>

<style scoped>
#canvas {
  border: 1px solid red;
}
</style>
