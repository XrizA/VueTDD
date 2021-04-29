<template>
  <div>
    <!-- Project List -->
    <ul>
      <li v-for="project in projects" :key="project">
        {{ project.projectName }}
      </li>
    </ul>
    <!-- Board -->
    <input type="text" data-test="boardName" v-model="newBoardName" />
    <button data-test="sendButton" @click="createBoard">Create board</button>
    <!-- Board List -->
    <ul>
      <li v-for="board in boards" :key="board" :data-test="board.boardName">
        <a :href="`#/board/${board.boardId}`">{{ board.boardName }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import useCreateBoard from "@/composition/board/useCreateBoard";
import { ref } from "vue";

export default {
  name: "BoardList",
  setup(_, { emit }) {
    const projects = ref([
      { projectId: "projectId", projectName: "projectName" },
    ]);

    const { newBoardName, boards, createBoard } = useCreateBoard(
      projects.value
    );

    emit("send", boards.value);

    return {
      projects: projects.value,
      boards: boards.value,
      newBoardName,
      createBoard,
    };
  },
};
</script>
