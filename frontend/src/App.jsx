import "./App.css"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import {BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
import {Toaster} from "react-hot-toast"
import {AuthContext} from "./main"
import axios from "axios";
import React, {useContext,useEffect} from "react"


function App() {

  const {isAuthorized, setIsAuthorized, setUser,user} = useContext(AuthContext);
  
  useEffect(()=>{
    const fetchUser  = async()=>{
      
      try {
        const response = await axios.get("http://localhost:8000/api/user/getuser",{withCredentials:true});

       
        
        setUser(response.data.loggedInUser);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false)
        console.error("Error fetching user:", error);
        
      }
    }

    fetchUser();
    

  },[])

 

  return (
   <div className="p-4 h-screen flex items-center justify-center">
    {/* <Signup/> */}
    <Router>
    <Routes>
    <Route path ="/" element={isAuthorized ? <Home /> : <Navigate to={"/login"} />} />
      <Route path = "/login" element={isAuthorized ? <Navigate to="/"/> : <Login/>} />
      <Route path = "/signup" element={ isAuthorized ?<Navigate to="/"/> : <Signup/>} />
    </Routes>
    <Toaster/>

    </Router>

   </div>
  )
}

export default App
