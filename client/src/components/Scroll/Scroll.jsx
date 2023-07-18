import React from 'react';
import style from "./scroll.module.css";
import { Link } from 'react-router-dom';

function Scroll({ comics }) {
  const [comic,setComic]=React.useState([]);
  
  React.useEffect(() => {
    setComic(comics)
  }, [comics]);

   const handleOnClick=(e)=>{
      setComic([]);
   }
  return (
    <div className={style.comics}>   
      {comic?.map(e => (
        <Link key={e.id} to={`/detail/${e.id}`} onClick={handleOnClick}>
          <button className={style.button}>{e.title}</button>
        </Link>
      ))}
    </div>
  );
}

export default Scroll;
