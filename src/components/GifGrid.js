import React, { useState } from 'react'

export const GifGrid = ({category}) => {

    const [counter, setCounter] = useState(0);

    const getGifs = async(arg) => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=Odlm70jt3CcrWhTplchwKFSPNS80Vo7b&q=nezuko&limit=10';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( (img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        } )
        console.log(gifs)
    }

    getGifs();

  return (
    <div>
      <h2>{category}</h2>
    </div>
  )
}

