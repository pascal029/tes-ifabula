import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login.css";

export default function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((resp) => {
        if (!resp.ok) throw resp;
        return resp.json();
      })
      .then((data) => {
        localStorage.setItem("token", "token");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <p>Login Form</p>
      <form onSubmit={submitLogin}>
        <div className="input">
          <div>
            <p>
              Username :{" "}
              <input
                onChange={handleChangeInput}
                name="username"
                type="text"
              ></input>
            </p>
          </div>
          <div>
            <p>
              Password :{" "}
              <input
                onChange={handleChangeInput}
                name="password"
                type="password"
              ></input>
            </p>
          </div>
          <div style={{ marginLeft: 100 }}>
            <button>LOGIN</button>
          </div>
        </div>
      </form>
    </div>
  );
}
