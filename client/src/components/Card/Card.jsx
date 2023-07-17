import React from 'react';
import style from "./card.module.css";
import Pay from '../Pay/Pay';
import { Link } from 'react-router-dom';
function Card({data}) {
  return (
    <div className={style.card}>
        <Link to={`/detail/${data.id}`} className={style.link}>
        <div className={style.conText}>
            <p className={style.title}>{data.title}</p>
            <p className={style.author}>Autor : {data.author}</p>
        </div>
        <div>
            <img className={style.img} src={data.img}alt={data.title} width="280px" height="380px" />
        </div>
        </Link>
        <div>
        <Pay price={data.price}></Pay>
        </div>
    </div>
  )
}

export default Card