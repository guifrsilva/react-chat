import { Avatar } from "@material-ui/core";
import "./styles.css";

const SidebarChat = ({ name, message, onClick }) => {
  return (
    <div className="sidebarChat" onClick={onClick}>
      <Avatar />
      <div className="sidebarChat__info">
        <h4>{name}</h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
