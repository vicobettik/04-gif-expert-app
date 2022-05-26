import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = props => {

    const [categories, setCategories] = useState(['one punch']);

  return (
    <>
        <h2>Gif expert app</h2>
        <AddCategory setCategories={setCategories} />
        <hr />  

        <ol>
            {
                categories.map( (category) => {
                    return <GifGrid 
                                category={category}
                                key={category}
                            />   
                })
            }
        </ol>
    </>
  )
}

GifExpertApp.propTypes = {

}
