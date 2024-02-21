import React, { useState } from 'react';
import Header from './Header';
import DivBaseline from './DivBaseline';
import Slider from './Slider';
import "./slider-style.css";
import { slides } from "/src/Data/sliderData.json";
import DivGeo from './DivGeo';
import DivCTA from './DivCTA';
import DivQui from './DivQui';
import DivTextFin from './DivTextFin';
import Footer from './Footer';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from "@chatscope/chat-ui-kit-react";


const API_KEY = ""

const App = () => {
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message: "Bonjour, je suis là pour vous aider",
      sender: "ChatGPT"
    }
  ]);

  const handleSend = async (message) => {
    const newMessageObj = {
      message: message,
      sender: "user",
      direction: "outgoing"
    };

    const newMessages = [...messages, newMessageObj];
    setMessages(newMessages);
    setTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
let apiMessages = chatMessages.map((messageObject)=> {
let role = "";
if(messageObject.sender === "ChatGPT") {
  role="assistant"
} else {
  role = "user"
}

  return {role: role, content: messageObject.message }
});

const systemMessage = {
  role: "system",
  content: "Tu es un expert en horlogerie. Différentes personnes vont te demmander des infos sur différentes montre. Tu y répondras en tant qu'horloger professionnelle"
}

const apiRequestBody = {
  "model": "gpt-3.5-turbo",
  "messages": [
    systemMessage,
    ...apiMessages
  ]
}

await fetch("https://api.openai.com/v1/chat/completions", {
  method:  "POST",
  headers: {
    "Authorization": "Bearer " + API_KEY,
    "content-Type": "application/json"
  },
  body: JSON.stringify(apiRequestBody)
}).then((data) => {
  return data.json();
}).then((data) => {
  console.log(data);
});
  }

  return (
    <div className="App">
      <Header />

      <DivBaseline />
      <Slider data={slides} />
      <DivGeo />
      <DivCTA />
      <DivQui />
      <DivTextFin />
      {/* <div style={{ position: "relative", height: "800px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
            
            typingIndicator={typing ? <typingIndicator content="TempusBot est entrain d'écrire..." /> : null} >


              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder='Écrivez votre message ici' onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div> */}
      <Footer />
    </div>
  );
};

export default App;
