
import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat"




function App() {




  return (

    <Router>
    <Routes>
        <Route exact path="/" element={ <Join/> } />
        <Route path="/chat" element= {<Chat/>} />
        </Routes>
      
      </Router>
  );
}

export default App;
