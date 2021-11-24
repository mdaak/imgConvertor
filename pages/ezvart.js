import { useState } from "react";
import style from "../styles/Home.module.css";

const ezvart = () => {

   const [data, setData] = useState()




  return (
    <div className={style.main}>
      <div className={style.card}>
        <form id={setData()}>
          <input type="image" name="image file" id="fileData" />
          <input type="submit" name="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ezvart;
