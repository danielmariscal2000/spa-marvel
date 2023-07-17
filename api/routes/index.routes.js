const express = require('express');
const router = express.Router();

let array = [
  { 
    id:1,
    title: "Web Of Carnage #1",
    author: "V., Manna",
    img: "https://cdn.marvel.com/u/prod/marvel/i/mg/6/50/649da2d2551f3/portrait_uncanny.jpg",
    price: 15.52,
    description: "A thrilling comic featuring the Web Of Carnage."
  },
  {
    id:2,
    title: "The Amazing Spider-Man #1",
    author: "D., Slott",
    img: "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
    price: 20.10,
    description: "Experience the incredible adventures of the Amazing Spider-Man."
  },
  {
    id:3,
    title: "X-Men: Dark Phoenix Saga",
    author: "C., Claremont",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/XMen135.jpg/220px-XMen135.jpg",
    price: 3.99,
    description: "Witness the epic Dark Phoenix Saga of the X-Men."
  },
  {
    id:4,
    title: "Avengers: Infinity War",
    author: "J., Hickman",
    img: "https://musicart.xboxlive.com/7/46ba5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    price: 8.99,
    description: "The Avengers face their greatest threat in the form of Thanos and the Infinity Stones."
  },
  {
    id:5,
    title: "Iron Man: Extremis",
    author: "W., Ellis",
    img: "https://upload.wikimedia.org/wikipedia/en/7/7c/Iron_Man_Extremis.jpg",
    price: 12.80,
    description: "Tony Stark confronts a dangerous new technology that could change the world."
  },
  {
    id:6,
    title: "Captain America: The Winter Soldier",
    author: "E., Brubaker",
    img: "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_.jpg",
    price: 25.85,
    description: "Captain America battles a deadly conspiracy that reaches the highest levels of power."
  },
  {
    id:7,
    title: "Thor: God of Thunder",
    author: "J., Aaron",
    img: "https://m.media-amazon.com/images/M/MV5BMDY2MjE3NjEtYmJmMy00Nzk3LTg0YTktOTM5MjlhZjRhMTk0XkEyXkFqcGdeQXVyMTM4NjgxMjA@._V1_.jpg",
    price: 15.10,
    description: "Join Thor on an epic journey across realms to save the universe from ancient evil."
  },
  {
    id:8,
    title: "Black Widow: The Name of the Rose",
    author: "M., Grayson",
    img: "https://cdn.marvel.com/u/prod/marvel/i/mg/9/f0/6467a9d77abb6/clean.jpg",
    price: 6.32,
    description: "Black Widow confronts a deadly conspiracy that threatens her past and future."
  },
  {
    id:9,
    title: "Hulk: Planet Hulk",
    author: "G., Pak",
    img: "https://cdn.marvel.com/u/prod/marvel/i/mg/f/e0/637e3e84adfcf/clean.jpg",
    price: 7.15,
    description: "The Hulk is banished to a distant planet where he becomes a gladiator and a savior."
  },
  {
    id:10,
    title: "Daredevil: Born Again",
    author: "F., Miller",
    img: "https://i.blogs.es/c49af8/daredevil-she-hulk-poster/450_1000.jpeg",
    price: 25.80,
    description: "Daredevil faces his greatest challenge as his life falls apart and he must rise again."
  },
  {
    id:11,
    title: "Guardians of the Galaxy: Cosmic Avengers",
    author: "B., Bendis",
    img: "https://www.bookxcess.com/cdn/shop/products/9780785166078_1.jpg?v=1649855627",
    price: 6.39,
    description: "Join the ragtag team of misfits as they protect the galaxy from cosmic threats."
  },
  {
    id:12,
    title: "Doctor Strange: The Oath",
    author: "B., Vaughan",
    img: "https://cdn.marvel.com/u/prod/marvel/i/mg/8/90/517ad22da11c8/detail.jpg",
    price: 11.99,
    description: "Doctor Strange embarks on a mystical quest to save his own life and the world."
  },
  {
    id:13,
    title: "Captain Marvel: Higher, Further, Faster, More",
    author: "K., DeConnick",
    img: "https://cdn.marvel.com/u/prod/marvel/i/mg/d/50/5c8148eec8f7e/clean.jpg",
    price: 7.45,
    description: "Captain Marvel soars to new heights and battles threats that push her to the limit."
  },
  {
    id:14,
    title: "Fantastic Four: Heroes Return",
    author: "S., Lee",
    img: "https://m.media-amazon.com/images/I/91isHp2T2tL._AC_UF1000,1000_QL80_.jpg",
    price: 3.99,
    description: "The Fantastic Four reunites to face their greatest adversaries and save the world."
  },
  {
    id:15,
    title: "Wolverine: Old Man Logan",
    author: "M., Millar",
    img: "https://m.media-amazon.com/images/I/916P8MvHe6L._AC_UF1000,1000_QL80_.jpg",
    price: 6.70,
    description: "An aging Wolverine embarks on a dangerous journey in a dystopian future."
  },
  {
    id:16,
    title: "The Avengers: Disassembled",
    author: "B., Bendis",
    img: "https://cdn.marvel.com/u/prod/marvel/i/mg/e/50/5bd20eacf410c/detail.jpg",
    price: 8.99,
    description: "The Avengers face internal turmoil and external threats that tear the team apart."
  },
  {
    id:17,
    title: "Spider-Man: Kraven's Last Hunt",
    author: "J.M., DeMatteis",
    img: "https://m.media-amazon.com/images/I/91UjmR9dZVL._AC_UF1000,1000_QL80_.jpg",
    price: 10.90,
    description: "The Avengers face internal turmoil and external threats that tear the team apart."
  }
]
router.get('/comics', (req, res) => {
  try {
    res.json(array);
  } catch (error) {
    res.send("error")
  }
});

router.get('/comics/:id', (req, res) => {
  try {
     const {id}=req.params
     let comic=array.filter(e=>e.id==id)
     res.send(comic[0])
  } catch (error) {
    res.send("error") 
  }
});

module.exports = router;
