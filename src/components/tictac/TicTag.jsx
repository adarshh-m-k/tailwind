import React, { useEffect, useState } from 'react'

function TicTag() {
    const [running, setRunning] = useState(false)
    const [count, setCount] = useState(0)
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setCount((prev) => {
                    const newCount = prev + 1
                    console.log("Internal running :", newCount);
                    return newCount;
                })

            }, 1000);
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [running])

    const resetTimer = () => {
        setCount(0)
        setRunning(false)
    }
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-2xl'>Timer</h1>

            <div>
                <h2>{running ? `Timer : ${count}s` : `Timer : ${count}s`}</h2>
                <button className='text-red-500 border-1 p-1 m-1' onClick={() => setRunning(!running)}>{running ? "Stop" : "Start"}</button>
                <button className='text-red-500 border-1 p-1 m-1' onClick={resetTimer}>Reset</button>
            </div>

        </div>
    )
}


export default TicTag;