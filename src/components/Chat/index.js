import { Avatar, Button } from "@material-ui/core";
import Send from "@material-ui/icons/Send";
import "./styles.css";

import ChatMessage from "../ChatMessage";

const Chat = ({ message }) => {
  return (
    <div className="chat">
      <header className="chat__header">
        <Avatar />
        <h3 className="chat__name">{message.name}</h3>
      </header>
      <div className="chat__messages">
        {message.messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg.message}
            active={msg.isActive}
          />
        ))}
      </div>
      <div className="chat__footer">
        <input
          className="input"
          type="text"
          placeholder="Digite uma mensagem"
        />
        <Button>
          <Send color="primary" />
        </Button>
      </div>
    </div>
  );
};

export default Chat;
