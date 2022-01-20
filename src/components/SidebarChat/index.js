import { Avatar } from "@material-ui/core";
import "./styles.css";

const SidebarChat = ({ name, message }) => {
  return (
    <div className="sidebarChat">
      <Avatar
        src={`https://avatars.dicebear.com/4.5/api/avataaars/${Math.random()}.svg`}
      />
      <div className="sidebarChat__info">
        <h4>{name}</h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
