import React, { createContext, useEffect, useState,useContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import io from "socket.io-client"

export const AuthContext = createContext({});
export const SocketContext = createContext({});

const AuthContextProvider = ({children}) => {
  // State for authorization status
  const [isAuthorized, setIsAuthorized] = useState(false);

  // State for user data
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ isAuthorized, setIsAuthorized, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};



const SocketContextProvider = ({children}) => {
  const { user } = useContext(AuthContext);

  // State for authorization status
  const [socket,setSocket] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(()=>{

    if(user){
      const socket = io("http://localhost:8000",{
        query:{
          userId : user._id
        }
      });
      setSocket(socket);

      socket.on("getOnlineUsers", (activeUsers)=>{
        setOnlineUsers(activeUsers)
      })




      return ()=>socket.close();

    }else{
      if(socket){
        socket.close();
        setSocket(null);
      }
    }

  },[user])
  

  return (
    <SocketContext.Provider value={{socket,onlineUsers}}>
      {children}
    </SocketContext.Provider>
  );
};

// Use createRoot().render() instead of ReactDOM.render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
        <App />
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
