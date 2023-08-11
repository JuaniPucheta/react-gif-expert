import { useState } from "react"
import { useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect( () => {        
        getImages()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
    //* si dejo la dependencia vacia, solo se ejecuta una vez, si le pongo una dependencia, se ejecuta cada vez que cambia la dependencia


    return {
        images,
        isLoading
    }

}
