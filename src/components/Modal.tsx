interface TMessage {
  message: string;
  open: boolean;
  closeError: (val: boolean) => void;
}

const ErrorMessage = ({ message, open, closeError }: TMessage) => {
  console.log("it is error", message);

  const error = {
    wrapper:
      "text-red-500 absolute top-[10%] right-[5%] border border-red-500 w-2xs bg-[#2e383c] flex items-center gap-[10px] flex-col p-[15px] rounded-lg shadow-lg relateve duration-300 ease-in ",
    icon: "w-[50px] h-[50px]",
    closeBtn:
      "text-white absolute right-[5px] top-[5px] p-[5px] hover:outline hover:outline-gray-400 rounded-full cursor-pointer",
    closeIcon: "h-[20px] w-[20px]",
  };

  return (
    <div className={open ? error.wrapper : "hidden"}>
      <button className={error.closeBtn} onClick={() => closeError(false)}>
        <img src="/close.svg" className={error.closeIcon} />
      </button>
      <img src="/error.svg" className={error.icon} />
      <h1>{message}</h1>
    </div>
  );
};

export default ErrorMessage;
