import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const userList = props.data; //배열이지
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Info = () => {
    //1번 배열내에 username이라는 key를 비교해서 맞는 아이디를 찾아온다
    for (let index = 0; index < userList.length; index++) {
      if (userList[index].username == username) {
        if (userList[index].password == password) {
          alert("로그인 성공");
          navigate("/");
        } else {
          alert("비밀번호가 틀립니당");
          setPassword("");
        }
      }
    }
    // userList[i] = {username: 'kby', password: 'qhdudzzang99*'}
    //2번 만약 아이디가 맞다면 패스워드를 비교해 패스워드 마져 맞으면 로그인 성공
  };

  return (
    <div>
      <div>
        <input
          placeholder="ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          placeholder="PW"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={Info}>로그인</button>
      </div>
    </div>
  );
};

export default Login;
