import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TLogin } from "@/types";
import { login } from "@/styles";
import ErrorMessage from "../Modal";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<TLogin>({
    host: "",
    port: "",
    userName: "",
    password: "",
    dataBase: "",
  });
  const [natification, setNatification] = useState<string>();

  const open_db_conn = async () => {
    try {
      await invoke("open_db_conn", {
        connUrl: {
          host: loginData.host,
          port: loginData.port,
          user: loginData.userName,
          password: loginData.password,
          db_name: loginData.dataBase,
        },
      });

      navigate("/connection");
    } catch (error) {
      setNatification(`Ooops... ${error}`);
      console.log(`Ooops...: ${error}`);
    }
  };

  const changeValue = (e: any) => {
    const name = e.target.id;
    const value = e.target.value;

    setLoginData((previousState: TLogin) => {
      return { ...previousState, [name]: value };
    });
  };

  return (
    <>
      <ErrorMessage message={natification} />
      <div className={login.wrapper}>
        <div className={login.inputs}>
          {/* host */}
          <label htmlFor="host">Host</label>
          <input
            id="host"
            className={login.input}
            onChange={(e) => changeValue(e)}
          />

          {/* port */}
          <label htmlFor="port">Port</label>
          <input
            id="port"
            className={login.input}
            onChange={(e) => changeValue(e)}
          />

          {/* userName */}
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            className={login.input}
            onChange={(e) => changeValue(e)}
          />

          {/* password */}
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className={login.input}
            onChange={(e) => changeValue(e)}
          />

          {/* dataBase */}
          <label htmlFor="dataBase">Database</label>
          <input
            id="dataBase"
            className={login.input}
            onChange={(e) => changeValue(e)}
          />
        </div>
        <button className={login.button} onClick={open_db_conn}>
          Connect
        </button>
      </div>
    </>
  );
};

export default Login;
