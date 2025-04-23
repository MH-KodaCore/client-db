const FormStandart = () => {
  return (
    <div className="border rounded-md w-full sm:w-2/5 mx-auto p-4 space-y-4 border-[#363636] mt-3">
      {[
        { label: "Host", placeholder: "localhost", type: "text" },
        { label: "Port", placeholder: "5432", type: "text" },
        { label: "Username", placeholder: "postgres", type: "text" },
        { label: "Password", placeholder: "••••••", type: "password" },
        { label: "Database", placeholder: "", type: "text" },
      ].map((field, index) => (
        <div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-4"
          key={index}
        >
          <label className="w-full sm:w-24 text-left sm:text-right mb-2 sm:mb-0">
            {field.label}
          </label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            className="w-full sm:flex-1 p-2 rounded border border-[#363636]"
          />
        </div>
      ))}

      <div className="flex items-center justify-center gap-2">
        <input
          type="checkbox"
          className="appearance-none w-5 h-5 border-2 border-[#363636] rounded-sm checked:bg-[#135E00] checked:border-transparent cursor-pointer"
        />
        <p className="text-xsm">Connection on start</p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center sm:justify-center">
        <button className="border border-[#363636] rounded-md px-4 py-1 w-full sm:w-auto cursor-pointer">
          Test Connection
        </button>
        <button className="border border-[#363636] rounded-md px-4 py-1 w-full sm:w-auto cursor-pointer">
          Save & Connect
        </button>
        <button className="border border-[#363636] rounded-md px-4 py-1 w-full sm:w-auto cursor-pointer">
          Connect
        </button>
      </div>
    </div>
  );
};

export default FormStandart;
