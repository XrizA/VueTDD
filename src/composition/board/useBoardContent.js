import { onMounted, ref } from "vue";
import https from "@/apis/https";

export default function (boardId) {
  const figures = ref([]);

  const getBoardContent = async () => {
    await https("get", `/boards/${boardId}/content`, {
      boardId: boardId,
    })
      .then((response) => {
        figures.value = response.data.figureDtos;
      })
      .catch((error) => {
        figures.value = [];
        console.log(error);
      });
  };

  onMounted(getBoardContent);

  return {
    figures,
    getBoardContent,
  };
}
