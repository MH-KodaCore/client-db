import { useState } from "react";
import FormConnectURL from "./FormConnectURL";
import FormStandart from "./FormStandart";

const RightScreen = () => {
  const [activeForm, setActiveForm] = useState<"standart" | "connect">(
    "standart"
  );

  return (
    <div className="">
      <div className="border-b border-[rgb(73,73,73)] text-center p-7"></div>

      <div className="mt-40">
        <div className="w-2/5 mx-auto mb-4 flex gap-4">
          <button
            className={`border rounded-xl px-4 py-1 border-[#637160] cursor-pointer ${
              activeForm === "standart" ? "bg-[#135E00] text-white" : ""
            }`}
            onClick={() => setActiveForm("standart")}
          >
            Standart
          </button>
          <button
            className={`border rounded-xl px-4 py-1 border-[#637160] cursor-pointer ${
              activeForm === "connect" ? "bg-[#135E00] text-white" : ""
            }`}
            onClick={() => setActiveForm("connect")}
          >
            Connect URL
          </button>
        </div>

        {activeForm === "standart" ? <FormStandart /> : <FormConnectURL />}
      </div>
    </div>
  );
};

export default RightScreen;
