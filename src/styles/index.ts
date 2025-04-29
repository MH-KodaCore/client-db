export const login = {
  wrapper:
    "text-[#B9B9B9] border border-[#637160] w-lg h-auto p-[50px] rounded-lg flex flex-col gap-[30px] shadow-[#60785b]/20 shadow-xl",
  input:
    "border border-[#637160] p-2 rounded-lg focus:outline-none focus:shadow-[#60785b]/10 focus:shadow-xl",
  inputs: "grid grid-cols-[100px_auto] gap-10 items-center",
  label: "text-base",
  button:
    "border border-[#637160] p-2 rounded-lg w-[200px] m-auto cursor-pointer hover:bg-[#135E00]",
};

export const navbar = {
  wrapper: "border-y h-[8%] border-[#637160]",
  lists: "flex flex-row justify-around items-center text-[#B9B9B9] h-full",
};

export const sidebar = {
  wrapper: "w-96 h-[82%] border-r border-[#637160]",
};

export const error = {
  wrapper:
    "text-red-500 absolute top-[10%] right-[5%] border border-red-500 w-2xs bg-[#2e383c] flex items-center gap-[10px] flex-col p-[15px] rounded-lg shadow-lg relateve duration-300 ease-in ",
  icon: "w-[50px] h-[50px]",
  closeBtn:
    "text-white absolute right-[5px] top-[5px] p-[5px] hover:outline hover:outline-gray-400 rounded-full cursor-pointer",
  closeIcon: "h-[20px] w-[20px]",
};
