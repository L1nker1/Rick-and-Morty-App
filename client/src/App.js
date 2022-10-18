import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import Create from "./components/Create/Create.jsx"
import Nav from "./components/Navbar/navbar";


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element ={Nav}/>
      </Routes>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/create" element ={<Create/>}/>
      </Routes>
    </div>
  )
}

export default App;
