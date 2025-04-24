import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface TLogin {
  host: string;
  port: string;
  userName: string;
  password: string;
  dataBase: string;
}
const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<TLogin>({
    host: "",
    port: "",
    userName: "",
    password: "",
    dataBase: "",
  });
  const login = {
    wrapper:
      "text-[#B9B9B9] border border-[#2C8F13] w-lg h-auto p-[50px] rounded-lg flex flex-col gap-[30px]",
    input:
      "focus:outline-none border border-[#637160] p-2 rounded-xs focus:bg-[#135E00]",
    inputs: "grid grid-cols-[100px_auto] gap-10 items-center",
    label: "text-base",
    button:
      "border border-[#303030] p-2 rounded-xs w-[200px] m-auto cursor-pointer hover:bg-[#135E00]",
  };

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
