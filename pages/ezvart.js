import style from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";




const ezvart = () => {
  const [imgData, setImgData] = useState();

const { register, handleSubmit, watch} = useForm();
const onSubmit = data => setImgData(data);

// console.log(imgData);

const .toDataURL("image/jpeg");



  return (
    <div className={style.main}>
      <div className={style.card}>
      <form onSubmit={handleSubmit(onSubmit)}>

      <input type="file" {...register("example")} />
    
      <input type="submit" />
    </form>
      </div>
    </div>
  );
};

export default ezvart;
