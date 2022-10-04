import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Regist from "./pages/Regist";
import Mypage from "./pages/Mypage";

function App() {
  const database = [
    {
      username: "kby9901",
      password: "1357*",
    },
    {
      username: "ansu1007",
      password: "1234",
    },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login data={database} />}></Route>
          <Route path="/regist" element={<Regist />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
