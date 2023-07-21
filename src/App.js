import "./App.css";
import Main from "./components/main";
import Side from "./components/side";
import Taskbar from "./components/taskbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Taskbar />
      <div className="sub">
        <Side />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
