import React from 'react'

function ListFoods({addedFood}) {
    let totalCal = 0
    if( addedFood.length )
        addedFood.forEach( food => totalCal += food.quantity * food.calories)
    return (
        <React.Fragment>
        <h2>Today's food</h2>
        <ul>
            {addedFood.map( (food, i) => <li key={i}>{food.quantity} {food.name} = {food.quantity * food.calories} cal</li>)}
        </ul>
        <p>Total: {totalCal} cal</p>
        </React.Fragment>
    )
}

export default ListFoods
