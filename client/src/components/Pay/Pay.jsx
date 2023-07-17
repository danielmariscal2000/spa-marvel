import React from 'react'
import style from "./pay.module.css"
function Pay(props) {
  return (
    <button className={style.pay}>Pagar {props.price} $</button>
  )
}

export default Pay