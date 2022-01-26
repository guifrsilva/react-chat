import { useState } from "react";
import "./styles/index.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

const lastMessages = [
  {
    id: 1,
    name: "Julio Augusto",
    message: "Olá, tudo bem?",
    messages: [
      {
        id: 1,
        message: "Olá, tudo bem?",
        name: "Julio Augusto",
        isActive: true,
      },
      {
        id: 2,
        message: "Tudo bem, obrigado!",
        name: "David Santos",
        isActive: false,
      },
      {
        id: 3,
        message: "Qual o valor do carro?",
        name: "Julio Augusto",
        isActive: true,
      },
      {
        id: 4,
        message: "R$ 1.000.000,00",
        name: "David Santos",
        isActive: false,
      },
    ],
  },
  {
    id: 2,
    name: "Maria Luiza",
    message: "Certo, aguardo!",
    messages: [
      {
        id: 1,
        message: "Olá, tudo bem?",
        name: "Julio Augusto",
        isActive: true,
      },
      {
        id: 2,
        message: "Tudo bem, obrigado!",
        name: "Maria Luiza",
        isActive: false,
      },
    ],
  },
  {
    id: 3,
    name: "Pedro Souza",
    message: "Tudo bem, obrigado!",
    messages: [],
  },
  {
    id: 4,
    name: "Antonio Carlos",
    message: "Olá, tudo bem?",
    messages: [],
  },
];

function App() {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const selectedChat = (chat) => {
    setSelectedMessage(chat);
  };

  return (
    <div className="app">
      <Sidebar lastMessages={lastMessages} onSelectedChat={selectedChat} />
      <Chat message={selectedMessage} />
    </div>
  );
}

export default App;
