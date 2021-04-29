import { mount } from "@vue/test-utils";
import BoardList from "@/components/board/BoardList";

describe("BoardList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(BoardList);
  });

  describe("clicking the send button", () => {
    beforeEach(() => {
      wrapper.find("[data-test='boardName']").setValue("Team5 Event Storming");

      wrapper.find("[data-test='sendButton']").trigger("click");
    });

    it("clears the text field", () => {
      const { element } = wrapper.find("[data-test='boardName']");
      expect(element.value).toEqual("");
    });

    it("emits the 'send' event", () => {
      const emitted = wrapper.emitted();
      expect(emitted).toHaveProperty("send");
      const arraySend = emitted.send[0][0];
      expect(arraySend.length).toEqual(1);
      expect(arraySend[0].boardId).toEqual("1");
      expect(arraySend[0].boardName).toEqual("Team5 Event Storming");
    });
  });
});
