import React, { useState } from 'react'

function Test() {
    let [count, abc] = useState(900)

    let handleIncrease = () => {
        abc(count + 1)
    }
    let handleDecrease = () => {
        abc(count - 1)
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center overflow-hidden">
            <div className="max-w-md w-full px-6 py-12">
                <div className="bg-zinc-900/70 border border-zinc-700 rounded-3xl p-8 shadow-2xl">
                    <h2 className="text-3xl font-semibold text-center mb-2">Count is : <span id='ct'>{count}</span> </h2>


                    <button
                        onClick={handleIncrease}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Click to Incease
                    </button>
                    <button
                        onClick={handleDecrease}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Click to Decrease
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Test