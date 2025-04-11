import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Sample2() {

    let [dish, setDish] = useState([])

    let [current, setCurrent] = useState(0)

    useEffect(() => {
        axios.get('https://dummyjson.com/recipes/?limit=100').then((result) => {

            console.log(result.data.recipes);
            setDish(result.data.recipes)

        }).catch((error) => {
            console.log(error);

        })
    }, [])

    const DISH_IN_ONE_PAGE = 10
    const totalPage = dish.length

    const singlePage = totalPage / DISH_IN_ONE_PAGE

    const start = current * DISH_IN_ONE_PAGE

    const end = start + DISH_IN_ONE_PAGE

    const changeButton = (n) => {
        setCurrent(n)
    }

    const previousPage = () => {
        setCurrent((prev) => prev - 1)
    }
    const nextPage = () => {
        setCurrent((prev) => prev + 1)

    }
    return (
        <div className=''>

            <h1 className='text-center text-2xl'>Sample2 Pagination</h1>


            <div className='flex justify-center'>
                <button disabled={current === 0} onClick={() => { previousPage() }}>⬅️</button>
                {[...Array(singlePage).keys()].map((n, ind) => (
                    <button className={`border m-1 p-1 rounded ${n === current ? 'bg-blue-600 text-white' : ""}`} onClick={() => { changeButton(n) }}>{n}</button>

                ))}
                <button disabled={current === singlePage - 1} onClick={() => { nextPage() }}>➡️</button>
            </div>
            <div className='flex flex-wrap justify-center m-5'>
                {
                    dish.slice(start, end).map((obj, index) => (

                        <div key={index} className='border m-4 w-55 h-50 flex flex-col items-center pt-3'>
                            <h1>{obj.name}</h1>
                            <img className='w-33' src={obj.image} alt={obj.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sample2