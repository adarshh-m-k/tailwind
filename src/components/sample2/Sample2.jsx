import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Sample2() {

    let [dish, setDish] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/recipes/?limit=100').then((result) => {

            console.log(result.data.recipes);
            setDish(result.data.recipes)

        }).catch((error) => {
            console.log(error);

        })
    }, [])

    return (
        <div>
            
            <h1>Sample2 Pagination</h1>
            <div>
                {
                    dish.map((obj, index) => (

                        <div key={index}>
                            <img src={obj.image} alt={obj.name} />
                            <h1>{obj.name}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sample2