import "./styles/index.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

// O projeto está componentizado, conforme expliquei na aula passada,
// os componentes ficam dentro da pasta components e estão sendo importados
// aqui como Sidebar e Chat, são os componentes principais que irão
// renderizar os dois lados do chat, vocês deverão trabalhar no componente
// Chat para conseguir criar a interface do lado direito do chat.

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
