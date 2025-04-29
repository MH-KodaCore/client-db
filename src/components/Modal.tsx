import { error } from "@/styles";

interface TMessage {
  message: string;
  open: boolean;
  closeError: (val: boolean) => void;
}

const ErrorMessage = ({ message, open, closeError }: TMessage) => {
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
