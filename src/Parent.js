import { useEffect, useState, useRef } from "react";
import { TextField } from "@mui/material";

export const Parent = () => {
  const [input, setInput] = useState({});
  const [spdata, setSpdata] = useState("");
  const tempData = useRef(null);
  const perData = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    setSpdata(tempData.current.value);
  };
  console.log(input);
  useEffect(() => {
    perData.current.focus();
  }, []);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" ref={tempData} />
        <input type="text" ref={perData} />
        <input type="submit" />
      </form>
      <Child setInput={setInput} />
      {spdata}
    </div>
  );
};
const Child = ({ setInput }) => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    passWord: "",
    confirmPassword: "",
  });

  const { userName, email, passWord, confirmPassword } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("key", JSON.stringify(data));
    setInput(data);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <TextField
          type="text"
          name="userName"
          value={userName}
          onChange={changeHandler}
        />
        <br />
        <TextField
          type="text"
          name="email"
          value={email}
          onChange={changeHandler}
        />
        <br />
        <TextField
          type="password"
          name="passWord"
          value={passWord}
          onChange={changeHandler}
        />
        <br />
        <TextField
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={changeHandler}
        />
        <input type={"submit"} />
      </form>
    </div>
  );
};
