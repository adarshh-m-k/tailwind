import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Sample() {

    let [list, setList] = useState([])
    let [current, setCurrent] = useState(0)
    let navigate = useNavigate()

    useEffect(() => {
        axios.get('https://dummyjson.com/recipes?limit=100').then((result) => {
            console.log(result.data.recipes);
            setList(result.data.recipes)

        }).catch((err) => {
            console.log(err);


        })
    }, [])

    const changePage = (n) => {
        setCurrent(n)
    }
    const pageSize = 10
    const totalrecipe = list.length
    const singlePage = Math.ceil(totalrecipe / pageSize)

    const start = current * pageSize

    const end = start + pageSize

    const prev = () => {
        setCurrent((prev) => prev - 1)
    }
    const next = () => {
        setCurrent((prev) => prev + 1)
    }
    return (
        <div>
            <h1 className='m-5 text-3xl flex justify-center'>Sample Pagination</h1>
            <div className='flex justify-center '>
                <button disabled={current === 0} onClick={() => { prev() }}>⬅️</button>
                {[...Array(singlePage).keys()].map((n) => (
                    <button key={n} className={`p-1 rounded-sm border m-1 cursor-pointer ${n===current ? 'bg-blue-500 border-0 text-white' : ""}`} onClick={() => { changePage(n) }}>{n}</button>
                ))}
                <button disabled={current === singlePage - 1} onClick={() => { next() }}>➡️</button>
            </div>

            <div className='flex flex-wrap justify-center'>

                {
                    list.slice(start, end).map((obj, index) => (
                        <div key={index}  onClick={()=>navigate(`/dish/${obj.id}`)} className='m-3 rounded-lg shadow-xl border-1 w-60 h-60 flex flex-col pt-2 items-center'>
                            <h1>{obj.name}</h1>
                            <img className='rounded-xl m-3' src={obj.image} alt={name} width={"170px"} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sample