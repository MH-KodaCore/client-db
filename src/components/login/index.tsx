const Login = () => {
  const login = {
    wrapper:
      "text-[#B9B9B9] border border-[#2C8F13] w-lg h-auto p-[50px] rounded-lg items-center",
    input: "border border-[#637160] p-2 rounded-xs",
    form: "grid grid-cols-[100px_auto] gap-10",
    label: "text-base",
    button: "border border-[#303030] p-2 rounded-xs w-[200px]",
  };

  return (
    <>
      <div className={login.wrapper}>
        <form className={login.form}>
          <label htmlFor="host">Host</label>
          <input id="host" className={login.input} />
          <label htmlFor="port">Port</label>
          <input id="port" className={login.input} />
          <label htmlFor="userName">Username</label>
          <input id="userName" className={login.input} />
          <label htmlFor="password">Password</label>
          <input id="password" className={login.input} />
          <label htmlFor="dataBase">Database</label>
          <input id="dataBase" className={login.input} />
        </form>
        <button className={login.button}>Connect</button>
      </div>
    </>
  );
};

export default Login;
