import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarChat from "../SidebarChat";
import "./styles.css";

const lastMessages = [
  {
    id: 1,
    name: "Julio Augusto",
    message: "Olá, tudo bem?",
  },
  {
    id: 2,
    name: "Maria Luiza",
    message: "Certo, aguardo!",
  },
  {
    id: 3,
    name: "Pedro Souza",
    message: "Tudo bem, obrigado!",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
        <SearchOutlined />
          <input placeholder="Pesquisar uma conversa" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        {lastMessages.map((chat) => (
          <SidebarChat key={chat.id} name={chat.name} message={chat.message} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
