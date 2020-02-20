import React from 'react'

function AddFood({newFood: {name, calories, image}, handleNewInput, addNewFood}) {
    return (
        <form>
            <input placeholder="Name" name="name" value={name} onChange={handleNewInput}/>
            <input type="number" name="calories" value={calories} onChange={handleNewInput}/>
            <input placeholder="image URL" name="image" value={image} onChange={handleNewInput}/>
            <button onClick={addNewFood}>Add</button>
        </form>
    )
}

export default AddFood
