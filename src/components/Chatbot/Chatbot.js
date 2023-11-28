import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../bot/config.js';
import MessageParser from '../bot/Messageparser.js';
import ActionProvider from '../bot/ActionProvider.js';

const MyChatbot = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};