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

const App = () => {
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
  };

  return (
    <div className="App">
      <Header />
      <div style={{ position: "relative", height: "800px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder='Écrivez votre message ici' onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
      <DivBaseline />
      <Slider data={slides} />
      <DivGeo />
      <DivCTA />
      <DivQui />
      <DivTextFin />
      <Footer />
    </div>
  );
};

export default App;
