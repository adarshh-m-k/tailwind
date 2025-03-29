import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Pagination() {

    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((result) => {

            console.log(result.data.products);
            setProduct(result.data.products)

        }).catch((err) => {
            console.log(err);


        })
    },[])
    return (
        <div>
            Pagination
            <div>
                {
                    product.map((obj,indux)=>(
                        <div key={indux}>{obj.title}</div>
                    )

                    )
                }
            </div>
        </div>
    )
}

export default Pagination