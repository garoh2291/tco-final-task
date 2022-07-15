import { createSlice } from "@reduxjs/toolkit";
import { messageFromStorage } from "../../helpers/local-storage";

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    messages: messageFromStorage(),
  },
  reducers: {
    sendMessage(state, action) {
      const newMessage = action.payload.messageFormData;
      const messages = [...state.messages, newMessage];
      const loacalMessage = JSON.stringify(messages);
      console.log(loacalMessage);
      localStorage.setItem("messages", loacalMessage);
      return {
        ...state,
        messages,
      };
    },
  },
});

export const { sendMessage } = messageSlice.actions;

export default messageSlice.reducer;
