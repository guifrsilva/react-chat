import "./styles.css";

const ChatMessage = ({ message, active }) => {
  return (
    <div className={`messageContainer ${active ? "right" : "left"}`}>
      <div
        className={`messageContainer__message ${active ? "" : "messageColor"}`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
