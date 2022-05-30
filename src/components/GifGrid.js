import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const [images, setimages] = useState([]);

  useEffect(() => {
    getGifs(category).then( imgs => setimages(imgs) )
  }, [category])

  

  // getGifs();

  return (
    <>
      <h2>{category}</h2>
      <div className='card-grid'>
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
    </>
  )
}

