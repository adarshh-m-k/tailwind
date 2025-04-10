import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleDish() {

    const { id } = useParams()
    const [dish, setDish] = useState(null)

    useEffect(() => {
        axios.get(`https://dummyjson.com/recipes/${id}`).then((res) => {
            console.log(res.data);
            setDish(res.data)

        }).catch((err) => {
            console.log(err);


        })
    }, [])

    if (!dish) return <h2 className='text-center mt-10'>Loading....</h2>
    return (
        <div className='justify-center items-center p-10'>
            <div>

                <h1 className='text-3xl font-bold mb-4'>{dish.name}</h1>
            </div>
            <div className='flex mt-7'>
                <div>

                    <img src={dish.image} alt={dish.name} className='rounded-xl border ' width="300px" />
                </div>
                <div className='ml-6'>

                    <p className='text-lg text-gray-700 mb-2'>🍴 Servings: {dish.servings}</p>
                    <p className='text-lg text-gray-700 mb-2'>⏱️ Prep Time: {dish.prepTimeMinutes} minutes</p>
                    <p className='text-lg text-gray-700 mb-2'>🔥 Cook Time: {dish.cookTimeMinutes} minutes</p>
                    <p className='max-w-xl text-left ml-2'>{dish.instructions}</p>
                </div>
            </div>
      <hr className='mt-20'/>
        </div>
    )
}

export default SingleDish