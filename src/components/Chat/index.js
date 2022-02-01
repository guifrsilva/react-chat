import { Avatar, Button, Fab, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import "./styles.css";

// Crie o lado direito do chat igual fizemos no projeto com HTML e CSS
// porém usando React, nesse projeto está configurado o Material UI para
// que possam ser usados componentes prontos conforme a documentação que
// estará no link abaixo:
// Usem a criatividade e tentem fazer o que vocês quizerem para treinar
// ReactJS, não existe certo ou errado, o importante aqui é entender como
// funciona o ReactJS e treinar para que vocês consigam lidar com o desenvimento,
// somente olhando na documentação das bibliotecas.

// Link do Material UI:
// https://v4.mui.com/pt/components/buttons/





const Chat = () => {
  return (
    <div id="right">
      <div className="header">
        <figure>
          <Avatar
             src={`https://avatars.dicebear.com/4.5/api/avataaars/${Math.random()}.svg`}
             />
        </figure>
        <h1>Kapa</h1>
      </div>
      <div className="chat">
        {/* LISTA DE MENSAGENS */}
        <div className="content">
          <div className="message-list">

          <div className="message message-right">
              <div>
                <Fab className="message-card"  color='primary' variant='extended'>
                  <Avatar
                      src={`https://avatars.dicebear.com/4.5/api/avataaars/${Math.random()}.svg`}
                  />
                 Fechou!
                </Fab>
              </div>
            </div>

            <div className="message message-left">
              <div >
                <Fab className="message-card" color='secondary' variant='extended'>
                  Lá em pilões, são só 70km
                </Fab> 
              </div>
            </div>

            <div className="message message-right">
              <div>
                <Fab className="message-card"  color='primary' variant='extended'>
                  <Avatar
                      src={`https://avatars.dicebear.com/4.5/api/avataaars/${Math.random()}.svg`}
                  />
                 Vamos sim!!! Onde que é?
                </Fab>
              </div>
            </div>

            <div className="message message-right">
              <div>
                <Fab className="message-card"  color='primary' variant='extended'>
                  <Avatar
                      src={`https://avatars.dicebear.com/4.5/api/avataaars/${Math.random()}.svg`}
                  />
                  Opa!
                </Fab>
              </div>
            </div>

            <div className="message message-left">
              <div >
                <Fab className="message-card" color='secondary' variant='extended'>
                Conheço uma cachoeira muito boa.
                </Fab> 
              </div>
            </div>

            <div className="message message-left">
              <div >
                <Fab className="message-card" color='secondary' variant='extended'>
                 vamos dar um rolê fim de semana?
                </Fab> 
              </div>
            </div>

            <div className="message message-right">
              <div>
                <Fab className="message-card"  color='primary' variant='extended'>
                  <Avatar
                      src={`https://avatars.dicebear.com/4.5/api/avataaars/${Math.random()}.svg`}
                  />
                  Fala mano, de boa e tu?
                </Fab>
              </div>
            </div>

            <div className="message message-left">
              <div >
                <Fab className="message-card" color='secondary' variant='extended'>
                  Eae mano, blz?
                </Fab> 
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="footer">
          <input type='text' placeholder="Digite sua mensssagem"/>
          <IconButton>
            <SendIcon />
          </IconButton>
      </div>
    </div>
     
    
    
  );
};

export default Chat;

