import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [elementsArray, setElementsArray] = useState(['Goku']);
 

    return (
        <>
            <h2>GifExpertapp</h2>
            <AddCategory setCategories = { setElementsArray } />          
            <hr/>

            <ol>
                {
                    // elementsArray.map( ( category, i) => {
                    //     return <li key={ category } > { category } </li>
                    // })
                    
                    elementsArray.map(  category  => (
                        <GifGrid
                            key = { category }
                            category = { category }
                        />
                    ))

                }
            </ol>
        </>
    )
}
