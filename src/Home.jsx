import React, { useState, useEffect } from 'react'
import snorlax from './assets/snorlax.png'

function Home() {
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState('winter')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount((prev) => (prev <= 0 ? 0 : count - 1))
    }

    const handleReset = () => {
        setCount(0)
    }

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'winter' ? 'night' : 'winter'))
    }

    const snorlaxImages = []
        for (let i = 0; i < count; i++) {
            snorlaxImages.push(
                <img key={i} className="w-30 h-auto" src={snorlax} alt="snorlax" />
            )
        }

  return (
    <div>
        <div className="flex flex-row-reverse">
        <div className="pt-15 basis-64">
            <p> Change Theme</p>
        <input onChange={toggleTheme} type="checkbox" defaultChecked className="toggle" />
        </div>
        </div>
        <p className="text-3xl pl-15">How many Snorlax can you get?</p>
        <p className="p-8 pl-18">Total Snorlax: {count}</p>
        <div className="flex flex-row-auto gap-3 p-10">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" onClick={handleIncrement}>Increment</button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" onClick={handleDecrement}>Decrement</button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" onClick={handleReset}>Reset</button>
        </div>
        <div className="flex flex-wrap p-10">
        {snorlaxImages}
        </div>
        </div>
  )
}

export default Home