import React from 'react'

function Loading() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
            <h1 className="text-xl text-emerald-500 animate-bounce">
                <i className="fa-solid fa-spinner animate-spin"></i>
                Loading...
            </h1>
        </div>
    )
}

export default Loading