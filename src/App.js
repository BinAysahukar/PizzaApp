import Menu from "./component/Menu";
import Footer from "./component/Footer";
import About from "./component/About";
import Display from "./component/Display";
import Home from "./component/Home";
import AddNewItem from "./component/AddNewItem";
import UpdateItem from "./component/UpdateItem";
import DeleteItem from "./component/DeleteItem";
import Contact from "./component/Contact";
import { Router,Route, Routes } from "react-router-dom";


function App(){
  return (
    <>
    <Menu/>
    <Home/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Display" element={<Display/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/AddNewItem" element={<AddNewItem/>}/>
      <Route path="/UpdateItem/:id" element={<UpdateItem/>}/>
      <Route path="/DeleteItem" element={<DeleteItem/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}


export default App;


