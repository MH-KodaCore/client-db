const FormConnectURL = () => {
  return (
    <div className="border rounded-md w-full sm:w-2/5 mx-auto p-4 space-y-4 border-#363636] mt-3">
      <textarea
        className="w-full sm:flex-1 p-2 rounded border border-[#363636] h-40"
        placeholder="postgres://undefined@localhost/undefined"
      />

      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-2">
          <input
            type="checkbox"
            className="appearance-none w-5 h-5 border-2 border-[#363636] rounded-sm checked:bg-[#2C8F13] checked:border-transparent cursor-pointer"
          />
          <p className="text-xsm">Connection on start</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center sm:justify-center">
          <button className="border s-[#363636] rounded-md px-4 py-1 w-full sm:w-auto cursor-pointer">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormConnectURL;
