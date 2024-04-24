import "./App.css"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import {Routes, Route} from "react-router-dom";


function App() {
  

  return (
   <div className="p-4 h-screen flex items-center justify-center">
    {/* <Signup/> */}
    <Routes>
      <Route path ="/" Component={Home} />
      <Route path = "/login" Component={Login} />
      <Route path = "/Signup" Component={Signup} />
    </Routes>
    

    

   </div>
  )
}

export default App
