export interface TLogin {
  host: string;
  port: string;
  userName: string;
  password: string;
  dataBase: string;
}

export interface TMessage {
  message: string;
  open: boolean;
  closeError: (val: boolean) => void;
}
