import PropTypes from 'prop-types'
// import { getGifs } from '../helpers/getGifs';
// import { useState, useEffect } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( {category} ) => {
  
    const { images, isLoading } = useFetchGifs( category )

    return (
        <>
            <h3>{ category }</h3>
            {/* <LoadingMessage isLoading={ isLoading } /> */}

            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }    // * envio cada una de las propiedades del objeto image como una propiedad independiente
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
