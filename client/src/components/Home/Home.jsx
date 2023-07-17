import React from 'react';
import style from "./home.module.css";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className={style.nav}>
        <p className={style.h1}>MARVEL</p>
        <Link to={"/"} className={style.a}>Home</Link>
        <div className={style.navtext}>
        <button className={style.button}>Buscar</button>
        <input className={style.input} type="text" placeholder='Busca tu comic' />
        </div>
    </div>
  )
}

export default Home