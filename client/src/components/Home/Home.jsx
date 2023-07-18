import React from "react";
import style from "./home.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Scroll from "../Scroll/Scroll";
function Home() {
  const [comic, setComics] = React.useState([]);
  const [filterComic, setFilterComics] = React.useState([]);
  async function fetchComics() {
    let data = await axios.get("https://marvel-back-hc4s.onrender.com/comics");
    return data.data;
  }
  React.useEffect(() => {
    async function fetchData() {
      const data = await fetchComics();
      setComics(data);
    }
    fetchData();
  }, [filterComic]);

  const handleOnChange = (e) => {
    let res = comic.filter((elem) =>
      elem.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterComics(res);
  };
  return (
    <div className={style.nav}>
      <Link to={"/"} className={style.a2}>
        <p className={style.h1}>MARVEL</p>
      </Link>
      <Link to={"/"} className={style.a}>
        Home
      </Link>
      <div className={style.navtext}>
        <button className={style.button}>Buscar</button>
        <div className={style.search}>
          <input
            className={style.input}
            onChange={handleOnChange}
            type="text"
            placeholder="Busca tu comic"
          />
          <div>
            {filterComic.length !== 0 ? <Scroll comics={filterComic} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
