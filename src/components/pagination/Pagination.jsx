import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Pagination() {

    const [product, setProduct] = useState([])
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=100').then((result) => {

            console.log(result.data.products);
            setProduct(result.data.products)

        }).catch((err) => {
            console.log(err);


        })
    }, [])

    const ProductCard = ({ image, title }) => {
        return (
            <div className='rounded-lg m-3 p-5 flex items-center flex-col border-2 w-70 h-70'>
                <img src={image} alt={title} className='w-50 h-50 ' />
                <span>{title}</span>
                
            </div>
        );
    };
    const pageSize = 10
    const totalProducts = product.length;
    const singlePage = Math.ceil(totalProducts / pageSize)

    const start = current * pageSize

    const end = start + pageSize

    const changePage = (n) => {
        setCurrent(n)
    }
    const prevPage = () => {
        setCurrent((prev) => prev - 1)

    }
    const nextPage = () => {
        setCurrent((prev) => prev + 1)
    }
    return (
        <div>
            <h1 className='text-center m-2 text-xl'>Pagination</h1>
            <div className='flex justify-center'>
                <button className='border-1 h-8 mt-1.5' disabled={current === 0} onClick={() => prevPage()}>◀️</button>
                <div>{[...Array(singlePage).keys()].map((n, p) => (
                    <button onClick={() => changePage(n)} className={`cursor-pointer m-1 border-1 p-1 rounded-sm ${n === current ? 'bg-blue-500 text-white' : ""}`} key={p} >{n}</button>))}
                </div>
                <button className='border-1 h-8 mt-1.5' disabled={current === singlePage - 1} onClick={() => nextPage()}>▶️</button>

            </div>
            <div className=' flex flex-wrap items-center'>
                {
                    product.slice(start, end).map((obj, indux) => (
                        <ProductCard key={indux} title={obj.title} image={obj.thumbnail} />
                    )

                    )
                }
            </div>
        </div>
    )
}

export default Pagination