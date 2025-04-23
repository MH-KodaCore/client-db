import { useState } from "react";
import FormConnectURL from "components/login/FormConnectURL";
import FormStandart from "components/login/FormStandart";

const RightScreen = () => {
  const [activeForm, setActiveForm] = useState<"standart" | "connect">(
    "standart"
  );

  return (
    <div className="">
      <div className="border-b border-[#363636] text-center p-7"></div>

      <div className="mt-20">
        <div className="w-2/5 mx-auto mb-4 flex gap-4">
          <button
            className={`border rounded-xl px-4 py-1 border-[#363636] cursor-pointer ${
              activeForm === "standart" ? "bg-[#135E00] text-white" : ""
            }`}
            onClick={() => setActiveForm("standart")}
          >
            Standart
          </button>
          <button
            className={`border rounded-xl px-4 py-1 border-[#363636] cursor-pointer ${
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
