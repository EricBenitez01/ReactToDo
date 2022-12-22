import React, { useEffect, useState } from 'react'

function CardList() {
    /* const [loaded, setLoaded] =  useState(false); */
    const [items, setItems] = useState([]);
    

    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then( res => res.json())
      .then(response => setItems(response.abilities));
      
    }, []);
  return (
    
    
    <div>Hola
        {items.map((item, i) => <div key={i}> <a  href=" {item.ability.url} ">{item.ability.name} </a></div> )}
        <div>{console.log(items)}</div>
    </div>
  )
}

export default CardList