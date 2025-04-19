import axios from 'axios';
import React, { useState } from 'react'

// function Inputs() {

//     let [list, setList] = useState({
//         username: "",
//         mobile: "",
//         email: "",
//         password: ""
//     })

//     const inputValue = (e) => {
//         let { name, value } = e.target;
//         console.log(e.target);
//         setList(prev => ({
//             ...prev,
//             [name]: value
//         }))


//     }

//     const submitButton = () => { 
//         axios
//     }
//     return (
//         <div>Inputs

//             <div className='flex flex-col gap-0.5 bg-amber-200'>
//                 <input type="text"
//                     className='border w-40' name='username' value={list.username} onChange={inputValue} />
//                 <input type="text"
//                     className='border w-40' name='mobile' value={list.mobile} onChange={inputValue} />
//                 <input type="text"
//                     className='border w-40' name='email' value={list.email} onChange={inputValue} />
//                 <input type="text"
//                     className='border w-40' name='password' value={list.password} onChange={inputValue} />
//             </div>
//             <button onClick={submitButton}>Submit</button>
//         </div>
//     )
// }

function Inputs() {

    const [input, setInput] = useState({
        username: '',
        mobile: '',
        email: '',

    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setInput(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div className='flex flex-col'>Inputs

            <input className='bg-amber-600 w-100 h-8 border' type="text" placeholder='username' name='username' value={input.username} onChange={handleChange} />
            <input className='bg-amber-600 w-100 h-8 border' type="text" placeholder='mobile' name='mobile' value={input.mobile} onChange={handleChange} />
            <input className='bg-amber-600 w-100 h-8 border' type="text" placeholder='email' name='email' value={input.email} onChange={handleChange} />
        </div>
    )
}


export default Inputs