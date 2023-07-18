import React from 'react';
import style from "./pay.module.css";
import axios from 'axios';
function Pay(props) {
      const handleOnclick = async () =>{
        const params = {
            name:props.name,
            price:props.price
        }
     const url  = await axios.post('http://localhost:3001/pay',params)
     console.log(url.data);
   window.location.href=url.data.url
    }
  return (
    <button className={style.pay} onClick={handleOnclick}>Pagar {props.price} $</button>
  )
}

export default Pay