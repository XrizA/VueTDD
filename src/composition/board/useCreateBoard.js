import { reactive, ref } from "vue";
import https from "@/apis/https";

export default function (projects) {
  const newBoardName = ref("");
  const boards = ref([]);

  const createBoard = async () => {
    var boardId = null;

    await https("post", `/projects/${projects[0].projectId}/boards`, {
      projectId: projects[0].projectId,
      name: newBoardName,
    })
      .then((response) => {
        boardId = response.data.id;
      })
      .catch((error) => {
        console.log(error);
      });

    boards.value.push(
      reactive({ boardId: boardId, boardName: newBoardName.value })
    );

    newBoardName.value = "";
  };

  return {
    newBoardName,
    boards,
    createBoard,
  };
}
