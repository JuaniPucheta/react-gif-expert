import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = ( newCategory ) => {
    if(categories.includes(newCategory)) return
    setCategories([newCategory, ...categories]) //* Spread Operator
  }

  return (
    <>
        {/* titulo */}
        <h1>GiftExpertApp</h1>
        <hr />

        {/* Input */}
        <AddCategory 
          onNewCategory={onAddCategory}
        />

        {/* Listado de Gif */}
          {
            categories.map( category => {
              return (
                <GifGrid 
                  key={category} 
                  category={category} 
                />
              )
            })
          }

    </>
  )
}
