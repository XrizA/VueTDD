import { onMounted, ref } from "vue";

export default function () {
  const boards = ref([]);

  const getBoardContent = () => {};

  onMounted(getBoardContent);

  return {
    boards,
    getBoardContent,
  };
}
