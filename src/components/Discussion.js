
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext.js";
import { APIHOST } from "../env.js";
import Pusher from "pusher-js"
import Echo from 'laravel-echo'


function Discussion({coursedata}) {
  const [submission, setSubmission] = useState(false);
  const [assign, setAssign] = useState(true);
  const [assignments, setAssignments] = useState([]);
  const [authState, setAuthState] = useContext(AuthContext);
  const [selected, setSelected] = useState();

  const [messages, setmessages] = useState([])

  const [messagetext, setmessageText] = useState("")



  const setup = async () => {
    // Pusher.logToConsole = true;
    console.log("SETUPPPPPPP")
    var pusher = new Pusher('5301beae7245efa70893', {
      cluster: 'us2'
    });

    var channel = pusher.subscribe('chat');
    channel.bind(coursedata.id + coursedata.name, function(data) {
      // alert(JSON.stringify(data));
      console.log(data)
      let name = data.user.firstname + ' (' + data.user.role + ')'
      if(data.user.id == authState.userData.id){
        setmessages((prev) => [...prev, {message: data.message, type: "outgoing", name: name}])
      } else {
        setmessages((prev) => [...prev, {message: data.message, type: "incoming", name: name}])
      }
      
    });

    
  }

  const sendMessage = () => {
    axios.post("http://127.0.0.1:8000" + '/api/chat/' + coursedata.id + coursedata.name, { message: messagetext }, {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    });

    setmessageText('');
};

  useEffect(() => {
    setup()
  }, [])

  const Outgoing = ({message}) => {
    return (
      <div class="flex flex-col mb-4">
      <div class="flex items-center">
        <div class="rounded-full bg-blue-500 text-white p-2 mr-2">
          <span class="text-sm">You</span>
        </div>
        <div class="bg-gray-300 p-3 rounded-lg">
          <p class="text-sm">{message.message}</p>
        </div>
      </div>
    </div>
    )
  }

  const Incoming = ({message}) => {
    return (
      <div class="flex flex-col mb-4">
      <div class="flex items-center justify-end">
        <div class="bg-purple-500 text-white p-3 rounded-lg">
          <p class="text-sm">{message.message}</p>
        </div>
        <div class="rounded-full bg-gray-300 text-gray-700 p-2 ml-2">
          <span class="text-sm">{message.name}</span>
        </div>
      </div>
    </div>
    )
  }
  
  
  return (
    <div class="bg-gray-100 h-screen flex flex-col">

      
  <div class="flex-1 overflow-y-scroll px-4 py-8">

    {messages.map((message) => {
      if (message.type == 'outgoing'){
        return(
          <Outgoing message={message} />
        )
      }
      return (<Incoming message={message} />)
    })}

    

    {/* <Incoming message={"Hi! I have a question about my order."} /> */}


  </div>

     <div class="bg-white p-4 flex items-center">
    <input value={messagetext} onChange={(e) => setmessageText(e.target.value)} type="text" placeholder="Type your message..." class="flex-1 border rounded-full py-2 px-4" />
    <button onClick={sendMessage} class="ml-4 bg-blue-500 text-white py-2 px-4 rounded-full">Send</button>
  </div>
     
      <footer className="footer" id="footer">
        <div className="copy">
          &copy; Copyright by Team 10, 2023. All Rights Reserved.
        </div>
      </footer>
    </div>
  );

  
}

export default Discussion;
