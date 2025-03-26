import React from 'react'
import { useNavigate } from 'react-router-dom';
import "tailwindcss";


function Tailwind() {

    let navigate = useNavigate()
    return (
        <div >
            <div className='flex justify-around mt-8 items-center h-20' >
                <div
                    className='mr-50'><img src="src/assets/nike_.png" alt="logo of nike" width={"100px"} />
                </div>
                <div className='flex gap-14 text-xl'>
                    <h2 className='hover:text-red-600 cursor-pointer' onClick={() => navigate('/login')}>About us</h2>
                    <h1 className='hover:text-red-600 cursor-pointer' onClick={() => navigate('/login')}>Home</h1>
                    <h2 className='hover:text-red-600 cursor-pointer' onClick={() => navigate('/login')}>Location</h2>
                    <h2 className='hover:text-red-600 cursor-pointer' onClick={() => navigate('/login')}>Contact us</h2>
                </div>
                <div className='mr-30 text-xl '>
                    <button className='pr-2 pl-2 pb-1 pt-0 bg-red-600 border-0 text-white rounded-sm cursor-pointer'>Login</button>
                </div>
            </div>
            <div className='flex gap-50 mr-15 ml-15 mt-13'>
                <div  className=" ml-10 w-2xl h-80">
                    <h1 className='text-base sm:text-lg md:text-2xl lg:text-8xl font-bold mb-5'>YOUR FEET<br></br> DESERVE<br></br> BETTER</h1>
                    <button className='border-1 pr-8 pl-8 pb-2 pt-2 mr-4 rounded-md bg-red-600 text-white hover:bg-red-800 cursor-pointer'>Shop Now</button>
                    <button className='border-1 pr-8 pl-8 pb-2 pt-2 bg-white rounded-md cursor-pointer hover:text-red-600 '>Category</button>
                </div>
                <div className='' ><img src="src/assets/nike_shoe.avif" alt="image of shoe" width={"800px"} /></div>
            </div>
        </div>
    )
}

export default Tailwind