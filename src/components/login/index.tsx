const Login = () => {
  const login = {
    wrapper:
      "text-[#B9B9B9] border border-[#2C8F13] w-lg h-auto p-[50px] rounded-lg flex flex-col gap-[30px]",
    input:
      "focus:outline-none border border-[#637160] p-2 rounded-xs focus:bg-[#135E00]",
    form: "grid grid-cols-[100px_auto] gap-10 items-center",
    label: "text-base",
    button:
      "border border-[#303030] p-2 rounded-xs w-[200px] m-auto cursor-pointer hover:bg-[#135E00]",
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
