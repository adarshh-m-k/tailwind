import React, { useRef, useState } from 'react'
import circle from '../Assets/images.png'
import multiple from '../Assets/download.png'
let storage = ["", "", "", "", "", "", "", "", ""]
function Game() {
    let [lock, setLock] = useState(false)
    let [count, setCount] = useState(0)

    let titleRef = useRef(null)
    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${circle}'>`
            storage[num] = "X";
            setCount(++count);
        } else {
            e.target.innerHTML = `<img src='${multiple}'>`
            storage[num] = "O";
            setCount(++count);
        }
        checkWin();
    }

    const checkWin = () => {
        if (storage[0] === storage[1] && storage[1] === storage[2] && storage[2] !== "") {
            won(storage[2]);
        } else if (storage[3] === storage[4] && storage[4] === storage[5] && storage[5] !== "") {
            won(storage[5])
        } else if (storage[6] === storage[7] && storage[7] === storage[8] && storage[8] !== "") {
            won(storage[8])
        } else if (storage[0] === storage[3] && storage[3] === storage[6] && storage[6] !== "") {
            won(storage[6])
        } else if (storage[1] === storage[4] && storage[4] === storage[7] && storage[7] !== "") {
            won(storage[7])
        } else if (storage[2] === storage[5] && storage[5] === storage[8] && storage[8] !== "") {
            won(storage[8])
        } else if (storage[0] === storage[4] && storage[4] === storage[8] && storage[8] !== "") {
            won(storage[8])
        } else if (storage[0] === storage[1] && storage[1] === storage[2] && storage[2] !== "") {
            won(storage[2])
        } else if (storage[2] === storage[4] && storage[4] === storage[6] && storage[6] !== "") {
            won(storage[6])
        }
        // else if (storage[1] === storage[4] && storage[4] === storage[7] && data[7] !== "") {
        //     won(storage[7])
        // }
    }

    const won = (winner) => {
        setLock(true)
        if (winner === "X") {
            titleRef.current.innerHTML = `Congratulation: <span style="display: inline-flex; align-items: center;"><img src=${circle} style="width: 20px; height: 20px margin: 10px; " /></span>`;
        } else {
            titleRef.current.innerHTML = `Congratulation: <span style="display: inline-flex; align-items: center;"><img src=${multiple} style="width: 20px; height: 20px margin: 10px; " /></span>`;
        }
    }
    return (
        <div className=''>
            <h1 className='' ref={titleRef}>Tic Tag Toa Game</h1>
            <div className='flex'>
                <div className=''>
                    <div onClick={(e) => { toggle(e, 0) }} className='m-1 w-15 h-15 bg-amber-600'></div>
                    <div onClick={(e) => { toggle(e, 1) }} className='m-1 w-15 h-15 bg-amber-600'></div>
                    <div onClick={(e) => { toggle(e, 2) }} className='m-1 w-15 h-15 bg-amber-600'></div>
                </div>
                <div className=''>
                    <div onClick={(e) => { toggle(e, 3) }} className='m-1 w-15 h-15 bg-amber-600'></div>
                    <div onClick={(e) => { toggle(e, 4) }} className='m-1 w-15 h-15 bg-amber-600'></div>
                    <div onClick={(e) => { toggle(e, 5) }} className='m-1 w-15 h-15 bg-amber-600'></div>
                </div>
                <div className=''>
                    <div onClick={(e) => { toggle(e, 6) }} className='m-1 w-15 h-15 bg-amber-600'></div>
                    <div onClick={(e) => { toggle(e, 7) }} className='m-1 w-15 h-15 bg-amber-600'></div>
                    <div onClick={(e) => { toggle(e, 8) }} className='m-1 w-15 h-15 bg-amber-600'></div>
                </div>
            </div>
            <div>
                <button onClick={() => { setCount(0) }} className='border-1 p-1 rounded-sm'>Reset</button>
            </div>
        </div>
    )
}

export default Game