window.addEventListener('load', function () {
  function loadData(chats){
    const historyEle = document.getElementById("chatHistory");
    chats.map(c => {
      let chatBox = document.getElementById("chatBox").cloneNode(true);
      historyEle.innerHTML += chat.createChatBox(c, chatBox).outerHTML 
    });
  }
  chat.getChatHistory(loadData);

  this.document.getElementById("chatInput").addEventListener("keyup", function (event) {
    const spinner = document.getElementById("spinner");
    const element = document.getElementById("liveChat");
    element.scrollTop = element.scrollHeight;

    if (event.target.value && !spinner) 
      liveChat.innerHTML += "<img src='images/waiting-texting.gif' width='80' height='80' class='spinner' id='spinner'>";

    if ((!event.target.value || event.target.value === ""))
      document.getElementById("spinner").remove();
  });

  document.getElementById("chatSubmit").addEventListener("click", function () {
    let chatInput = document.getElementById("chatInput");
    chat.sendChat(chatInput.value);
    chatInput.value = "";
    const element = document.getElementById("liveChat");
    element.scrollTop = element.scrollHeight;
  });

})



