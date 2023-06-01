import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header"
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
    <Routes>
      <Route path="/" element={<Navbar />}>
         <Route path="/" element={<Projects/>}/>
      </Route>
  </Routes>
     <Header/>
     <Projects />
     <Footer/>
    </div>
   </BrowserRouter>
  );
}

export default App;
