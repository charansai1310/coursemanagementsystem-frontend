import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Routing from "./Routing";
import { AuthContext, authData } from "./contexts/AuthContext";
import axios from "axios";
import { APIHOST } from "./env";


export default function App(){
  const [authState, setAuthState] = useState(() => {
    const token = localStorage.getItem('token')
    if(token){
      return {...authData, isLoggedIn: true, token: token}
    }
    return authData
  })
  const [loading, setLoading] = useState(true)

  const setup = async () => {
    if(authState.token){
      const res = await axios.get(APIHOST + '/api/user', {headers: {
        'Authorization': `Bearer ${authState.token}`,
      }})
      console.log(res.data)
      setAuthState({...authState, userData: res.data})
      setLoading(false)
    }
    else{
      setLoading(false)
    }
  }
  useEffect(()=> {
    setup()
  }, [])

  if(loading){
    return(
      <div>
        <h4>Loading...</h4>
      </div>
    )
  }
  return (
    <div className="App">
      <AuthContext.Provider value = {[authState, setAuthState]}>
        <Routing/>
      </AuthContext.Provider>
    </div>
  );
}