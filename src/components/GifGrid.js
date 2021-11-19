import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category }) => {

    const { data:images, loading } = useFetchGifts ( category );
    
    return (
        <>
            <h3> { category }</h3>
            { loading && <p> Cargando </p>}
            <div className = "card-grid animate__animated animate__backInDown">
                    {
                        images.map( img  => (
                            <GifGridItem 
                                key= { img.id }
                                // img = { img }
                                { ...img }
                            />
                        ))

                        // images.map( img  => (
                        //     <li key = { img.id }> {img.title }</li>
                        // ))
                    }
            </div>
        </>
    )
}


