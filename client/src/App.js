import Hola from "./components/Hello";
import Adios from "./components/Bye";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home"
import Create from "./components/Create/Create.jsx"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element= {<Home/>}/>
        <Route path="/create" element ={<Create/>}/>
      </Routes>
    </div>
  )
}

export default App;
