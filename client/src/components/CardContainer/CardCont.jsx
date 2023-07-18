import React from 'react'
import Card from '../Card/Card'
import style from "./cardContainer.module.css"
import axios from 'axios'
function CardCont() {
  const [comics,setComics]=React.useState([]);
  
  async function fetchComics(){
    let data=await axios.get("https://marvel-back-hc4s.onrender.com/comics");
    return data.data;
   }
   React.useEffect(() => {
    async function fetchData() {
      const data = await fetchComics();
      setComics(data);
    }

    fetchData();
  }, []);
      
  return (
    <div className={style.container}>
        {
            comics.map((e,i)=>{
              return(
                <Card data={e} key={i}></Card> 
              )
            })
        }
    </div>
  )
}

export default CardCont