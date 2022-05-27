import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const [images, setimages] = useState([]);

  useEffect(() => {
    getGifs();
  }, [])

  const getGifs = async (arg) => {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=Odlm70jt3CcrWhTplchwKFSPNS80Vo7b&q=shiro&limit=10';
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    console.log(gifs)
    setimages(gifs);
  }

  // getGifs();

  return (
    <div>
      <h2>{category}</h2>
      {
        images.map(img => {
          return (
            <GifGridItem
              key={img.id}
              {...img}
            />
          )
        })
      }
    </div>
  )
}

