export function messageFromStorage() {
  const messagesFromLocal = localStorage.getItem("messages");
  const messages = JSON.parse(messagesFromLocal);
  if (!messages) {
    return [];
  } else {
    return messages;
  }
}
