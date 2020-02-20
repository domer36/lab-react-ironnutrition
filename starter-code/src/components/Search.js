import React from 'react'

function Search({findFood}) {

    return (
        <div>
            <input onKeyUp={({target: {value}}) => findFood(value)} />
        </div>
    )
}

export default Search
