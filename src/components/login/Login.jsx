import React, { useState } from 'react'

function Login() {
    let [list, setList] = useState({
        username: '',
        email: ''
    })

    const handleChange = (e) => {
        let { name, value } = e.target.value
        setList(prev => ({
            ...prev,
            [name]: value


        }))
    }
    return (
        <div>
            <h1>Login</h1>
            <div>
                <input type="text" name='username' onChange={handleChange} value={list.username} />
                <input type="text" name='email' onChange={handleChange} value={list.email} />
            </div>
            <div>
                <h1>Submit Button</h1>
            </div>
        </div>
    )
}

export default Login