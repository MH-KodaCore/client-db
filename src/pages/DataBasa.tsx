import { invoke } from "@tauri-apps/api/core";
import { useEffect, useState } from "react";

const DataBasa = () => {
  const [dataBase, setDataBase] = useState<string[]>([]);

  useEffect(() => {
    const getListOfDB = async () => {
      try {
        const res: string[] = await invoke("get_list_of_db");
        setDataBase(res);
      } catch (error) {
        console.log(`Ooops...: ${error}`);
      }
    };

    getListOfDB();
  }, []);

  const options = dataBase?.map((db) => (
    <option value={db} key={db}>
      {db}
    </option>
  ));

  return (
    <>
      <div>
        <h1 className="text-[#B9B9B9] p-4 ">Select Database</h1>
        <select name="db">{options}</select>
      </div>
    </>
  );
};

export default DataBasa;
