import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState()

    const onInputchange = ( {target} ) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length > 2) {
            // setCategories( categories => [inputValue, ...categories])
            onNewCategory(inputValue)
            setInputValue('')
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputchange}
            />
        </form>
    )

}

AddCategory.propTypes = {
    // setCategories: PropTypes.func.isRequired,
    onNewCategory: PropTypes.func.isRequired
}