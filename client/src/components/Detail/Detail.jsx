import React from "react";
import { useParams } from "react-router-dom";
import style from "./detail.module.css";
import axios from "axios";
import Pay from "../Pay/Pay";
function Detail() {
  const { id } = useParams();
  const [comic, setComic] = React.useState({});
  async function fetcIdComics() {
    const data = await axios.get(`http://localhost:3001/comics/${id}`);
    return data.data;
  }
  React.useEffect(() => {
    async function fetch() {
      const data = await fetcIdComics();
      setComic(data);
    }
    fetch();
  }, [id]);
  return (
    <div className={style.container}>
      <div className={style.biblio}>
        <h1>{comic.title}</h1>
        <h2>{comic.author}</h2>
        <p>{comic.description}</p>
      <Pay price={comic.price}></Pay>
      </div>
      <div>
        <img src={comic.img} alt="img" width="300px" />
      </div>
    </div>
  );
}

export default Detail;
