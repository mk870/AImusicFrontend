import Home from "./components/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Clickedsong from "./components/Clickedsong";
import Errorpage from "./components/Errorpage"
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/song/:title" element={<Clickedsong/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
